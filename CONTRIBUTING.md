# Content

## Writing Best Practices

-   Write one sentence per line. [Read more](https://sive.rs/1s)
-   Make sure to add a beginning and a conclusion.
-   Try to talk about the problem before presenting the solution.
-   Run your article through a spellchecker and/or [grammarly](https://app.grammarly.com/) for possible typos.
-   Make sure your Markdown code is properly formatted, using a formatter like prettier is recommended.
-   Run `hugo serve` after making changes to verify the changes on your local.

# Naming Conventions

## Branch Naming Conventions

### Prefixes

Use standard nouns as `prefix` to categorize the branch, e.g:

-   blog : The branch only includes blog related changes such as adding/editing a blog
-   feature : When a new feature is to be added such as dark mode to our website
-   bugfix/hotfix : The purpose is to simple fix a bug that has sipped in

### Tips:

-   The branch name should be short and able to convey the objective of the changes
-   We'll follow the use of `/`(slash) delimiter between the category and branch motive
-   Branch names should be hyphenated, they should be in `lower-kebab-case`
-   For example, if the goal is to add a blog on ElasticSearch, the branch name can be - `blog/why-elastic-search`

### What to avoid:

-   Long names
-   Only numerals
-   Full sentences

The above-mentioned branches are meant to be short-lived. The branches should be deleted as soon as the branch is merged to `main`.

## PR Naming Convention

-   To keep a better track of blogs and filter them quickly, two things can be done:
-   Add a prefix `Blog: foo bar` to the title of the PR
-   Add the label `blog` to your PR

## Commit messages convention

-   We'll follow category naming convention similar to what is explained for branches.
-   Here's a quick rundown - [Standard Terminology](https://gist.github.com/turbo/efb8d57c145e00dc38907f9526b60f17)
