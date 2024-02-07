"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3286],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),g=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=g(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=g(n),u=a,m=d["".concat(l,".").concat(u)]||d[u]||c[u]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var g=2;g<i;g++)o[g]=n[g];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2442:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return g},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],s={id:"developers",title:"Developers"},l=void 0,g={unversionedId:"developers",id:"version-v3.14.x/developers",title:"Developers",description:"This section describes how Gatekeeper developers can leverage kind and Tilt for rapid iterative development. Kind allows developers to quickly provision a conformant Kubernetes cluster using Docker and Tilt enables smart rebuilds and live updates of your Kubernetes workload during development time.",source:"@site/versioned_docs/version-v3.14.x/developers.md",sourceDirName:".",slug:"/developers",permalink:"/gatekeeper/website/docs/v3.14.x/developers",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/versioned_docs/version-v3.14.x/developers.md",tags:[],version:"v3.14.x",frontMatter:{id:"developers",title:"Developers"},sidebar:"docs",previous:{title:"Background Information on Mutation",permalink:"/gatekeeper/website/docs/v3.14.x/mutation-background"},next:{title:"How to contribute",permalink:"/gatekeeper/website/docs/v3.14.x/help"}},p={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Create a kind cluster with a local registry",id:"create-a-kind-cluster-with-a-local-registry",level:3},{value:"Create <code>tilt-settings.json</code>",id:"create-tilt-settingsjson",level:3},{value:"<code>tilt-settings.json</code> fields",id:"tilt-settingsjson-fields",level:4},{value:"Run <code>make tilt</code>",id:"run-make-tilt",level:3},{value:"Start developing!",id:"start-developing",level:3},{value:"Tear down the kind cluster",id:"tear-down-the-kind-cluster",level:3}],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This section describes how Gatekeeper developers can leverage ",(0,i.kt)("a",{parentName:"p",href:"https://kind.sigs.k8s.io/"},"kind")," and ",(0,i.kt)("a",{parentName:"p",href:"https://tilt.dev/"},"Tilt")," for rapid iterative development. Kind allows developers to quickly provision a conformant Kubernetes cluster using Docker and Tilt enables smart rebuilds and live updates of your Kubernetes workload during development time."),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/#installation-and-usage"},"kind")," v0.11.0 or newer"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://docs.tilt.dev/install.html"},"Tilt")," v0.25.0 or newer")),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"create-a-kind-cluster-with-a-local-registry"},"Create a kind cluster with a local registry"),(0,i.kt)("p",null,"Kind cluster with a local registry will enable faster image pushing and pulling:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./third_party/github.com/tilt-dev/kind-local/kind-with-registry.sh\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you would like to customize the local registry port on your machine (the default port is ",(0,i.kt)("inlineCode",{parentName:"p"},"5000"),"), you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"export KIND_REGISTRY_PORT=<port>")," to customize it.")),(0,i.kt)("h3",{id:"create-tilt-settingsjson"},"Create ",(0,i.kt)("inlineCode",{parentName:"h3"},"tilt-settings.json")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"tilt-settings.json")," contains various settings that developers can customize when deploying gatekeeper to a local kind cluster. Developers can create the JSON file under the project root directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "helm_values": {\n        "controllerManager.metricsPort": 8080,\n        "enableExternalData": true\n    },\n    "trigger_mode": "manual"\n}\n')),(0,i.kt)("h4",{id:"tilt-settingsjson-fields"},(0,i.kt)("inlineCode",{parentName:"h4"},"tilt-settings.json")," fields"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"helm_values")," (Map, default=",(0,i.kt)("inlineCode",{parentName:"p"},"{}"),"): A map of helm values to be injected when deploying ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest_staging/charts/gatekeeper")," to the kind cluster.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"trigger_mode")," (String, default=",(0,i.kt)("inlineCode",{parentName:"p"},'"auto"'),"): Optional setting to configure if tilt should automatically rebuild on changes. Set to ",(0,i.kt)("inlineCode",{parentName:"p"},"manual")," to disable auto-rebuilding and require users to trigger rebuilds of individual changed components through the UI."))),(0,i.kt)("h3",{id:"run-make-tilt"},"Run ",(0,i.kt)("inlineCode",{parentName:"h3"},"make tilt")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"make tilt\n")),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Output"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'make tilt\ndocker build . \\\n        -t gatekeeper-tooling \\\n        -f build/tooling/Dockerfile\n[+] Building 1.5s (10/10) FINISHED\n => [internal] load build definition from Dockerfile                                                                                                                     0.2s\n => => transferring dockerfile: 35B                                                                                                                                      0.1s\n => [internal] load .dockerignore                                                                                                                                        0.2s\n => => transferring context: 34B                                                                                                                                         0.0s\n => [internal] load metadata for docker.io/library/golang:1.17                                                                                                           1.0s\n => [auth] library/golang:pull token for registry-1.docker.io                                                                                                            0.0s\n => [1/5] FROM docker.io/library/golang:1.17@sha256:bd9823cdad5700fb4abe983854488749421d5b4fc84154c30dae474100468b85                                                     0.0s\n => CACHED [2/5] RUN GO111MODULE=on go install sigs.k8s.io/controller-tools/cmd/controller-gen@v0.8.0                                                                    0.0s\n => CACHED [3/5] RUN GO111MODULE=on go install k8s.io/code-generator/cmd/conversion-gen@release-1.22                                                                     0.0s\n => CACHED [4/5] RUN mkdir /gatekeeper                                                                                                                                   0.0s\n => CACHED [5/5] WORKDIR /gatekeeper                                                                                                                                     0.0s\n => exporting to image                                                                                                                                                   0.2s\n => => exporting layers                                                                                                                                                  0.0s\n => => writing image sha256:7d2fecb230986ffdd78932ad8ff13aa0968c9a9a98bec2fe8ecb21c6e683c730                                                                             0.0s\n => => naming to docker.io/library/gatekeeper-tooling                                                                                                                    0.0s\ndocker run -v /workspaces/gatekeeper:/gatekeeper gatekeeper-tooling controller-gen object:headerFile=./hack/boilerplate.go.txt paths="./apis/..." paths="./pkg/..."\ndocker run -v /workspaces/gatekeeper:/gatekeeper gatekeeper-tooling conversion-gen \\\n        --output-base=/gatekeeper \\\n        --input-dirs=./apis/mutations/v1beta1,./apis/mutations/v1alpha1 \\\n        --go-header-file=./hack/boilerplate.go.txt \\\n        --output-file-base=zz_generated.conversion\ndocker run -v /workspaces/gatekeeper:/gatekeeper gatekeeper-tooling controller-gen \\\n        crd \\\n        rbac:roleName=manager-role \\\n        webhook \\\n        paths="./apis/..." \\\n        paths="./pkg/..." \\\n        output:crd:artifacts:config=config/crd/bases\nrm -rf manifest_staging\nmkdir -p manifest_staging/deploy/experimental\nmkdir -p manifest_staging/charts/gatekeeper\ndocker run --rm -v /workspaces/gatekeeper:/gatekeeper \\\n        registry.k8s.io/kustomize/kustomize:v3.8.9 build \\\n        /gatekeeper/config/default -o /gatekeeper/manifest_staging/deploy/gatekeeper.yaml\ndocker run --rm -v /workspaces/gatekeeper:/gatekeeper \\\n        registry.k8s.io/kustomize/kustomize:v3.8.9 build \\\n        --load_restrictor LoadRestrictionsNone /gatekeeper/cmd/build/helmify | go run cmd/build/helmify/*.go\nWriting manifest_staging/charts/gatekeeper/.helmignore\nWriting manifest_staging/charts/gatekeeper/Chart.yaml\nWriting manifest_staging/charts/gatekeeper/README.md\nMaking manifest_staging/charts/gatekeeper/templates\nWriting manifest_staging/charts/gatekeeper/templates/_helpers.tpl\nWriting manifest_staging/charts/gatekeeper/templates/namespace-post-install.yaml\nWriting manifest_staging/charts/gatekeeper/templates/upgrade-crds-hook.yaml\nWriting manifest_staging/charts/gatekeeper/templates/webhook-configs-pre-delete.yaml\nWriting manifest_staging/charts/gatekeeper/values.yaml\nWriting manifest_staging/charts/gatekeeper/templates/gatekeeper-webhook-server-cert-secret.yaml\nWriting manifest_staging/charts/gatekeeper/templates/gatekeeper-audit-deployment.yaml\nWriting manifest_staging/charts/gatekeeper/templates/gatekeeper-controller-manager-deployment.yaml\nWriting manifest_staging/charts/gatekeeper/templates/gatekeeper-validating-webhook-configuration-validatingwebhookconfiguration.yaml\nWriting manifest_staging/charts/gatekeeper/templates/gatekeeper-controller-manager-poddisruptionbudget.yaml\nWriting manifest_staging/charts/gatekeeper/templates/gatekeeper-admin-serviceaccount.yaml\nWriting manifest_staging/charts/gatekeeper/templates/gatekeeper-admin-podsecuritypolicy.yaml\nWriting manifest_staging/charts/gatekeeper/templates/gatekeeper-webhook-service-service.yaml\nWriting manifest_staging/charts/gatekeeper/templates/gatekeeper-manager-role-clusterrole.yaml\nWriting manifest_staging/charts/gatekeeper/templates/gatekeeper-manager-rolebinding-rolebinding.yaml\nWriting manifest_staging/charts/gatekeeper/templates/gatekeeper-manager-rolebinding-clusterrolebinding.yaml\nWriting manifest_staging/charts/gatekeeper/templates/gatekeeper-mutating-webhook-configuration-mutatingwebhookconfiguration.yaml\nWriting manifest_staging/charts/gatekeeper/templates/gatekeeper-critical-pods-resourcequota.yaml\nMaking manifest_staging/charts/gatekeeper/crds\nWriting manifest_staging/charts/gatekeeper/crds/assign-customresourcedefinition.yaml\nWriting manifest_staging/charts/gatekeeper/crds/assignmetadata-customresourcedefinition.yaml\nWriting manifest_staging/charts/gatekeeper/crds/config-customresourcedefinition.yaml\nWriting manifest_staging/charts/gatekeeper/crds/constraintpodstatus-customresourcedefinition.yaml\nWriting manifest_staging/charts/gatekeeper/crds/constrainttemplatepodstatus-customresourcedefinition.yaml\nWriting manifest_staging/charts/gatekeeper/crds/constrainttemplate-customresourcedefinition.yaml\nWriting manifest_staging/charts/gatekeeper/crds/modifyset-customresourcedefinition.yaml\nWriting manifest_staging/charts/gatekeeper/crds/mutatorpodstatus-customresourcedefinition.yaml\nWriting manifest_staging/charts/gatekeeper/crds/provider-customresourcedefinition.yaml\nWriting manifest_staging/charts/gatekeeper/templates/gatekeeper-manager-role-role.yaml\nmkdir -p .tiltbuild/charts\nrm -rf .tiltbuild/charts/gatekeeper\ncp -R manifest_staging/charts/gatekeeper .tiltbuild/charts\n# disable some configs from the security context so we can perform live update\nsed -i "/readOnlyRootFilesystem: true/d" .tiltbuild/charts/gatekeeper/templates/*.yaml\nsed -i -e "/run.*: .*/d" .tiltbuild/charts/gatekeeper/templates/*.yaml\ntilt up\nTilt started on http://localhost:10350/\nv0.25.2, built 2022-02-25\n\n(space) to open the browser\n(s) to stream logs (--stream=true)\n(t) to open legacy terminal mode (--legacy=true)\n(ctrl-c) to exit\n'))),(0,i.kt)("h3",{id:"start-developing"},"Start developing!"),(0,i.kt)("p",null,"If you have trigger mode set to ",(0,i.kt)("inlineCode",{parentName:"p"},"auto"),", any changes in the source code will trigger a rebuild of the gatekeeper manager binary. The build will subsequently trigger a rebuild of the gatekeeper manager image, load it to your kind cluster, and restart the deployment."),(0,i.kt)("p",null,"If you have trigger mode set to ",(0,i.kt)("inlineCode",{parentName:"p"},"manual"),", you can trigger a manager build manually in the local Tilt UI portal. By default, it is located at ",(0,i.kt)("inlineCode",{parentName:"p"},"http://localhost:10350/")),(0,i.kt)("h3",{id:"tear-down-the-kind-cluster"},"Tear down the kind cluster"),(0,i.kt)("p",null,"To tear down the kind cluster and its local registry:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./third_party/github.com/tilt-dev/kind-local/teardown-kind-with-registry.sh\n")))}u.isMDXComponent=!0}}]);