<div align="center">

![APItoolkit's Logo](https://github.com/apitoolkit/.github/blob/main/images/logo-white.svg?raw=true#gh-dark-mode-only)
![APItoolkit's Logo](https://github.com/apitoolkit/.github/blob/main/images/logo-black.svg?raw=true#gh-light-mode-only)

## Marketing Website and Developer Documentation

[![QuickStatic](https://img.shields.io/badge/QuickStatic-Generator-f1541c?logo=rust)](https://github.com/topics/apitoolkit-sdk) [![APItoolkit SDK](https://img.shields.io/badge/APItoolkit-SDK-0068ff?logo=github)](https://github.com/topics/apitoolkit-sdk) [![Join Discord Server](https://img.shields.io/badge/Chat-Discord-7289da)](https://discord.gg/dEB6EjQnKB) [![APItoolkit Docs](https://img.shields.io/badge/Read-Docs-0068ff)](https://apitoolkit.io/docs?utm_source=github-sdks) 

[APItoolkit](https://app.apitoolkit.io) is an end-to-end API and web services management toolkit for engineers and customer support teams. This repository houses our [marketing website](https://apitoolkit.io) and [developer documentation](https://apitoolkit.io/docs) built using our in-house [QuickStatic](https://github.com/tonyalaribe/quickstatic) static site generator.

</div>

---

## Table of Contents

- [Getting Started](#getting-started)
- [Setup and Installation](#setup-and-installation)
- [Directories Overview](#directories-overview)
- [Docs Style Guide](#docs-style-guide)
- [Contributing and Help](#contributing-and-help)
- [License](#license)

---

## Getting Started

The content for every page is written in the [Djot](https://djot.net/) markup syntax (Same as Markdown but with some stricter rules) and each page is built using the [Shopify liquid templating language](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers) and a mix of HTML, CSS, and JavaScript. Everything in the root directory gets copied into the output directory in the exact order it appears, while markdown files are compiled into HTML files. To use any given template file for a particular page, simply reference the template file from the `frontmatter` like so:

```markdown
---
title: Page title
layout: themeName/blog/index.liquid
---

Page Content...
```

## Setup and Installation

Kindly follow the steps below to run this project locally:

1. Install QuickStatic using [Rust Cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html) like so:

```sh
cargo install quickstatic
```

2. Run the command below to install the styling dependencies:

```sh
npm run install
```

3. Run the command below to build the site:

```sh
npm run serve
```

4. Run the command below to build Tailwind CSS:

```sh
npm run build

# Or

npm run build:watch
```

## Directories Overview

| Path | Description |
| --- | --- |
| `_quickstatic/themes` | QuickStatic themes and components (default and docs). |
| `_quickstatic/public` | QuickStatic public build. |
| `index` | The home page. |
| `about` | The `/about` page. |
| `assets` | All image/video assets, fonts, CSS files, JS files, etc. |
| `blog` | The `/blog` pages. |
| `contact` | The `/contact` page. |
| `docs` | The `/docs` pages and content. |
| `events` | The `/events` pages. |
| `faq` | The `/faq` page. |
| `features` | The `/features` pages. |
| `pricing` | The `/pricing` page. |
| `privacy-policy` | The `/privacy-policy` page. |
| `refund-policy` | The `/refund-policy` page. |
| `static` | Some images and manifest files. |
| `terms-and-conditions` | The `/terms-and-conditions` page. |
| `thanks` | The `/thanks` page. |
| `tools` | The `/tools` pages. |
| `build.sh` | Script to fetch abd update the latest version of QuickStatic. |
| `Makefile` | Manage tasks related to Tailwind CSS processing. |
| `quickstatic.yaml` | QuickStatic configuration options. |
| `tailwind.config.js` | Tailwind CSS configuration options. |

## Docs Style Guide

Our documentation is a garden and we will continue to prune and maintain it. Feel free to share your feedback, let us know if something is broken or not working as it ought, and contribute too as we improve things. We have quite some internal guidelines with some processes we will eventually refactor, however, here are a few important tips to keep in mind:

### Style Guide

Everything is written in Markdown/Djot and we have a few custom interactive components (some of which we will improve as time goes on). We're currently adapting the [Google developer documentation style guide](https://developers.google.com/style) and using some principles from it to structure and write our documentation. A few quick writing tips:

- Follow existing patterns for structure, writing flow, code snippets comments, interactive components, etc. based on the category of docs in context (we currently have the [onboarding](https://apitoolkit.io/docs/onboarding/), [SDK guides](https://apitoolkit.io/docs/sdks/), [dashboard guides](https://apitoolkit.io/docs/dashboard/), and [features](https://apitoolkit.io/docs/features/) pages —with more coming soon) to ensure consistency and sustainable docs.
- Run your writing through grammar checkers (like Grammarly) to catch typos and other minor issues.
- DO NOT use tabs for code snippets but instead use two spaces.
- Indicate omitted code in click-to-copy snippets by using a comment and not ellipsis (use comments as much as possible).
- Always include alt tags in markdown images.
- Always include the `rel="noopener noreferrer"` attribute in links that should open in a new tab (e.g., `[link text](/link){target="_blank" rel="noopener noreferrer"}`).
- Don't remove something (styling, configuration, element, etc.) if you don't know what it does; ask someone first instead.

### Frontmatter

Here's an example of the `frontmatter` for the docs pages:

```markdown
---
title: Home
date: 2022-03-23
updatedDate: 2024-05-04
linkTitle: "Documentation"
menuWeight: 20
hideFileTree: true
hideToc: true
pageFullWidth: true
---
```

### Callout Icon Keys

We use [Font Awesome](https://fontawesome.com) icons for our callout component. The format and icon keys are described below. In the dashboard pages docs, we use only the icon while in the SDK Guides, we use the icon and an accompanying text (e.g., `Tip`, `Warning`, etc.).

```markdown
<div class="callout">
  <i class="fa-solid fa-forward"></i>
  <p>Content here....</p>
</div>
```

```markdown
<div class="callout">
  <p><i class="fa-regular fa-lightbulb"></i> <b>Tip</b></p>
  <p>Content here...</p>
</div>
```

<br />

<details>
<summary>Icon keys</summary>

| Icon Key | Description |
| -------- | ----------- |
| `fa-regular fa-lightbulb` | Optional information to help a user be more successful. |
| `fa-regular fa-circle-info` | Highlights information that users should take into account, even when skimming. |
| `fa-solid fa-book` | Definition of a term. |
| `fa-solid fa-forward` | Suggested next action (CTA). |
| `fa-solid fa-triangle-exclamation` | Important warning. |
</details>

### Tab Toggle Component

You can have more than one tab in the tab group toggle component but keep things max at three to ensure a good visual display on most screens. If you want to have multiple tab groups, ensure to increment the `data-tab-group` value (i.e., group1, group2, etc.) to avoid conflicts.

```markdown
<section class="tab-group" data-tab-group="group1">
  <button class="tab-button" data-tab="tab1">Tab A</button>
  <button class="tab-button" data-tab="tab2">Tab B</button>
  <div id="tab1" class="tab-content">Content A</div>
  <div id="tab2" class="tab-content">Content B</div>
</section>
```

## Contributing and Help

To contribute to the development of this project or request help from the community and our team, kindly do any of the following:
- Read our [Contributors Guide](https://github.com/apitoolkit/.github/blob/main/CONTRIBUTING.md).
- Join our community [Discord Server](https://discord.gg/dEB6EjQnKB).
- Create a [new issue](https://github.com/apitoolkit/apitoolkit-landing/issues/new/choose) in this repository.

## License

This repository is published under the [MIT](LICENSE) license.

---

<div align="center">
    
<a href="https://apitoolkit.io?utm_source=github-sdks" target="_blank" rel="noopener noreferrer"><img src="https://github.com/apitoolkit/.github/blob/main/images/icon.png?raw=true" width="40" /></a>

</div>
