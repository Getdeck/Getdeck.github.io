---
title: Install beibootctl
sidebar_position: 2
description: How to install beibootctl
---
`beibootctl` is a command line utility for managing a Beiboot operator, and all
Beiboot clusters running on a host cluster. For more information about the CLI [head over
to the documentation of `beibootctl`](../beibootctl).

## Installing `beibootctl`
Currently, there is no fancy installation script. If you find this missing, please help this project by adding
one.  
There are statically compiled executables available for Linux and macOS. Please load the right binary from 
the   
  
[-> GitHub release page of Beiboot](https://github.com/Getdeck/beiboot/releases/latest/)  
  
extract the archive and add the `beibootctl` to your path. You can run the following:  
```bash
sudo install -m 0755 beibootctl /usr/local/bin/beibootctl
```

## Running `beibootctl`
The CLI uses the *kubeconfig* that is either activated globally or which is explicitly set with
```bash
export KUBECONFIG=~/my/kube/config.ymal
```
in the current terminal session.

To verify `beibootctl` is working, you can run the `version` command:
```bash
> beibootctl version
Beiboot version: 1.4.0
```
which prints the version of the executable. For more information about the CLI [head over
to the documentation of `beibootctl`](../beibootctl).
