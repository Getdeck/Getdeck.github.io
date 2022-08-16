---
title: Installation
sidebar_position: 3
---
## Install Beiboot on the Host Cluster
You can install the Beiboot operator with this in your host cluster:
```bash
kubectl apply -f https://raw.githubusercontent.com/Getdeck/beiboot/main/operator/manifests/beiboot.yaml
```
(You will need the appropriate permissions apply all resources from this file in the cluster)

This following components are created from the file:
* a _namespace_ called `getdeck`
* a _service account_ called `beiboot-operator`
* a _cluster role_ and _cluster role binding_
* the _deployment_ for the operator in namespace `getdeck`

The operator itself registers a few additional Kubernetes objects, for example the `beiboot` [custom resource
definition (CRD)](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/).

## Tested Kubernetes Host Cluster
Beiboot was tested on the following Kubernetes host clusters:
* [k3d](https://k3d.io/)
* [Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine)

## Remove Beiboot from the Cluster

You can uninstall the operator by removing the `getdeck` namespace:
```bash
kubectl delete ns getdeck
```

The operator will catch the termination signal and delete its Kubernetes extensions.