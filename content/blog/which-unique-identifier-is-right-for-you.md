+++
title = "Which Unique Identifier is right for you?"
slug = "which-unique-identifier-is-right-for-you"
date = 2024-06-06T00:00:00Z
image = "/images/2024/which-unique-identifier-is-right-for-you/which-unique-identifier-is-right-for-you-header.png"
draft = false
authors = ["Om Jogani", "Akshay Vadher"]
description = "Internal granular details of different Unique Identifier, that helps to pick right Identifier for your next project."
tags = ["Software Craftsmanship"]
categories = ["Software Craftsmanship"]
type = ""
+++

When was the last time you considered unique identifiers (IDs) for your projects? There are many options available, each with its pros and cons. In this article, we'll explore some popular choices to help you decide which one is best for your next project.

Choosing the right unique identifier is crucial. We want our IDs to be reliable, scalable, and performant. We’ll break down some well-known IDs: UUID, ULID, CUID, and NanoID, examining their strengths and weaknesses. By the end, you'll be able to choose the right identifier for your needs.

### UUID (Universally Unique Identifier)

UUIDs are widely used to generate unique IDs for objects, often as primary keys. UUIDs have several versions, with version 4 being the most common.


{{< figure src="/images/2024/which-unique-identifier-is-right-for-you/UUID-architecture.png" >}}

#### Pros

- It doesn't require knowledge of other systems to generate an ID. (generate independently)
- Reduce the risk of a single point of failure in a distributed system while it doesn't depend on centralized service.
- It's simple and works well with small projects.
- It has native support for some of the databases like PostgreSQL (`uuid_generate_v4()`), MySQL (`UUID()`), etc.

- Independently generated without needing knowledge of other systems.
- Reduces single points of failure in distributed systems.
- Simple and works well for small projects.
- Supported by databases like PostgreSQL (`uuid_generate_v4()`), MySQL (`UUID()`), and more.

#### Cons

- Can impact insert performance in MySQL (MySQL uses B+ tree which requires frequent re-balancing aka page splitting. With randomness, it takes significantly longer than usual to perform tree re-balancing)
- Takes up more space (128 bits) than traditional integer-based IDs.
- Not naturally ordered, making sequential ordering difficult.

---

### ULID (Universally Unique Lexicographically Sortable Identifier)

ULID addresses some limitations of UUID. It’s a 26-character ID composed of a 48-bit timestamp and 80 bits of randomness, URL-safe, and case insensitive.

{{< figure src="/images/2024/which-unique-identifier-is-right-for-you/ULID-architecture.png" >}}

It uses a UNIX timestamp in milliseconds and a cryptographically secure source of randomness to generate the second part of the ULID (randomness).

#### Pros

- Lexicographical sorting is the biggest highlight of ULID, allowing IDs to be sorted in their natural order.
- More readable and compact than UUID, saving storage space.
- Ideal solution if there is a need for sequentiality or order.

#### Cons

- Randomness is limited in the timestamp, so it is possible to generate multiple IDs within the same millisecond.
- Due to limited randomness, it doesn't guarantee a collision-resistant solution.
- Not widely adopted due to compatibility issues with UUID systems.

---

### CUID (Collision-Resistant Unique Identifier)

CUIDs are designed for high collision resistance and performance, with a default length of 24 characters but configurable up to 32 characters.

To react 50% chance of collision, you'd need to generate roughly 4,000,000,000,000,000,000 IDs. Which is quite huge.

{{< figure src="/images/2024/which-unique-identifier-is-right-for-you/CUID-architecture.png" >}}

It uses a combination of UNIX time in milliseconds, salt, session count, fingerprint, and hashes these values with the SHA3 hashing algorithm, prefixed by a random alphabet.

#### Pros

- Strong collision resistance, making it highly unique.
- Secure, non-guessable, URL-friendly, and supports offline ID generation.
- Horizontally scalable, can generate IDs across multiple machines.

#### Cons

- It doesn't work well if sequentiality is in focus.
- Less performant if security and cross-host uniqueness are not priorities.
- Complex due to SHA3 hashing and Pseudorandom Number Generator (PRNG).


---

### NanoId

NanoID is a tiny, secure, URL-friendly, unique string ID generator for JavaScript. With a similar number of random bits, NanoID has a collision probability comparable to UUID.

NanoID is 21 characters long and ensures unpredictability by using a cryptographic random number generator.

Like CUID, it is possible to configure the length of NanoID.

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

- Fast ID generation, compact, and URL-friendly.
- Wide language support and relies on a cryptographic secure number generator (CSPRNG), making it difficult to predict or guess the next ID.
- More storage-efficient compared to UUID.

#### Cons

- Similar collision probability as UUID, not guaranteeing strong collision resistance.
- Limited information encoding due to reliance on CSPRNG.
- Not ideal for applications requiring sequential order, though configurable.

---

### Summary

| Functionality / Feature | UUID | ULID | CUID | NanoID  |
| ----------------------- | ---- | ---- | ---- | ------- |
| Sequentiality / Order   | NO   | YES  | NO   | PARTIAL |
| Performance             | NO   | YES  | YES  | YES     |
| Storage Efficient       | NO   | YES  | YES  | YES     |
| Collision Resistant     | YES  | YES  | YES  | YES     |
| Wide Language Support   | YES  | YES  | NO   | YES     |
| Speed of ID Generation  | YES  | YES  | NO   | YES     |
| Adoption (Community)    | YES  | NO   | YES  | YES     |

> Note: For highly critical systems where security is a top priority, CUID might be a better choice because it’s harder to guess the next ID. It uses SHA3 and CSPRNG to make IDs more random and unpredictable. If security isn’t the biggest concern, NanoID or other IDs can be good options.

### Conclusion

Choosing the right ID system for your application depends on various factors like sequentiality, performance, storage efficiency, collision resistance, and language support. Now that you understand how these IDs work and when to use them, you can make an informed decision for your next project!
