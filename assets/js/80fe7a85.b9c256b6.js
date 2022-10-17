"use strict";(self.webpackChunkgetdeck=self.webpackChunkgetdeck||[]).push([[125],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),b=o,d=m["".concat(s,".").concat(b)]||m[b]||p[b]||l;return n?r.createElement(d,a(a({ref:t},c),{},{components:n})):r.createElement(d,a({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,a=new Array(l);a[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(7462),o=(n(7294),n(3905));const l={title:"Installation",sidebar_position:3,description:"How to install the Beiboot operator on the Kubernetes host cluster"},a=void 0,i={unversionedId:"installation",id:"installation",title:"Installation",description:"How to install the Beiboot operator on the Kubernetes host cluster",source:"@site/beiboot/installation.md",sourceDirName:".",slug:"/installation",permalink:"/beiboot/installation",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Installation",sidebar_position:3,description:"How to install the Beiboot operator on the Kubernetes host cluster"},sidebar:"docsSidebar",previous:{title:"Beiboot Introduction",permalink:"/beiboot/"},next:{title:"Beiboot Client",permalink:"/beiboot/client"}},s={},u=[{value:"Install Beiboot on the Host Cluster",id:"install-beiboot-on-the-host-cluster",level:2},{value:"Tested Kubernetes Host Cluster",id:"tested-kubernetes-host-cluster",level:2},{value:"Remove Beiboot from the Cluster",id:"remove-beiboot-from-the-cluster",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"install-beiboot-on-the-host-cluster"},"Install Beiboot on the Host Cluster"),(0,o.kt)("p",null,"You can install the Beiboot operator with this in your host cluster:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f https://raw.githubusercontent.com/Getdeck/beiboot/main/operator/manifests/beiboot.yaml\n")),(0,o.kt)("p",null,"Please notice the following requirements:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You will need the appropriate permissions apply all resources from this file in the cluster"),(0,o.kt)("li",{parentName:"ul"},"The cluster must provide Kubernetes API in version >=1.22")),(0,o.kt)("p",null,"This following components are created from the file:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("em",{parentName:"li"},"namespace")," called ",(0,o.kt)("inlineCode",{parentName:"li"},"getdeck")),(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("em",{parentName:"li"},"service account")," called ",(0,o.kt)("inlineCode",{parentName:"li"},"beiboot-operator")),(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("em",{parentName:"li"},"cluster role")," and ",(0,o.kt)("em",{parentName:"li"},"cluster role binding")),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("em",{parentName:"li"},"deployment")," for the operator in namespace ",(0,o.kt)("inlineCode",{parentName:"li"},"getdeck"))),(0,o.kt)("p",null,"The operator itself registers a few additional Kubernetes objects, for example the ",(0,o.kt)("inlineCode",{parentName:"p"},"beiboot")," ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"},"custom resource\ndefinition (CRD)"),"."),(0,o.kt)("h2",{id:"tested-kubernetes-host-cluster"},"Tested Kubernetes Host Cluster"),(0,o.kt)("p",null,"Beiboot was tested on the following Kubernetes host clusters:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://k3d.io/"},"k3d")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine"},"Google Kubernetes Engine"))),(0,o.kt)("h2",{id:"remove-beiboot-from-the-cluster"},"Remove Beiboot from the Cluster"),(0,o.kt)("p",null,"You can uninstall the operator by removing the ",(0,o.kt)("inlineCode",{parentName:"p"},"getdeck")," namespace:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl delete ns getdeck\n")),(0,o.kt)("p",null,"The operator will catch the termination signal and delete its Kubernetes extensions."))}p.isMDXComponent=!0}}]);