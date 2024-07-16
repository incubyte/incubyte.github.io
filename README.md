# [incubyte.github.io](https://engineering.incubyte.co)

[Our blog! ✍🏼](https://engineering.incubyte.co/)

## Contributing

### Prerequisites

- Install [hugo](https://gohugo.io/getting-started/installing/)

For Linux and Mac you can go with [brew](https://brew.sh/), or your distro's package manager, on Windows you can use [winget](https://apps.microsoft.com/store/detail/app-installer/9NBLGGH4NNS1?hl=en-in&gl=in&rtc=1)

```bash
# For Mac and Linux
brew install hugo

# For Linux with package managers
apt install hugo

# For Windows
winget install Hugo.Hugo.Extended
```

### Local Setup

Checkout the project and submodule

```bash
git clone --recurse-submodules https://github.com/incubyte/incubyte.github.io.git
cd incubyte.github.io
hugo server -D
```

The blog should now be live at http://localhost:1313

To add a new article

```bash
hugo new blog/article-name.md`
```

If you are adding images make sure they are optimized, we suggest something like `https://squoosh.app/`, images are stored in `static/images`

Commit in a new branch and create PR against `main` branch

[Contributing Guidelines](./CONTRIBUTING.md)
