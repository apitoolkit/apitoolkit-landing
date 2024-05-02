---
title: Dashboard Guides
faLogo: chart-line
menuWeight: 3
hideFileTree: true
pageFullWidth: true
hideToc: true
pages:
  - title: Getting Started
    slug: /docs/dashboard/getting-started
    icon: list-check
  - title: Dashboard
    slug: /docs/dashboard/dashboard
    icon: qrcode
  - title: Endpoints
    slug: /docs/dashboard/endpoints
    icon: swap
  - title: Outbound Integrations
    slug: /docs/dashboard/outbound-integrations
    icon: arrows-turn-right
  - title: Changes & Errors
    slug: /docs/dashboard/changes-errors
    icon: bug
  - title: API Log Explorer
    slug: /docs/dashboard/api-log-explorer
    icon: list-tree
  - title: Documentation
    slug: /docs/dashboard/documentation
    icon: brackets-curly
  - title: Reports
    slug: /docs/dashboard/reports
    icon: chart-simple
---

# Dashboard Guides

In these guides, we will show you how to navigate through the APItoolkit dashboard and maximize all the powerful features you can access on different pages of the dashboard. Kindly click on any of the cards below to get started.

```=html
<div class="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 text-center">
{% for page in this.frontmatter.pages %}
  <a href="{{ page.slug }}" class="docs-card-2 rounded-md">
    <i class="fa-regular fa-{{ page.icon }} h-5 w-5 mr-2"></i>
    <p class="text-sm font-bold text-black dark:text-white">{{ page.title }}</p>
  </a>
{% endfor %}
</div>
```
