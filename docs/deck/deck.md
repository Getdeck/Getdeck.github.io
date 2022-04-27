---
sidebar_position: 2
---

# What is a Deck?
Deck is a new concept coming with **Getdeck**. A simple attempt to explain it would be:

> A Deck is the smallest installable unit in Getdeck

To stay with the nautical metaphor around Kubernetes: You may work on a large ship and that very ship is 
divided into multiple decks. You can work one day on deck A - and on deck B the other day. However, since both decks 
are on the same ship they share a common ground. The Getdeck team decided to call installable units a deck, 
because even the smallest ships has at least one deck. Decks on a ship usually serve different purposes or offer 
certain capabilities and so are decks in Getdeck.

Decks do share common components which might end up as a production platform playing together. However, since it is not 
always feasible to run the entire production infrastructure on your Pentium 3 notebook, decks form a certain excerpt for 
you to work on. Just enough to get your work done in the required context. If you need another deck, ask your operators 
to create it upon your requirements or go on and define it yourself.

Find deck examples at the [Deckfile specification](/docs/deckfile/specs) page.

Providing a _Deckfile_ is crucial for working with Getdeck. It's like a `docker-compose.yaml` for Kubernetes-based development
environments. However, it is more difficult to compose a Kubernetes workload than a docker-compose file, as it requires
the knowledge of a Kubernetes practitioner. Please read on how to write a Deckfile to specify a Kubernetes-based development
which is close to your production system by using the workload descriptors you potentially already use.
