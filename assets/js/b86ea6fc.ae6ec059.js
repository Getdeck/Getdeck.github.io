"use strict";(self.webpackChunkgetdeck=self.webpackChunkgetdeck||[]).push([[691],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,k=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(k,i(i({ref:t},p),{},{components:n})):r.createElement(k,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3029:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={sidebar_position:2,slug:"/deckfile/wharf"},l="Wharf",s={unversionedId:"deckfile/wharf",id:"deckfile/wharf",title:"Wharf",description:"The Wharf of Getdeck is a collection of common tech stacks or advanced components running in Kubernetes. Feel free",source:"@site/docs/deckfile/wharf.md",sourceDirName:"deckfile",slug:"/deckfile/wharf",permalink:"/docs/deckfile/wharf",editUrl:"https://github.com/Getdeck/Getdeck.github.io/tree/main/docs/deckfile/wharf.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/deckfile/wharf"},sidebar:"specfileSidebar",previous:{title:"Deckfile specification",permalink:"/docs/deckfile/specs"}},p={},u=[{value:"Epinio",id:"epinio",level:2},{value:"OpenFaaS",id:"openfaas",level:2},{value:"NFS Storage Provisioner",id:"nfs-storage-provisioner",level:2},{value:"Django",id:"django",level:2},{value:"django-hurricane",id:"django-hurricane",level:3}],d={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"wharf"},"Wharf"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Wharf")," of Getdeck is a collection of common tech stacks or advanced components running in Kubernetes. Feel free\nto use the Deckfiles from the wharf for your local development. The well-crafted development setups in the wharf will\nbe checked regularly in order to prevent a ",(0,o.kt)("em",{parentName:"p"},"dependency drift")," and to make sure they are working."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Getdeck/wharf"},"Check it out.")),(0,o.kt)("p",null,"If you want to add a Deckfile for another Kubernetes-based development stack, feel free to create a pull request on\nGitHub."),(0,o.kt)("a",{class:"button button--secondary button--lg button--external",target:"_blank",href:"https://github.com/Getdeck/wharf/issues/new?assignees=&labels=enhancement&template=deckfile-request.md&title=%5BDeckfile+request%5D%3A+"},"Create a Deckfile request"),(0,o.kt)("h2",{id:"epinio"},"Epinio"),(0,o.kt)("p",null,"If you want to run an ",(0,o.kt)("a",{parentName:"p",href:"https://epinio.io"},"Epinio")," on your local machine, just run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"deck get https://raw.githubusercontent.com/Getdeck/wharf/main/epinio/deck.yaml\n")),(0,o.kt)("p",null,"Please follow the ",(0,o.kt)("em",{parentName:"p"},"notes")," to find out how to get started with this Deck.",(0,o.kt)("br",{parentName:"p"}),"\n","Required ",(0,o.kt)("inlineCode",{parentName:"p"},"deck"),"  version: ",(0,o.kt)("strong",{parentName:"p"},"0.6.0+")),(0,o.kt)("h2",{id:"openfaas"},"OpenFaaS"),(0,o.kt)("p",null,"If you want to run an ",(0,o.kt)("a",{parentName:"p",href:"https://www.openfaas.com/"},"OpenFaaS")," on your local machine, just run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"deck get https://raw.githubusercontent.com/Getdeck/wharf/main/openfaas/deck.yaml\n")),(0,o.kt)("p",null,"Please follow the ",(0,o.kt)("em",{parentName:"p"},"notes")," to find out how to get started with this Deck.",(0,o.kt)("br",{parentName:"p"}),"\n","Required ",(0,o.kt)("inlineCode",{parentName:"p"},"deck"),"  version: ",(0,o.kt)("strong",{parentName:"p"},"0.6.0+")),(0,o.kt)("h2",{id:"nfs-storage-provisioner"},"NFS Storage Provisioner"),(0,o.kt)("p",null,"If you want to use a ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes"},"ReadWriteMany (RWX)"),"\nstorage class with ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Network_File_System"},"NFS")," in your application, just run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"deck get https://raw.githubusercontent.com/Getdeck/wharf/main/nfs/deck.yaml\n")),(0,o.kt)("p",null,"You can add your workload and mount a PVC with ",(0,o.kt)("inlineCode",{parentName:"p"},"storageClassName: wharf-nfs"),"."),(0,o.kt)("p",null,"Please follow the ",(0,o.kt)("em",{parentName:"p"},"notes")," to find out how to get started with this Deck.",(0,o.kt)("br",{parentName:"p"}),"\n","Required ",(0,o.kt)("inlineCode",{parentName:"p"},"deck"),"  version: ",(0,o.kt)("strong",{parentName:"p"},"0.8.2+")),(0,o.kt)("h2",{id:"django"},"Django"),(0,o.kt)("p",null,"The following Decks are running a typical django stack with PostgresSQL\n(using ",(0,o.kt)("a",{parentName:"p",href:"https://postgres-operator.readthedocs.io/en/latest/"},"Zalando's PostgreSQL Operator"),")."),(0,o.kt)("h3",{id:"django-hurricane"},"django-hurricane"),(0,o.kt)("p",null,"If you want to run the ",(0,o.kt)("a",{parentName:"p",href:"https://django-hurricane.io/basic-app/"},"spacecrafts")," demo of ",(0,o.kt)("a",{parentName:"p",href:"https://django-hurricane.io"},"django-hurricane"),", just run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"deck get https://raw.githubusercontent.com/Getdeck/wharf/main/django/deck.yaml\n")),(0,o.kt)("p",null,"Please follow the ",(0,o.kt)("em",{parentName:"p"},"notes")," to find out how to get started with this Deck.",(0,o.kt)("br",{parentName:"p"}),"\n","Required ",(0,o.kt)("inlineCode",{parentName:"p"},"deck"),"  version: ",(0,o.kt)("strong",{parentName:"p"},"0.6.0+")))}f.isMDXComponent=!0}}]);