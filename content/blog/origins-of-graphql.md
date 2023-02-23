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

### Applying graph theory to fetch data

A graph with directions where the starting node and ending node are different can be considered a tree.

A GraphQL schema is an acyclic-directed graph containing types(node), representing entities, which can be traversed. Each type points to fields and can further point to another type.

### What took this long for using this approach

**RPC**(Remote Procedural Call) — Although being lightweight provides high performance this style suffers from the tight coupling.

**SOAP**(Simple Objects Access Protocol) — Supports only XML for sending and receiving requests and responses with large file sizes of XML the bandwidth required is large.

**REST**(Representational State Transfer) — REST provides server-side data available in the simple format of JSON. Although it is widely used for its decoupled, stateless, cache-friendly architecture it has few strain points.
  1. Over fetching — It takes a lot less time to fetch the 3 fields we need than to fetch the object with all the 20 keys.
  2. Under fetching — Hit more endpoints and make many requests rather than fetching everything in a single request.
  3. May add new route — Dev time may increase in doing so instead of adding a type or field as in GraphQL


**GraphQL**: GraphQL is a query language for your APIs. It’s also a runtime for fulfilling queries with your data. The GraphQL service is transport agnostic but is typically served over HTTP. With GraphQL, our clients can get all the data they need in one request.

GraphQL is often referred to as a declarative data-fetching language. By that, we mean that developers will list their data requirements as what data they need without focusing on how they’re going to get it.

**Design Principles**:

**Product centric** : A GraphQL query is hierarchical. Fields are nested within other fields, and the query is shaped like the data that it returns.

**Hierarchical**: GraphQL is driven by the data needs of the client and the language and runtime that support the client.

**Strongly Typed**: A GraphQL server is backed by the GraphQL type system. In the schema, each data point has a specific type against which it will be validated.

**Client Specified Queries**: A GraphQL server provides the capabilities that the clients are allowed to consume.

**Introspective**: The GraphQL language can query the GraphQL server’s type system or the schema.

### Products using GraphQL

GraphQL was developed by Facebook, which first began using it for mobile applications in 2012. The GraphQL specification was open sourced in 2015. It is now overseen by the GraphQL Foundation. Currently a large number of organizations are availing the benefits of GraphQL which includes Twitter, Instagram, Airbnb, Shopify, Newyork Times and many more.
