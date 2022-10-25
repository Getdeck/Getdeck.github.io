---
title: Using Inline as a Source
sidebar_position: 2
slug: using-inline-as-source
---

It is possible to define inline resources directly within your Deckfile. Simply add an entry under `sources` using `type: inline` and the corresponding `content` in yaml or json format:

```yaml
- type: inline
  content:
    kind: Namespace
    apiVersion: v1
    metadata:
      - name: test
```

```yaml
- type: inline
  content:
    { "kind": "Namespace", "apiVersion": "v1", "metadata": { "name": "test" } }
```

While inline definitions are a great way to test, debug, or explore new setups, you most likely don't want to define all your Kubernetes resources inline in a Deckfile.
Getdeck does not aim to provide a new way of defining resources, but helps you integrate existing resources. So let's see how Getdeck can use an existing Kubernetes resource defined in a yaml file.
