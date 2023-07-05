---
title: Getdeck hosted by you
sidebar_position: 1
description: What is Getdeck and what is it useful for
---


<div class="text--center">
    <img src="/img/getdeck-logo.png" alt="Getdeck Logo" width="500"/>
</div>
<hr/>
<b>Ad hoc virtual clusters in a few minutes</b>

Getdeck allows you to spin up virtual kubernetes clusters easily that you can use for development and testing. Getdeck also allows you to save your current development state, tear the cluster down and restore it at a later point in time.

<hr/>


In order to test Getdeck completely **free** and easily we are providing with a free Kubernetes cluster that you can spin up using Getdeck and use as you please. The following details are valid for that Cluster:

## Specs for the free cluster:
* max. 4h cluster lifetime
* no session timeout
* max. 3 nodes (max. 2 cores, 6GB RAM, 50GB Storage)
* max. 1 cluster at a time

Please note, we have limited ressources available for this free setup. If there are many users trying to run a cluster at the same time, you may not be able to spin up a new cluster and waiting time may be involved.

> If you like Getdeck, please give us a ⭐ star on [GitHub and support this project](https://github.com/Getdeck/beiboot).


## Features

Getdeck offers:

* to create a fresh ad-hoc Kubernetes cluster in seconds (much faster than Terraform or Cloud-provider)
* automatic management of Getdeck clusters (via lifetime, inactivity, etc.)
* shelve ("snapshot") a running Getdeck cluster with state and restore them as often as needed
* run isolated workloads within Kubernetes; cheap and with the best resource utilization
* automatic distribution of _kubeconfig_ and tunnel connection to clients (using the _Beiboot client package_)
* built-in support for [Gefyra](https://gefyra.dev)

Tested on:
* [Google Kubernetes Engine](https://cloud.google.com/kubernetes-engine)
* [AWS Elastic Kubernetes Service](https://aws.amazon.com/eks/)
* [k3d](https://k3d.io/)
* [Minikube](https://minikube.sigs.k8s.io/) (with Docker driver)

## Geting started

1. Install Getdeck Desktop
2. 

## Need more resources or want to run Getdeck on your own infrastructure?
Get in touch: getdeck@blueshoe.io







