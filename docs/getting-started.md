---
sidebar_position: 4
---

# Getting started

We provide a sophisticated demo project you can deploy locally using `getdeck`:

```bash
deck get https://github.com/gefyrahq/gefyra-demos.git
```

This might take a few minutes. When its done, open your browser at
[http://dashboard.127.0.0.1.nip.io:8080/#/workloads?namespace=oauth2-demo](http://dashboard.127.0.0.1.nip.io:8080/#/workloads?namespace=oauth2-demo).
You should see a kubernetes dashboard with some information about the namespace
we just deployed using deck!

To clean it up, just run the following command:

```bash
deck remove deck remove https://github.com/gefyrahq/gefyra-demos.git
```

Now go and write your own deck files!
