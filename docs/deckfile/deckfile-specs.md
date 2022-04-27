---
sidebar_position: 1
slug: /deckfile/specs
---
# Deckfile Specification
A _Deckfile_ (`deck.yaml`) is a declarative file in YAML data-serialization language to compose several Kubernetes 
workloads together to create a comprehensive deployment artifact for development and testing. It supports a range of
different sources of workloads, such as [Helm](https://helm.sh), [Kustomize](https://kustomize.io/), plain yaml files
or directories. Please find here more about the concept of a [Deck for development](/docs/deck).

> If you are not familiar with classic Kubernetes configuration files, here is the [Declarative Management of Kubernetes Objects Using Configuration Files](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/declarative-config/) guide.

> If you are not familiar with Helm, head over to the [Quickstart with Helm](https://helm.sh/docs/intro/quickstart/) guide.

> If you are not familiar with Kustomize, check out the  [Declarative Management of Kubernetes Objects Using Kustomize](https://kubernetes.io/docs/tasks/manage-kubernetes-objects/kustomization/) guide.

Providing a Deckfile is crucial for working with Getdeck. It's like a `docker-compose.yaml` for Kubernetes-based development
environments. However, it is more difficult to compose a Kubernetes workload than a docker-compose file, as it requires
more knowledge from Kubernetes experts. Please read on how to write a Deckfile to specify a Kubernetes-based development
which is close to your production system by using the workload descriptors you potentially already use.

# File Header
A Deckfile always starts with a version. Currently, version **1** or **latest** is supported as a value.
```yaml
version: '1'
```


## Cluster Specification
Specify one (currently local) Kubernetes cluster for this Deckfile. All Decks will go into this cluster.


## Decks Specification
Specify one or more Decks.
> If you don't what a Deck is, please check out [What is a Deck?](/docs/deck)
