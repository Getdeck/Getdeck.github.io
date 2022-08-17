---
title: Writing Deckfiles for Developers
sidebar_position: 5
description: How to write Deckfiles for developers, so they can conveniently work with them
---
## Kubernetes Workloads and Manifests
To run anything in Kubernetes, objects of many kinds must be created. That includes all specifics about Kubernetes and
its inner API machinery. There are _Deployments_, _StatefulSets_, _Services_, _Pods_, _Jobs_, and many more.

Getdeck **does not** provide these resources. These manifests (mostly YAML-files) have to exist in any way, so Getdeck 
can use them to provision a Kubernetes cluster for development or testing.


## Compiling Decks From Sources
One premise of Getdeck is: there are people in the team or project writing Kubernetes workloads for production
and production-close environments. If not, you will have to start with writing Kubernetes resources first. Once they are
working, you can move on and compile different Decks out of the Kubernetes components that you've created.

You can link Kubernetes resources into Deckfile by setting the `type` and `location` 
[of a _source_](/docs/deckfile-specs/#source-definition). If you use `Helm` or `kustomize` for generating the Kubernetes
objects - no worries - Getdeck has got you covered.

Developers **will not spend much time** on modifying Kubernetes resources, nor will they operate on the platform side of things.  
They basically execute two tasks:
1. Create new applications (i.e. services) in an environment which is identical to production  
2. Alternate existing applications in an environment which is identical to production  

There is even rarely the case that developers work on the software- and service architecture. That includes Kubernetes
patterns, such as the side-car pattern. These architectural considerations and implementation must be provided to developers,
so they can work in that context. 

## Where to Place the Deckfiles?
It's completely up to the team to decided where to store the Deckfile. 

If you are using a _monorepo_ for the Kubernetes manifests, you may place the Deckfile there two.  

If the Kubernetes workload manifests are distributed across the application repositories, you may find a
central HTTP server to place the Deckfile. It is not recommended distributing a copy of a central Deckfile across the
application repositories. In case these Deckfiles require adjustments for each service your are free to place the Deckfile
beside your application code.

