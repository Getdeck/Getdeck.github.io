"use strict";(self.webpackChunkgetdeck=self.webpackChunkgetdeck||[]).push([[983],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),k=o,f=u["".concat(s,".").concat(k)]||u[k]||d[k]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8462:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={title:"What is a Deck?",sidebar_position:3,slug:"what-is-a-deck",description:"Description of what a Deck is and how it is used for development"},a=void 0,c={unversionedId:"overview/deck",id:"overview/deck",title:"What is a Deck?",description:"Description of what a Deck is and how it is used for development",source:"@site/docs/overview/deck.md",sourceDirName:"overview",slug:"/overview/what-is-a-deck",permalink:"/docs/overview/what-is-a-deck",draft:!1,editUrl:"https://github.com/Getdeck/Getdeck.github.io/tree/main/docs/overview/deck.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"What is a Deck?",sidebar_position:3,slug:"what-is-a-deck",description:"Description of what a Deck is and how it is used for development"},sidebar:"docsSidebar",previous:{title:"Introduction for DevOps or Kubernetes Operators",permalink:"/docs/overview/introduction-for-devops"},next:{title:"Working with Decks and the CLI",permalink:"/docs/overview/working-with-deck"}},s={},l=[],p={toc:l};function d(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'"Deck" is a new concept coming with ',(0,o.kt)("strong",{parentName:"p"},"Getdeck"),". Put in a few words:"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A Deck is the smallest installable unit in Getdeck")),(0,o.kt)("p",null,'To stay with the nautical metaphor around Kubernetes: You may work on a large ship and that very ship is divided into\nmany Decks. You can work one day on Deck A - and on Deck B the other day. But, since both Decks are on the same ship,\nthey share a common ground. The Getdeck team decided to call installable units "Deck", because even the smallest ships\nhave at least one Deck. Decks on a ship usually serve different purposes or offer certain capabilities and so do the\nDecks in Getdeck.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"What is a Deck",src:n(4931).Z,width:"1162",height:"1077"})),(0,o.kt)("p",null,"Decks do share common components, which might end up as a production platform playing together. But, since it is not\nalways workable to run the entire production infrastructure on a Pentium 3 notebook, Decks form a certain excerpt for\nyou to work on. Just enough to get the work done in the required context. If you need another Deck, ask your DevOps\nto create it upon your requirements or go on and define it yourself."),(0,o.kt)("p",null,"Find Deck examples at the ",(0,o.kt)("a",{parentName:"p",href:"/docs/deckfile-specs"},"Deckfile specification")," page."),(0,o.kt)("p",null,"Having a ",(0,o.kt)("em",{parentName:"p"},"Deckfile")," defining the development setup is crucial for working with Getdeck. It's like a ",(0,o.kt)("inlineCode",{parentName:"p"},"docker-compose.yaml"),"\nfor Kubernetes-based development environments. Yet, it is more difficult to\ncompose a Kubernetes workload than a docker-compose file, as it requires the knowledge of a Kubernetes practitioner.\nPlease read on how to write a Deckfile to specify a Kubernetes-based development that is close to your production\nsystem by using the workload descriptors you already use."))}d.isMDXComponent=!0},4931:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/what-is-a-deck-2a0b8cfbecb09c7c2aba9f81de15dc6b.png"}}]);