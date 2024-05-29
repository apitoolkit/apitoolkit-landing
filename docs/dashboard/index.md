---
title: Dashboard Guides
date: 2024-04-22
updatedDate: 2024-05-28
faLogo: chart-line
menuWeight: 3
pageFullWidth: true
hideToc: true
pages:
  - title: Get Started
    slug: /docs/dashboard/dashboard-pages/get-started
    icon: list-check
  - title: Dashboard
    slug: /docs/dashboard/dashboard-pages/dashboard
    icon: qrcode
  - title: Endpoints
    slug: /docs/dashboard/dashboard-pages/endpoints
    icon: swap
  - title: API Log Explorer
    slug: /docs/dashboard/dashboard-pages/api-log-explorer
    icon: list-tree
  - title: Changes & Errors
    slug: /docs/dashboard/dashboard-pages/changes-errors
    icon: bug
  - title: Outgoing Integrations
    slug: /docs/dashboard/dashboard-pages/outgoing-integrations
    icon: arrows-turn-right
  - title: OpenAPI/Swagger
    slug: /docs/dashboard/dashboard-pages/openapi-docs
    icon: brackets-curly
  - title: Reports
    slug: /docs/dashboard/dashboard-pages/reports
    icon: chart-simple
  - title: Project Settings
    slug: /docs/dashboard/settings-pages/project-settings
    icon: gear
  - title: Manage Members
    slug: /docs/dashboard/settings-pages/manage-members
    icon: user-plus
  - title: API Keys
    slug: /docs/dashboard/settings-pages/api-keys
    icon: key
---

# Dashboard Guides

In these guides, you will learn how to effectively navigate through the APItoolkit dashboard and maximize all the powerful features accessible on different pages of the dashboard. Kindly click on any of the cards below to get started.

```=html
<div class="mt-8 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 text-center">
{% for page in this.frontmatter.pages %}
  <a href="{{ page.slug }}" class="docs-card-2 rounded-md">
    <i class="fa-regular fa-{{ page.icon }} h-5 w-5 mr-2"></i>
    <p class="text-sm font-bold text-black dark:text-white">{{ page.title }}</p>
  </a>
{% endfor %}
</div>
```
