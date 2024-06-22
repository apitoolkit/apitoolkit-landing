<div align="center">

![APItoolkit's Logo](https://github.com/apitoolkit/.github/blob/main/images/logo-white.svg?raw=true#gh-dark-mode-only)
![APItoolkit's Logo](https://github.com/apitoolkit/.github/blob/main/images/logo-black.svg?raw=true#gh-light-mode-only)

## Marketing Website and Developer Documentation

[![QuickStatic](https://img.shields.io/badge/QuickStatic-Generator-f1541c?logo=rust)](https://github.com/topics/apitoolkit-sdk) [![APItoolkit SDK](https://img.shields.io/badge/APItoolkit-SDK-0068ff?logo=github)](https://github.com/topics/apitoolkit-sdk) [![Join Discord Server](https://img.shields.io/badge/Chat-Discord-7289da)](https://discord.gg/dEB6EjQnKB) [![APItoolkit Docs](https://img.shields.io/badge/Read-Docs-0068ff)](https://apitoolkit.io/docs?utm_source=github-sdks) 

[APItoolkit](https://app.apitoolkit.io) is an end-to-end API and web services management toolkit for engineers and customer support teams. This repository houses our [marketing website](https://apitoolkit.io) and [developer documentation](https://apitoolkit.io/docs) built using our in-house [QuickStatic](https://github.com/tonyalaribe/quickstatic) static site generator.

</div>

---

## Table of Contents

- [Setup and Installation](#setup-and-installation)
- [Directories Overview](#directories-overview)
- [QuickStatic Tip](#quickstatic-tip)
- [Docs Style Guide](#docs-style-guide)
- [Contributing and Help](#contributing-and-help)
- [License](#license)

---

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

TBA

## QuickStatic Tip

Everything in the root directory gets copied into the output directory in the exact order it appears, while markdown files are compiled into HTML files. QuickStatic themes can be written using the [Shopify liquid templating language](https://github.com/Shopify/liquid/wiki/Liquid-for-Designers). To use any given template file for a particular page, simply reference the template file from the `frontmatter` like so:

```markdown
---
title: Page title
layout: themeName/blog/index.liquid
---

Page Content...
```

## Docs Style Guide

TBA

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
