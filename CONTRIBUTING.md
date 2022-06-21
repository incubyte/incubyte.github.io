# Naming Conventions

## Branch Naming Conventions

### Prefixes

Use standard nouns as `prefix` to categorize the branch, e.g:

- blog : The branch only includes blog related changes such as adding/editing a blog
- feature : When a new feature is to be added such as dark mode to our website
- bugfix/hotfix : The purpose is to simple fix a bug that has sipped in

### General naming guidelines:

- The branch name should be short and able to convey the objective of the changes
- We'll follow the use of `/`(slash) delimiter between the category and branch motive
- Branch names shiuld be hyphenated, they should be in `lower-kebab-case`
- For example, if the goal is to add a blog on Elastic Search, the branch name can be - `blog/why-elastic-search`

### What to avoid:

- Long names
- Only numerals
- Full sentences

The above mentioned branches are meant to be short lived. The branches should be deleted as soon as the branch is merged to `main`.

## PR Naming Convention

- To keep a better track of blogs and filter them quickly, two things can be done:
- Add a prefix `Blog: foo bar` to the title of the PR
- Add the label `blog` to your PR

## Commit messages convention

- We'll follow category naming convention similar to what is explained for branches.
- Here's a quick rundown - [Standard Terminology](https://gist.github.com/turbo/efb8d57c145e00dc38907f9526b60f17)
