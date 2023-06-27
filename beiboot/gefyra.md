---
title: Gefyra Integration
sidebar_position: 7
---
Beiboot natively integrates with [Gefyra](https://gefyra.dev) for efficient development. The connection parameters
for Gefyra to connect (upon `gefyra up`) are pulled in automatically from the _kubeconfig_. Make sure you are using
the _kubeconfig_ for the Beiboot cluster in your current shell.

**Important:** The host cluster must allow UDP connections to the port range defined in the Beiboot cluster configuration.
Please see the [values from the `gefyra` attribute](/configuration/#beiboot-cluster-configuration) in the Beiboot 
cluster configuration.

The default port range is `31820-31920`, which allows for 100 simultaneous Beiboot clusters to be connected with Gefyra.
**Important:** Please make sure the nodes of your host Kubernetes clusters can be reached from client machines and are not
blocked by a firewall or NAT.

