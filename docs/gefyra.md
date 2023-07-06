---
title: Gefyra Integration
sidebar_position: 7
---
A pretty awesome development setup can be created when we can develop locally on our laptops but can connect to remotely hosted clusters or services. Because this is something we always wanted we created [Gefyra](https://gefyra.dev) for super smooth local development and Gefyra natively integrates with Getdeck for efficient development.

Give this a shot!

The connection parameters for Gefyra to connect (upon `gefyra up`) are pulled in automatically from the _kubeconfig_. Make sure you are using
the _kubeconfig_ for the Beiboot cluster in your current shell.

**Important:** The host cluster must allow UDP connections to the port range defined in the Beiboot cluster configuration.
Please see the [values from the `gefyra` attribute](/configuration/#beiboot-cluster-configuration) in the Beiboot 
cluster configuration.

The default port range is `31820-31920`, which allows for 100 simultaneous Beiboot clusters to be connected with Gefyra.
**Important:** Please make sure the nodes of your host Kubernetes clusters can be reached from client machines and are not
blocked by a firewall or NAT.

