---
title: Beiboot Introduction
sidebar_position: 1
---

![Getdeck Beiboot Logo](/img/beiboot-logo.png)
<hr/>

Getdeck Beiboot (or just Beiboot for brevity) is a Kubernetes-in-Kubernetes solution. 
It was born from the idea to provide Getdeck users a simple yet flexible solution to spin up 
hybrid cloud development infrastructure. This is useful for development workloads which grew too large to run on a 
development machine (or with pony workloads on MacOS and Windows machines).

## Features

Beiboot offers:

* to create a fresh ad-hoc Kubernetes cluster in seconds (much faster than Terraform or Cloud-provider)
* run isolated workloads within Kubernetes; cheap and with the best resource utilization
* automatic distribution of _kubeconfig_ and proxied connection on clients (using the _Beiboot client package_)
* built-in support for [Gefyra](https://gefyra.dev)


## Kubernetes-in-Kubernetes
There are a couple of aspects why a logical ("virtual") Kubernetes cluster running within a physical Kubernetes cluster 
is beneficial. The main focus is spinning up on demand Kubernetes clusters for development and testing purposes. 
Although Beiboot has potential for other scenarios, too. For example, strong workload isolation, multi-tenancy, 
security and more.

Beiboot comes with a Kubernetes operator. It handles the ad-hoc logical clusters based on the requested parameters.
This includes the Kubernetes version, the way of exposing the cluster, lifetime and so on.


![Beiboot Ops](/img/beiboot-ops.png)