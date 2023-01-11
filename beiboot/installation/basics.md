---
title: Basic Considerations
sidebar_position: 1
description: How to install Beiboot in your environment
---
This section describes the installation methods and the connection requirements.

## Methods
You can either install the Beiboot operator with [`beibootctl`](../beibootctl) (recommended) or by applying the required Kubernetes configs from pre-generated YAML files.

If you are running a managed Kubernetes cluster head over to their specific documentation:
* [Configure a GKE cluster for Beiboot](../cluster#installation-on-gke)
* [Configure a EKS cluster for Beiboot](../cluster#installation-on-eks)

Especially, if you are running the host clusters in a cloud environment, you can leverage their dynamic resource provisioning
for your team. Once a new Beiboot cluster is ordered, but there is not enough capacity in the host cluster, you can make use of
the *node autoscaler* and dynamically request new Kubernetes nodes for the host cluster.

## Connection Requirements
Currently, clients (developers) connect to a Beiboot cluster using a *NodePort* service in the host cluster. Hence, the 
default port range to the Kubernetes nodes from the host cluster must be reachable by the clients 
(for **TCP** and **UDP** traffic). 
Beiboot randomly assigns node ports on the host cluster for all "forwarded ports" of a Beiboot cluster. We are working
on a solution to make this also possible using *load balancer*.

## Beiboot Kubernetes Components
The following components are created in the host cluster as part of Beiboot:
* a _namespace_ (default is `getdeck`)
* a _service account_ called `beiboot-operator`
* a _cluster role_ and _cluster role binding_
* the _deployment_ for the operator
* a *configmap* called `beiboot-config` storing the global configuration
* a *validatingwebhookconfiguration* for Beiboot's validation

The operator itself registers a few additional Kubernetes objects, for example the `beiboot` [custom resource
definition (CRD)](https://kubernetes.io/docs/concepts/extend-kubernetes/api-extension/custom-resources/).


## Remove Beiboot from the Cluster
The best way to safely uninstall Beiboot is to run:

```bash
# be sure to have the right kubeconfig/context set
beibootctl uninstall
```

This will call a couple of different triggers to make sure everything will be removed, including
remaining namespaces, Beiboot clusters and others.  
Alternatively, you could "reverse" the installation by running:

```bash
kubectl delete -f https://raw.githubusercontent.com/Getdeck/beiboot/main/operator/manifests/beiboot.yaml
```
with one of the pre-generated YAML configs.


Finally, you can uninstall the operator by removing the `getdeck` namespace:
```bash
kubectl delete ns getdeck
```
The operator will catch the termination signal and delete its Kubernetes extensions. This way potentially leaves
some remaining componens.