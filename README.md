# incubyteco.github.io

[Our blog! ✍🏼](https://blog.incubyte.co/)

## How to contribute

- Checkout the project and submodule using `git clone --recurse-submodules https://github.com/incubyte/incubyte.github.io.git`
- Install [hugo](https://gohugo.io/getting-started/installing/)
- [Linux] `hugo server -D` to start the server in local and visit http://localhost:1313
- [Windows] `docker run --rm -it -p 1313:1313 -v ${PWD}:/src klakegg/hugo:alpine server` to start the server in local and visit http://localhost:1313
- `hugo new blog/article-name.md` to create new post
- If you are adding images make sure they are optimized, we suggest something like `https://squoosh.app/`, images are stored in `static/images`
- Commit in a new branch and create PR to `main` branch
