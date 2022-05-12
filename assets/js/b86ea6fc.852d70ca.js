"use strict";(self.webpackChunkgetdeck=self.webpackChunkgetdeck||[]).push([[691],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=a,h=d["".concat(p,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3029:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:2,slug:"/deckfile/wharf"},p="Wharf",l={unversionedId:"deckfile/wharf",id:"deckfile/wharf",title:"Wharf",description:"The Wharf of Getdeck is a collection of common tech stacks or advanced components running in Kubernetes. Feel free",source:"@site/docs/deckfile/wharf.md",sourceDirName:"deckfile",slug:"/deckfile/wharf",permalink:"/docs/deckfile/wharf",editUrl:"https://github.com/Getdeck/Getdeck.github.io/tree/main/docs/deckfile/wharf.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/deckfile/wharf"},sidebar:"specfileSidebar",previous:{title:"Deckfile specification",permalink:"/docs/deckfile/specs"}},u={},s=[{value:"Epinio",id:"epinio",level:2},{value:"OpenFaaS",id:"openfaas",level:2},{value:"Django",id:"django",level:2},{value:"django-hurricane",id:"django-hurricane",level:3}],d={toc:s};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"wharf"},"Wharf"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Wharf")," of Getdeck is a collection of common tech stacks or advanced components running in Kubernetes. Feel free\nto use the Deckfiles from the wharf for your local development. The well-crafted development setups in the wharf will\nbe checked regularly in order to prevent a ",(0,o.kt)("em",{parentName:"p"},"dependency drift")," and to make sure they are working."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Getdeck/wharf"},"Check it out.")),(0,o.kt)("p",null,"If you want to add a Deckfile for another Kubernetes-based development stack, feel free to create a pull request on\nGitHub."),(0,o.kt)("h2",{id:"epinio"},"Epinio"),(0,o.kt)("p",null,"If you want to run an ",(0,o.kt)("a",{parentName:"p",href:"https://epinio.io"},"Epinio")," on your local machine, just run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"deck get https://raw.githubusercontent.com/Getdeck/wharf/main/epinio/deck.yaml\n")),(0,o.kt)("p",null,"Please follow the ",(0,o.kt)("em",{parentName:"p"},"notes")," to find out how to get started with this deck.",(0,o.kt)("br",{parentName:"p"}),"\n","Required ",(0,o.kt)("inlineCode",{parentName:"p"},"deck"),"  version: ",(0,o.kt)("strong",{parentName:"p"},"0.6.0+")),(0,o.kt)("h2",{id:"openfaas"},"OpenFaaS"),(0,o.kt)("p",null,"If you want to run an ",(0,o.kt)("a",{parentName:"p",href:"https://www.openfaas.com/"},"OpenFaaS")," on your local machine, just run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"deck get https://raw.githubusercontent.com/Getdeck/wharf/main/openfaas/deck.yaml\n")),(0,o.kt)("p",null,"Please follow the ",(0,o.kt)("em",{parentName:"p"},"notes")," to find out how to get started with this deck.",(0,o.kt)("br",{parentName:"p"}),"\n","Required ",(0,o.kt)("inlineCode",{parentName:"p"},"deck"),"  version: ",(0,o.kt)("strong",{parentName:"p"},"0.6.0+")),(0,o.kt)("h2",{id:"django"},"Django"),(0,o.kt)("p",null,"The following decks are running a typical django stack with PostgresSQL\n(using ",(0,o.kt)("a",{parentName:"p",href:"https://postgres-operator.readthedocs.io/en/latest/"},"Zalando's PostgreSQL Operator"),")."),(0,o.kt)("h3",{id:"django-hurricane"},"django-hurricane"),(0,o.kt)("p",null,"If you want to run the ",(0,o.kt)("a",{parentName:"p",href:"https://django-hurricane.io/basic-app/"},"spacecrafts")," demo of ",(0,o.kt)("a",{parentName:"p",href:"https://django-hurricane.io"},"django-hurricane"),", just run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"deck get https://raw.githubusercontent.com/Getdeck/wharf/main/django/deck.yaml\n")),(0,o.kt)("p",null,"Please follow the ",(0,o.kt)("em",{parentName:"p"},"notes")," to find out how to get started with this deck.",(0,o.kt)("br",{parentName:"p"}),"\n","Required ",(0,o.kt)("inlineCode",{parentName:"p"},"deck"),"  version: ",(0,o.kt)("strong",{parentName:"p"},"0.6.0+")))}f.isMDXComponent=!0}}]);