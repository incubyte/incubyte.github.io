+++
title = "Should you commit lock file?"
slug = "should-you-commit-lock-file"
date = 2023-09-27T15:48:02+05:30
image = "/images/2023/commit-lock-file/version-locking-case.svg"
draft = true
authors = ["Akshay Vadher"]
description = ""
tags = ["Guideline", "Best Practice", "Build", "Tooling", "Lock File", "Package Manager", "npm", "yarn", "pnpm", "bun"]
categories = ["Guideline", "Best Practice", "Software Craftsmanship"]
type = ""
+++

# _tl;dr;_

Yes, without fail.

# History

`npm` was the default package manager for `nodejs`.

[Npm](https://www.npmjs.com/) follows sem version system with wildcard support. That means if
a package `foo` is defined to use `^6.2.8`, and you run `npm install`, it will install the latest version of `6.x.x`
after `6.2.8`.

# Issues

## Deterministic builds

It is a nicer way to say, "It works on my machine".

Let's say I use `foo` with version `^6.2.8` and use `npn install`, and it will install the latest `6.2.9`. I commit my
code, and developer 2 checks out the code. (s)he executes `npm install`, and it will now install `6.2.10` because `^`
will
always check for the latest non-major version.

In the ideal world, `6.2.9` and `6.2.10` should be compatible, but in the real world, it is not. It can break your
build.
It might work for me, but it would break for developer 2 with the same code. Worse, it might work in your machine
but
break the Production.

[Yarn](https://yarnpkg.com/cli) first came up with the solution. You guessed it right: lock file. `yarn.lock`. It solves
the problem by locking the version of the package at time of first install. So, `^` will still install the non-major
version,
but from the second time onwards, it will install the same version as in the lock file.

## Security

Nobody thinks about this while starting a new project, but it is important. The lock file stores the integrity hash
along
with an exact dependency version, so it always checks whether the downloaded dependency is same as the one in lock
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

