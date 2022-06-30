---
sidebar_position: 3
---
# CLI Reference

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
Create (or reuse) a Kubernetes cluster and install the selected deck to it. The `Deckfile` parameter 
is the location of `deck.yaml` (or a specific file). It can be a local file system path, `http`, `https` 
or a `git` repository. If no `--name` is given and there is only one deck defined in the Deckfile, this one 
is installed. Otherwise `--name` is mandatory.

**Syntax:** `deck get [ARGUMENTS] Deckfile`

**Example:** `deck get https://github.com/gefyrahq/gefyra-demos.git`

### Positional arguments
`Deckfile` the deck.yaml location (as file, git or https)

### Optional arguments

| Argument                        | Description                                                                                           |
|:--------------------------------|:------------------------------------------------------------------------------------------------------|
| `--name NAME`                   | The deck that you want to run from the Deckfile                                                       |
| `-I`, `--no-cluster`            | Do not set up the cluster, use current kubectl context                                                |
| `-W, --wait`                    | Wait for the Pods of the Deck to become ready                                                         |
| `-T TIMEOUT, --timeout TIMEOUT` | Timeout (in seconds, default 120) for the Pods of the Deck to become ready; if exceeded the run fails |


## `deck list`
List the available decks from a given Deckfile.

**Syntax:** `deck list Deckfile`

**Example:** `deck list https://github.com/gefyrahq/gefyra-demos.git`

### Positional arguments
`Deckfile` the deck.yaml location (as file, git or https)


## `deck stop`
Stop a running cluster for a given Deckfile.

**Syntax:** `deck stop Deckfile`

**Example:** `deck stop https://github.com/gefyrahq/gefyra-demos.git`

### Positional arguments
`Deckfile` the deck.yaml location (as file, git or https)


## `deck remove`
Remove a deck from a Kubernetes cluster or remove the entire cluster. If no `--name` is given and
there is only one deck defined in the Deckfile, this one is removed. Otherwise `--name` is mandatory.

**Syntax:** `deck remove [ARGUMENTS] Deckfile`

**Example:** `deck remove --cluster https://github.com/gefyrahq/gefyra-demos.git`

### Positional arguments
`Deckfile` the deck.yaml location (as file, git or https)

### Optional arguments

| Argument           | Description                                     |
|:-------------------|:------------------------------------------------|
| `--name`           | the deck that you want to run from the Deckfile |
|`--cluster` | remove the entire cluster from the local system |
| `-I`, `--no-cluster` | do not set up the cluster, use current kubectl context |


## `deck version`
Print out the current CLI version.