"use strict";(self.webpackChunkgetdeck=self.webpackChunkgetdeck||[]).push([[691],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,k=d["".concat(s,".").concat(f)]||d[f]||u[f]||o;return n?a.createElement(k,i(i({ref:t},c),{},{components:n})):a.createElement(k,i({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3029:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u}});var a=n(3117),r=n(102),o=(n(7294),n(3905)),i=["components"],l={sidebar_position:2,slug:"/deckfile/wharf"},s="Wharf",p={unversionedId:"deckfile/wharf",id:"deckfile/wharf",title:"Wharf",description:"The Wharf of Getdeck is a collection of common tech stacks or advanced components running in Kubernetes. Feel free",source:"@site/docs/deckfile/wharf.md",sourceDirName:"deckfile",slug:"/deckfile/wharf",permalink:"/docs/deckfile/wharf",draft:!1,editUrl:"https://github.com/Getdeck/Getdeck.github.io/tree/main/docs/deckfile/wharf.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,slug:"/deckfile/wharf"},sidebar:"specfileSidebar",previous:{title:"Deckfile specification",permalink:"/docs/deckfile/specs"}},c={},u=[{value:"Epinio",id:"epinio",level:2},{value:"OpenFaaS",id:"openfaas",level:2},{value:"NFS Storage Provisioner",id:"nfs-storage-provisioner",level:2},{value:"Django",id:"django",level:2},{value:"django-hurricane",id:"django-hurricane",level:3},{value:"Java",id:"java",level:2},{value:"Polls Example using Spring",id:"polls-example-using-spring",level:3}],d={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"wharf"},"Wharf"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Wharf")," of Getdeck is a collection of common tech stacks or advanced components running in Kubernetes. Feel free\nto use the Deckfiles from the wharf for your local development. The well-crafted development setups in the wharf will\nbe checked regularly in order to prevent a ",(0,o.kt)("em",{parentName:"p"},"dependency drift")," and to make sure they are working."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Getdeck/wharf"},"Check it out.")),(0,o.kt)("p",null,"If you want to add a Deckfile for another Kubernetes-based development stack, feel free to create a pull request on\nGitHub."),(0,o.kt)("a",{class:"button button--secondary button--lg button--external",target:"_blank",href:"https://github.com/Getdeck/wharf/issues/new?assignees=&labels=enhancement&template=deckfile-request.md&title=%5BDeckfile+request%5D%3A+"},"Create a Deckfile request"),(0,o.kt)("h2",{id:"epinio"},"Epinio"),(0,o.kt)("p",null,"If you want to run an ",(0,o.kt)("a",{parentName:"p",href:"https://epinio.io"},"Epinio")," on your local machine, just run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"deck get https://raw.githubusercontent.com/Getdeck/wharf/main/epinio/deck.yaml\n")),(0,o.kt)("p",null,"Please follow the ",(0,o.kt)("em",{parentName:"p"},"notes")," to find out how to get started with this Deck.",(0,o.kt)("br",{parentName:"p"}),"\n","Required ",(0,o.kt)("inlineCode",{parentName:"p"},"deck"),"  version: ",(0,o.kt)("strong",{parentName:"p"},"0.6.0+")),(0,o.kt)("h2",{id:"openfaas"},"OpenFaaS"),(0,o.kt)("p",null,"If you want to run an ",(0,o.kt)("a",{parentName:"p",href:"https://www.openfaas.com/"},"OpenFaaS")," on your local machine, just run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"deck get https://raw.githubusercontent.com/Getdeck/wharf/main/openfaas/deck.yaml\n")),(0,o.kt)("p",null,"Please follow the ",(0,o.kt)("em",{parentName:"p"},"notes")," to find out how to get started with this Deck.",(0,o.kt)("br",{parentName:"p"}),"\n","Required ",(0,o.kt)("inlineCode",{parentName:"p"},"deck"),"  version: ",(0,o.kt)("strong",{parentName:"p"},"0.6.0+")),(0,o.kt)("h2",{id:"nfs-storage-provisioner"},"NFS Storage Provisioner"),(0,o.kt)("p",null,"If you want to use a ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes"},"ReadWriteMany (RWX)"),"\nstorage class with ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Network_File_System"},"NFS")," in your application, just run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"deck get https://raw.githubusercontent.com/Getdeck/wharf/main/nfs/deck.yaml\n")),(0,o.kt)("p",null,"You can add your workload and mount a PVC with ",(0,o.kt)("inlineCode",{parentName:"p"},"storageClassName: wharf-nfs"),"."),(0,o.kt)("p",null,"Please follow the ",(0,o.kt)("em",{parentName:"p"},"notes")," to find out how to get started with this Deck.",(0,o.kt)("br",{parentName:"p"}),"\n","Required ",(0,o.kt)("inlineCode",{parentName:"p"},"deck"),"  version: ",(0,o.kt)("strong",{parentName:"p"},"0.8.2+")),(0,o.kt)("h2",{id:"django"},"Django"),(0,o.kt)("p",null,"The following Decks are running a typical django stack with PostgresSQL\n(using ",(0,o.kt)("a",{parentName:"p",href:"https://postgres-operator.readthedocs.io/en/latest/"},"Zalando's PostgreSQL Operator"),")."),(0,o.kt)("h3",{id:"django-hurricane"},"django-hurricane"),(0,o.kt)("p",null,"If you want to run the ",(0,o.kt)("a",{parentName:"p",href:"https://django-hurricane.io/basic-app/"},"spacecrafts")," demo of ",(0,o.kt)("a",{parentName:"p",href:"https://django-hurricane.io"},"django-hurricane"),", just run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"deck get https://raw.githubusercontent.com/Getdeck/wharf/main/django/deck.yaml\n")),(0,o.kt)("p",null,"Please follow the ",(0,o.kt)("em",{parentName:"p"},"notes")," to find out how to get started with this Deck.",(0,o.kt)("br",{parentName:"p"}),"\n","Required ",(0,o.kt)("inlineCode",{parentName:"p"},"deck"),"  version: ",(0,o.kt)("strong",{parentName:"p"},"0.6.0+")),(0,o.kt)("h2",{id:"java"},"Java"),(0,o.kt)("p",null,"The following Decks are running a Java stack with PostgresSQL\n(using Bitnamis Postgres Charts)."),(0,o.kt)("h3",{id:"polls-example-using-spring"},"Polls Example using Spring"),(0,o.kt)("p",null,"If you want to run a Java example of a simple polls application using Spring, just run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"deck get https://raw.githubusercontent.com/Getdeck/wharf/main/java-polls/helm/deck.yaml\n")),(0,o.kt)("p",null,"Please follow the ",(0,o.kt)("em",{parentName:"p"},"notes")," to find out how to get started with this Deck.",(0,o.kt)("br",{parentName:"p"}),"\n","Required ",(0,o.kt)("inlineCode",{parentName:"p"},"deck"),"  version: ",(0,o.kt)("strong",{parentName:"p"},"0.8.2+")))}f.isMDXComponent=!0}}]);