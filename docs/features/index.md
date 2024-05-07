---
title: Features
date: 2024-04-22
updatedDate: 2024-05-07
faLogo: folder-tree
menuWeight: 4
hideFileTree: true
pageFullWidth: true
hideToc: true
pages:
  - title: API Monitoring and Observability
    slug: /docs/features/api-monitoring-observability
  - title: Error Tracking
    slug: /docs/features/error-tracking
  - title: API Testing
    slug: /docs/features/api-testing
  - title: OpenAPI Spec Documentation
    slug: /docs/features/api-documentation
---

# APItoolkit Features

In these guides, you will learn more about all APItoolkit key features in detail.

```=html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 text-center">
{% for page in this.frontmatter.pages %}
  <a href="{{ page.slug }}" class="docs-card-2 rounded-md">
    <i class="fa-regular fa-folder-check h-5 w-5 mr-2"></i>
    <p class="text-sm font-bold text-black dark:text-white">{{ page.title }}</p>
  </a>
{% endfor %}
</div>
```
