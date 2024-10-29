"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7200],{15680:(e,t,n)=>{n.d(t,{xA:()=>d,yg:()=>m});var a=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,y=c["".concat(s,".").concat(m)]||c[m]||g[m]||r;return n?a.createElement(y,o(o({ref:t},d),{},{components:n})):a.createElement(y,o({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},9617:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>g});var a=n(58168),i=n(98587),r=(n(96540),n(15680)),o=["components"],l={id:"validating-admission-policy",title:"Integration with Kubernetes Validating Admission Policy"},s=void 0,p={unversionedId:"validating-admission-policy",id:"version-v3.17.x/validating-admission-policy",title:"Integration with Kubernetes Validating Admission Policy",description:"Validating Admission Policy CEL validation in Gatekeeper:",source:"@site/versioned_docs/version-v3.17.x/validating-admission-policy.md",sourceDirName:".",slug:"/validating-admission-policy",permalink:"/gatekeeper/website/docs/validating-admission-policy",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper/edit/master/website/versioned_docs/version-v3.17.x/validating-admission-policy.md",tags:[],version:"v3.17.x",frontMatter:{id:"validating-admission-policy",title:"Integration with Kubernetes Validating Admission Policy"},sidebar:"docs",previous:{title:"Consuming violations using Pubsub",permalink:"/gatekeeper/website/docs/pubsub"},next:{title:"Enforcement points in Gatekeeper",permalink:"/gatekeeper/website/docs/enforcement-points"}},d={},g=[{value:"Description",id:"description",level:2},{value:"Motivations",id:"motivations",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Get started",id:"get-started",level:2},{value:"Policy updates to add VAP CEL",id:"policy-updates-to-add-vap-cel",level:2},{value:"Policy updates to generate Validating Admission Policy and Binding resources",id:"policy-updates-to-generate-validating-admission-policy-and-binding-resources",level:2}],c={toc:g};function m(e){var t=e.components,n=(0,i.A)(e,o);return(0,r.yg)("wrapper",(0,a.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Validating Admission Policy CEL validation in Gatekeeper:\nFeature State: Gatekeeper version v3.17 (beta)\n\u2757 This feature is beta, subject to change (feedback is welcome!). It is enabled by default. Set --enable-k8s-native-validation=false` to disable evaluating Validating Admission Policy CEL in constraint templates."),(0,r.yg)("p",null,"VAP management through Gatekeeper:\nFeature State: Gatekeeper version v3.16 (alpha)\n\u2757 This feature is alpha, subject to change (feedback is welcome!). It is disabled by default unless explicitly enabled via feature flag and/or via constraint template."),(0,r.yg)("h2",{id:"description"},"Description"),(0,r.yg)("p",null,"This feature allows Gatekeeper to integrate with Kubernetes Validating Admission Policy based on ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/google/cel-spec"},"Common Expression Language (CEL)"),", a declarative, in-process admission control alternative to validating admission webhooks."),(0,r.yg)("h2",{id:"motivations"},"Motivations"),(0,r.yg)("p",null,"The Kubernetes Validating Admission Policy feature was introduced as an alpha feature to Kubernetes v1.26, beta in v1.28 (disabled by default), GA in v1.30 (enabled by default). Some of the benefits include:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"in-tree/native in-process"),(0,r.yg)("li",{parentName:"ul"},"reduce admission request latency"),(0,r.yg)("li",{parentName:"ul"},"improve reliability and availability"),(0,r.yg)("li",{parentName:"ul"},"able to fail closed without impacting availability"),(0,r.yg)("li",{parentName:"ul"},"avoid the operational burden of webhooks")),(0,r.yg)("p",null,"To reduce policy fragmentation and simplify the user experience by standardizing the policy experience. We have created an abstraction layer that provides multi-language (e.g. Rego and CEL), multi-target policy enforcement to allow for portable policies and coexistence of numerous policy implementations."),(0,r.yg)("p",null,"The ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/open-policy-agent/frameworks/tree/master/constraint"},"Constraint Framework")," is the library that underlies Gatekeeper. It provides the execution flow Gatekeeper uses to render a decision to the API server. It also provides abstractions that allow us to define constraint templates and constraints: Engine, Enforcement Points, and Targets."),(0,r.yg)("p",null,"Together with Gatekeeper and ",(0,r.yg)("a",{parentName:"p",href:"/gatekeeper/website/docs/gator"},"gator CLI"),", you can get admission, audit, and shift left validations for policies written in both CEL and Rego policy languages, even for clusters that do not support Validating Admission Policy feature yet. For simple policies, you may want admission requests to be handled by the K8s built-in Validating Admission Controller (only supports CEL) instead of the Gatekeeper admission webhook."),(0,r.yg)("p",null,"In summary, these are potential options when running Gatekeeper:"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Policy Language(s)"),(0,r.yg)("th",{parentName:"tr",align:null},"Enforcement Point"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CEL, Rego"),(0,r.yg)("td",{parentName:"tr",align:null},"Gatekeeper validating webhook")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CEL, Rego"),(0,r.yg)("td",{parentName:"tr",align:null},"Gatekeeper Audit")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CEL, Rego"),(0,r.yg)("td",{parentName:"tr",align:null},"Gator CLI")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"CEL"),(0,r.yg)("td",{parentName:"tr",align:null},"K8s built-in Validating Admission Controller (aka ValidatingAdmissionPolicy)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Rego"),(0,r.yg)("td",{parentName:"tr",align:null},"Gatekeeper validating webhook (referential policies, external data)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Rego"),(0,r.yg)("td",{parentName:"tr",align:null},"Gatekeeper Audit (referential policies, external data)")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Rego"),(0,r.yg)("td",{parentName:"tr",align:null},"Gator CLI (referential policies)")))),(0,r.yg)("p",null,"Find out more about different ",(0,r.yg)("a",{parentName:"p",href:"/gatekeeper/website/docs/enforcement-points"},"enforcement points")),(0,r.yg)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Requires minimum Gatekeeper v3.17.0 (Please refer to the v3.16.0 docs as flags have changed)")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"Requires minimum Kubernetes v1.30, when the Kubernetes ",(0,r.yg)("inlineCode",{parentName:"p"},"Validating Admission Policy")," feature GAed")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("p",{parentName:"li"},"[optional]"," Kubernetes version v1.29, need to enable Kubernetes feature gate and runtime config as shown below: "),(0,r.yg)("pre",{parentName:"li"},(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"kind: Cluster\napiVersion: kind.x-k8s.io/v1alpha4\nfeatureGates:\n  ValidatingAdmissionPolicy: true\nruntimeConfig:\n  admissionregistration.k8s.io/v1beta1: true\n")))),(0,r.yg)("h2",{id:"get-started"},"Get started"),(0,r.yg)("h2",{id:"policy-updates-to-add-vap-cel"},"Policy updates to add VAP CEL"),(0,r.yg)("p",null,"To see how it works, check out this ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/open-policy-agent/gatekeeper/tree/master/demo/k8s-validating-admission-policy"},"demo")),(0,r.yg)("p",null,"Example ",(0,r.yg)("inlineCode",{parentName:"p"},"K8sRequiredLabels")," constraint template using the ",(0,r.yg)("inlineCode",{parentName:"p"},"K8sNativeValidation")," engine and VAP CEL expressions that requires resources to contain specified labels with values matching provided regular expressions. A similar policy written in Rego can be seen ",(0,r.yg)("a",{parentName:"p",href:"https://open-policy-agent.github.io/gatekeeper-library/website/validation/requiredlabels"},"here")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: templates.gatekeeper.sh/v1\nkind: ConstraintTemplate\nmetadata:\n  name: k8srequiredlabels\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sRequiredLabels\n      validation:\n        # Schema for the `parameters` field\n        openAPIV3Schema:\n          type: object\n          properties:\n            message:\n              type: string\n            labels:\n              type: array\n              items:\n                type: object\n                properties:\n                  key:\n                    type: string\n                  allowedRegex:\n                    type: string\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      code:\n        - engine: K8sNativeValidation\n          source:\n            validations:\n            - expression: '[object, oldObject].exists(obj, obj != null && has(obj.metadata) && variables.params.labels.all(entry, has(obj.metadata.labels) && entry.key in obj.metadata.labels))'\n              messageExpression: '\"missing required label, requires all of: \" + variables.params.labels.map(entry, entry.key).join(\", \")'\n            - expression: '[object, oldObject].exists(obj, obj != null && !variables.params.labels.exists(entry, has(obj.metadata.labels) && entry.key in obj.metadata.labels && !string(obj.metadata.labels[entry.key]).matches(string(entry.allowedRegex))))'\n              message: \"regex mismatch\"\n        rego: |\n          ...\n")),(0,r.yg)("p",null,"With this new engine and source added to the constraint template, now Gatekeeper webhook, audit, and shift-left can validate resources with these new VAP CEL-based rules."),(0,r.yg)("h2",{id:"policy-updates-to-generate-validating-admission-policy-and-binding-resources"},"Policy updates to generate Validating Admission Policy and Binding resources"),(0,r.yg)("p",null,"For some policies, you may want admission requests to be handled by the K8s Validating Admission Controller instead of the Gatekeeper admission webhook."),(0,r.yg)("p",null,"The K8s Validating Admission Controller requires both the Validating Admission Policy (VAP) and Validating Admission Policy Binding (VAPB) resources to exist to enforce a policy. Gatekeeper can be configured to generate both of these resources. To generate VAP Bindings for all Constraints, ensure the Gatekeeper\n",(0,r.yg)("inlineCode",{parentName:"p"},"--default-create-vap-binding-for-constraint")," flag is set to ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),". To generate VAP as part of all Constraint Templates with the VAP CEL engine ",(0,r.yg)("inlineCode",{parentName:"p"},"K8sNativeValidation"),", ensure the Gatekeeper ",(0,r.yg)("inlineCode",{parentName:"p"},"--default-create-vap-for-templates=true")," flag is set to ",(0,r.yg)("inlineCode",{parentName:"p"},"true"),". By default both flags are set to ",(0,r.yg)("inlineCode",{parentName:"p"},"false")," while the feature is still in alpha."),(0,r.yg)("p",null,"To override the ",(0,r.yg)("inlineCode",{parentName:"p"},"--default-create-vap-for-templates")," flag's behavior for a constraint template, set ",(0,r.yg)("inlineCode",{parentName:"p"},"generateVAP")," to ",(0,r.yg)("inlineCode",{parentName:"p"},"true")," explicitly under the K8sNativeValidation engine's ",(0,r.yg)("inlineCode",{parentName:"p"},"source")," in the constraint template. "),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},"spec:\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      code:\n        - engine: K8sNativeValidation\n          source:\n            generateVAP: true\n            ...\n")),(0,r.yg)("p",null,"To override the ",(0,r.yg)("inlineCode",{parentName:"p"},"--default-create-vap-binding-for-constraints")," flag's behavior for a constraint, ",(0,r.yg)("inlineCode",{parentName:"p"},"spec.scopedEnforcementAction")," can be used. Gatekeeper determines the intended enforcement actions for a given enforcement point by evaluating what is provided in ",(0,r.yg)("inlineCode",{parentName:"p"},"spec.scopedEnforcementActions")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"spec.enforcementAction: scoped")," in the constraint."),(0,r.yg)("p",null,"The overall opt-in/opt-out behavior for constraint to generate Validating Admission Policy Binding (VAPB) is as below:"),(0,r.yg)("p",null,"Constraint with ",(0,r.yg)("inlineCode",{parentName:"p"},"enforcementAction: scoped"),":"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"th"},"vap.k8s.io")," in constraint with ",(0,r.yg)("inlineCode",{parentName:"th"},"spec.scopedEnforcementActions")),(0,r.yg)("th",{parentName:"tr",align:null},"generate VAPB"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Not included"),(0,r.yg)("td",{parentName:"tr",align:null},"Do not generate VAPB")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Included"),(0,r.yg)("td",{parentName:"tr",align:null},"Generate VAPB")))),(0,r.yg)("p",null,"Constraint without ",(0,r.yg)("inlineCode",{parentName:"p"},"enforcementAction: scoped"),":"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"th"},"--default-create-vap-binding-for-constraints")),(0,r.yg)("th",{parentName:"tr",align:null},"generate VAPB"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"false"),(0,r.yg)("td",{parentName:"tr",align:null},"Do not generate VAPB")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"true"),(0,r.yg)("td",{parentName:"tr",align:null},"Generate VAPB")))),(0,r.yg)("admonition",{type:"note"},(0,r.yg)("p",{parentName:"admonition"},"VAP will only get generated for templates with VAP CEL Engine. VAPB will only get generated for constraints that belong to templates with VAP CEL engine.")),(0,r.yg)("admonition",{type:"tip"},(0,r.yg)("p",{parentName:"admonition"},"In the event K8s Validating Admission Controller fails open, Gatekeeper admission webhook can act as a backup when included in constraint.")),(0,r.yg)("p",null,"Validating Admission Policy Binding for the below constraint will always get generated, assuming the constraint belongs to a template with VAP CEL engine."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sAllowedRepos\nmetadata:\n  name: prod-repo-is-openpolicyagent\nspec:\n...\n  enforcementAction: scoped\n  scopedEnforcementActions:\n  - action: deny\n    enforcementPoints:\n    - name: "vap.k8s.io"\n    - name: "validation.gatekeeper.sh"\n...\n')))}m.isMDXComponent=!0}}]);