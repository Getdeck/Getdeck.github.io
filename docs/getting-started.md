---
title: Getting Started
sidebar_position: 4
description: Getting started with the deck CLI and a simple Kubernetes environment
---

This getting started example will take about 4 minutes of your time.


1. [Install the `deck` CLI](/docs/installation/)
2. Run this command:

```bash
deck get --name oauth2-demo https://github.com/gefyrahq/gefyra-demos.git
```

This might take a few minutes. When it's done, open your browser at
[http://dashboard.127.0.0.1.nip.io:8080/#/workloads?namespace=oauth2-demo](http://dashboard.127.0.0.1.nip.io:8080/#/workloads?namespace=oauth2-demo).
You should see a Kubernetes dashboard with some information about the namespace:

![Kubernetes Dashboard](/img/kubernetes_dashboard.png)

We just deployed a whole application using `deck`.

3. To clean it up (i.e. remove the cluster), just run the following command:

```bash
deck remove --cluster https://github.com/gefyrahq/gefyra-demos.git
```

<hr/>

Now go and write your own [Deckfile](/docs/deckfile-specs/) or select one from the [Wharf](/wharf/).
