---
title: Install Beiboot Operator
sidebar_position: 3
description: How to install the Beiboot operator on the Kubernetes host cluster
---

## Install Beiboot on the Host Cluster

Please notice the following requirements:
* You will need the appropriate permissions to apply all resources from this file in the cluster
* The cluster must provide a Kubernetes API in version >=1.22

### Standard
If you don't run one of the managed Kubernetes service offerings, you can install Beiboot with these two options:

```bash
beibootctl install | kubectl apply -f -
```
or
```bash
kubectl apply -f https://raw.githubusercontent.com/Getdeck/beiboot/main/operator/manifests/beiboot.yaml
```

### Installation on GKE
Do you already have a GKE cluster running? Fine. Let's turn it into a Beiboot host cluster.  

#### Prepare the cluster
For the best experience make sure you have the 
[GKE Cluster Autoscaler](https://cloud.google.com/kubernetes-engine/docs/concepts/cluster-autoscaler) 
activated. That will ensure that each Beiboot cluster will get its capacity.

**Important:** In the Google cloud firewall you need to permit **TCP** and **UDP** traffic to the Kubernetes 
default node port range (30000-32768) of the host cluster.   

Please run the following command
```bash
gcloud compute firewall-rules create <cluster-name> --allow tcp:30000-32768 --allow udp:30000-32768
```
or create this firewall rule using the [GCP Console](https://console.cloud.google.com/networking/firewalls/list).


#### Install the Beiboot Operator
You can install the Beiboot operator with this in your GKE cluster
```bash
beibootctl install --preset gke | kubectl apply -f -
```
(please mind that the `beibootctl install` command provides a lot of options for customizing the installation)

or

```bash
kubectl apply -f https://raw.githubusercontent.com/Getdeck/beiboot/main/operator/manifests/beiboot-gke.yaml
```

### Installation on EKS
Do you already have an EKS (public) cluster running? Fine. Let's turn it into a Beiboot host cluster.  

#### Prepare the cluster
For the best experience make sure you have the 
[EKS Cluster Autoscaler](https://docs.aws.amazon.com/de_de/eks/latest/userguide/autoscaling.html) 
activated. That will ensure that each Beiboot cluster will get its capacity.

**Important:** In the AWS firewall you need to permit **TCP** and **UDP** traffic to the Kubernetes 
default node port range (30000-32768) of the host cluster.   


#### Install the Beiboot Operator
You can install the Beiboot operator with the following command in your EKS cluster
```bash
beibootctl install | kubectl apply -f -
```
(please mind that the `beibootctl install` command provides a lot of options for customizing the installation)

or

```bash
kubectl apply -f https://raw.githubusercontent.com/Getdeck/beiboot/main/operator/manifests/beiboot.yaml
```