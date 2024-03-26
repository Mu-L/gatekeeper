"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8811],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9133:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={id:"input",title:"Admission Review Input"},u=void 0,p={unversionedId:"input",id:"version-v3.15.x/input",title:"Admission Review Input",description:"The data that's passed to Gatekeeper for review is in the form of an input.review object that stores the admission request under evaluation. It follows a structure that contains the object being created, and in the case of update operations the old object being updated. It has the following fields:",source:"@site/versioned_docs/version-v3.15.x/input.md",sourceDirName:".",slug:"/input",permalink:"/gatekeeper/website/docs/input",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/versioned_docs/version-v3.15.x/input.md",tags:[],version:"v3.15.x",frontMatter:{id:"input",title:"Admission Review Input"},sidebar:"docs",previous:{title:"OPA Versions",permalink:"/gatekeeper/website/docs/opa-versions"},next:{title:"Background Information on Mutation",permalink:"/gatekeeper/website/docs/mutation-background"}},l={},c=[],d={toc:c};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The data that's passed to Gatekeeper for review is in the form of an ",(0,a.kt)("inlineCode",{parentName:"p"},"input.review")," object that stores the ",(0,a.kt)("a",{parentName:"p",href:"https://pkg.go.dev/k8s.io/kubernetes/pkg/apis/admission#AdmissionRequest"},"admission request")," under evaluation. It follows a structure that contains the object being created, and in the case of update operations the old object being updated. It has the following fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dryRun"),": Describes if the request was invoked by ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl --dry-run"),". This cannot be populated by Kubernetes for audit."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"kind"),": The resource ",(0,a.kt)("inlineCode",{parentName:"li"},"kind"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"group"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"version")," of the request object under evaluation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name"),": The name of the request object under evaluation. It may be empty if the deployment expects the API server to generate a name for the requested resource."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"namespace"),": The namespace of the request object under evaluation. Empty for cluster scoped objects."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"object"),": The request object under evaluation to be created or modified."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"oldObject"),": The original state of the request object under evaluation. This is only available for UPDATE operations."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"operation"),": The operation for the request (e.g. CREATE, UPDATE). This cannot be populated by Kubernetes for audit."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"uid"),": The request's unique identifier. This cannot be populated by Kubernetes for audit."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"userInfo"),": The request's user's information such as ",(0,a.kt)("inlineCode",{parentName:"li"},"username"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"uid"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"groups"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"extra"),". This cannot be populated by Kubernetes for audit.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"NOTE"))," For ",(0,a.kt)("inlineCode",{parentName:"p"},"input.review")," fields above that cannot be populated by Kubernetes for audit reviews, the constraint templates that rely on them are not auditable. It is up to the rego author to handle the case where these fields are unset and empty in order to avoid every matching resource being reported as violating resources. ")),(0,a.kt)("p",null,"You can see an example of the request structure below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "apiVersion": "admission.k8s.io/v1",\n  "kind": "AdmissionReview",\n  "request": {\n    "uid": "abc123",\n    "kind": {\n      "group": "apps",\n      "version": "v1",\n      "kind": "Deployment"\n    },\n    "resource": {\n      "group": "apps",\n      "version": "v1",\n      "resource": "deployments"\n    },\n    "namespace": "default",\n    "operation": "CREATE",\n    "userInfo": {\n      "username": "john_doe",\n      "groups": ["developers"]\n    },\n    "object": {\n      // The resource object being created, updated, or deleted\n      "metadata": {\n        "name": "my-deployment",\n        "labels": {\n          "app": "my-app",\n          "env": "production"\n        }\n      },\n      "spec": {\n        // Specific configuration for the resource\n        "replicas": 3,\n        // ... other fields ...\n      }\n    },\n    "oldObject": {\n      // For update requests, the previous state of the resource\n      "metadata": {\n        "name": "my-deployment",\n        "labels": {\n          "app": "my-app",\n          "env": "staging"\n        }\n      },\n      "spec": {\n        // Previous configuration for the resource\n        "replicas": 2,\n        // ... other fields ...\n      }\n    }\n  }\n}\n')))}m.isMDXComponent=!0}}]);