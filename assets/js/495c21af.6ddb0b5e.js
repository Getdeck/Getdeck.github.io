"use strict";(self.webpackChunkgetdeck=self.webpackChunkgetdeck||[]).push([[184],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6423:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const o={title:"Working with Decks and the CLI",sidebar_position:4,description:"Basics on how to work with Deckfiles"},a=void 0,l={unversionedId:"overview/working-with-deck",id:"overview/working-with-deck",title:"Working with Decks and the CLI",description:"Basics on how to work with Deckfiles",source:"@site/docs/overview/working-with-deck.md",sourceDirName:"overview",slug:"/overview/working-with-deck",permalink:"/docs/overview/working-with-deck",draft:!1,editUrl:"https://github.com/Getdeck/Getdeck.github.io/tree/main/docs/overview/working-with-deck.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Working with Decks and the CLI",sidebar_position:4,description:"Basics on how to work with Deckfiles"},sidebar:"docsSidebar",previous:{title:"What is a Deck?",permalink:"/docs/overview/what-is-a-deck"},next:{title:"Writing Deckfiles for Developers",permalink:"/docs/overview/writing-deckfile"}},s={},c=[{value:"The Deckfile",id:"the-deckfile",level:2},{value:"Setting up a Local Kubernetes Development Infrastructure",id:"setting-up-a-local-kubernetes-development-infrastructure",level:2},{value:"What Happens on <code>deck get ...</code>",id:"what-happens-on-deck-get-",level:2},{value:"Halting the Development Infrastructure",id:"halting-the-development-infrastructure",level:2},{value:"Removing a Deck",id:"removing-a-deck",level:2},{value:"Removing the Development Infrastructure",id:"removing-the-development-infrastructure",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"the-deckfile"},"The Deckfile"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"/docs/deckfile-specs/"},"Deckfile")," can be understood like what a ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose")," file is doing for a developer."),(0,i.kt)("p",null,"It creates a development infrastructure, usually with many services, e.g. databases, full-text search indexes\nand applications. However, in contrast to a docker-compose file, a Deckfile creates that infrastructure based on a real\nKubernetes cluster (not just ",(0,i.kt)("inlineCode",{parentName:"p"},"docker run ...")," with some on-top convenience).  "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Ideally, the Deckfile for a developer's setup draws the Kubernetes workloads from production(-close) environments. That allows development teams to share the configuration in which a container is finally operated.")),(0,i.kt)("p",null,"Getdeck provides a CLI ",(0,i.kt)("inlineCode",{parentName:"p"},"deck"),", which comes with most of the popular tools from the Kubernetes ecosystem without having them\nmanaged. This includes ",(0,i.kt)("inlineCode",{parentName:"p"},"Helm")," (with plugins), ",(0,i.kt)("inlineCode",{parentName:"p"},"kustomize")," and others.",(0,i.kt)("br",{parentName:"p"}),"\n","Getdeck allows provisioning Kubernetes clusters without requiring developers to know all the ins-and-outs of these tools.\nThe process of spinning up development setups becomes a breeze."),(0,i.kt)("h2",{id:"setting-up-a-local-kubernetes-development-infrastructure"},"Setting up a Local Kubernetes Development Infrastructure"),(0,i.kt)("p",null,"Of course, there are countless numbers of development setups, requirements and moving parts in production. However, Getdeck\nis designed to be as versatile as possible for different use-case scenarios."),(0,i.kt)("p",null,"Let's assume you want to provide a common Kubernetes-based tech stack on your machine. Either you find what you need\nin Getdeck's ",(0,i.kt)("a",{parentName:"p",href:"/wharf/"},"Wharf"),", or you have to write your own Deckfile.  "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Important:")," If you find a popular stack missing in Wharf, please consider adding it with a\n",(0,i.kt)("em",{parentName:"p"},"Pull Request")," on Github.  "),(0,i.kt)("a",{class:"button button--secondary button--lg button--external",target:"_blank",href:"https://github.com/Getdeck/wharf/issues/new?assignees=&labels=enhancement&template=deckfile-request.md&title=%5BDeckfile+request%5D%3A+"},"Create a Deckfile request"),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"deck")," CLI can be called with a specific location of a ",(0,i.kt)("inlineCode",{parentName:"p"},"deck.yaml"),", for example ",(0,i.kt)("inlineCode",{parentName:"p"},"deck get ./deck.yaml"),". This\nwill create the Kubernetes setup from a local Deckfile in this directory."),(0,i.kt)("h2",{id:"what-happens-on-deck-get-"},"What Happens on ",(0,i.kt)("inlineCode",{parentName:"h2"},"deck get ...")),(0,i.kt)("p",null,"There are a couple of steps automated with the ",(0,i.kt)("inlineCode",{parentName:"p"},"deck get"),"-operation:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Load and verify the given Deckfile  "),(0,i.kt)("li",{parentName:"ol"},"Check if the Kubernetes provider (such as ",(0,i.kt)("em",{parentName:"li"},"k3d"),", ",(0,i.kt)("em",{parentName:"li"},"kind"),", etc.) is available; if not, install it  "),(0,i.kt)("li",{parentName:"ol"},"Create a logical Kubernetes cluster with the given provider and cluster settings (including port-mappings, etc.)  "),(0,i.kt)("li",{parentName:"ol"},"Pull the Kubernetes manifest sources from all specified locations using the identity of the user  "),(0,i.kt)("li",{parentName:"ol"},"Preprocess manifest sources, for example generate ",(0,i.kt)("em",{parentName:"li"},"Helm charts")," with the configuration from the Deckfile  "),(0,i.kt)("li",{parentName:"ol"},"Apply all workload manifests to the Kubernetes cluster  "),(0,i.kt)("li",{parentName:"ol"},"Print helpful information about the setup and how to get started working with it  "),(0,i.kt)("li",{parentName:"ol"},"Optionally: wait for all Pods to become ready  ")),(0,i.kt)("p",null,"This process is supervised by ",(0,i.kt)("inlineCode",{parentName:"p"},"deck")," to handle common errors or revert everything in case of an unfixable error. Upon\na technical issue the cluster is removed immediately.",(0,i.kt)("br",{parentName:"p"}),"\n","In case of persistent errors the ",(0,i.kt)("em",{parentName:"p"},"debug")," flag (",(0,i.kt)("inlineCode",{parentName:"p"},"deck -d get ..."),") can help to determine what is causing the problem."),(0,i.kt)("p",null,"This operation can be run as often as needed. Running it later on will cause your development setup to stay up-to-date\nwith the Deckfile in case it is pulled from a remote location."),(0,i.kt)("p",null,"If you need more than one Deck (and the Deckfile in question also specifies multiple Decks), you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"deck get --name ...")," for each\nrequired Deck from the file. This will still create only one cluster (effectively sharing it between Decks) and install\nmultiple Decks to it. This can be useful for multiple development teams which are developing different services communicating with\neach other."),(0,i.kt)("p",null,"This operation is similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose up -d")),(0,i.kt)("h2",{id:"halting-the-development-infrastructure"},"Halting the Development Infrastructure"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"deck stop"),"-operation allows pausing the current Kubernetes development cluster while keeping the state in place. Depending\non the Kubernetes provider, this will shut down the cluster effectively saving resources.",(0,i.kt)("br",{parentName:"p"}),"\n","If a cluster is stopped, running another ",(0,i.kt)("inlineCode",{parentName:"p"},"deck get ...")," on a Deckfile will bring this existing cluster back to life.  "),(0,i.kt)("p",null,"This operation is similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose stop")),(0,i.kt)("h2",{id:"removing-a-deck"},"Removing a Deck"),(0,i.kt)("p",null,"If you don't need to run a certain Deck any longer in your development infrastructure, you can delete it with the ",(0,i.kt)("inlineCode",{parentName:"p"},"deck remove"),"-operation.\nThis will execute all the steps from the ",(0,i.kt)("inlineCode",{parentName:"p"},"deck get"),"-operation (especially the preprocessing of the workload manifests) but instead of\ncreating the resulting Kubernetes objects in the cluster, the sources are used to remove them."),(0,i.kt)("h2",{id:"removing-the-development-infrastructure"},"Removing the Development Infrastructure"),(0,i.kt)("p",null,"You can remove Decks individually or remove the entire Kubernetes cluster with the ",(0,i.kt)("inlineCode",{parentName:"p"},"deck remove --cluster"),"-operation. This will\ncause the underlying Kubernetes provider to eliminate the cluster including its state from the development machine."),(0,i.kt)("p",null,"This operation is similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose down -v --rmi all"),"."))}u.isMDXComponent=!0}}]);