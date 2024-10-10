---
title: PHP SDKs
date: 2022-03-23
updatedDate: 2024-05-04
menuWeight: 6
pageFullWidth: true
hideToc: true
pages:
  - title: Laravel
    slug: /docs/sdks/php/laravel
    icon: /assets/img/framework-logos/laravel-icon.png
  - title: Slim
    slug: /docs/sdks/php/slim
    icon: /assets/img/framework-logos/slim-icon.png
  - title: Symfony
    slug: /docs/sdks/php/symfony
    icon: /assets/img/framework-logos/symfony-icon.png
---

# PHP SDKs

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
