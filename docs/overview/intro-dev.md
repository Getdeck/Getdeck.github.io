---
sidebar_position: 1
slug: introduction-for-developers
---
# Introduction for Developers
If you want to follow [The Twelve-Factor App](https://12factor.net/) method for building software, you also want to
adhere to factor [X. Dev/prod parity](https://12factor.net/dev-prod-parity). If you are running `docker-compose`, `vagrant`
or local _virtualenv_ (of any kind) without using containers, you are not following this approach 
(or at least this factor). 

> As a developer, you need to work with Kubernetes during development time, too.

To get a close-to-production development environment, kindly ask your DevOps or operations staff to provide you 
with a [Deckfile](/docs/deckfile-specs/) (or create it yourself). This will finally remove the troubles in the transition 
of new Apps, features or bug fixes from development to production. 

<hr/>

Getdeck is here to make it convenient and rapid to create a Kubernetes-based development infrastructure for you and 
your team, without having to deal with all the tools. 