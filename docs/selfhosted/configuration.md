---
title: Configuration
sidebar_position: 4
description: How to configure Beiboot clusters
---

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
  serverLabels: '{"app": "beiboot", "beiboot.dev/is-node": "true", "beiboot.dev/is-server": "true"}'
  serverResources: '{"requests": {"cpu": "1", "memory": "1Gi"}, "limits": {}}'
  serverStartupTimeout: "60"
  serverStorageRequests: 1Gi
  shelfStorageClass: standard
  storageClass: standard
  tunnel: '{"enabled": true, "endpoint": null}'
```