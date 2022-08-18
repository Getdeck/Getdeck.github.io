---
title: Wharf
description: The Wharf of Getdeck is a collection of common tech stacks or advanced components running in Kubernetes. 
---
# Getdeck Warf

<div class="text--center">
    <img src="/img/wharf-logo.png" alt="Getdeck Wharf Logo" width="500"/>
</div>
<hr/>

## Intro

The `Wharf` of Getdeck is a collection of common tech stacks or advanced components running in Kubernetes. 

Feel free to use the Deckfiles from the Wharf for your local development. The well-crafted development setups in the Wharf will 
be checked regularly in order to prevent a _dependency drift_ and to make sure they are working.

<a class="button button--secondary button--lg button--external" target="_blank" href="https://github.com/Getdeck/wharf">Go to Wharf</a>
<hr/>

If you want to add a Deckfile for another Kubernetes-based development stack, feel free to create a pull request on 
GitHub.

<a class="button button--secondary button--lg button--external" target="_blank" href="https://github.com/Getdeck/wharf/issues/new?assignees=&labels=enhancement&template=deckfile-request.md&title=%5BDeckfile+request%5D%3A+">Create a Deckfile request</a>
<br/>
<br/>

## Platforms

### Epinio

If you want to run an [Epinio](https://epinio.io) on your local machine, just run:
```bash
deck get https://raw.githubusercontent.com/Getdeck/wharf/main/epinio/deck.yaml
```
Please follow the _notes_ to find out how to get started with this Deck.  
Required `deck`  version: **0.6.0+**


### OpenFaaS

If you want to run an [OpenFaaS](https://www.openfaas.com/) on your local machine, just run:
```bash
deck get https://raw.githubusercontent.com/Getdeck/wharf/main/openfaas/deck.yaml
```
Please follow the _notes_ to find out how to get started with this Deck.  
Required `deck`  version: **0.6.0+**

## Infrastructure

### NFS Storage Provisioner

If you want to use a [ReadWriteMany (RWX)](https://kubernetes.io/docs/concepts/storage/persistent-volumes/#access-modes)
storage class with [NFS](https://en.wikipedia.org/wiki/Network_File_System) in your application, just run:
```bash
deck get https://raw.githubusercontent.com/Getdeck/wharf/main/nfs/deck.yaml
```

You can add your workload and mount a PVC with `storageClassName: wharf-nfs`.

Please follow the _notes_ to find out how to get started with this Deck.  
Required `deck`  version: **0.8.2+**

## Observability

### Loki

If you want to run a Kubernetes logging stack consisting of [Loki](https://grafana.com/oss/loki/), [Promtail](https://grafana.com/docs/loki/latest/clients/promtail/) and [Grafana](https://grafana.com/) on your local machine, just run:
```bash
deck get https://raw.githubusercontent.com/Getdeck/wharf/main/loki/deck.yaml
```
Please follow the _notes_ to find out how to get started with this Deck.  
Required `deck`  version: **0.8.2+**

## Apps

### Django
The following Decks are running a typical django stack with PostgresSQL
(using [Zalando's PostgreSQL Operator](https://postgres-operator.readthedocs.io/en/latest/)).

#### django-hurricane
If you want to run the [spacecrafts](https://django-hurricane.io/basic-app/) demo of [django-hurricane](https://django-hurricane.io), just run
```bash
deck get https://raw.githubusercontent.com/Getdeck/wharf/main/django/deck.yaml
```
Please follow the _notes_ to find out how to get started with this Deck.  
Required `deck`  version: **0.6.0+**


### Java
The following Decks are running a Java stack with PostgresSQL
(using Bitnamis Postgres Charts).

#### Polls Example using Spring
If you want to run a Java example of a simple polls application using Spring, just run
```bash
deck get https://raw.githubusercontent.com/Getdeck/wharf/main/java-polls/helm/deck.yaml
```
Please follow the _notes_ to find out how to get started with this Deck.  
Required `deck`  version: **0.8.2+**
