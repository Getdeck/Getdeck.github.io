---
title: Working with Decks and the CLI
sidebar_position: 4
description: Basics on how to work with Deckfiles
---

## The Deckfile 
A [Deckfile](/docs/deckfile-specs/) can be understood like what a `docker-compose` file is doing for a developer.

It creates a development infrastructure, usually with many services, e.g. databases, full-text search indexes
and applications. However, in contrast to a docker-compose file, a Deckfile creates that infrastructure based on a real
Kubernetes cluster (not just `docker run ...` with some on-top convenience).  

> Ideally, the Deckfile for a developer's setup draws the Kubernetes workloads from production(-close) environments. That allows development teams to share the configuration in which a container is finally operated.

Getdeck provides a CLI `deck`, which comes with most of the popular tools from the Kubernetes ecosystem without having them
managed. This includes `Helm` (with plugins), `kustomize` and others.   
Getdeck allows provisioning Kubernetes clusters without requiring developers to know all the ins-and-outs of these tools.
The process of spinning up development setups becomes a breeze.

## Setting up a Local Kubernetes Development Infrastructure
Of course, there are countless numbers of development setups, requirements and moving parts in production. However, Getdeck
is designed to be as versatile as possible for different use-case scenarios.

Let's assume you want to provide a common Kubernetes-based tech stack on your machine. Either you find what you need
in Getdeck's [Wharf](/wharf/), or you have to write your own Deckfile.  

**Important:** If you find a popular stack missing in Wharf, please consider adding it with a 
_Pull Request_ on Github.  

<a class="button button--secondary button--lg button--external" target="_blank" href="https://github.com/Getdeck/wharf/issues/new?assignees=&labels=enhancement&template=deckfile-request.md&title=%5BDeckfile+request%5D%3A+">Create a Deckfile request</a>

<br/>
<br/>

The `deck` CLI can be called with a specific location of a `deck.yaml`, for example `deck get ./deck.yaml`. This
will create the Kubernetes setup from a local Deckfile in this directory.

## What Happens on `deck get ...`
There are a couple of steps automated with the `deck get`-operation:

1. Load and verify the given Deckfile  
2. Check if the Kubernetes provider (such as _k3d_, _kind_, etc.) is available; if not, install it  
3. Create a logical Kubernetes cluster with the given provider and cluster settings (including port-mappings, etc.)  
4. Pull the Kubernetes manifest sources from all specified locations using the identity of the user  
5. Preprocess manifest sources, for example generate _Helm charts_ with the configuration from the Deckfile  
6. Apply all workload manifests to the Kubernetes cluster  
7. Print helpful information about the setup and how to get started working with it  
8. Optionally: wait for all Pods to become ready  

This process is supervised by `deck` to handle common errors or revert everything in case of an unfixable error. Upon
a technical issue the cluster is removed immediately.  
In case of persistent errors the _debug_ flag (`deck -d get ...`) can help to determine what is causing the problem.

This operation can be run as often as needed. Running it later on will cause your development setup to stay up-to-date
with the Deckfile in case it is pulled from a remote location.

If you need more than one Deck (and the Deckfile in question also specifies multiple Decks), you can run `deck get --name ...` for each
required Deck from the file. This will still create only one cluster (effectively sharing it between Decks) and install 
multiple Decks to it. This can be useful for multiple development teams which are developing different services communicating with
each other.

This operation is similar to `docker-compose up -d`

## Halting the Development Infrastructure
The `deck stop`-operation allows pausing the current Kubernetes development cluster while keeping the state in place. Depending
on the Kubernetes provider, this will shut down the cluster effectively saving resources.  
If a cluster is stopped, running another `deck get ...` on a Deckfile will bring this existing cluster back to life.  

This operation is similar to `docker-compose stop`

## Removing a Deck 
If you don't need to run a certain Deck any longer in your development infrastructure, you can delete it with the `deck remove`-operation.
This will execute all the steps from the `deck get`-operation (especially the preprocessing of the workload manifests) but instead of
creating the resulting Kubernetes objects in the cluster, the sources are used to remove them.

## Removing the Development Infrastructure
You can remove Decks individually or remove the entire Kubernetes cluster with the `deck remove --cluster`-operation. This will
cause the underlying Kubernetes provider to eliminate the cluster including its state from the development machine.

This operation is similar to `docker-compose down -v --rmi all`.
