+++
title = "The Importance of Committing Lock Files in Dependency Management"
slug = "should-you-commit-lock-file"
date = 2023-09-27T15:48:02+05:30
image = "/images/2023/commit-lock-file/header.jpg"
draft = false
authors = ["Akshay Vadher"]
description = ""
tags = ["Dependency Management", "Best Practices"]
categories = ["Dependency Management", "Best Practices"]
type = ""
+++

In software development, dependency management is a critical aspect that directly impacts the stability and reproducibility of your projects. When working with package managers like npm, yarn, or others, one crucial decision developers must make is whether to commit the lock file to version control. 

In this article, we'll explore why it's essential to commit lock files and how they help in ensuring deterministic, secure, and consistent builds.

### A Bit of History

As you know, `npm` was the default package manager for `nodejs`.

[Npm](https://www.npmjs.com/) follows sem version system with wildcard support. That means if
a package `foo` is defined to use `^6.2.8`, and you run `npm install`, it will install the latest version of `6.x.x`
after `6.2.8`.

### Issues

#### Deterministic Builds and "It Works on My Machine" Conundrum

Imagine you are using `foo` with version `^6.2.8` and you run `npm install`. By default, npm installs the latest version, `6.2.9`. Now, once this code is committed, other developers can check out the same codebase and proceed to execute `npm install`. But this time it might install `6.2.10` because `^` always check for the latest non-major version.

In the ideal world, `6.2.9` and `6.2.10` should be compatible, but in the real world, that is not the case. These discrepancies can break your
build. Worse, it might work on your machine but break the production.

- ##### The Solution: Lock Files

[Yarn](https://yarnpkg.com/cli) first introduced the concept of lock files, `yarn.lock`. It solves
the problem by locking the version of the package during initial installation. So, `^` will still install the non-major
version, but in the subsequent installations, it will use the same version as in the lock file.

- ##### How Lock Files Work?

`npm install` automatically generates the lock file.

Take a look at the below diagram. 

Application A depends on libraries B (1.2.9) and C (^6.8.7). B depends on C (6.8.8), D (4.5.3), and E (7.2.9).

{{< figure src="/images/2023/commit-lock-file/version-locking-case.png" >}}

In the lock file, all the dependencies are flattened with their versions mentioned. So, the lock file will look like this
B (1.2.9), C(6.8.7 and 6.8.8), D (4.5.3), and E (7.2.9), along with all the individual libraries dependencies mentioned and
recursively so on.

Since C has been defined as `^`, which means among 6.8.7 and 6.8.8, the 6.8.8 version will win. So, the next time you try to install dependencies, it won't install 6.8.10 even if it has been released and meets the `^` criteria.

_The above description is a grossly simplified explanation of the process._

- ##### The Pitfalls of Using Exact Versions

Let's eliminate wildcard characters (`^`, `~`, `*`, etc.) and use the exact version. Wouldn't that solve the problem?

Unfortunately, that's not how it works. 
Even if you use the exact version for the library, the library itself might have dependencies with wildcard
dependencies, and the application is still prone to breaking.

#### Security

Lock files stores the integrity hash along with an exact dependency version, so it always checks whether the downloaded dependency is same as the one in the lock file.

Yarn introduced many features like caching, parallel downloads, etc. However, npm has caught up with most of these. And now, at the time of writing this, yarn and npm are almost the same.

### Using a Lock File

Merely having a lock file isn't sufficient. You need to make sure you execute the proper command(s). 
For instance, `npm install` is intended to be used only in developer mode. If you want to install dependencies for production, you
need to use `npm ci`.

{{< figure src="/images/2023/commit-lock-file/table.png" figcaption="List of commands with different modes for different tools" >}}

![List of commands for different tools](/images/2023/commit-lock-file/table.png)List of commands with different modes for different tools

Here are a list of commands with different modes for different tools:

|   Tool   | Lock file name      | Developer      | CI/PROD                                                                                               | Install Only Production dependencies                                |
|----------|---------------------|----------------|-------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
|   npm    | `package-lock.json` | `npm install`  | `npm ci`                                                                                              | `npm ci --omit=dev` (or `npm i` with `NODE_ENV` set to `PRODUCTION` |
|   yarn   | `yarn.lock`         | `yarn`         | `yarn` (`--frozen-lockfile` or `--immutable` option)                                                  | `yarn install`                                                      |
|   pnpm   | `pnpm-lock.yaml`    | `pnpm install` | `pnpm install --frozen-lockfile` (`--frozen-lockfile` is not required if `CI` ENV variable is `true`) | `pnpm install --frozen-lockfile --prod`                             |
|   bun    | `bun.lockb`         | `bun install`  | `bun install --frozen-lockfile`                                                                       | `bun install --frozen-lockfile --production`                        |

### When Not to Commit Lock Files?

In cases where you're building a library and publishing it, you don't want to lock the dependencies because it might break the host
application. Instead, let the host application handle locking to avoid potential conflicts. You can mark a range of
versions your library supports.

### Should You Change a Lock File Manually?

No.

When facing issues caused by package updates, resist the temptation to manually adjust the lock file. It's usually better to adapt your application to work with the latest version, or update your package.json to ensure correct lock file generation during the next installation.

### Applicability Across Languages

This applies not only to [Node.js](https://nodejs.org/en) but any language that uses package manager. For example,
[Go](https://golang.org/) uses [go.mod](https://golang.org/ref/mod) and [go.sum](https://golang.org/ref/mod#go-sum-in),
[Rust](https://www.rust-lang.org/)
uses [Cargo.lock](https://doc.rust-lang.org/cargo/guide/cargo-toml-vs-cargo-lock.html),
[Python](https://www.python.org/) uses [requirements.txt](https://pip.pypa.io/en/stable/user_guide/#requirements-files),
etc.

### Conclusion

In conclusion, committing lock files, along with executing the appropriate commands for dependency installation, is a best practice that ensures deterministic amd secure builds. 
By doing so, developers can mitigate issues related to version conflicts, enhance project security, and foster collaborative development in an environment of consistency and reliability.

