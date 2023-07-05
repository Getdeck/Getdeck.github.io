---
title: beibootctl
sidebar_position: 5
---

## Get in contact
Below you find the documentation of the `beibootctl`. 
If you struggle to set it up or need any other support, please find us on [Discord](https://discord.gg/KNN7yncs) or use this [link](https://meetings.hubspot.com/hannes/getdeck-help) to book a call.


## Syntax

Use the following syntax to run `beibootctl` commands from your terminal:
```
beibootctl [OPTIONS] [ACTION] [ARGUMENTS]
```
Where `OPTIONS` can be:
- `-d, --debug`: add debug output for each action
- `--help`: show help message and exit
- `--kubeconfig TEXT`: path to the kubeconfig file to use instead of loading the default
- `--context TEXT`: context of the kubeconfig file to use instead of 'default'

Where `ACTION` is one of:
- `cluster`: manage clusters
- `connect`: connect to a cluster
- `disconnect`: disconnect from a cluster
- `install`: generate K8s resources to install beiboot into the host cluster, use like this `beibootctl install [options] | kubectl apply -f -`, use with `--help` to see available install options
- `shelf`: manage shelves
- `uninstall`: uninstall beiboot from the host cluster

Where `ARGUMENTS` specify the required and optional arguments for a specific action. Use the `action` with `--help`, to see the available arguments.

Global flags are:
- `-d, --debug`: add debug output for each action
- `-h, --help`: show help message and exit

## Actions
`beibootctl` allows running the following available actions.

### `beibootctl cluster`
Manage Beiboot clusters.

**Syntax:** `beibootctl cluster [options] COMMAND [ARGUMENTS]`

**`ARGUMENTS`:** please use `beibootctl cluster COMMAND --help` for a full list of arguments

**Example:** `beibootctl cluster create test-cluster`

#### `COMMAND`s

| Command                   | Description                                         |
|:--------------------------|:----------------------------------------------------|
| `create`                  | Create a new Beiboot cluster                        |
| `delete` (`rm`, `remove`) | Mark a Beiboot cluster for deletion                 |
| `inspect`                 | Display detailed information of one Beiboot cluster | 
| `list` (`ls`)             | List all Beiboot clusters                           |

### `beibootctl connect`
Set up the tunnel connection to a Beiboot cluster.

Hint: When you're interacting with the connected Beiboot cluster, you probably see errors, for example when running `kubectl exec [...]`. 
They take the form of `EOF`

**Syntax:** `beibootctl connect [OPTIONS] NAME`

**Example:** `beibootctl cluster create test-cluster`

#### Positional Arguments
`NAME`, the name of the Beiboot cluster for which the connection should be established.

#### Optional Arguments

| Argument    | Description                               |
|:------------|:------------------------------------------|
| `connector` | `ghostunnel_docker` or `dummy_no_connect` |
| `host`      | Override the connection endpoint          |

### ...