"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8141],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8503:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={id:"intro",title:"Introduction",sidebar_label:"Introduction",slug:"/"},s=void 0,c={unversionedId:"intro",id:"version-v3.11.x/intro",title:"Introduction",description:"Goals",source:"@site/versioned_docs/version-v3.11.x/intro.md",sourceDirName:".",slug:"/",permalink:"/gatekeeper/website/docs/v3.11.x/",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/versioned_docs/version-v3.11.x/intro.md",tags:[],version:"v3.11.x",frontMatter:{id:"intro",title:"Introduction",sidebar_label:"Introduction",slug:"/"},sidebar:"docs",next:{title:"Installation",permalink:"/gatekeeper/website/docs/v3.11.x/install"}},p={},u=[{value:"Goals",id:"goals",level:2},{value:"Looking for sample policies?",id:"looking-for-sample-policies",level:2},{value:"How is Gatekeeper different from OPA?",id:"how-is-gatekeeper-different-from-opa",level:2}],d={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"goals"},"Goals"),(0,i.kt)("p",null,"Every organization has policies. Some are essential to meet governance and legal requirements. Others help ensure adherence to best practices and institutional conventions. Attempting to ensure compliance manually would be error-prone and frustrating. Automating policy enforcement ensures consistency, lowers development latency through immediate feedback, and helps with agility by allowing developers to operate independently without sacrificing compliance."),(0,i.kt)("p",null,"Kubernetes allows decoupling policy decisions from the inner workings of the API Server by means of ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/extensible-admission-controllers/"},"admission controller webhooks"),", which are executed whenever a resource is created, updated or deleted. Gatekeeper is a validating and mutating webhook that enforces CRD-based policies executed by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/open-policy-agent/opa"},"Open Policy Agent"),", a policy engine for Cloud Native environments hosted by CNCF as a ",(0,i.kt)("a",{parentName:"p",href:"https://www.cncf.io/projects/open-policy-agent-opa/"},"graduated project"),"."),(0,i.kt)("p",null,"In addition to the ",(0,i.kt)("inlineCode",{parentName:"p"},"admission")," scenario, Gatekeeper's audit functionality allows administrators to see what resources are currently violating any given policy."),(0,i.kt)("p",null,"Finally, Gatekeeper's engine is designed to be portable, allowing administrators to detect and reject non-compliant commits to an infrastructure-as-code system's source-of-truth, further strengthening compliance efforts and preventing bad state from slowing down the organization."),(0,i.kt)("h2",{id:"looking-for-sample-policies"},"Looking for sample policies?"),(0,i.kt)("p",null,"Please visit Gatekeeper ",(0,i.kt)("a",{parentName:"p",href:"https://open-policy-agent.github.io/gatekeeper-library/website/"},"policy library")," to find a collection of sample policies."),(0,i.kt)("h2",{id:"how-is-gatekeeper-different-from-opa"},"How is Gatekeeper different from OPA?"),(0,i.kt)("p",null,"Compared to using ",(0,i.kt)("a",{parentName:"p",href:"https://www.openpolicyagent.org/docs/kubernetes-admission-control.html"},"OPA with its sidecar kube-mgmt")," (aka Gatekeeper v1.0), Gatekeeper introduces the following functionality:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"An extensible, parameterized ",(0,i.kt)("a",{parentName:"li",href:"https://open-policy-agent.github.io/gatekeeper-library/website/"},"policy library")),(0,i.kt)("li",{parentName:"ul"},'Native Kubernetes CRDs for instantiating the policy library (aka "constraints")'),(0,i.kt)("li",{parentName:"ul"},'Native Kubernetes CRDs for extending the policy library (aka "constraint templates")'),(0,i.kt)("li",{parentName:"ul"},"Native Kubernetes CRDs for ",(0,i.kt)("a",{parentName:"li",href:"/gatekeeper/website/docs/v3.11.x/mutation"},"mutation")," support"),(0,i.kt)("li",{parentName:"ul"},"Audit functionality"),(0,i.kt)("li",{parentName:"ul"},"External data support")))}f.isMDXComponent=!0}}]);