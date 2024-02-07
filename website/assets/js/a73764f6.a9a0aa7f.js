"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5765],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=i,k=u["".concat(c,".").concat(m)]||u[m]||d[m]||r;return n?a.createElement(k,o(o({ref:t},p),{},{components:n})):a.createElement(k,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4730:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={id:"sync",title:"Replicating Data"},c=void 0,s={unversionedId:"sync",id:"version-v3.15.x/sync",title:"Replicating Data",description:"Replicating Data",source:"@site/versioned_docs/version-v3.15.x/sync.md",sourceDirName:".",slug:"/sync",permalink:"/gatekeeper/website/docs/sync",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/versioned_docs/version-v3.15.x/sync.md",tags:[],version:"v3.15.x",frontMatter:{id:"sync",title:"Replicating Data"},sidebar:"docs",previous:{title:"Handling Constraint Violations",permalink:"/gatekeeper/website/docs/violations"},next:{title:"Exempting Namespaces",permalink:"/gatekeeper/website/docs/exempt-namespaces"}},p={},d=[{value:"Replicating Data",id:"replicating-data",level:2},{value:"Replicating Data with SyncSets (Recommended)",id:"replicating-data-with-syncsets-recommended",level:3},{value:"Working with SyncSet resources",id:"working-with-syncset-resources",level:4},{value:"Replicating Data with Config",id:"replicating-data-with-config",level:3},{value:"Working with Config resources",id:"working-with-config-resources",level:4},{value:"Accessing replicated data",id:"accessing-replicated-data",level:3},{value:"Auditing From Cache",id:"auditing-from-cache",level:3}],u={toc:d};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"replicating-data"},"Replicating Data"),(0,r.kt)("p",null,"Some constraints are impossible to write without access to more state than just the object under test. For example, it is impossible to know if a label is unique across all pods and namespaces unless a ConstraintTemplate has access to all other pods and namespaces. To enable this use case, we provide syncing of data into a data client."),(0,r.kt)("h3",{id:"replicating-data-with-syncsets-recommended"},"Replicating Data with SyncSets (Recommended)"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Feature State"),": Gatekeeper version v3.15+ (alpha)"),(0,r.kt)("p",null,"Kubernetes data can be replicated into the data client using ",(0,r.kt)("inlineCode",{parentName:"p"},"SyncSet")," resources. Below is an example of a ",(0,r.kt)("inlineCode",{parentName:"p"},"SyncSet"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: syncset.gatekeeper.sh/v1alpha1\nkind: SyncSet\nmetadata:\n  name: syncset-1\nspec:\n  gvks:\n    - group: ""\n      version: "v1"\n      kind: "Namespace"\n    - group: ""\n      version: "v1"\n      kind: "Pod"\n')),(0,r.kt)("p",null,"The resources defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"gvks")," field of a SyncSet will be eventually synced into the data client."),(0,r.kt)("h4",{id:"working-with-syncset-resources"},"Working with SyncSet resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updating a SyncSet's ",(0,r.kt)("inlineCode",{parentName:"li"},"gvks")," field should dynamically update what objects are synced."),(0,r.kt)("li",{parentName:"ul"},"Multiple ",(0,r.kt)("inlineCode",{parentName:"li"},"SyncSet"),"s may be defined and those will be reconciled by the Gatekeeper syncset-controller. Notably, the ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Union_(set_theory)"},"set union")," of all SyncSet resources' ",(0,r.kt)("inlineCode",{parentName:"li"},"gvks")," and the ",(0,r.kt)("a",{parentName:"li",href:"sync#replicating-data-with-config"},"Config")," resource's ",(0,r.kt)("inlineCode",{parentName:"li"},"syncOnly")," will be synced into the data client."),(0,r.kt)("li",{parentName:"ul"},"A resource will continue to be present in the data client so long as a SyncSet or Config still specifies it under the ",(0,r.kt)("inlineCode",{parentName:"li"},"gvks")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"syncOnly")," field.")),(0,r.kt)("h3",{id:"replicating-data-with-config"},"Replicating Data with Config"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Feature State"),": Gatekeeper version v3.6+ (alpha)"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'The "Config" resource must be named ',(0,r.kt)("inlineCode",{parentName:"p"},"config")," for it to be reconciled by Gatekeeper. Gatekeeper will ignore the resource if you do not name it ",(0,r.kt)("inlineCode",{parentName:"p"},"config"),".")),(0,r.kt)("p",null,"Kubernetes data can also be replicated into the data client via the Config resource. Resources defined in ",(0,r.kt)("inlineCode",{parentName:"p"},"syncOnly")," will be synced into OPA. Below is an example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: config.gatekeeper.sh/v1alpha1\nkind: Config\nmetadata:\n  name: config\n  namespace: "gatekeeper-system"\nspec:\n  sync:\n    syncOnly:\n      - group: ""\n        version: "v1"\n        kind: "Namespace"\n      - group: ""\n        version: "v1"\n        kind: "Pod"\n')),(0,r.kt)("p",null,"You can install this config with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"kubectl apply -f https://raw.githubusercontent.com/open-policy-agent/gatekeeper/master/demo/basic/sync.yaml\n")),(0,r.kt)("h4",{id:"working-with-config-resources"},"Working with Config resources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Updating a Config's ",(0,r.kt)("inlineCode",{parentName:"li"},"syncOnly")," field should dynamically update what objects are synced."),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"Config")," resource is meant to be a singleton. The ",(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Union_(set_theory)"},"set union")," of all SyncSet resources' ",(0,r.kt)("inlineCode",{parentName:"li"},"gvks")," and the ",(0,r.kt)("a",{parentName:"li",href:"sync#replicating-data-with-config"},"Config")," resource's ",(0,r.kt)("inlineCode",{parentName:"li"},"syncOnly")," will be synced into the data client."),(0,r.kt)("li",{parentName:"ul"},"A resource will continue to be present in the data client so long as a SyncSet or Config still specifies it under the ",(0,r.kt)("inlineCode",{parentName:"li"},"gvks")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"syncOnly")," field.")),(0,r.kt)("h3",{id:"accessing-replicated-data"},"Accessing replicated data"),(0,r.kt)("p",null,"Once data is synced, ConstraintTemplates can access the cached data under the ",(0,r.kt)("inlineCode",{parentName:"p"},"data.inventory")," document."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"data.inventory")," document has the following format:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"For cluster-scoped objects: ",(0,r.kt)("inlineCode",{parentName:"li"},"data.inventory.cluster[<groupVersion>][<kind>][<name>]"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Example referencing the Gatekeeper namespace: ",(0,r.kt)("inlineCode",{parentName:"li"},'data.inventory.cluster["v1"].Namespace["gatekeeper"]')))),(0,r.kt)("li",{parentName:"ul"},"For namespace-scoped objects: ",(0,r.kt)("inlineCode",{parentName:"li"},"data.inventory.namespace[<namespace>][groupVersion][<kind>][<name>]"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Example referencing the Gatekeeper pod: ",(0,r.kt)("inlineCode",{parentName:"li"},'data.inventory.namespace["gatekeeper"]["v1"]["Pod"]["gatekeeper-controller-manager-d4c98b788-j7d92"]'))))),(0,r.kt)("h3",{id:"auditing-from-cache"},"Auditing From Cache"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/gatekeeper/website/docs/audit"},"audit")," feature does not require replication by default. However, when the ",(0,r.kt)("inlineCode",{parentName:"p"},"audit-from-cache")," flag is set to true, the audit informer cache will be used as the source-of-truth for audit queries; thus, an object must first be cached before it can be audited for constraint violations. Kubernetes data can be replicated into the audit cache via one of the resources above."))}m.isMDXComponent=!0}}]);