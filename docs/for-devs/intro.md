---
sidebar_position: 1
---
# Introduction for Developers
If you want to follow [The Twelve-Factor App](https://12factor.net/) methodology for building software you also want to
adhere factor [X. Dev/prod parity](https://12factor.net/dev-prod-parity). If you are running `docker-compose`, `vagrant`
or local _virtualenv_ (of any kind) without using containers, you are not really following this approach 
(or at least this factor). You need to work with Kubernetes during development time, too.  
In order to get a close-to-production development environment, kindly ask your DevOps or operations staff to provide you 
with a [Deckfile](deckfile/deckfile-specs) (or create it yourself). This will finally remove the troubles in the transition 
of new Apps, features or bugfixes from development to production.  
Getdeck is here to make it convenient and rapid to create a Kubernetes-based development infrastructure for you and 
your team, without having to deal with all the tools. 