---
sidebar_position: 2
slug: /deckfile/wharf
---
# Wharf

The `Wharf` of Getdeck is a collection of common tech stacks or advanced components running in Kubernetes. Feel free
to use the Deckfiles from the wharf for your local development. The well-crafted development setups in the wharf will 
be checked regularly in order to prevent a _dependency drift_ and to make sure they are working.

[Check it out.](https://github.com/Getdeck/wharf)

If you want to add a Deckfile for another Kubernetes-based development stack, feel free to create a pull request on 
GitHub.


## Epinio

If you want to run an [Epinio](https://epinio.io) on your local machine, just run:
```bash
deck get https://raw.githubusercontent.com/Getdeck/wharf/main/epinio/deck.yaml
```
Please follow the _notes_ to find out how to get started with this deck.  
Required `deck`  version: **0.6.0+**


## OpenFaaS

If you want to run an [OpenFaaS](https://www.openfaas.com/) on your local machine, just run:
```bash
deck get https://raw.githubusercontent.com/Getdeck/wharf/main/openfaas/deck.yaml
```
Please follow the _notes_ to find out how to get started with this deck.  
Required `deck`  version: **0.6.0+**