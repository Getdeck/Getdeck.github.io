"use strict";(self.webpackChunkgetdeck=self.webpackChunkgetdeck||[]).push([[281],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=o,g=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5295:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={title:"Developing with Kubernetes",sidebar_position:7,slug:"developing-with-kubernetes"},a=void 0,l={unversionedId:"developing",id:"developing",title:"Developing with Kubernetes",description:"There are a couple of Kubernetes development tools available. This page describes how to work with Getdeck",source:"@site/guides/developing.md",sourceDirName:".",slug:"/developing-with-kubernetes",permalink:"/guides/developing-with-kubernetes",draft:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Developing with Kubernetes",sidebar_position:7,slug:"developing-with-kubernetes"},sidebar:"docsSidebar",previous:{title:"Getdeck together with Gefyra",permalink:"/guides/getdeck-with-gefyra"},next:{title:"Integrating non-Kubernetes Resources",permalink:"/guides/integrating-non-kubernetes-resources"}},s={},c=[{value:"Gefyra",id:"gefyra",level:2},{value:"Ksync",id:"ksync",level:2},{value:"Telepresence",id:"telepresence",level:2},{value:"Missing a tool?",id:"missing-a-tool",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are a couple of Kubernetes development tools available. This page describes how to work with Getdeck\nand a development tool. All solutions come with pros and cons. Choose the one that fits your needs best."),(0,o.kt)("h2",{id:"gefyra"},"Gefyra"),(0,o.kt)("p",null,"Gefyra is a blazingly-fast, rock-solid, local application development tool to write software with Kubernetes.\nIt offers you to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"run services locally on a developer machine"),(0,o.kt)("li",{parentName:"ul"},"operate feature-branches in a production-like Kubernetes environment with all adjacent services"),(0,o.kt)("li",{parentName:"ul"},"write code in the IDE you already love, be fast, be confident"),(0,o.kt)("li",{parentName:"ul"},"leverage all the neat development features, such as debugger, code-hot-reloading, overriding environment variables"),(0,o.kt)("li",{parentName:"ul"},"run high-level integration tests against all dependent services"),(0,o.kt)("li",{parentName:"ul"},"keep peace-of-mind when pushing new code to the integration environment")),(0,o.kt)("p",null,"For detailed information and a How-to, check out ",(0,o.kt)("a",{parentName:"p",href:"/guides/getdeck-with-gefyra/"},"this page"),"."),(0,o.kt)("h2",{id:"ksync"},"Ksync"),(0,o.kt)("h2",{id:"telepresence"},"Telepresence"),(0,o.kt)("h2",{id:"missing-a-tool"},"Missing a tool?"),(0,o.kt)("p",null,"If you are missing your favorite development tool, please open up a GitHub issues, and we will add it."))}p.isMDXComponent=!0}}]);