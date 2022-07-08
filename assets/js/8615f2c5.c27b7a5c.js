"use strict";(self.webpackChunkgetdeck=self.webpackChunkgetdeck||[]).push([[690],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,a(a({ref:t},p),{},{components:n})):r.createElement(h,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7311:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(3117),o=n(102),i=(n(7294),n(3905)),a=["components"],l={sidebar_position:2},s="Working with Decks and the CLI",c={unversionedId:"deck/for-devs/working-with-deck",id:"deck/for-devs/working-with-deck",title:"Working with Decks and the CLI",description:"A Deckfile can be understood similar to what a docker-compose file is doing for a developer.",source:"@site/docs/deck/for-devs/working-with-deck.md",sourceDirName:"deck/for-devs",slug:"/deck/for-devs/working-with-deck",permalink:"/docs/deck/for-devs/working-with-deck",draft:!1,editUrl:"https://github.com/Getdeck/Getdeck.github.io/tree/main/docs/deck/for-devs/working-with-deck.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"Introduction for Developers",permalink:"/docs/deck/for-devs/intro"},next:{title:"CLI Reference",permalink:"/docs/deck/for-devs/cli-reference"}},p={},u=[{value:"Setup a local development infrastructure",id:"setup-a-local-development-infrastructure",level:2},{value:"What happens on <code>deck get ...</code>",id:"what-happens-on-deck-get-",level:2},{value:"Halt the development infrastructure",id:"halt-the-development-infrastructure",level:2},{value:"Remove a Deck",id:"remove-a-deck",level:2},{value:"Remove the development infrastructure",id:"remove-the-development-infrastructure",level:2}],d={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"working-with-decks-and-the-cli"},"Working with Decks and the CLI"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"/docs/deckfile/specs"},"Deckfile")," can be understood similar to what a ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose")," file is doing for a developer.\nIt creates a development infrastructure, usually with multiple services, e.g. databases, full-text search indexes\nand applications. However, in opposite to a docker-compose file, a Deckfile creates that infrastructure based on a real\nKubernetes cluster (not just ",(0,i.kt)("inlineCode",{parentName:"p"},"docker run ...")," with some on-top convenience).  "),(0,i.kt)("p",null,"Ideally, the Deckfile for a developer's setup draws the Kubernetes workloads from production(-close) environments. That\nallows development teams to share the configuration in which a container is finally operated.",(0,i.kt)("br",{parentName:"p"}),"\n","Getdeck provides a CLI ",(0,i.kt)("inlineCode",{parentName:"p"},"deck"),", which comes with most of the popular tools from the Kubernetes ecosystem without having them\nlocally managed. This includes ",(0,i.kt)("inlineCode",{parentName:"p"},"Helm")," (with plugins), ",(0,i.kt)("inlineCode",{parentName:"p"},"kustomize")," and others. Getdeck allows provisioning Kubernetes\nclusters without requiring developers to know all the ins and outs of these tools. Hence, the process of spinning up development\nsetups becomes a breeze."),(0,i.kt)("h2",{id:"setup-a-local-development-infrastructure"},"Setup a local development infrastructure"),(0,i.kt)("p",null,"Of course, there are countless numbers of development setups, requirements and moving parts in production. However, Getdeck\nis designed to be as versatile as possible for different use-case scenarios.\nLet's assume you want to provide a common Kubernetes-based tech stack on your machine. Either you find what you need\nin Getdeck's ",(0,i.kt)("a",{parentName:"p",href:"/docs/deckfile/wharf"},"Wharf"),", or you have to write your own Deckfile.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"Important:")," If you find a popular stack missing in    Wharf, please consider adding it with a\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Getdeck/wharf"},(0,i.kt)("em",{parentName:"a"},"Pull Request")," on Github"),".  "),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"deck")," CLI can be called with a specific location of a ",(0,i.kt)("inlineCode",{parentName:"p"},"deck.yaml"),", for example ",(0,i.kt)("inlineCode",{parentName:"p"},"deck get ./deck.yaml"),". This\nwill create the Kubernetes setup from a local Deckfile in this directory."),(0,i.kt)("h2",{id:"what-happens-on-deck-get-"},"What happens on ",(0,i.kt)("inlineCode",{parentName:"h2"},"deck get ...")),(0,i.kt)("p",null,"There are a couple of steps automated with the ",(0,i.kt)("inlineCode",{parentName:"p"},"get"),"-operation:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Load and verify the given Deckfile  "),(0,i.kt)("li",{parentName:"ol"},"Check if the Kubernetes provider (such as ",(0,i.kt)("em",{parentName:"li"},"k3d"),", ",(0,i.kt)("em",{parentName:"li"},"kind"),", etc.) is available; if not, install it  "),(0,i.kt)("li",{parentName:"ol"},"Create a logical Kubernetes cluster with the given provider and cluster settings (including port-mappings, etc.)  "),(0,i.kt)("li",{parentName:"ol"},"Pull the Kubernetes manifest sources from all specified locations using the identity of the user  "),(0,i.kt)("li",{parentName:"ol"},"Preprocess manifest sources, for example generate ",(0,i.kt)("em",{parentName:"li"},"Helm charts")," with the configuration from the Deckfile  "),(0,i.kt)("li",{parentName:"ol"},"Apply all workload manifests to the Kubernetes cluster  "),(0,i.kt)("li",{parentName:"ol"},"Print helpful information about the setup and how to get started working with it  "),(0,i.kt)("li",{parentName:"ol"},"Optionally: wait for all Pods to become ready  ")),(0,i.kt)("p",null,"This process is supervised by ",(0,i.kt)("inlineCode",{parentName:"p"},"deck")," to handle common errors or revert everything in case of an unfixable error. Upon\na technical issue the cluster is removed immediately.",(0,i.kt)("br",{parentName:"p"}),"\n","In case of persistent errors the ",(0,i.kt)("em",{parentName:"p"},"debug")," flag (",(0,i.kt)("inlineCode",{parentName:"p"},"deck -d get ..."),") can help to determine what is causing the problem."),(0,i.kt)("p",null,"This operation can be run as often as needed. Running it later on will cause your development setup to stay up-to-date\nwith the Deckfile in case it is pulled from a remote location.",(0,i.kt)("br",{parentName:"p"}),"\n","If you need more than one Deck (and the Deckfile in question also specifies multiple Decks), you can run ",(0,i.kt)("inlineCode",{parentName:"p"},"deck get --name ...")," for each\nrequired Deck from the file. This will still create only one cluster (effectively sharing it between Decks) and install\nmultiple Decks to it. This can be useful for multiple development teams which are developing different services communicating with\neach other."),(0,i.kt)("p",null,"This operation is similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose up -d")),(0,i.kt)("h2",{id:"halt-the-development-infrastructure"},"Halt the development infrastructure"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"stop"),"-operation allows pausing the current Kubernetes development cluster while keeping the state in place. Depending\non the Kubernetes provider, this will shut down the cluster effectively saving resources.",(0,i.kt)("br",{parentName:"p"}),"\n","If a cluster is stopped, running another ",(0,i.kt)("inlineCode",{parentName:"p"},"deck get ...")," on a Deckfile will bring this existing cluster back to life.  "),(0,i.kt)("p",null,"This operation is similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose stop")),(0,i.kt)("h2",{id:"remove-a-deck"},"Remove a Deck"),(0,i.kt)("p",null,"If you don't need to run a certain Deck any longer in your development infrastructure, you can delete it with the ",(0,i.kt)("inlineCode",{parentName:"p"},"remove"),"-operation.\nThis will execute all the steps from the ",(0,i.kt)("inlineCode",{parentName:"p"},"get"),"-operation (especially the preprocessing of the workload manifests) but instead of\ncreating the resulting Kubernetes objects in the cluster, the sources are used to remove them."),(0,i.kt)("h2",{id:"remove-the-development-infrastructure"},"Remove the development infrastructure"),(0,i.kt)("p",null,"You can remove Decks individually or remove the entire Kubernetes cluster with the ",(0,i.kt)("inlineCode",{parentName:"p"},"remove --cluster"),"-operation. This will\ncause the underlying Kubernetes provider to eliminate the cluster including its state from the development machine."),(0,i.kt)("p",null,"This operation is similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"docker-compose down -v --rmi all"),"."))}m.isMDXComponent=!0}}]);