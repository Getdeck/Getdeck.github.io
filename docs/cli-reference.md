---
title: CLI Reference
sidebar_position: 8
description: This is the reference of the deck CLI
---
## Syntax

Use the following syntax to run `deck` commands from your terminal:
```
deck [-h] [-d] [action] [arguments]
```
where `action` and `arguments` are:
- `action`: specifies the operation that you want to perform, for example `get` or `remove`
- `arguments`:  specifies the required and optional arguments for a specific action, for example `--name`

Global flags are:
- `-h, --help`: show help message and exit
- `-d, --debug`: add debug output for each action


# Actions
The CLI allows running the following available actions.

## `deck get`
Create (or reuse) a Kubernetes cluster and install the selected Deck to it. The `Deckfile` parameter 
is the location of `deck.yaml` (or a specific file). It can be a local file system path, `http`, `https` 
or a `git` repository. If no `--name` is given and there is only one Deck defined in the Deckfile, this one 
is installed. Otherwise `--name` is mandatory.

**Syntax:** `deck get [ARGUMENTS] Deckfile`

**Example:** `deck get https://github.com/gefyrahq/gefyra-demos.git`

### Positional Arguments
`Deckfile` the deck.yaml location (as file, git or https)

### Optional Arguments

| Argument                        | Description                                                                                           |
|:--------------------------------|:------------------------------------------------------------------------------------------------------|
| `--name NAME`                   | The Deck that you want to run from the Deckfile                                                       |
| `-I`, `--no-cluster`            | Do not set up the cluster, use current kubectl context                                                |
| `-W, --wait`                    | Wait for the Pods of the Deck to become ready                                                         |
| `-T TIMEOUT, --timeout TIMEOUT` | Timeout (in seconds, default 120) for the Pods of the Deck to become ready; if exceeded the run fails |


## `deck list`
List the available Decks from a given Deckfile.

**Syntax:** `deck list Deckfile`

**Example:** `deck list https://github.com/gefyrahq/gefyra-demos.git`

### Positional Arguments
`Deckfile` the deck.yaml location (as file, git or https)


## `deck stop`
Stop a running cluster for a given Deckfile.

**Syntax:** `deck stop Deckfile`

**Example:** `deck stop https://github.com/gefyrahq/gefyra-demos.git`

### Positional Arguments
`Deckfile` the deck.yaml location (as file, git or https)


## `deck remove`
Remove a Deck from a Kubernetes cluster or remove the entire cluster. If no `--name` is given and
there is only one Deck defined in the Deckfile, this one is removed. Otherwise `--name` is mandatory.

**Syntax:** `deck remove [ARGUMENTS] Deckfile`

**Example:** `deck remove --cluster https://github.com/gefyrahq/gefyra-demos.git`

### Positional Arguments
`Deckfile` the deck.yaml location (as file, git or https)

### Optional Arguments

| Argument           | Description                                            |
|:-------------------|:-------------------------------------------------------|
| `--name`           | The Deck that you want to run from the Deckfile        |
|`--cluster` | Remove the entire cluster from the local system        |
| `-I`, `--no-cluster` | Do not set up the cluster, use current kubectl context |

## `deck hosts`
Add the host names from the Deckfile to your local DNS resolve configuration (for example `/etc/hosts/`). 
If no `--name` is given and there is only one Deck defined in the Deckfile, this one is used. Otherwise `--name` is mandatory.
Use one of the `host_action` options to either list the specified host names, write or remove them. 

**Syntax:** `deck hosts host_action [ARGUMENTS] Deckfile`

**Example:** `deck hosts write https://github.com/gefyrahq/gefyra-demos.git`

### Positional Arguments
`host_action` The action to perform on the local host: valid is `write`, `remove`  and `list`
`Deckfile` the deck.yaml location (as file, git or https)

### Optional Arguments

| Argument           | Description                                     |
|:-------------------|:------------------------------------------------|
| `--name`           | The Deck that you want to run from the Deckfile |

## `deck version`
Print out the current CLI version.