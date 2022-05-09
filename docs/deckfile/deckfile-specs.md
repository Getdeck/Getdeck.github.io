---
sidebar_position: 1
slug: /deckfile/specs
---
# Deckfile specification
## Intro
A _Deckfile_ is a declarative file in YAML data-serialization language. It is used to
* create an ephemeral Kubernetes cluster or provision an existing cluster
* and to compose several Kubernetes workloads together to create a comprehensive deployment artifact which is close to production 

It supports a range of different sources of workloads, such as [Helm](https://helm.sh), 
[Kustomize](https://kustomize.io/), plain YAML files or directories. Please find more about the concept 
of a [Deck for development here](/docs/deck).

> If you are not familiar with classic Kubernetes configuration files, here is the [Declarative Management of Kubernetes Objects Using Configuration Files](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/declarative-config/) guide.

> If you are not familiar with Helm, head over to the [Quickstart with Helm](https://helm.sh/docs/intro/quickstart/) guide.

> If you are not familiar with Kustomize, check out the  [Declarative Management of Kubernetes Objects Using Kustomize](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/) guide.

The Deckfile defines [a Kubernetes cluster configuration](#cluster-specification) and a number [of named decks](#decks-specification).

## State of this document
This Deckfile specification is implemented by [`deck` **0.6.0+**](/docs/deck/installation). The distribution of this document is unlimited.

## Deckfile location
The default path for a Deckfile is `deck.yaml` at any location. A Deckfile can be loaded from a variety of locations:
* _http/https_ locations, e.g. `https://raw.githubusercontent.com/gefyrahq/gefyra-demos/main/deck.yaml`
* _git_ locations, e.g. `git@github.com:gefyrahq/gefyra-demos.git`
* from the local file system, e.g. `/my/path/deck.yaml` or simply `.`

Please mind that accessing locations with `deck` always happens with the identity of the local user, i.e. private _git_ repositories
are reached with the locally available _git_ identities. Same is with _https_ and other protocols.

## File header
A Deckfile always starts with a version number. Currently, version **1** or **latest** is supported as value.
```yaml
version: '1'
```

## Cluster definition
Specify **one** (currently local) Kubernetes cluster for this Deckfile. All decks will be installed to this cluster. It is
a one-to-one relation between a Deckfile and the specified temporary cluster.  
Deckfile **must not** have more than one cluster specification.

### The `cluster` top-level element
Describe the cluster provisioner or cluster connection. The term _provider_ relates to the supported Kubernetes cluster
management tool which is used by Getdeck in order to provide a Kubernetes environment.

#### `provider`
Valid string values for the `provider` attribute are: `k3d`  
The selected provider will organize the underlying infrastructure to create a cluster based on the supported provider. If
the provider **is not installed** on the system, `deck` will install it and create the cluster with the given specification.

> Preview: A conventional named `kubectl` context will be an option here in the future for remote development environments

#### `minVersion`
Valid string values for the `minVersion` attribute are: the supported versioning requirement for the provider specified
in `provider`.  
When running a Deckfile, `deck` will check for the provider to be available on the local system **and** in a version greater
than the one specified. If the version on the local system is lower than the one specified `deck` will upgrade the provider
to the latest available version.

#### `name`
Valid string values for the `name` attribute are: an arbitrary name for the cluster.  
The `name` will be used as primary identifier for a cluster on a system. Changing it afterwards will render cluster created 
previously unusable for `deck`.

#### `nativeConfig`
Valid object values for the `nativeConfig` are: the YAML-format definition of clusters for the given `provider` attribute.  
Please refer to the documentation of the Kubernetes providers to understand their structure:

| Provider | Documentation | Remark                                       |  
|----------|-----------|----------------------------------------------|  
| `k3d`    | https://k3d.io/v5.3.0/usage/configfile/ | Please check version according to your needs |  
| `kind`   | https://kind.sigs.k8s.io/docs/user/configuration/ | Please check version according to your needs |  

> Preview: `kind` will become available in one of the upcoming releases of Getdeck


### Cluster definition example
The following example shows the definition of a `k3d` cluster creatinf a _Kubernetes 1.22_ cluster with the _http port_
mapped to localhost port _8080_. In addition, port _31820_ is mapped from a Kubernetes `NodePort` service (data plane node) 
to localhost port _31820_ using the _UDP_ protocol.

```yaml
[...]
# the cluster configuration across all decks
cluster:
  provider: k3d
  minVersion: 4.0.0
  name: gefyra-demos
  nativeConfig: # content of the native config file (e.g. https://k3d.io/v5.0.0/usage/configfile/)
    apiVersion: k3d.io/v1alpha2
    kind: Simple
    servers: 1 # same as `--servers 1`
    agents: 1 # same as `--agents 2`
    image: rancher/k3s:v1.22.4-k3s1 # same as `--image rancher/k3s:v1.20.4-k3s1`
    ports:
      - port: 8080:80
        nodeFilters:
          - loadbalancer
      - port: 31820:31820/UDP
        nodeFilters:
          - agent[0]
[...]
```


## Deck specification
Specify one or more decks which can be provisioned with `deck`. Users of `deck` will be able to list decks of a Deckfile
and install (the [`deck get` operation](/docs/deck/for-devs/cli-reference#deck-get)) it accordingly.

> For more information about the concept of Deck, check out [What is a Deck?](/docs/deck)

### The `decks` top-level element
The `decks` attribute contains a list of deck definitions.

> Preview: a `hosts` attribute may contain the required local domains (for example `my-domain.example`) which are 
> managed (added and removed) in the _hosts_ of the local system resolver, i.e. (`/etc/hosts` on Linux hosts).

### The `deck` definition
A deck specification consists of meta information about the deck and the required sources to provision this deck.

#### `name`
Valid string values for the `name` attribute are: an arbitrary name for the deck.  
The name of the deck must be unique for this Deckfile.

#### `namespace`
Valid string values for the `namespace` attribute are: an arbitrary name for the Kubernetes namespace which is
also a valid namespace identifier. For more information please check the Kubernetes 
documentation on [namespaces](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/).

#### `notes`
Valid string values for the `notes` attribute are: an arbitrary text to describe this deck.  
It is displayed at the end of the installation of this deck and is useful to provide additional guidance for the
developer to get started.

#### `sources`
Valid object values for the `sources` attribute are: a list of valid [source](#source-definition) objects.


### Example of a deck specification
This example will install the deck `k8s-dashboard` coming with the [official Kubernetes dashboard](https://kubernetes.io/docs/tasks/access-application-cluster/web-ui-dashboard/)
to the namespace `mynamespace` (which is created if it does not exist). The _Helm charts_ are rendered locally and installed
to the cluster. In addition, with a plain YAML file granting the required cluster privileges, the dashboard will be able to 
access all Kubernetes resources. Finally, the dashboard will be available under `dashboard.127.0.0.1.nip.io` on the published
port on the local system.
```yaml
[...]
decks:
  - name: k8s-dashboard
    namespace: mynamespace
    sources:
      - type: helm
        ref: https://kubernetes.github.io/dashboard/
        chart: kubernetes-dashboard
        releaseName: dashboard
        parameters:
          - name: ingress.enabled
            value: true
          - name: ingress.hosts
            value: '{dashboard.127.0.0.1.nip.io}'
          - name: protocolHttp
            value: true
          - name: service.externalPort
            value: 61348
          - name: serviceAccount.create
            value: true
          - name: serviceAccount.name
            value: kubernetes-dashboard

      - type: file
        content:
          apiVersion: rbac.authorization.k8s.io/v1
          kind: ClusterRoleBinding
          metadata:
            name: kubernetes-dashboard
            namespace: kubernetes-dashboard
          roleRef:
            apiGroup: rbac.authorization.k8s.io
            kind: ClusterRole
            name: cluster-admin
          subjects:
            - kind: ServiceAccount
              name: kubernetes-dashboard
              namespace: mynamespace
[...]
```

## Source definition
A `source` specifies the origin of Kubernetes workloads for different kinds. Depending on how the workloads are provided
a deck can consist of one to an almost unlimited number of sources and mixed types. 

#### type
Valid string values for the `type` attribute are: `helm`, `file`

> Preview: in upcoming releases of Getdeck, the Deckfile will support sources of type `kustomize` and `directory`, too.

Depending on the `type` attribute, `deck` will choose a different mechanism to prepare the workload for the Kubernetes
cluster.

### `Helm` sources
A `Helm chart` can be installed using the source of `type: helm`. The following attributes are available to specify the
Helm repository and additional parameters.

#### `ref`
Valid string values for the `ref` attribute are: 
* http-locations (using the Helm repository protocol), for example `https://charts.bitnami.com/bitnami`
* git-locations, for example `git@github.com:Blueshoe/buzzword-charts.git`
* a chart on the local file system, for example `./my-chart/`

#### `targetRevision`
Valid string values for the `targetRevision` attribute are: revisions available at the `git` location from 
the `ref` attribute.   
From a git location, `deck` will check out this revision name (i.e. a tag, branch name, commit) before processing the source.

#### `path`
Valid string values for the `path` attribute are: a relative path in the location from `ref`. 

#### `chart`
Valid string values for the `chart` attribute are: the name of the Helm chart at the location of `ref`.

#### `releaseName`
Valid string values for the `name` attribute are: an arbitrary name for the Helm release.    
The `name` is mandatory for [Helm install](https://helm.sh/docs/helm/helm_install/).

#### `parameters`
Valid object values for the `parameters` attribute are: a list of `name` and `value` mappings.  

Example:
```yaml
- name: ingress.hosts
value: '{dashboard.127.0.0.1.nip.io}'
- name: protocolHttp
value: true
- name: service.externalPort
value: 61348
- name: serviceAccount.create
value: true
```

These parameters are passed as `--set` argument to the Helm process and take precedence over values from files. 


#### `valueFiles`
Valid object values for the `valueFiles` attribute are: a list of file locations (relative to the `path` attribute) containing
valid Helm values for this chart.  

Example:
```yaml
- helm_vars/values.staging.yaml
- helm_vars/shared.values.yaml
```

This defaults to _values.yaml_ since this is a Helm charts convention.

#### `helmArgs`
Valid list values for the `valueFiles` attribute are: a list of additional (string) arguments added to the Helm process when
generating the charts.   
These Helm arguments are passed by default:
* `--kube-version`, `--api-versions`: based on the target cluster Kubernetes version
* `--include-crds`: create Kubernetes [custom resource definitions](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/) coming with this chart
* `--namespace`: the target namespace for this deck to be installed to

#### `helmPlugins`
Valid list values for the `helmPlugins` attribute are: a list of additional Helm plugins.  
The following plugins are available at the moment:
* https://github.com/nico-ulbricht/helm-multivalues
* https://github.com/jkroepke/helm-secrets
* https://github.com/databus23/helm-diff
* https://github.com/quintush/helm-unittest
* https://github.com/chartmuseum/helm-push

### `File` sources
The file source installs a single YAML document to the cluster using `type: file`.

#### `ref`
Valid string values for the `ref` attribute are: 
* http-locations
* git-locations
* a file on the local file system  

The `ref` is mutually exclusive with the `content` attribute.

#### `content`
Valid object values for the `content` attribute are: valid Kubernetes workload manifests in YAML notation.  

Example:
```yaml
content:
  apiVersion: rbac.authorization.k8s.io/v1
  kind: ClusterRoleBinding
  metadata:
    name: kubernetes-dashboard
    namespace: kubernetes-dashboard
  roleRef:
    apiGroup: rbac.authorization.k8s.io
    kind: ClusterRole
    name: cluster-admin
  subjects:
    - kind: ServiceAccount
      name: kubernetes-dashboard
      namespace: mynamespace
```

For smaller Kubernetes objects, the `content` attribute can be used to install these for a deck.



### `Kustomize` sources
Workloads specified by a `kustomization.yaml` can be installed using the source of `type: kustomize`. The following attributes are available to specify the remote location.

#### `ref`
Valid string values for the `ref` attribute are: 
* http-locations (as used by `kubectl kustomize`), for example `github.com/zalando/postgres-operator/manifests`. 
* git-locations, for example `git@github.com:Blueshoe/java-spring-example-charts.git` (no path!)

#### `targetRevision`
Valid string values for the `targetRevision` attribute are: revisions available at the `git` location from 
the `ref` attribute.   
From a git location, `deck` will check out this revision name (i.e. a tag, branch name, commit) before processing the source.
This value is optional. The default branch of the repository will be checked out, if left empty.

#### `path`
Valid string values for the `path` attribute are: a relative path in the location from `ref`. In the above example, e.g. `polls_k/overlays/development`

#### Deck example
```yaml
# ...
decks:
  - name: polls
    namespace: polls
    sources:
    - type: kustomize
      ref: git@github.com:Blueshoe/java-spring-example-charts.git
      targetRevision: main  # optional, default branch is checked out otherwise
      path: polls_k/overlays/development
```
See [deckfile example](#an-example-deckfile) for the full structure of a `deck.yaml` file.

### `Directory` sources
> Preview: Directory support will be available soon


## An example Deckfile
This is a complete Deckfile containing a [Keycloak](https://www.keycloak.org/), a complete _OpenID Connect_ login flow 
with a Python application running with a Kubernetes sidecar pattern.
```yaml
version: "1"

# the cluster configuration across all decks
cluster:
  provider: k3d
  minVersion: 4.0.0
  name: gefyra-demos
  nativeConfig: # content of the native config file (e.g. https://k3d.io/v5.0.0/usage/configfile/)
    apiVersion: k3d.io/v1alpha2
    kind: Simple
    servers: 1 # same as `--servers 1`
    agents: 1 # same as `--agents 2`
    image: rancher/k3s:v1.20.4-k3s1 # same as `--image rancher/k3s:v1.20.4-k3s1`
    ports:
      - port: 8080:80
        nodeFilters:
          - loadbalancer
      - port: 31820:31820/UDP
        nodeFilters:
          - agent[0]

decks:
  - name: oauth2-demo
    namespace: oauth2-demo
    sources:
      - type: helm
        ref: https://codecentric.github.io/helm-charts
        chart: keycloak
        releaseName: keycloak
        parameters:
          - name: ingress.enabled
            value: true
          - name: ingress.rules[0].host
            value: keycloak.127.0.0.1.nip.io
          - name: ingress.rules[0].paths[0].path
            value: "/"
          - name: ingress.rules[0].paths[0].pathType
            value: Prefix
          - name: ingress.console.enabled
            value: true
          - name: ingress.console.rules[0].host
            value: keycloak.127.0.0.1.nip.io
          - name: ingress.console.rules[0].paths[0].path
            value: "/auth/admin"
          - name: ingress.console.rules[0].paths[0].pathType
            value: Prefix
      - type: file
        ref: https://raw.githubusercontent.com/gefyrahq/gefyra-demos/main/oauth2-demo/initialize-kc.yaml

      - type: file
        ref: https://raw.githubusercontent.com/gefyrahq/gefyra-demos/main/oauth2-demo/oauth2-demo.yaml

      # Everything below: Kubernetes Dashboard
      - type: helm
        ref: https://kubernetes.github.io/dashboard/
        chart: kubernetes-dashboard
        releaseName: dashboard
        parameters:
          - name: ingress.enabled
            value: true
          - name: ingress.hosts
            value: '{dashboard.127.0.0.1.nip.io}'
          - name: protocolHttp
            value: true
          - name: service.externalPort
            value: 61348
          - name: serviceAccount.create
            value: true
          - name: serviceAccount.name
            value: kubernetes-dashboard

      - type: file
        content:
          apiVersion: rbac.authorization.k8s.io/v1
          kind: ClusterRoleBinding
          metadata:
            name: kubernetes-dashboard
            namespace: kubernetes-dashboard
          roleRef:
            apiGroup: rbac.authorization.k8s.io
            kind: ClusterRole
            name: cluster-admin
          subjects:
            - kind: ServiceAccount
              name: kubernetes-dashboard
              namespace: oauth2-demo
```
