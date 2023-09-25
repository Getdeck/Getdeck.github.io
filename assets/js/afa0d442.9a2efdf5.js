"use strict";(self.webpackChunkgetdeck=self.webpackChunkgetdeck||[]).push([[954],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7584:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={title:"Shelf - store and restore the state of a cluster",sidebar_position:8},s=void 0,i={unversionedId:"selfhosted/shelf",id:"selfhosted/shelf",title:"Shelf - store and restore the state of a cluster",description:"Getdeck comes with the functionality to easily store and restore the state of a Beiboot cluster. Currently, it can only",source:"@site/docs/selfhosted/shelf.md",sourceDirName:"selfhosted",slug:"/selfhosted/shelf",permalink:"/docs/selfhosted/shelf",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{title:"Shelf - store and restore the state of a cluster",sidebar_position:8},sidebar:"defaultSidebar",previous:{title:"beibootctl - How to use",permalink:"/docs/selfhosted/beibootctl"},next:{title:"Gefyra Integration",permalink:"/docs/gefyra"}},l={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Getdeck comes with the functionality to easily store and restore the state of a Beiboot cluster. Currently, it can only\nbe used with ",(0,o.kt)("inlineCode",{parentName:"p"},"beibootctl"),", but will be added soon in Getdeck-Desktop. This is a crucial feature to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"quickly spin up development clusters from a proven baseline"),(0,o.kt)("li",{parentName:"ul"},"store the state of a development cluster when deleting it for some time"),(0,o.kt)("li",{parentName:"ul"},"spin up a temporary cluster with data for automatic testing"),(0,o.kt)("li",{parentName:"ul"},"spin up a temporary staging-/pre-prod cluster with data for manual testing")),(0,o.kt)("p",null,"When using ",(0,o.kt)("inlineCode",{parentName:"p"},"beibootctl"),", it's as easy as running ",(0,o.kt)("inlineCode",{parentName:"p"},"beibootctl shelf CLUSTER_NAME")," to create a shelf of the cluster. Its\nEtcd state, as well as the data of the node PVCs will be stored."),(0,o.kt)("p",null,"Restoring a cluster state can be achieved by running ",(0,o.kt)("inlineCode",{parentName:"p"},"beibootctl cluster create CLUSTER_NAME --from-shelf SHELF_NAME"),".\nThis will restore the Etcd state and pre-provision the data PVCs of the nodes."))}p.isMDXComponent=!0}}]);