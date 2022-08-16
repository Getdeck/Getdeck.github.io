---
title: What is a Deck?
sidebar_position: 3
slug: what-is-a-deck
description: Description of what a Deck is and how it is used for development
---

"Deck" is a new concept coming with **Getdeck**. Put in a few words:

> A Deck is the smallest installable unit in Getdeck

To stay with the nautical metaphor around Kubernetes: You may work on a large ship and that very ship is divided into 
many Decks. You can work one day on Deck A - and on Deck B the other day. But, since both Decks are on the same ship, 
they share a common ground. The Getdeck team decided to call installable units "Deck", because even the smallest ships 
have at least one Deck. Decks on a ship usually serve different purposes or offer certain capabilities and so do the 
Decks in Getdeck.

![What is a Deck](/img/what-is-a-deck.png)

Decks do share common components, which might end up as a production platform playing together. But, since it is not 
always workable to run the entire production infrastructure on a Pentium 3 notebook, Decks form a certain excerpt for 
you to work on. Just enough to get the work done in the required context. If you need another Deck, ask your DevOps 
to create it upon your requirements or go on and define it yourself.

Find Deck examples at the [Deckfile specification](/docs/deckfile-specs) page.

Having a _Deckfile_ defining the development setup is crucial for working with Getdeck. It's like a `docker-compose.yaml` 
for Kubernetes-based development environments. Yet, it is more difficult to 
compose a Kubernetes workload than a docker-compose file, as it requires the knowledge of a Kubernetes practitioner. 
Please read on how to write a Deckfile to specify a Kubernetes-based development that is close to your production 
system by using the workload descriptors you already use.