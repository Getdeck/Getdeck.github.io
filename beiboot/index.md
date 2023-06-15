---
title: Getdeck Introduction
sidebar_position: 1
description: What is Getdeck and what is it useful for
---


<div class="text--center">
    <img src="/img/getdeck-logo.png" alt="Getdeck Logo" width="500"/>
</div>
<hr/>
<b>The Problem</b>


With complex application landscapes, running Kubernetes-based workloads locally becomes infeasible. Swiftly testing applications with different Kubernetes versions can be impossible depending on organizational policies. Spinning up
a Kubernetes cluster with Terraform or Cloud providers takes to long for a convenient development workflow or CI 
pipelines.


<b>The Solution</b>  

With Getdeck you only need one host Kubernetes cluster that runs the Getdeck Beiboot operator. Beiboot creates 
Kubernetes clusters as deployments in a matter of seconds. The operator creates several ways to connect to that 
cluster and makes it simple to get started working with Kubernetes.


<hr/>


Getdeck Beiboot (or just Beiboot for brevity) is a Kubernetes-in-Kubernetes solution. It was born from the idea to provide Getdeck users with a simple yet flexible solution to spin up a hybrid cloud development infrastructure. This is useful for development workloads 
that grew too large to run on a development machine (or with pony workloads on macOS and Windows machines).


> If you like Beiboot, please give us a ⭐ star on [GitHub and support this project](https://github.com/Getdeck/beiboot).


## Features

Beiboot offers:

* to create a fresh ad-hoc Kubernetes cluster in seconds (much faster than Terraform or Cloud-provider)
* automatic management of Beiboot clusters (via lifetime, inactivity, etc.)
* shelve ("snapshot") a running Beiboot cluster with state and restore them as often as needed
* run isolated workloads within Kubernetes; cheap and with the best resource utilization
* automatic distribution of _kubeconfig_ and tunnel connection to clients (using the _Beiboot client package_)
* built-in support for [Gefyra](https://gefyra.dev)

Tested on:
* [Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine)
* [AWS Elastic Kubernetes Service](https://aws.amazon.com/eks/)
* [k3d](https://k3d.io/)
* [Minikube](https://minikube.sigs.k8s.io/) (with Docker driver)

## Kubernetes-in-Kubernetes
There are a couple of advantages running a logical ("virtual") Kubernetes cluster running within a physical
Kubernetes cluster. The main focus of Beiboot is the on-demand creation of Kubernetes clusters for development and
testing purposes. 
Beiboot has potential for other scenarios, too. For example, strong workload isolation, multi-tenancy, CI, security 
and more.

Beiboot comes with a Kubernetes operator. It handles the management of ad-hoc logical clusters based on the requested 
parameters.
This includes the Kubernetes version, the way of exposing the cluster, lifetime and so on.


![Beiboot Ops](/img/beiboot-ops.png)

## A Local Kubernetes Cluster in the Cloud
Beiboot's client does not only order a cluster based on the given parameters but also establishes a secure connection to it. It makes the requested ports (usually port 80 for *http*, port 443 for *https*) available on *localhost*, effectively making remote services available as they would run on the local machine. That happens entirely automatically using a secured *mTLS* connection. This works for any port.

![Beiboot client connection](/img/beiboot-client-connection.png)



