---
title: Beiboot Clients
sidebar_position: 4
description: Options for Beiboot to be used from a client
---
There are a couple of options available to work with Beiboot clusters:
1. Using the `deck` CLI with a `beiboot` provider 
2. Using `beibootctl` to manage Beiboot clusters and connect to them
3. [A REST API](https://github.com/Getdeck/beiboot-api) and a [Desktop application](https://github.com/Getdeck/beiboot-desktop) (both are currently in the making)
4. Working with `kubectl` directly (just creating and deleting *beiboot* objects)
5. Using the Python client

## Using `deck` CLI With Provider `beiboot`
The `deck` CLI from version **0.9.0+** integrated Beiboot as [supported cluster provider](/docs/deckfile-specs/#provider).
A [Deckfile](/docs/deckfile-specs/) specifying the host cluster and port-mapping is required, too. Please read on
[how to write a Deckfile using Beiboot](/beiboot/configuration/#usage).

## Working with `kubectl`
### Creating a Logical Kubernetes Cluster
Creating a logical Kubernetes cluster using Beiboot is very easy:

```bash
cat <<EOF | kubectl apply -f -
apiVersion: getdeck.dev/v1
kind: beiboot
metadata:
  name: cluster-1
  namespace: getdeck
provider: k3s
EOF
```
It creates an object of type *beiboot*. Required fields are `name` (unique) and `provider` (currently only _k3s_ is supported).
```bash
> kubectl -n getdeck get bbt 
NAME        AGE
cluster-1   1m22s
```
The cluster is going to be created in namespace `getdeck-bbt-cluster-1` (with default prefix *getdeck-bbt*) of the host cluster. 
Once the cluster is ready you can retrieve the _kubeconfig_ from the *beiboot* object running:
```bash
kubectl -n getdeck get bbt cluster-1 --no-headers -o=custom-columns=:.kubeconfig.source | base64 -d > cluster-1.yaml
```
**Important:** Please note that this _kubeconfig_ specifies the server to be reachable at _https://127.0.0.1:6443_. 
To reach this logical Kubernetes cluster you have to set up a `kubectl port-forward` on your local machine.
```bash
kubectl port-forward -n getdeck-bbt-cluster-1 svc/kubeapi 6443:6443
```
Now, in a different terminal, you can set `export KUBECONFIG=<path>/cluster-1.yaml` and you are ready to go. In this terminal session, you can now use _kubectl_ just as usual.

### Deleting a Logical Kubernetes Cluster
If you wish to remove the logical Kubernetes cluster, please type:
```bash
kubectl -n getdeck delete bbt cluster-1
```
and the entire namespace in the host cluster will be gone in a matter of seconds.

## Beiboot Python Client
### Task Overview
Beiboot comes with a dedicated Python package that handles the following client processes:
* ordering a new Beiboot cluster (with arguments)
* deleting an existing Beiboot cluter
* downloading the _kubeconfig_ and saving it to `~/.getdeck/<cluster-name>.yaml`
* setting up the local proxy to access the Beiboot cluster
* keeping the cluster alive by sending a heartbeat

Please find the Python package on _pypi.org_ [https://pypi.org/project/beiboot/](https://pypi.org/project/beiboot/).  
You can install it with:

```bash
pip install beiboot
```

The Python client is released with every release of Beiboot.



### Client Architecture
The Beiboot operator handles all cluster-side components to run a logical Kubernetes cluster. Yet, for users to connect 
to it a certain amount of client-side process logic is required.

The Beiboot client manages the following components on the users machine:
* creating a `beiboot` object (a Kubernetes extension) to request a Beiboot cluster
* watching this object until the Beiboot operator updates it with the __kubeconfig_ (a YAML-file)
* storing the _kubeconfig_ on the local machine so the user can be use it (for instance by setting `export KUBECONFIG=...`)
* establishing a `kubectl port-forward` for every requested port-mapping in a Docker process

![Getdeck Beiboot client](/img/beiboot-client.png)

The Beiboot client allows reconnecting to an existing cluster by fetching the _kubeconfig_ again and setting up the
local proxy facilities.  

Once the Beiboot cluster is not needed anymore, client removes the `beiboot` object in Kubernetes. Running proxies are
removed, too.




