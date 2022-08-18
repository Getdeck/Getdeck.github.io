"use strict";(self.webpackChunkgetdeck=self.webpackChunkgetdeck||[]).push([[971],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1269:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={title:"Getdeck Introduction",sidebar_position:1,description:"Getdeck is an application to create reproducible Kubernetes development infrastructure"},i=void 0,l={unversionedId:"index",id:"index",title:"Getdeck Introduction",description:"Getdeck is an application to create reproducible Kubernetes development infrastructure",source:"@site/docs/index.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/Getdeck/Getdeck.github.io/tree/main/docs/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Getdeck Introduction",sidebar_position:1,description:"Getdeck is an application to create reproducible Kubernetes development infrastructure"},sidebar:"docsSidebar",next:{title:"Introduction for Developers",permalink:"/docs/overview/introduction-for-developers"}},p={},s=[{value:"Are you a developer?",id:"are-you-a-developer",level:3},{value:"Are you a DevOps?",id:"are-you-a-devops",level:3},{value:"Features",id:"features",level:2},{value:"Demo",id:"demo",level:2}],c={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{class:"text--center"},(0,o.kt)("img",{src:"/img/getdeck-logo.png",alt:"Getdeck Logo",width:"500"})),(0,o.kt)("hr",null),(0,o.kt)("b",null,"Getdeck is an application to create reproducible Kubernetes development infrastructure."),(0,o.kt)("p",null,"Its main focus is on simplicity and convenience for the ",(0,o.kt)("a",{parentName:"p",href:"https://future.com/software-development-building-for-99-developers/"},"99% software developers"),".  "),(0,o.kt)("p",null,"Getdeck does not interfere with production-close Kubernetes systems. It also does not support production deployments."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Getdeck is a command-line application (",(0,o.kt)("inlineCode",{parentName:"p"},"deck"),") and file specification (",(0,o.kt)("inlineCode",{parentName:"p"},"Deckfile"),") around the concept of a\nKubernetes ",(0,o.kt)("em",{parentName:"p"},"Deck"),". If you want to know more about the concept itself, head over\nto ",(0,o.kt)("a",{parentName:"p",href:"/docs/overview/what-is-a-deck"},"the documentation of the concept")," or the ",(0,o.kt)("a",{parentName:"p",href:"/docs/deckfile-specs"},"Deckfile specification"),".\nGetdeck handles the workflow of providing parts of your existing Kubernetes infrastructure to Developers or\nTesters without having them to be Kubernetes experts, too. Think of Getdeck as the ",(0,o.kt)("em",{parentName:"p"},"docker-compose")," for your\nexisting Kubernetes workloads."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you already have members in your team putting a lot of effort in writing secure, compliant and off-the-shelf\nKubernetes workloads, why don't you use (at least parts of it) these for development, too?")),(0,o.kt)("h3",{id:"are-you-a-developer"},"Are you a developer?"),(0,o.kt)("p",null,"You understand your main task in writing code? - follow along ",(0,o.kt)("a",{parentName:"p",href:"/docs/overview/introduction-for-developers/"},"the developer-specific introduction"),"."),(0,o.kt)("h3",{id:"are-you-a-devops"},"Are you a DevOps?"),(0,o.kt)("p",null,"You know all the things about Kubernetes or want to provide service to your developers? -\nfollow along with ",(0,o.kt)("a",{parentName:"p",href:"/docs/overview/introduction-for-devops/"},"the DevOps specific introduction"),"."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("p",null,"The following features are currently the scope of Getdeck:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Roll out different Kubernetes-cluster on local development machines: ",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://k3d.io"},(0,o.kt)("inlineCode",{parentName:"a"},"k3d"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/"},(0,o.kt)("inlineCode",{parentName:"a"},"kind"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/beiboot/"},(0,o.kt)("inlineCode",{parentName:"a"},"beiboot"))),(0,o.kt)("li",{parentName:"ul"},"Remote clusters"))),(0,o.kt)("li",{parentName:"ul"},"Define local Kubernetes environment using different source types for workloads:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://helm.sh/"},(0,o.kt)("inlineCode",{parentName:"a"},"Helm")),", including many supported Helm plugins"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"kustomize")),(0,o.kt)("li",{parentName:"ul"},"Plain YAML files or directories"))),(0,o.kt)("li",{parentName:"ul"},"Read Kubernetes workloads from different sources:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Http(s)"),(0,o.kt)("li",{parentName:"ul"},"Git"),(0,o.kt)("li",{parentName:"ul"},"Filesystem"))),(0,o.kt)("li",{parentName:"ul"},"Management of locally required tools (i.e. installation, version handling, etc.)"),(0,o.kt)("li",{parentName:"ul"},"Ease of use: one command for setting up local environments, one command for tearing it down again ")),(0,o.kt)("h2",{id:"demo"},"Demo"),(0,o.kt)("p",null,"Insert a fancy GIF here."))}u.isMDXComponent=!0}}]);