/*

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

package controller

import (
	"context"
	"flag"
	"fmt"
	"os"
	"sync"

	constraintclient "github.com/open-policy-agent/frameworks/constraint/pkg/client"
	"github.com/open-policy-agent/frameworks/constraint/pkg/externaldata"
	cm "github.com/open-policy-agent/gatekeeper/v3/pkg/cachemanager"
	"github.com/open-policy-agent/gatekeeper/v3/pkg/controller/config/process"
	syncc "github.com/open-policy-agent/gatekeeper/v3/pkg/controller/sync"
	"github.com/open-policy-agent/gatekeeper/v3/pkg/expansion"
	"github.com/open-policy-agent/gatekeeper/v3/pkg/export"
	"github.com/open-policy-agent/gatekeeper/v3/pkg/fakes"
	"github.com/open-policy-agent/gatekeeper/v3/pkg/mutation"
	"github.com/open-policy-agent/gatekeeper/v3/pkg/readiness"
	"github.com/open-policy-agent/gatekeeper/v3/pkg/util"
	"github.com/open-policy-agent/gatekeeper/v3/pkg/watch"
	corev1 "k8s.io/api/core/v1"
	"k8s.io/apimachinery/pkg/apis/meta/v1/unstructured"
	"k8s.io/apimachinery/pkg/runtime"
	"k8s.io/apimachinery/pkg/types"
	"sigs.k8s.io/controller-runtime/pkg/client"
	"sigs.k8s.io/controller-runtime/pkg/client/apiutil"
	"sigs.k8s.io/controller-runtime/pkg/event"
	"sigs.k8s.io/controller-runtime/pkg/manager"
)

var debugUseFakePod = flag.Bool("debug-use-fake-pod", false, "Use a fake pod name so the Gatekeeper executable can be run outside of Kubernetes")

type Injector interface {
	InjectTracker(tracker *readiness.Tracker)

	Add(mgr manager.Manager) error
}

type GetPodInjector interface {
	InjectGetPod(func(context.Context) (*corev1.Pod, error))
}

type ExportInjector interface {
	InjectExportSystem(exportSystem export.Exporter)
}

type DataClientInjector interface {
	InjectCFClient(*constraintclient.Client)
}

type WatchManagerInjector interface {
	InjectWatchManager(*watch.Manager)
}

type MutationSystemInjector interface {
	InjectMutationSystem(mutationSystem *mutation.System)
}

type ExpansionSystemInjector interface {
	InjectExpansionSystem(expansionSystem *expansion.System)
}

type ProviderCacheInjector interface {
	InjectProviderCache(providerCache *externaldata.ProviderCache)
}

type CacheManagerInjector interface {
	InjectCacheManager(cm *cm.CacheManager)
}

// Injectors is a list of adder structs that need injection. We can convert this
// to an interface once we create controllers for things like data sync.
var Injectors []Injector

// AddToManagerFuncs is a list of functions to add all Controllers to the Manager.
var AddToManagerFuncs []func(manager.Manager) error

// Dependencies are dependencies that can be injected into controllers.
type Dependencies struct {
	CFClient        *constraintclient.Client
	WatchManger     *watch.Manager
	Tracker         *readiness.Tracker
	GetPod          func(context.Context) (*corev1.Pod, error)
	ProcessExcluder *process.Excluder
	MutationSystem  *mutation.System
	ExpansionSystem *expansion.System
	ProviderCache   *externaldata.ProviderCache
	ExportSystem    *export.System
	SyncEventsCh    chan event.GenericEvent
	CacheMgr        *cm.CacheManager
}

type defaultPodGetter struct {
	client client.Client
	scheme *runtime.Scheme
	pod    *corev1.Pod
	mux    sync.RWMutex
}

func (g *defaultPodGetter) GetPod(ctx context.Context) (*corev1.Pod, error) {
	pod := func() *corev1.Pod {
		g.mux.RLock()
		defer g.mux.RUnlock()
		return g.pod
	}()
	if pod != nil {
		return pod.DeepCopy(), nil
	}
	g.mux.Lock()
	defer g.mux.Unlock()
	// guard against the race condition where the pod has been retrieved
	// between releasing the read lock and acquiring the write lock
	if g.pod != nil {
		return g.pod.DeepCopy(), nil
	}
	pod = fakes.Pod(fakes.WithNamespace(util.GetNamespace()),
		fakes.WithName(util.GetPodName()))
	key := types.NamespacedName{Namespace: pod.Namespace, Name: pod.Name}

	// use unstructured to avoid inadvertently creating a watch on pods
	uPod := &unstructured.Unstructured{}
	gvk, err := apiutil.GVKForObject(pod, g.scheme)
	if err != nil {
		return nil, err
	}
	uPod.SetGroupVersionKind(gvk)
	if err := g.client.Get(ctx, key, uPod); err != nil {
		return nil, err
	}
	if err := g.scheme.Convert(uPod, pod, nil); err != nil {
		return nil, err
	}
	g.pod = pod
	return pod.DeepCopy(), nil
}

// AddToManager adds all Controllers to the Manager.
func AddToManager(m manager.Manager, deps *Dependencies) error {
	if deps.GetPod == nil {
		podGetter := &defaultPodGetter{
			scheme: m.GetScheme(),
			client: m.GetClient(),
		}
		deps.GetPod = podGetter.GetPod
	}
	if *debugUseFakePod {
		err := os.Setenv("POD_NAME", "no-pod")
		if err != nil {
			return err
		}

		fakePodGetter := func(_ context.Context) (*corev1.Pod, error) {
			pod := fakes.Pod(
				fakes.WithNamespace(util.GetNamespace()),
				fakes.WithName(util.GetPodName()),
			)

			return pod, nil
		}
		deps.GetPod = fakePodGetter
	}

	// Adding the CacheManager as a runnable;
	// manager will start CacheManager.
	if err := m.Add(deps.CacheMgr); err != nil {
		return fmt.Errorf("error adding cache manager as a runnable: %w", err)
	}

	syncAdder := syncc.Adder{
		Events:       deps.SyncEventsCh,
		CacheManager: deps.CacheMgr,
	}
	// Create subordinate controller - we will feed it events dynamically via watch
	if err := syncAdder.Add(m); err != nil {
		return fmt.Errorf("registering sync controller: %w", err)
	}

	for _, a := range Injectors {
		a.InjectTracker(deps.Tracker)

		if a2, ok := a.(DataClientInjector); ok {
			a2.InjectCFClient(deps.CFClient)
		}
		if a2, ok := a.(WatchManagerInjector); ok {
			a2.InjectWatchManager(deps.WatchManger)
		}
		if a2, ok := a.(MutationSystemInjector); ok {
			a2.InjectMutationSystem(deps.MutationSystem)
		}
		if a2, ok := a.(ExpansionSystemInjector); ok {
			a2.InjectExpansionSystem(deps.ExpansionSystem)
		}
		if a2, ok := a.(ProviderCacheInjector); ok {
			a2.InjectProviderCache(deps.ProviderCache)
		}
		if a2, ok := a.(GetPodInjector); ok {
			a2.InjectGetPod(deps.GetPod)
		}
		if a2, ok := a.(ExportInjector); ok {
			a2.InjectExportSystem(deps.ExportSystem)
		}
		if a2, ok := a.(CacheManagerInjector); ok {
			// this is used by the config controller to sync
			a2.InjectCacheManager(deps.CacheMgr)
		}

		if err := a.Add(m); err != nil {
			return err
		}
	}
	for _, f := range AddToManagerFuncs {
		if err := f(m); err != nil {
			return err
		}
	}
	return nil
}
