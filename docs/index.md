---
title: Getdeck Introduction
sidebar_position: 1
---

**Getdeck** is a command-line application (`deck`) and file specification (`Deckfile`) around the concept of a 
Kubernetes _Deck_. If you want to know more about the concept itself, head over 
to [the documentation of the concept](/docs/what-is-a-deck) or the [Deckfile specification](/docs/deckfile-specs).
Getdeck handles the workflow of providing parts of your existing Kubernetes infrastructure to Developers or
Testers without having them to be Kubernetes experts, too. Think of Getdeck as the _docker-compose_ for your
existing Kubernetes workloads.

> If you already have members in your team putting a lot of effort in writing secure, compliant and off-the-shelf
> Kubernetes workloads, why don't you use (at least parts of it) these for development, too?

### Are you a developer?
You understand your main task in writing code? - follow along [the developer-specific introduction](/docs/for-devs/intro/).


### Are you a DevOps?
You know all the things Kubernetes or want to provide service to your developers? - 
follow along [the DevOps specific introduction](/docs/for-devops/intro/).



## Features

The following features are currently the scope of Getdeck:
* Roll out different Kubernetes-cluster on local development machines: 
  * [`k3d`](https://k3d.io)
  * [`kind`](https://kind.sigs.k8s.io/)
  * [`beiboot`](/beiboot/)
  * Remote clusters
* Define local Kubernetes environment using different source types for workloads:
  * [`Helm`](https://helm.sh/), including many supported Helm plugins
  * `kustomize`
  * Plain YAML files or directories
* Read Kubernetes workloads from different sources:
  * Http(s)
  * Git
  * Filesystem
* Management of locally required tools (i.e. installation, version handling, etc.)
* Ease of use: one command for setting up local environments, one command for tearing it down again 

## Demo
Insert a fancy GIF here.
