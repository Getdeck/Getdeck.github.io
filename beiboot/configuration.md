---
title: Configuration
sidebar_position: 4
description: How to configure Beiboot clusters
---
## Cluster Request for Deckfile

### Usage
This section is about specifying a Beiboot cluster from a client using the [Deckfile specification](/docs/deckfile-specs/).
The available parameters are currently very limited. They are placed below the [`nativeConfig`](/docs/deckfile-specs/#nativeconfig)
key in a Deckfile.

**Important:** this API and configuration definition is not yet stable and may change at any time.

#### `context`
Valid string values for the `context` attribute are: the name of a 
_kubeconfig_ [cluster context](https://kubernetes.io/docs/tasks/access-application-cluster/configure-access-multiple-clusters/#define-clusters-users-and-contexts).
This is the _kubeconfig_ context which is either active in your current shell (by setting `export KUBECONFIG=<path>/<file>.yaml`)
or part of your default _kubeconfig_ in `~/.kube/config`.

The `deck` CLI will look for that context and activate it for all operations. It will return an error if the specified 
context can not be found.

#### `timeouts`
You can specify the timeouts for the creation of the cluster and the Kubernetes API connection.
Both values come with reasonable defaults:
```yaml
timeouts:
  api: 30  # in seconds, defaults to 30
  cluster: 180  # in seconds, defaults to 180
```

#### `ports`
Valid list values for the `ports` attribute are: a `port`-object defining a port-mapping.
The `port: <local port>:<cluster node port>` definition allows to specify a port-mapping from a local port to a
remote port in the cluster. This is useful to make services running in the cluster available on localhost.

#### Example `cluster` Configuration in a Deckfile

```yaml
[...]

cluster:
  provider: beiboot
  name: cluster-1
  nativeConfig:
    context: <context-to-host-cluster-running-beiboot>
    timeouts:
     api: 30  # in seconds, defaults to 30
     cluster: 180  # in seconds, defaults to 180
    ports:
      - port: 61346:80
  
[...]
```

## Beiboot Cluster Configuration
### Editing the Cluster Configuration
The Beiboot operator creates a _ConfigMap_ in its namespace called `beiboot-congfig`. This _configmap_ contains
all available configuration parameters to run logical Kubernetes clusters. You can edit the configuration with:

```bash
kubectl -n getdeck edit cm beiboot-config
```

The operator reads in this _configmap_ upon each cluster creation. Changes to the _configmap_ are immediately 
effective for new clusters.

### Default Configuration Values

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: beiboot-config
  namespace: getdeck
data:
data:
  clusterReadyTimeout: "180"
  gefyra: '{"enabled": true, "endpoint": null}'
  k8sVersion: "null"
  maxLifetime: "null"
  maxSessionTimeout: "null"
  namespacePrefix: getdeck-bbt
  nodeLabels: '{"app": "beiboot", "beiboot.dev/is-node": "true"}'
  nodeResources: '{"requests": {"cpu": "1", "memory": "1Gi"}, "limits": {}}'
  nodeStorageRequests: 1Gi
  nodes: "1"
  ports: "null"
  serverLabels: '{"app": "beiboot", "beiboot.dev/is-node": "true", "beiboot.dev/is-server":
    "true"}'
  serverResources: '{"requests": {"cpu": "1", "memory": "1Gi"}, "limits": {}}'
  serverStartupTimeout: "60"
  serverStorageRequests: 1Gi
  shelfStorageClass: standard-rwo
  storageClass: standard-rwo
  tunnel: '{"enabled": true, "endpoint": null}'

```