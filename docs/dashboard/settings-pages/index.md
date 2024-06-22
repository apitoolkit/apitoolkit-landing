---
title: Settings Pages
date: 2024-05-20
updatedDate: 2024-05-20
menuWeight: 2
pageFullWidth: true
hideToc: true
pages:
  - title: Project Settings
    slug: /docs/dashboard/settings-pages/project-settings
    icon: gear
  - title: Manage Members
    slug: /docs/dashboard/settings-pages/manage-members
    icon: user-plus
  - title: API Keys
    slug: /docs/dashboard/settings-pages/api-keys
    icon: key
  - title: Integrations
    slug: /docs/dashboard/settings-pages/integrations
    icon: arrows-turn-right
---

# Settings Pages

```=html
<div class="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 text-center">
{% for page in this.frontmatter.pages %}
  <a href="{{ page.slug }}" class="docs-card-2 rounded-md">
    <i class="fa-regular fa-{{ page.icon }} h-5 w-5 mr-2"></i>
    <p class="text-sm font-bold text-black dark:text-white">{{ page.title }}</p>
  </a>
{% endfor %}
</div>
```
