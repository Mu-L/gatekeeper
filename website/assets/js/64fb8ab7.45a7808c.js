"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5305],{15680:(e,n,t)=>{t.d(n,{xA:()=>l,yg:()=>f});var o=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,i=function(e,n){if(null==e)return{};var t,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=o.createContext({}),p=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},l=function(e){var n=p(e.components);return o.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=p(t),f=i,u=m["".concat(c,".").concat(f)]||m[f]||d[f]||a;return t?o.createElement(u,r(r({ref:n},l),{},{components:t})):o.createElement(u,r({ref:n},l))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,r=new Array(a);r[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<a;p++)r[p]=t[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},74077:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var o=t(58168),i=t(98587),a=(t(96540),t(15680)),r=["components"],s={id:"enforcement-points",title:"Enforcement points in Gatekeeper"},c=void 0,p={unversionedId:"enforcement-points",id:"version-v3.17.x/enforcement-points",title:"Enforcement points in Gatekeeper",description:"Understanding Enforcement Points",source:"@site/versioned_docs/version-v3.17.x/enforcement-points.md",sourceDirName:".",slug:"/enforcement-points",permalink:"/gatekeeper/website/docs/enforcement-points",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/versioned_docs/version-v3.17.x/enforcement-points.md",tags:[],version:"v3.17.x",frontMatter:{id:"enforcement-points",title:"Enforcement points in Gatekeeper"},sidebar:"docs",previous:{title:"Integration with Kubernetes Validating Admission Policy",permalink:"/gatekeeper/website/docs/validating-admission-policy"},next:{title:"Operations",permalink:"/gatekeeper/website/docs/operations"}},l={},d=[{value:"Understanding Enforcement Points",id:"understanding-enforcement-points",level:2},{value:"How to use different enforcement points in constraint",id:"how-to-use-different-enforcement-points-in-constraint",level:3},{value:"Deny in shift-left and warn at admission",id:"deny-in-shift-left-and-warn-at-admission",level:6},{value:"Only audit",id:"only-audit",level:6},{value:"Enforcing through Validating Admission Policy and using Gatekeeper as fall-back validation mechanism",id:"enforcing-through-validating-admission-policy-and-using-gatekeeper-as-fall-back-validation-mechanism",level:6},{value:"Enforcing through Validating Admission Policy and using audit from Gatekeeper",id:"enforcing-through-validating-admission-policy-and-using-audit-from-gatekeeper",level:6}],m={toc:d};function f(e){var n=e.components,t=(0,i.A)(e,r);return(0,a.yg)("wrapper",(0,o.A)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"understanding-enforcement-points"},"Understanding Enforcement Points"),(0,a.yg)("p",null,"An enforcement point defines the location where enforcement happens. Below are the different enforcement points available in Gatekeeper:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"validation.gatekeeper.sh")," indicates that enforcement should be carried out by Gatekeeper's validating webhook for a constraint. Supports templates with CEL and Rego."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"gator.gatekeeper.sh")," indicates that enforcement should be carried out in shift-left via ",(0,a.yg)("a",{parentName:"li",href:"/gatekeeper/website/docs/gator"},"gator-cli")," for a constraint. Supports templates with CEL and Rego."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"audit.gatekeeper.sh")," indicates that on-cluster resources should be audited and violations should be reported for the resources that are in violation of constraint. Supports templates with CEL and Rego."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"vap.k8s.io")," indicates that enforcement should be carried out by Validating Admission Policy for a constraint. Supports templates with CEL.")),(0,a.yg)("h3",{id:"how-to-use-different-enforcement-points-in-constraint"},"How to use different enforcement points in constraint"),(0,a.yg)("p",null,"By default, a constraint will be enforced at all enforcement points with common enforcement action defined in ",(0,a.yg)("inlineCode",{parentName:"p"},"spec.enforcementAction"),". However, you can choose to enforce a constraint at specific enforcement points with different actions using ",(0,a.yg)("inlineCode",{parentName:"p"},"enforcementAction: scoped")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"spec.scopedEnforcementActions"),". Below are examples and use cases that utilize different enforcement actions for different enforcement points."),(0,a.yg)("admonition",{type:"note"},(0,a.yg)("p",{parentName:"admonition"},(0,a.yg)("inlineCode",{parentName:"p"},"spec.enforcementAction: scoped")," is needed to customize specific enforcement point/enforcement action behavior. If ",(0,a.yg)("inlineCode",{parentName:"p"},"spec.enforcementAction: scoped")," is not provided, ",(0,a.yg)("inlineCode",{parentName:"p"},"spec.scopedEnforcementActions")," is ignored and the provided ",(0,a.yg)("inlineCode",{parentName:"p"},"enforcementAction")," will be applied across all enforcement points.")),(0,a.yg)("h6",{id:"deny-in-shift-left-and-warn-at-admission"},"Deny in shift-left and warn at admission"),(0,a.yg)("p",null,"You are trying out a new constraint template, and you want to deny violating resources in shift-left testing, but do not want to block any resources admitted to clusters to reduce impact for faulty rejections. You may want to use ",(0,a.yg)("inlineCode",{parentName:"p"},"deny")," action for the ",(0,a.yg)("inlineCode",{parentName:"p"},"gator.gatekeeper.sh")," shift-left enforcement point and ",(0,a.yg)("inlineCode",{parentName:"p"},"warn")," for ",(0,a.yg)("inlineCode",{parentName:"p"},"the validation.gatekeepet.sh")," admission webhook enforcement point. The below constraint satisfies this use case."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sAllowedRepos\nmetadata:\n  name: prod-repo-is-openpolicyagent\nspec:\n...\n  enforcementAction: scoped\n  scopedEnforcementActions:\n  - action: warn\n    enforcementPoints:\n    - name: "validation.gatekeeper.sh"\n  - action: deny\n    enforcementPoints:\n    - name: "gator.gatekeeper.sh"\n...\n')),(0,a.yg)("blockquote",null,(0,a.yg)("p",{parentName:"blockquote"},(0,a.yg)("strong",{parentName:"p"},"Note"),': The audit enforcement point is not included unless explicitly added to scopedEnforcementActions.enforcementPoints or if scopedEnforcementActions.enforcementPoints is set to "*".')),(0,a.yg)("h6",{id:"only-audit"},"Only audit"),(0,a.yg)("p",null,"You are depending on external-data or referential policies for validating resources. These type of validation may be latency sensitive and may take longer to evaluate. To avoid such situation you may want to only use ",(0,a.yg)("inlineCode",{parentName:"p"},"audit.gatekeeper.sh")," enforcement point to not face any delay at admission time, but still get the information about violating resources from Gatekeeper's audit operation. Here is the constraint for only using ",(0,a.yg)("inlineCode",{parentName:"p"},"audit.gatekeeper.sh")," enforcement point."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sAllowedRepos\nmetadata:\n  name: prod-repo-is-openpolicyagent\nspec:\n...\n  enforcementAction: scoped\n  scopedEnforcementActions:\n  - action: deny\n    enforcementPoints:\n    - name: "audit.gatekeeper.sh"\n...\n')),(0,a.yg)("h6",{id:"enforcing-through-validating-admission-policy-and-using-gatekeeper-as-fall-back-validation-mechanism"},"Enforcing through Validating Admission Policy and using Gatekeeper as fall-back validation mechanism"),(0,a.yg)("p",null,"You want to utilize in-tree Validating Admission Policy for faster turn around time. But you want to make sure that in case Validating Admission Policy fails-open, Gatekeeper blocks faulty resources from being created. Here is how you can achieve the same."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sAllowedRepos\nmetadata:\n  name: prod-repo-is-openpolicyagent\nspec:\n...\n  enforcementAction: scoped\n  scopedEnforcementActions:\n  - action: deny\n    enforcementPoints:\n    - name: "vap.k8s.io"\n    - name: "validation.gatekeeper.sh"\n...\n')),(0,a.yg)("p",null,"Please refer to ",(0,a.yg)("a",{parentName:"p",href:"/gatekeeper/website/docs/validating-admission-policy#policy-updates-to-generate-validating-admission-policy-resources"},"VAP/VAPB generation behavior"),"."),(0,a.yg)("h6",{id:"enforcing-through-validating-admission-policy-and-using-audit-from-gatekeeper"},"Enforcing through Validating Admission Policy and using audit from Gatekeeper"),(0,a.yg)("p",null,"You want to utilize in-tree Validating Admission Policy for faster turn around time and only want to use audit operation from Gatekeeper to get information about violation resources on-cluster. Here is the constraint that users ",(0,a.yg)("inlineCode",{parentName:"p"},"vap.k8s.io")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"audit.gatekeeper.sh")," enforcement points."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sAllowedRepos\nmetadata:\n  name: prod-repo-is-openpolicyagent\nspec:\n...\n  enforcementAction: scoped\n  scopedEnforcementActions:\n  - action: deny\n    enforcementPoints:\n    - name: "vap.k8s.io"\n    - name: "audit.gatekeeper.sh"\n...\n')))}f.isMDXComponent=!0}}]);