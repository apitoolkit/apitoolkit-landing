---
title: Databases
date: 2024-06-14
updatedDate: 2024-06-14
menuWeight: 25
pageFullWidth: true
hideToc: true
pages:
  - title: MongoDB
    slug: /docs/sdks/databases/mongodb
    icon: /assets/img/framework-logos/mongodb-icon.svg
  - title: MySQL
    slug: /docs/sdks/databases/mysql
    icon: /assets/img/framework-logos/mysql-icon.svg
  - title: PostgreSQL
    slug: /docs/sdks/databases/postgres
    icon: /assets/img/framework-logos/postgresql-icon.svg
---

# Database SDKs

```=html
<div id="sdk-images" class="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-8 text-center items-center align-center">
{% for page in this.frontmatter.pages %}
  <a href="{{ page.slug }}" class="docs-card-2 rounded-md">
    <img src={{ page.icon }} alt={{ page.title }} class="h-16 w-16 not-prose" />
    <p class="text-sm font-bold text-black dark:text-white">{{ page.title }}</p>
  </a>
{% endfor %}
</div>
```

