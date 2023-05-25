"use strict";(self.webpackChunkgetdeck=self.webpackChunkgetdeck||[]).push([[336],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(n),u=i,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||r;return n?a.createElement(k,l(l({ref:t},c),{},{components:n})):a.createElement(k,l({ref:t},c))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var a=n(7462),i=(n(7294),n(3905));const r={title:"Deckfile Specification",sidebar_position:9,description:"The file reference of a Deckfile"},l=void 0,o={unversionedId:"deckfile-specs",id:"deckfile-specs",title:"Deckfile Specification",description:"The file reference of a Deckfile",source:"@site/docs/deckfile-specs.md",sourceDirName:".",slug:"/deckfile-specs",permalink:"/docs/deckfile-specs",draft:!1,editUrl:"https://github.com/Getdeck/Getdeck.github.io/tree/main/docs/deckfile-specs.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"Deckfile Specification",sidebar_position:9,description:"The file reference of a Deckfile"},sidebar:"docsSidebar",previous:{title:"CLI Reference",permalink:"/docs/cli-reference"},next:{title:"API Reference",permalink:"/docs/api-reference"}},s={},p=[{value:"Intro",id:"intro",level:2},{value:"State of this Document",id:"state-of-this-document",level:2},{value:"Deckfile Location",id:"deckfile-location",level:2},{value:"File Header",id:"file-header",level:2},{value:"Cluster Definition",id:"cluster-definition",level:2},{value:"The <code>cluster</code> Top-level Element",id:"the-cluster-top-level-element",level:3},{value:"<code>provider</code>",id:"provider",level:4},{value:"<code>minVersion</code>",id:"minversion",level:4},{value:"<code>name</code>",id:"name",level:4},{value:"<code>nativeConfig</code>",id:"nativeconfig",level:4},{value:"Cluster Definition Example - k3d",id:"cluster-definition-example---k3d",level:3},{value:"Cluster Definition Example - kind",id:"cluster-definition-example---kind",level:3},{value:"Decks Specification",id:"decks-specification",level:2},{value:"The <code>decks</code> Top-level Element",id:"the-decks-top-level-element",level:3},{value:"The <code>deck</code> Definition",id:"the-deck-definition",level:3},{value:"<code>name</code>",id:"name-1",level:4},{value:"<code>namespace</code>",id:"namespace",level:4},{value:"<code>hosts</code>",id:"hosts",level:4},{value:"<code>notes</code>",id:"notes",level:4},{value:"<code>sources</code>",id:"sources",level:4},{value:"Example of a Deck Specification",id:"example-of-a-deck-specification",level:3},{value:"Source Definition",id:"source-definition",level:2},{value:"type",id:"type",level:4},{value:"<code>Helm</code> Sources",id:"helm-sources",level:3},{value:"<code>ref</code>",id:"ref",level:4},{value:"<code>targetRevision</code>",id:"targetrevision",level:4},{value:"<code>path</code>",id:"path",level:4},{value:"<code>chart</code>",id:"chart",level:4},{value:"<code>releaseName</code>",id:"releasename",level:4},{value:"<code>parameters</code>",id:"parameters",level:4},{value:"<code>valueFiles</code>",id:"valuefiles",level:4},{value:"<code>helmArgs</code>",id:"helmargs",level:4},{value:"<code>helmPlugins</code>",id:"helmplugins",level:4},{value:"<code>File</code> Sources",id:"file-sources",level:3},{value:"<code>ref</code>",id:"ref-1",level:4},{value:"<code>content</code>",id:"content",level:4},{value:"<code>Kustomize</code> Sources",id:"kustomize-sources",level:3},{value:"<code>ref</code>",id:"ref-2",level:4},{value:"<code>targetRevision</code>",id:"targetrevision-1",level:4},{value:"<code>path</code>",id:"path-1",level:4},{value:"Deck Example",id:"deck-example",level:4},{value:"<code>Directory</code> Sources",id:"directory-sources",level:3},{value:"An Example Deckfile",id:"an-example-deckfile",level:2}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"intro"},"Intro"),(0,i.kt)("p",null,"A ",(0,i.kt)("em",{parentName:"p"},"Deckfile")," is a declarative file in YAML data-serialization language. It is used to"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create an ephemeral Kubernetes cluster or provision an existing cluster"),(0,i.kt)("li",{parentName:"ul"},"and to compose several Kubernetes workloads together to create a comprehensive deployment artifact that is close to production ")),(0,i.kt)("p",null,"It supports a range of different sources of workloads, such as ",(0,i.kt)("a",{parentName:"p",href:"https://helm.sh"},"Helm"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://kustomize.io/"},"Kustomize"),", plain YAML files or directories. Please find more about the concept\nof a ",(0,i.kt)("a",{parentName:"p",href:"/docs/overview/what-is-a-deck/"},"Deck for development here"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you are not familiar with classic Kubernetes configuration files, here is the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/manage-kubernetes-objects/declarative-config/"},"Declarative Management of Kubernetes Objects Using Configuration Files")," guide.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you are not familiar with Helm, head over to the ",(0,i.kt)("a",{parentName:"p",href:"https://helm.sh/docs/intro/quickstart/"},"Quickstart with Helm")," guide.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you are not familiar with Kustomize, check out the  ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/"},"Declarative Management of Kubernetes Objects Using Kustomize")," guide.")),(0,i.kt)("p",null,"The Deckfile defines ",(0,i.kt)("a",{parentName:"p",href:"#cluster-definition"},"a Kubernetes cluster configuration")," and a number ",(0,i.kt)("a",{parentName:"p",href:"#decks-specification"},"of named Decks"),"."),(0,i.kt)("h2",{id:"state-of-this-document"},"State of this Document"),(0,i.kt)("p",null,"This Deckfile specification is implemented by ",(0,i.kt)("a",{parentName:"p",href:"/docs/installation"},(0,i.kt)("inlineCode",{parentName:"a"},"deck")," ",(0,i.kt)("strong",{parentName:"a"},"0.9.3+")),". The distribution of this document is unlimited."),(0,i.kt)("h2",{id:"deckfile-location"},"Deckfile Location"),(0,i.kt)("p",null,"The default path for a Deckfile is ",(0,i.kt)("inlineCode",{parentName:"p"},"deck.yaml")," at any location. A Deckfile can be loaded from a variety of locations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"http/https")," locations, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"https://raw.githubusercontent.com/gefyrahq/gefyra-demos/main/deck.yaml")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"git")," locations, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"git@github.com:gefyrahq/gefyra-demos.git"),", or including a revision followed by a ",(0,i.kt)("inlineCode",{parentName:"li"},"#"),", e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"git@github.com:gefyrahq/gefyra-demos.git#1.0.0")),(0,i.kt)("li",{parentName:"ul"},"from the local file system, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"/my/path/deck.yaml")," or simply ",(0,i.kt)("inlineCode",{parentName:"li"},"."))),(0,i.kt)("p",null,"Please mind that accessing locations with ",(0,i.kt)("inlineCode",{parentName:"p"},"deck")," always happens with the identity of the local user, i.e. private ",(0,i.kt)("em",{parentName:"p"},"git")," repositories\nare reached with the locally available ",(0,i.kt)("em",{parentName:"p"},"git")," identities. The same is with ",(0,i.kt)("em",{parentName:"p"},"https")," and other protocols."),(0,i.kt)("h2",{id:"file-header"},"File Header"),(0,i.kt)("p",null,"A Deckfile always starts with a version number. Currently, version ",(0,i.kt)("strong",{parentName:"p"},"1")," or ",(0,i.kt)("strong",{parentName:"p"},"latest")," is supported as value."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '1'\n")),(0,i.kt)("h2",{id:"cluster-definition"},"Cluster Definition"),(0,i.kt)("p",null,"Specify ",(0,i.kt)("strong",{parentName:"p"},"one")," Kubernetes cluster for this Deckfile. All Decks will be installed in this cluster. It is\na one-to-one relation between a Deckfile and the specified temporary cluster.",(0,i.kt)("br",{parentName:"p"}),"\n","Deckfile ",(0,i.kt)("strong",{parentName:"p"},"must not")," have more than one cluster specification."),(0,i.kt)("h3",{id:"the-cluster-top-level-element"},"The ",(0,i.kt)("inlineCode",{parentName:"h3"},"cluster")," Top-level Element"),(0,i.kt)("p",null,"Describe the cluster provisioner or cluster connection. The term ",(0,i.kt)("em",{parentName:"p"},"provider")," relates to the supported Kubernetes cluster\nmanagement tool, which is used by Getdeck to provide a Kubernetes environment."),(0,i.kt)("h4",{id:"provider"},(0,i.kt)("inlineCode",{parentName:"h4"},"provider")),(0,i.kt)("p",null,"Valid string values for the ",(0,i.kt)("inlineCode",{parentName:"p"},"provider")," attribute are: ",(0,i.kt)("inlineCode",{parentName:"p"},"k3d"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"kind")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"beiboot"),".\nThe selected provider will organize the underlying infrastructure to create a cluster based on the supported provider. If\nthe provider ",(0,i.kt)("strong",{parentName:"p"},"is not installed")," on the system, ",(0,i.kt)("inlineCode",{parentName:"p"},"Deck")," will install it and create the cluster with the given specification."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Preview: A conventional named ",(0,i.kt)("inlineCode",{parentName:"p"},"kubectl")," context will be an option here in the future for remote development environments")),(0,i.kt)("h4",{id:"minversion"},(0,i.kt)("inlineCode",{parentName:"h4"},"minVersion")),(0,i.kt)("p",null,"Valid string values for the ",(0,i.kt)("inlineCode",{parentName:"p"},"minVersion")," attribute are: the supported versioning requirement for the provider specified\nin ",(0,i.kt)("inlineCode",{parentName:"p"},"provider"),".",(0,i.kt)("br",{parentName:"p"}),"\n","When running a Deckfile, ",(0,i.kt)("inlineCode",{parentName:"p"},"Deck")," will check for the provider to be available on the local system ",(0,i.kt)("strong",{parentName:"p"},"and")," in a version greater\nthan the one specified. If the version on the local system is lower than the one specified ",(0,i.kt)("inlineCode",{parentName:"p"},"Deck")," will upgrade the provider\nto the latest available version."),(0,i.kt)("h4",{id:"name"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")),(0,i.kt)("p",null,"Valid string values for the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," attribute are: an arbitrary name for the cluster.",(0,i.kt)("br",{parentName:"p"}),"\n","The ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," will be used as primary identifier for a cluster on a system. Changing it afterwards will render cluster created\npreviously unusable for ",(0,i.kt)("inlineCode",{parentName:"p"},"Deck"),"."),(0,i.kt)("h4",{id:"nativeconfig"},(0,i.kt)("inlineCode",{parentName:"h4"},"nativeConfig")),(0,i.kt)("p",null,"Valid object values for the ",(0,i.kt)("inlineCode",{parentName:"p"},"nativeConfig")," are: the YAML-format definition of clusters for the given ",(0,i.kt)("inlineCode",{parentName:"p"},"provider")," attribute.",(0,i.kt)("br",{parentName:"p"}),"\n","Please refer to the documentation of the Kubernetes providers to understand their structure:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Provider"),(0,i.kt)("th",{parentName:"tr",align:null},"Documentation"),(0,i.kt)("th",{parentName:"tr",align:null},"Remark"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"k3d")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://k3d.io/v5.3.0/usage/configfile/"},"https://k3d.io/v5.3.0/usage/configfile/")),(0,i.kt)("td",{parentName:"tr",align:null},"Please check the version according to your needs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"kind")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://kind.sigs.k8s.io/docs/user/configuration/"},"https://kind.sigs.k8s.io/docs/user/configuration/")),(0,i.kt)("td",{parentName:"tr",align:null},"Please check the version according to your needs")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"beiboot")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://getdeck.dev/beiboot/configuration/"},"https://getdeck.dev/beiboot/configuration/")),(0,i.kt)("td",{parentName:"tr",align:null},"Please check the version according to your needs")))),(0,i.kt)("h3",{id:"cluster-definition-example---k3d"},"Cluster Definition Example - k3d"),(0,i.kt)("p",null,"The following example shows the definition of a ",(0,i.kt)("inlineCode",{parentName:"p"},"k3d")," cluster creating a ",(0,i.kt)("em",{parentName:"p"},"Kubernetes 1.22")," cluster with the ",(0,i.kt)("em",{parentName:"p"},"http port"),"\nmapped to localhost port ",(0,i.kt)("em",{parentName:"p"},"8080"),". In addition, port ",(0,i.kt)("em",{parentName:"p"},"31820")," is mapped from a Kubernetes ",(0,i.kt)("inlineCode",{parentName:"p"},"NodePort")," service (data plane node)\nto localhost port ",(0,i.kt)("em",{parentName:"p"},"31820")," using the ",(0,i.kt)("em",{parentName:"p"},"UDP")," protocol."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"[...]\n# the cluster configuration across all Decks\ncluster:\n  provider: k3d\n  minVersion: 4.0.0\n  name: gefyra-demos\n  nativeConfig: # content of the native config file (e.g. https://k3d.io/v5.0.0/usage/configfile/)\n    apiVersion: k3d.io/v1alpha2\n    kind: Simple\n    servers: 1 # same as `--servers 1`\n    agents: 1 # same as `--agents 1`\n    image: rancher/k3s:v1.22.4-k3s1 # same as `--image rancher/k3s:v1.20.4-k3s1`\n    ports:\n      - port: 8080:80\n        nodeFilters:\n          - loadbalancer\n      - port: 31820:31820/UDP\n        nodeFilters:\n          - agent[0]\n[...]\n")),(0,i.kt)("h3",{id:"cluster-definition-example---kind"},"Cluster Definition Example - kind"),(0,i.kt)("p",null,"This example shows the definition of a ",(0,i.kt)("inlineCode",{parentName:"p"},"kind")," cluster creating a ",(0,i.kt)("em",{parentName:"p"},"Kubernetes")," cluster with the similar configurations as\nin the previous example.\nIt is important to note, that ",(0,i.kt)("inlineCode",{parentName:"p"},"kubeadmConfigPatches")," with ",(0,i.kt)("inlineCode",{parentName:"p"},'node-labels: "ingress-ready=true"')," is an essential for a\nworking ingress configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'[...]\n# the cluster configuration across all Decks\ncluster:\n  provider: kind\n  minVersion: 0.14.0\n  name: another-cluster\n  nativeConfig: # content of the native config file (e.g. https://kind.sigs.k8s.io/docs/user/configuration/)\n    apiVersion: kind.x-k8s.io/v1alpha4\n    kind: Cluster\n    nodes:\n      - role: control-plane\n        kubeadmConfigPatches:\n        - |\n          kind: InitConfiguration\n          nodeRegistration:\n            kubeletExtraArgs:\n              node-labels: "ingress-ready=true"\n        extraPortMappings:\n          - containerPort: 80\n            hostPort: 8080\n          - containerPort: 31820\n            hostPort: 31820\n            protocol: udp\n      - role: worker\n[...]\n')),(0,i.kt)("h2",{id:"decks-specification"},"Decks Specification"),(0,i.kt)("p",null,"Specify one or more Decks that can be provisioned with ",(0,i.kt)("inlineCode",{parentName:"p"},"deck"),". Users of ",(0,i.kt)("inlineCode",{parentName:"p"},"deck")," will be able to list Decks of a Deckfile\nand install (the ",(0,i.kt)("a",{parentName:"p",href:"/docs/cli-reference#deck-get"},(0,i.kt)("inlineCode",{parentName:"a"},"deck get")," operation"),") it accordingly."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"For more information about the concept of Deck, check out ",(0,i.kt)("a",{parentName:"p",href:"/docs/overview/what-is-a-deck/"},"What is a Deck?"))),(0,i.kt)("h3",{id:"the-decks-top-level-element"},"The ",(0,i.kt)("inlineCode",{parentName:"h3"},"decks")," Top-level Element"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"decks")," attribute contains a list of Deck definitions."),(0,i.kt)("h3",{id:"the-deck-definition"},"The ",(0,i.kt)("inlineCode",{parentName:"h3"},"deck")," Definition"),(0,i.kt)("p",null,"A Deck specification consists of meta-information about the Deck and the required sources to provision this Deck."),(0,i.kt)("h4",{id:"name-1"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")),(0,i.kt)("p",null,"Valid string values for the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," attribute are: an arbitrary name for the Deck.",(0,i.kt)("br",{parentName:"p"}),"\n","The name of the Deck must be unique for this Deckfile."),(0,i.kt)("h4",{id:"namespace"},(0,i.kt)("inlineCode",{parentName:"h4"},"namespace")),(0,i.kt)("p",null,"Valid string values for the ",(0,i.kt)("inlineCode",{parentName:"p"},"namespace")," attribute are: an arbitrary name for the Kubernetes namespace, which is\nalso a valid namespace identifier. For more information please check the Kubernetes\ndocumentation on ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/"},"namespaces"),"."),(0,i.kt)("h4",{id:"hosts"},(0,i.kt)("inlineCode",{parentName:"h4"},"hosts")),(0,i.kt)("p",null,"Valid list items for the ",(0,i.kt)("inlineCode",{parentName:"p"},"hosts")," attribute are: strings containing valid host names to resolve to ",(0,i.kt)("em",{parentName:"p"},"127.0.0.1"),".\nThese host names may be written to the local resolver configuration of the platform (for example ",(0,i.kt)("em",{parentName:"p"},"/etc/hosts"),")."),(0,i.kt)("h4",{id:"notes"},(0,i.kt)("inlineCode",{parentName:"h4"},"notes")),(0,i.kt)("p",null,"Valid string values for the ",(0,i.kt)("inlineCode",{parentName:"p"},"notes")," attribute are: an arbitrary text to describe this Deck.",(0,i.kt)("br",{parentName:"p"}),"\n","It is displayed at the end of the installation of this Deck and is useful to provide additional guidance for the\ndeveloper to get started."),(0,i.kt)("h4",{id:"sources"},(0,i.kt)("inlineCode",{parentName:"h4"},"sources")),(0,i.kt)("p",null,"Valid object values for the ",(0,i.kt)("inlineCode",{parentName:"p"},"sources")," attribute are: a list of valid ",(0,i.kt)("a",{parentName:"p",href:"#source-definition"},"source")," objects."),(0,i.kt)("h3",{id:"example-of-a-deck-specification"},"Example of a Deck Specification"),(0,i.kt)("p",null,"This example will install the Deck ",(0,i.kt)("inlineCode",{parentName:"p"},"k8s-dashboard")," coming with the ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/"},"official Kubernetes dashboard"),"\nto the namespace ",(0,i.kt)("inlineCode",{parentName:"p"},"mynamespace")," (which is created if it does not exist). The ",(0,i.kt)("em",{parentName:"p"},"Helm charts")," are rendered locally and installed\nin the cluster. In addition, with a plain YAML file granting the required cluster privileges, the dashboard will be able to\naccess all Kubernetes resources. Finally, the dashboard will be available under ",(0,i.kt)("inlineCode",{parentName:"p"},"dashboard.127.0.0.1.nip.io")," on the published\nport on the local system."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"[...]\ndecks:\n  - name: k8s-dashboard\n    namespace: mynamespace\n    sources:\n      - type: helm\n        ref: https://kubernetes.github.io/dashboard/\n        chart: kubernetes-dashboard\n        releaseName: dashboard\n        parameters:\n          - name: ingress.enabled\n            value: true\n          - name: ingress.hosts\n            value: '{dashboard.127.0.0.1.nip.io}'\n          - name: protocolHttp\n            value: true\n          - name: service.externalPort\n            value: 61348\n          - name: serviceAccount.create\n            value: true\n          - name: serviceAccount.name\n            value: kubernetes-dashboard\n\n      - type: file\n        content:\n          apiVersion: rbac.authorization.k8s.io/v1\n          kind: ClusterRoleBinding\n          metadata:\n            name: kubernetes-dashboard\n            namespace: kubernetes-dashboard\n          roleRef:\n            apiGroup: rbac.authorization.k8s.io\n            kind: ClusterRole\n            name: cluster-admin\n          subjects:\n            - kind: ServiceAccount\n              name: kubernetes-dashboard\n              namespace: mynamespace\n[...]\n")),(0,i.kt)("h2",{id:"source-definition"},"Source Definition"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"source")," specifies the origin of Kubernetes workloads for different kinds. Depending on how the workloads are provided\na Deck can consist of one to an almost unlimited number of sources and mixed types. "),(0,i.kt)("h4",{id:"type"},"type"),(0,i.kt)("p",null,"Valid string values for the ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," attribute are: ",(0,i.kt)("inlineCode",{parentName:"p"},"helm"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"file"),"."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Preview: in upcoming releases of Getdeck, the Deckfile will support sources of type ",(0,i.kt)("inlineCode",{parentName:"p"},"kustomize")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"directory")," too.")),(0,i.kt)("p",null,"Depending on the ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," attribute, ",(0,i.kt)("inlineCode",{parentName:"p"},"Deck")," will choose a different mechanism to prepare the workload for the Kubernetes\ncluster."),(0,i.kt)("h3",{id:"helm-sources"},(0,i.kt)("inlineCode",{parentName:"h3"},"Helm")," Sources"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"Helm chart")," can be installed using the source of ",(0,i.kt)("inlineCode",{parentName:"p"},"type: helm"),". The following attributes are available to specify the\nHelm repository and additional parameters."),(0,i.kt)("h4",{id:"ref"},(0,i.kt)("inlineCode",{parentName:"h4"},"ref")),(0,i.kt)("p",null,"Valid string values for the ",(0,i.kt)("inlineCode",{parentName:"p"},"ref")," attribute are: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"http-locations (using the Helm repository protocol), for example ",(0,i.kt)("inlineCode",{parentName:"li"},"https://charts.bitnami.com/bitnami")),(0,i.kt)("li",{parentName:"ul"},"git-locations, for example ",(0,i.kt)("inlineCode",{parentName:"li"},"git@github.com:Blueshoe/buzzword-charts.git")),(0,i.kt)("li",{parentName:"ul"},"a chart on the local file system, for example ",(0,i.kt)("inlineCode",{parentName:"li"},"./my-chart/"))),(0,i.kt)("h4",{id:"targetrevision"},(0,i.kt)("inlineCode",{parentName:"h4"},"targetRevision")),(0,i.kt)("p",null,"Valid string values for the ",(0,i.kt)("inlineCode",{parentName:"p"},"targetRevision")," attribute are: revisions available at the ",(0,i.kt)("inlineCode",{parentName:"p"},"git")," location from\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"ref")," attribute.",(0,i.kt)("br",{parentName:"p"}),"\n","From a git location, ",(0,i.kt)("inlineCode",{parentName:"p"},"Deck")," will check out this revision name (i.e. a tag, branch name, commit) before processing the source."),(0,i.kt)("h4",{id:"path"},(0,i.kt)("inlineCode",{parentName:"h4"},"path")),(0,i.kt)("p",null,"Valid string values for the ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," attribute are: a relative path in the location from ",(0,i.kt)("inlineCode",{parentName:"p"},"ref"),". "),(0,i.kt)("h4",{id:"chart"},(0,i.kt)("inlineCode",{parentName:"h4"},"chart")),(0,i.kt)("p",null,"Valid string values for the ",(0,i.kt)("inlineCode",{parentName:"p"},"chart")," attribute are: the name of the Helm chart at the location of ",(0,i.kt)("inlineCode",{parentName:"p"},"ref"),"."),(0,i.kt)("h4",{id:"releasename"},(0,i.kt)("inlineCode",{parentName:"h4"},"releaseName")),(0,i.kt)("p",null,"Valid string values for the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," attribute are: an arbitrary name for the Helm release.",(0,i.kt)("br",{parentName:"p"}),"\n","The ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," is mandatory for ",(0,i.kt)("a",{parentName:"p",href:"https://helm.sh/docs/helm/helm_install/"},"Helm install"),"."),(0,i.kt)("h4",{id:"parameters"},(0,i.kt)("inlineCode",{parentName:"h4"},"parameters")),(0,i.kt)("p",null,"Valid object values for the ",(0,i.kt)("inlineCode",{parentName:"p"},"parameters")," attribute are: a list of ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"value")," mappings.  "),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- name: ingress.hosts\nvalue: '{dashboard.127.0.0.1.nip.io}'\n- name: protocolHttp\nvalue: true\n- name: service.externalPort\nvalue: 61348\n- name: serviceAccount.create\nvalue: true\n")),(0,i.kt)("p",null,"These parameters are passed as ",(0,i.kt)("inlineCode",{parentName:"p"},"--set")," argument to the Helm process and take precedence over values from files. "),(0,i.kt)("h4",{id:"valuefiles"},(0,i.kt)("inlineCode",{parentName:"h4"},"valueFiles")),(0,i.kt)("p",null,"Valid object values for the ",(0,i.kt)("inlineCode",{parentName:"p"},"valueFiles")," attribute are: a list of file locations (relative to the ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," attribute) containing\nvalid Helm values for this chart.  "),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- helm_vars/values.staging.yaml\n- helm_vars/shared.values.yaml\n")),(0,i.kt)("p",null,"This defaults to ",(0,i.kt)("em",{parentName:"p"},"values.yaml")," since this is a Helm charts convention."),(0,i.kt)("h4",{id:"helmargs"},(0,i.kt)("inlineCode",{parentName:"h4"},"helmArgs")),(0,i.kt)("p",null,"Valid list values for the ",(0,i.kt)("inlineCode",{parentName:"p"},"valueFiles")," attribute are: a list of additional (string) arguments added to the Helm process when\ngenerating the charts.",(0,i.kt)("br",{parentName:"p"}),"\n","These Helm arguments are passed by default:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--kube-version"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"--api-versions"),": based on the target cluster Kubernetes version"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--include-crds"),": create Kubernetes ",(0,i.kt)("a",{parentName:"li",href:"https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/"},"custom resource definitions")," coming with this chart"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"--namespace"),": the target namespace for this Deck to be installed to")),(0,i.kt)("h4",{id:"helmplugins"},(0,i.kt)("inlineCode",{parentName:"h4"},"helmPlugins")),(0,i.kt)("p",null,"Valid list values for the ",(0,i.kt)("inlineCode",{parentName:"p"},"helmPlugins")," attribute are: a list of additional Helm plugins.",(0,i.kt)("br",{parentName:"p"}),"\n","The following plugins are available at the moment:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/nico-ulbricht/helm-multivalues"},"https://github.com/nico-ulbricht/helm-multivalues")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/jkroepke/helm-secrets"},"https://github.com/jkroepke/helm-secrets")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/databus23/helm-diff"},"https://github.com/databus23/helm-diff")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/quintush/helm-unittest"},"https://github.com/quintush/helm-unittest")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/chartmuseum/helm-push"},"https://github.com/chartmuseum/helm-push"))),(0,i.kt)("h3",{id:"file-sources"},(0,i.kt)("inlineCode",{parentName:"h3"},"File")," Sources"),(0,i.kt)("p",null,"The file source installs a single YAML document to the cluster using ",(0,i.kt)("inlineCode",{parentName:"p"},"type: file"),"."),(0,i.kt)("h4",{id:"ref-1"},(0,i.kt)("inlineCode",{parentName:"h4"},"ref")),(0,i.kt)("p",null,"Valid string values for the ",(0,i.kt)("inlineCode",{parentName:"p"},"ref")," attribute are: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"http-locations"),(0,i.kt)("li",{parentName:"ul"},"git-locations"),(0,i.kt)("li",{parentName:"ul"},"a file on the local file system  ")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ref")," is mutually exclusive with the ",(0,i.kt)("inlineCode",{parentName:"p"},"content")," attribute."),(0,i.kt)("h4",{id:"content"},(0,i.kt)("inlineCode",{parentName:"h4"},"content")),(0,i.kt)("p",null,"Valid object values for the ",(0,i.kt)("inlineCode",{parentName:"p"},"content")," attribute are: valid Kubernetes workload manifests in YAML notation.  "),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"content:\n  apiVersion: rbac.authorization.k8s.io/v1\n  kind: ClusterRoleBinding\n  metadata:\n    name: kubernetes-dashboard\n    namespace: kubernetes-dashboard\n  roleRef:\n    apiGroup: rbac.authorization.k8s.io\n    kind: ClusterRole\n    name: cluster-admin\n  subjects:\n    - kind: ServiceAccount\n      name: kubernetes-dashboard\n      namespace: mynamespace\n")),(0,i.kt)("p",null,"For smaller Kubernetes objects, the ",(0,i.kt)("inlineCode",{parentName:"p"},"content")," attribute can be used to install these for a Deck."),(0,i.kt)("h3",{id:"kustomize-sources"},(0,i.kt)("inlineCode",{parentName:"h3"},"Kustomize")," Sources"),(0,i.kt)("p",null,"Workloads specified by a ",(0,i.kt)("inlineCode",{parentName:"p"},"kustomization.yaml")," can be installed using the source of ",(0,i.kt)("inlineCode",{parentName:"p"},"type: kustomize"),". The following attributes are available to specify the remote location."),(0,i.kt)("h4",{id:"ref-2"},(0,i.kt)("inlineCode",{parentName:"h4"},"ref")),(0,i.kt)("p",null,"Valid string values for the ",(0,i.kt)("inlineCode",{parentName:"p"},"ref")," attribute are: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"http-locations (as used by ",(0,i.kt)("inlineCode",{parentName:"li"},"kubectl kustomize"),"), for example ",(0,i.kt)("inlineCode",{parentName:"li"},"https://github.com/zalando/postgres-operator/manifests"),". "),(0,i.kt)("li",{parentName:"ul"},"git-locations, for example ",(0,i.kt)("inlineCode",{parentName:"li"},"git@github.com:Blueshoe/java-spring-example-charts.git")," ")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"git")," locations in the ",(0,i.kt)("inlineCode",{parentName:"p"},"ref")," attribute do not support a path suffix, use the ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," attribute instead")),(0,i.kt)("h4",{id:"targetrevision-1"},(0,i.kt)("inlineCode",{parentName:"h4"},"targetRevision")),(0,i.kt)("p",null,"Valid string values for the ",(0,i.kt)("inlineCode",{parentName:"p"},"targetRevision")," attribute are: revisions available at the ",(0,i.kt)("inlineCode",{parentName:"p"},"git")," location from\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"ref")," attribute.",(0,i.kt)("br",{parentName:"p"}),"\n","From a git location, ",(0,i.kt)("inlineCode",{parentName:"p"},"Deck")," will check out this revision name (i.e. a tag, branch name, commit) before processing the source.\nThis value is optional. The default branch of the repository will be checked out, if left empty."),(0,i.kt)("h4",{id:"path-1"},(0,i.kt)("inlineCode",{parentName:"h4"},"path")),(0,i.kt)("p",null,"Valid string values for the ",(0,i.kt)("inlineCode",{parentName:"p"},"path")," attribute are: a relative path in the location from ",(0,i.kt)("inlineCode",{parentName:"p"},"ref"),". In the above example, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"polls_k/overlays/development")),(0,i.kt)("h4",{id:"deck-example"},"Deck Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"# ...\ndecks:\n  - name: polls\n    namespace: polls\n    sources:\n    - type: kustomize\n      ref: git@github.com:Blueshoe/java-spring-example-charts.git\n      targetRevision: main  # optional, default branch is checked out otherwise\n      path: polls_k/overlays/development\n")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"#an-example-deckfile"},"Deckfile example")," for the full structure of a ",(0,i.kt)("inlineCode",{parentName:"p"},"deck.yaml")," file."),(0,i.kt)("h3",{id:"directory-sources"},(0,i.kt)("inlineCode",{parentName:"h3"},"Directory")," Sources"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Preview: Directory support will be available soon")),(0,i.kt)("h2",{id:"an-example-deckfile"},"An Example Deckfile"),(0,i.kt)("p",null,"This is a complete Deckfile containing a ",(0,i.kt)("a",{parentName:"p",href:"https://www.keycloak.org/"},"Keycloak"),", a complete ",(0,i.kt)("em",{parentName:"p"},"OpenID Connect")," login flow\nwith a Python application running with a Kubernetes sidecar pattern."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "1"\n\n# the cluster configuration across all Decks\ncluster:\n  provider: k3d\n  minVersion: 4.0.0\n  name: gefyra-demos\n  nativeConfig: # content of the native config file (e.g. https://k3d.io/v5.0.0/usage/configfile/)\n    apiVersion: k3d.io/v1alpha2\n    kind: Simple\n    servers: 1 # same as `--servers 1`\n    agents: 1 # same as `--agents 2`\n    image: rancher/k3s:v1.20.4-k3s1 # same as `--image rancher/k3s:v1.20.4-k3s1`\n    ports:\n      - port: 8080:80\n        nodeFilters:\n          - loadbalancer\n      - port: 31820:31820/UDP\n        nodeFilters:\n          - agent[0]\n\ndecks:\n  - name: oauth2-demo\n    namespace: oauth2-demo\n    sources:\n      - type: helm\n        ref: https://codecentric.github.io/helm-charts\n        chart: keycloak\n        releaseName: keycloak\n        parameters:\n          - name: ingress.enabled\n            value: true\n          - name: ingress.rules[0].host\n            value: keycloak.127.0.0.1.nip.io\n          - name: ingress.rules[0].paths[0].path\n            value: "/"\n          - name: ingress.rules[0].paths[0].pathType\n            value: Prefix\n          - name: ingress.console.enabled\n            value: true\n          - name: ingress.console.rules[0].host\n            value: keycloak.127.0.0.1.nip.io\n          - name: ingress.console.rules[0].paths[0].path\n            value: "/auth/admin"\n          - name: ingress.console.rules[0].paths[0].pathType\n            value: Prefix\n      - type: file\n        ref: https://raw.githubusercontent.com/gefyrahq/gefyra-demos/main/oauth2-demo/initialize-kc.yaml\n\n      - type: file\n        ref: https://raw.githubusercontent.com/gefyrahq/gefyra-demos/main/oauth2-demo/oauth2-demo.yaml\n\n      # Everything below: Kubernetes Dashboard\n      - type: helm\n        ref: https://kubernetes.github.io/dashboard/\n        chart: kubernetes-dashboard\n        releaseName: dashboard\n        parameters:\n          - name: ingress.enabled\n            value: true\n          - name: ingress.hosts\n            value: \'{dashboard.127.0.0.1.nip.io}\'\n          - name: protocolHttp\n            value: true\n          - name: service.externalPort\n            value: 61348\n          - name: serviceAccount.create\n            value: true\n          - name: serviceAccount.name\n            value: kubernetes-dashboard\n\n      - type: file\n        content:\n          apiVersion: rbac.authorization.k8s.io/v1\n          kind: ClusterRoleBinding\n          metadata:\n            name: kubernetes-dashboard\n            namespace: kubernetes-dashboard\n          roleRef:\n            apiGroup: rbac.authorization.k8s.io\n            kind: ClusterRole\n            name: cluster-admin\n          subjects:\n            - kind: ServiceAccount\n              name: kubernetes-dashboard\n              namespace: oauth2-demo\n')))}d.isMDXComponent=!0}}]);