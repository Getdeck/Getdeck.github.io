---
title: Supported Kubernetes Distributions
sidebar_position: 5
slug: supported-kubernetes-distributions
---

## Managed Kubernetes Providers
The following Kubernetes distributions are currently supported with `deck`:
* [k3d](https://k3d.io)
* [kind](https://kind.sigs.k8s.io/)
* [beiboot](/beiboot/)

Please refer to the [Deckfile documentation](/docs/deckfile-specs/#the-cluster-top-level-element) to see how they are configured.

## Unmanaged Kubernetes
You can also use other Kubernetes clusters, such as the one coming with _Docker Desktop_ or any remote cluster.
Please use `-I`, `--no-cluster` switch to disable the cluster from the Deckfile. `deck` will instead use
the current cluster context active in the environment.

