---
title: Using Files as a Source
sidebar_position: 3
slug: using-file-as-source
---

Let's assume you have a valid kubernetes resource defined in a locally acessible file called `hello.yaml`. How can you include this resoure within our Deckfile?
Similar to the inline definition, a new entry under `sources` has to be added within the Deckfile. This time, however, using the `type: file`. In addition, the location of the file has to be provided:

```yaml
- type: file
  ref: ./hello.yaml
```

If required, you can reference to parent or sub-folders, too. The provided paths are always with respect to your Deckfile.

```yaml
- type: file
  ref: ./resources/hello.yaml
```

```yaml
- type: file
  ref: ../resources/file/hello.yaml
```

Furthermore, it is possible to reference files by providing absolut paths. As you know, however, absolute paths are prone to break when sharing/moving Deckfiles.
Therefore, their use may not be recommended.

Besides local files, Getdeck supports refering to remote files via http(s) and git. Resources accessible via http(s) can simply be included using the corresponding url:

```yaml
- type: file
  ref: https://.../hello.yaml
```

Resource definitions living in a git repository can be included by referencing to the corresponding repository, in addition with the `targetRevision` (branch) and the `path` of the resource within the repositiony.

```yaml
- type: file
  ref: git@github.com:Getdeck/getdeck.git
  targetRevision: main
  path: ./hello.yaml
```

While local and remote file references are certainly very usefull in many situations, larger projects most likely have their resources defined using tool such as Helm and Kustomize - which can also be used with Getdeck.

PS: Getdeck does not yet support remote access to protected resources. However, if you require to access protected resources, please feel free to open an issue/discussion/feature request on github.
