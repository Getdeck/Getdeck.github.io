"use strict";(self.webpackChunkgetdeck=self.webpackChunkgetdeck||[]).push([[229],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(t),f=i,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8702:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const o={title:"Using Inline as a Source",sidebar_position:2,slug:"using-inline-as-source"},a=void 0,s={unversionedId:"using-inline",id:"using-inline",title:"Using Inline as a Source",description:"It is possible to define inline resources directly within your Deckfile. Simply add an entry under sources using type",source:"@site/guides/using-inline.md",sourceDirName:".",slug:"/using-inline-as-source",permalink:"/guides/using-inline-as-source",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Using Inline as a Source",sidebar_position:2,slug:"using-inline-as-source"},sidebar:"docsSidebar",previous:{title:"Hello World from Getdeck",permalink:"/guides/hello-world-from-getdeck"},next:{title:"Using Files as a Source",permalink:"/guides/using-file-as-source"}},l={},c=[],u={toc:c};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"It is possible to define inline resources directly within your Deckfile. Simply add an entry under ",(0,i.kt)("inlineCode",{parentName:"p"},"sources")," using ",(0,i.kt)("inlineCode",{parentName:"p"},"type: inline")," and the corresponding ",(0,i.kt)("inlineCode",{parentName:"p"},"content")," in yaml or json format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- type: inline\n  content:\n    kind: Namespace\n    apiVersion: v1\n    metadata:\n      - name: test\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'- type: inline\n  content:\n    { "kind": "Namespace", "apiVersion": "v1", "metadata": { "name": "test" } }\n')),(0,i.kt)("p",null,"While inline definitions are a great way to test, debug, or explore new setups, you most likely don't want to define all your Kubernetes resources inline in a Deckfile.\nGetdeck does not aim to provide a new way of defining resources, but helps you integrate existing resources. So let's see how Getdeck can use an existing Kubernetes resource defined in a yaml file."))}p.isMDXComponent=!0}}]);