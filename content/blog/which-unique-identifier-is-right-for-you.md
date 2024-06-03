+++
title = "Which Unique Identifier is right for you?"
slug = "which-unique-identifier-is-right-for-you"
date = 2024-06-01T14:35:19+05:30
image = "/images/2024/which-unique-identifier-is-right-for-you/which-unique-identifier-is-right-for-you-header.png"
draft = false
authors = ["Om Jogani"]
description = "Internal granular details of different Unique Identifier, that helps to pick right Identifier for your next project."
tags = ["Unique Identifiers", "Software Craftsmanship"]
categories = ["Internals", "Software Craftsmanship"]
type = ""
+++

When was the last time you thought about IDs, There's many out there, all with their Pros and Cons, let's explore a few of them in this article.

Choosing the right Unique Identifier for your next project is crucial. We always want to ensure that our Unique Identifier is reliable, scalable, and gives more performance. In this article, we’ve broken down some well-known IDs such as UUID, ULID, CUID, and NanoID. Each has its pros and cons. As an outcome of this article, you’ll be able to decide the right Unique Identifier for your next project.

### UUID

Universally Unique Identifiers also known as UUIDs. It allows you to generate a unique ID that can be used to identify objects uniquely. We generally use it for Primary Key. It has from version_1 to version_8 while writing this article, the Most widely used version is version_4.

Let's break down UUID for better visibility.

{{< figure src="/images/2024/which-unique-identifier-is-right-for-you/UUID-architecture.png" >}}

#### Pros

- It doesn't require knowledge of other systems to generate an ID. (generate independently)
- Reduce the risk of a single point of failure in a distributed system while it doesn't depend on centralized service.
- It's simple and works well with small projects.
- It has native support for some of the databases like PostgreSQL (`uuid_generate_v4()`), MySQL (`UUID()`), etc.

#### Cons

- It impacts insert performance with MySQL at scale: MySQL uses B+ tree which requires frequent re-balancing aka Page Splitting. When randomness is there in the algorithm, it takes significantly longer than usual to perform tree re-balancing or page splitting.
- UUID takes larger space (128 bits) compared to traditional integer-based IDs. So, It's not storage efficient.
- Ordering can be a nightmare while it's not naturally ordered or sequential. Where sequentiality is important UUID may not be the best option to consider.

---

### ULID

Universally Unique Lexicographically Sortable Identifier also known as ULID. It was specially designed to overcome the limitations of UUID. It's 26 characters long ID (48 bits of timestamp and 80 bits of randomness), URL safe, doesn't contain any special character, case insensitive.

Let's break down ULID to grab granular details.

{{< figure src="/images/2024/which-unique-identifier-is-right-for-you/ULID-architecture.png" >}}

It uses a UNIX Timestamp in milliseconds and a Cryptographically secure source of randomness to generate 2nd part of ULID (Randomness).

#### Pros

- Lexicographical Sorting is the biggest highlight of ULID. It can be sorted by their natural order.
- It's more readable and URL friendly and moreover, it is compact in length compared to UUID. Hence it saves space in terms of storage.
- ULID is the most feasible solution if there is a need for sequentiality or order.

#### Cons

- Randomness is limited in timestamp, It is possible to generate multiple IDs within the same millisecond.
- Due to limited randomness, It doesn't guarantee a collision-resistant solution.
- It has yet to be adopted much due to compatibility issues with UUID. (if systems are already using UUID).

---

### CUID

Collision-resistant Unique Identifier also known as CUID, It's secure, guarantees strong collision-resistant and provides good performance.

To react 50% chance of collision, you'd need to generate roughly 4,000,000,000,000,000,000 IDs. Which is quite huge.

It is configurable to at max 32 characters long, the default length is 24 characters.

Let's break it down to understand it better

{{< figure src="/images/2024/which-unique-identifier-is-right-for-you/CUID-architecture.png" >}}

It uses a combination of UNIX Time in Millisecond + Salt + Session Count + Fingerprint and Hash these values with SHA3 Hashing Algorithm prefix by random alphabet.

#### Pros

- The main advantage of CUID is Collision-Resistant, It's quite strong in ensuring uniqueness. It focuses on keeping entropy as high as possible to ensure correct randomness.
- It's secure and non-guessable, provides offline ID generation support, URL friendly (Doesn't contain special symbols).
- CUID is horizontally scalable, it can generate IDs on various machines with coordination.

#### Cons

- It doesn't work well if sequentiality is in focus.
- If security and cross-host uniqueness are not priorities then CUID doesn't perform well.
- It's a little complex due to SHA3 Hashing and Pseudorandom Number Generator (PRNG) compared to UUID.

---

### NanoId

It is a tiny, secure, URL-friendly, unique string ID generator for JavaScript. NanoId has a similar number of random bits, hence, It has similar collision probability as UUID.

The length of NanoId is 21 characters long. It ensures unpredictability by using Cryptographic Random Number Generator.

It is possible to configure the length of NanoId, similar to CUID.

Let's break it down to understand how it works

{{< figure src="/images/2024/which-unique-identifier-is-right-for-you/NanoID-architecture.png" >}}

#### Operation in NanoID

```text
// Randomly Generated 21 bytes Sequence (generated using CSPRNG)
[23, 45, 67, 89, 12, 34, 56, 78, 90, 21, 43, 65, 87, 109, 131, 151, 171, 191, 210, 233, 255]
```

On each element of the above array, the modulus operation is performed with 64.

```text
// Example
23 % 64 = 23 (character: 'X')
45 % 64 = 45 (character: 't')
67 % 64 = 3 (character: 'd')
and so on...
```

#### Pros

- NanoId has fast ID generation. It is compact and URL-friendly (because of no special character).
- It has wide language support, It relies on a Cryptographic Secure Number Generator (CSPRNG) makes it difficult to predict or guess the next ID.
- In terms of Storage, because of it's compactness, it takes less storage compared to UUID.

#### Cons

- It has a similar probability of Collision as UUID. So, can't guarantee strong collision resistance.
- It relies on CSPRNG instead of timestamps or other information directly, hence it has limited information encoding.
- While everything depends on Random values, It may not be a good option if we consider sequentiality or order. Although it can be configured with custom configuration.

### Summary

| Functionality / Feature | UUID | ULID | CUID | NanoID  |
| ----------------------- | ---- | ---- | ---- | ------- |
| Sequentiality / Order   | NO   | YES  | NO   | PARTIAL |
| Performance             | NO   | YES  | YES  | YES     |
| Storage Efficient       | NO   | YES  | YES  | YES     |
| Collision Resistant     | YES  | YES  | YES  | YES     |
| Wide Language Support   | YES  | YES  | NO   | YES     |

### Conclusion

Choosing the right ID system for your application depends on various factors such as sequentiality, performance, storage efficiency, collision resistance, and language support.

Now, that you know how those IDs work internally and When to use which ID, decide Which ID is best suited for your next project!
