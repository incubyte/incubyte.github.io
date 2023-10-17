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

## A Bit of History

As you know, `npm` is the default package manager for `nodejs`.

[Npm](https://www.npmjs.com/) follows sem version system with wildcard support. That means if
a package `foo` is defined to use `^6.2.8`, and you run `npm install`, it will install the latest version of `6.x.x`
after `6.2.8`.

## Issues

### Deterministic Builds and "It Works on My Machine" Conundrum

Imagine you are using `foo` with version `^6.2.8` and you run `npm install`. By default, npm installs the latest version, `6.2.9`. Now, once this code is committed, other developers can check out the same codebase and proceed to execute `npm install`. But this time it might install `6.2.10` because `^` always check for the latest non-major version.

In the ideal world, `6.2.9` and `6.2.10` should be compatible, but in the real world, that is not the case. These discrepancies can break your
build. Worse, it might work on your machine but break the production.

#### The Solution: Lock Files

[Yarn](https://yarnpkg.com/cli) first introduced the concept of lock files, `yarn.lock`. It solves
the problem by locking the version of the package during initial installation. So, `^` will still install the non-major
version, but in the subsequent installations, it will use the same version as in the lock file.

#### How Lock Files Work?

`npm install` automatically generates the lock file.

Take a look at the below diagram. Application "A" depends on libraries "B" (1.2.9) and "C" (^6.8.7). "B" depends
on "C"(6.8.8), "D"(4.5.3), and "E"(7.2.9).

{{< figure src="/images/2023/commit-lock-file/version-locking-case.png" >}}

All the dependencies are flattened in the lock file with all versions mentioned. So, the lock file will look like this
B(1.2.9), C(6.8.7 and 6.8.8), D(4.5.3), and E(7.2.9); along with all the individual libraries dependencies mentioned and
recursively so on.

Since the "C" has been defined as `^`, which means among 6.8.7 and 6.8.8, the 6.8.8 version will win. So,
the next time you try to install dependencies, it won't install 6.8.10 even if it has been released and meets the `^` criteria.

_The above description is a grossly simplified explanation of the process._

#### The Pitfalls of Using Exact Versions

Let's eliminate wildcard characters (`^`, `~`, `*`, etc.) and use the exact version. Wouldn't that solve the problem?

Unfortunately, that's not how it works. Even if you use the exact version for the library, the library itself might have dependencies with wildcard
dependencies, and the application is still prone to breaking.

### Security

Nobody thinks about this while starting a new project, but it is important. The lock file stores the integrity hash
along with an exact dependency version, so it always checks whether the downloaded dependency is same as the one in lock
file.

Yarn introduced many things along with that, like caching, parallel downloads, etc. However, npm also caught up with the
most features. And now, at the time of writing this, yarn and npm are almost the same.

# Using lock file

Just having a lock file does not solve all the issues. You need to make sure you execute the proper command(s). For
example,
`npm install` is intended to be uses only in developer mode. If you want to install dependencies for production, you
need
to use `npm ci`.

Here is the list of commands with different modes for different tool

| Tool | Lock file name      | Developer      | CI/PROD                                                                                               | Install Only Production dependencies                                |
|------|---------------------|----------------|-------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------|
| npm  | `package-lock.json` | `npm install`  | `npm ci`                                                                                              | `npm ci --omit=dev` (or `npm i` with `NODE_ENV` set to `PRODUCTION` |
| yarn | `yarn.lock`         | `yarn`         | `yarn` (`--frozen-lockfile` or `--immutable` option)                                                  | `yarn install`                                                      |
| pnpm | `pnpm-lock.yaml`    | `pnpm install` | `pnpm install --frozen-lockfile` (`--frozen-lockfile` is not required if `CI` ENV variable is `true`) | `pnpm install --frozen-lockfile --prod`                             |
| bun  | `bun.lockb`         | `bun install`  | `bun install --frozen-lockfile`                                                                       | `bun install --frozen-lockfile --production`                        |

# When not to commit?

If you are making a library and publishing it, you don't want to lock the dependencies because it might break the host
application. It should be the host application that is responsible for managing locking. You can mark a range of
versions your library supports.

# Should you change it manually?

No.

There could be a case where your application is breaking because "C" released a breaking change. So now you are tempted
to lower the version in the lock file so that it locks the correct version. Instead of doing that, (best if you can) fix
the
application to work with the latest version because that is good for the long term, or change the package.json itself so
that the next time you do `npm install`, it will correct the lock file.

# Other languages

This applies not only to [Node.js](https://nodejs.org/en) but any language that uses package manager. For example,
[Go](https://golang.org/) uses [go.mod](https://golang.org/ref/mod) and [go.sum](https://golang.org/ref/mod#go-sum-in),
[Rust](https://www.rust-lang.org/)
uses [Cargo.lock](https://doc.rust-lang.org/cargo/guide/cargo-toml-vs-cargo-lock.html),
[Python](https://www.python.org/) uses [requirements.txt](https://pip.pypa.io/en/stable/user_guide/#requirements-files),
etc.

# Conclusion

Whatever tool you use, always commit the lock file after installing the dependencies for the first time. Along with
that, always execute the proper command for installing dependencies.

The lock file and proper command will make sure that your build is deterministic and secure.

