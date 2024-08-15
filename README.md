# [incubyte.github.io](https://blog.incubyte.co)

[Our blog! ✍🏼](https://blog.incubyte.co/)

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
```

Run the server

```bash
cd incubyte.github.io
hugo server -D
```

The blog should now be live at http://localhost:1313

To add a new article

```bash
hugo new blog/article-name.md`
```

- If you are adding images, add them to `static/images`, make sure they are optimized using `https://squoosh.app/`
- Make sure to run `npx prettier --write .\content\blog\<filename>.md` before committing
- Commit in a new branch and create PR against `main` branch

You can learn more about [contributing guidelines here](./CONTRIBUTING.md)
