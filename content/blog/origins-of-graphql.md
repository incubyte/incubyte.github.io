+++
title = "Origins of Graphql"
slug = "origin-of-graphql"
date = 2023-02-23T11:33:15+05:30
image = "/images/2023/02/graphql.png"
draft = false
authors = ["Nitin Rajkumar"]
description = "Origins of graphql and what took so long for this approach to take its implementation"
tags = ["Software Craftsmanship", "GraphQL"]
categories = ["Software Craftsmanship", "GraphQL"]
type = ""
+++

### Königsberg Bridge Problem — The Big Bang of GraphQL

{{< figure src="/images/2023/02/bridge.png" >}}

“Starting from any of the four land areas A, B, C, D is it possible to cross each of the seven bridges exactly once and come back to the starting point without swimming across the river?” Solving this is how people spent their Sunday afternoon picnics in 1735.

### What Leonhard Euler did to their Sundays?

{{< figure src="/images/2023/02/graph-representation.png" >}}

Being a mathematician he quickly constructed a graph representing the land as vertices and bridges as edges between the vertices. For a vertex to be left once and entered once it should have a minimum of two or even number of edges. None of the vertices have an even number of edges and hence it is impossible to cross without swimming across the river.

This is believed to have laid the foundation for a new branch in matheamtics <em>graph theory</em>.

### Applying graph theory to fetch data

Graph theory is representation of available data in the form of nodes and studying their relationship. Graph theory has its applications in many branches is sociology to study aquaintances, in chemistry to study molecules, in biology to study metabolic networks, in electronics to design circuits and so on. Ultimately every thing is data and the data can be represented in nodes and their relations.

A graph with directions where the starting node and ending node are different can be considered a tree.

A GraphQL schema is an acyclic-directed graph containing types(node), representing entities, which can be traversed. Each type points to fields and can further point to another type.

### What took this long for GraphQL

Invention arises from idleness, possibly also from laziness to save oneself from trouble - <em>Agatha Christie</em>

But, every invention is attributed to the need of the context of its times. 

Had people been both idle and lazy, GraphQL would have been developed long time before facebook had faced the challenge of transferring large amount of data between client and server, with its mobile application.

**RPC**(Remote Procedural Call) — The concept of Remote Procedure Call (RPC) was first introduced in the 1970s by Birrell and Nelson. RPC provides a simple interface for calling a procedure or a function on a remote machine. Although provides high performance it is not as scalable or cacheble as others like SOAP

**SOAP**(Simple Objects Access Protocol) — It was developed in late 1990s as an alternative for RPC. Supports only XML for sending and receiving requests and responses with large file sizes of XML the bandwidth required is large. Built in security can add to its complexity can make it slow.

**REST**(Representational State Transfer) — It was first introduced in 2000 by Roy Fielding. The REST architectural style was designed to be a more flexible and scalable alternative of SOAP. REST provides server-side data available in the simple format of JSON with standard HTTP methods(GET, POST, PUT, DELETE). Although it is widely used for its decoupled, stateless, cache-friendly architecture it has few strain points.
  1. Over fetching — It takes a lot less time to fetch the 3 fields we need than to fetch the object with all the 20 keys.
  2. Under fetching — Hit more endpoints and make many requests rather than fetching everything in a single request.
  3. May add new route — Dev time may increase in doing so instead of adding a type or field as in GraphQL


**GraphQL**: GraphQL is a query language for your APIs. It’s also a runtime for fulfilling queries with your data. The GraphQL service is transport agnostic but is typically served over HTTP. With GraphQL, our clients can get all the data they need in one request.

GraphQL is often referred to as a declarative data-fetching language. By that, we mean that developers will list their data requirements as what data they need without focusing on how they’re going to get it.

### Design Principles of GraphQL :

**Product centric** : A client query to server can be shaped like the data that it expects.

**Hierarchical and Circular**: Fields are nested within other fields.

**Strongly Typed**: A GraphQL server is backed by the GraphQL type system. In the schema, each data point has a specific type against which it will be validated.

**Introspective**: The GraphQL language can query the GraphQL server’s type system or the schema.

### Products using GraphQL

The GraphQL specification was open sourced in 2015. It is now overseen by the GraphQL Foundation. Currently a large number of organizations are availing the benefits of GraphQL which includes Twitter, Instagram, Airbnb, Shopify, Newyork Times, Spring Health and many more.
