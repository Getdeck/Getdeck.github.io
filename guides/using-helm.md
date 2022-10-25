---
title: Using Helm as a Source
sidebar_position: 4
slug: using-helm-as-source
---

<!---
* It looks like the Deckfile can depend on Helm charts, but how do I manage custom values for my local configs? (e.g. I have different values for staging vs prod)
--->

Example:

```yaml
- type: helm
  ref: https://kubernetes.github.io/ingress-nginx
  chart: ingress-nginx
  releaseName: ingress-nginx
  namespace: ingress-nginx
  helmArgs:
    - --create-namespace
  parameters:
    - name: controller.admissionWebhooks.enabled
      value: false
    - name: controller.ingressClassResource.default
      value: true
```
