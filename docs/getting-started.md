---
title: Getting Started
sidebar_position: 4
description: Getting started with the deck CLI and a simple Kubernetes environment
---

We provide a sophisticated demo project you can deploy locally using `Getdeck`:

```bash
deck get https://github.com/gefyrahq/gefyra-demos.git
```

This might take a few minutes. When it's done, open your browser at
[http://dashboard.127.0.0.1.nip.io:8080/#/workloads?namespace=oauth2-demo](http://dashboard.127.0.0.1.nip.io:8080/#/workloads?namespace=oauth2-demo).
You should see a Kubernetes dashboard with some information about the namespace:

![Kubernetes Dashboard](/img/kubernetes_dashboard.png)

We just deployed a whole application using `deck`.

To clean it up (i.e. remove the cluster), just run the following command:

```bash
deck remove --cluster https://github.com/gefyrahq/gefyra-demos.git
```

Now go and write your own [Deckfile](/docs/deckfile-specs/) or select one from the [Wharf](/wharf/).