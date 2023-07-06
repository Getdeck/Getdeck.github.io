---
title: Shelf - store and restore the state of a cluster
sidebar_position: 8
---
Getdeck comes with the functionality to easily store and restore the state of a Beiboot cluster. Currently, it can only
be used with `beibootctl`, but will be added soon in Getdeck-Desktop. This is a crucial feature to:
- quickly spin up development clusters from a proven baseline
- store the state of a development cluster when deleting it for some time
- spin up a temporary cluster with data for automatic testing
- spin up a temporary staging-/pre-prod cluster with data for manual testing

When using `beibootctl`, it's as easy as running `beibootctl shelf CLUSTER_NAME` to create a shelf of the cluster. Its
Etcd state, as well as the data of the node PVCs will be stored.

Restoring a cluster state can be achieved by running `beibootctl cluster create CLUSTER_NAME --from-shelf SHELF_NAME`. 
This will restore the Etcd state and pre-provision the data PVCs of the nodes.
