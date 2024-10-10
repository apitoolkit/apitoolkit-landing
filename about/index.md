---
title: About
date: 2022-03-23
hide_date: true
---

```=html
<section class="our_container w-full px-6 md:px-0 lg:px-0">
```

## Why APItoolkit?

A few years ago, I was a new hire at a food delivery company,
migrating a legacy service from PHP to Golang. We implemented the
fields listed in the Swagger docs, and compared the responses from
the legacy service to the responses of the new service, fixing
differences until everything matched.

After weeks of implementation and testing,
we rolled out the new service after running tests to
make sure everything worked as expected. But immediately we looked
at our order monitoring charts, we knew we had messed up. Within
10 minutes, 20k orders were lost. I was terrified. What happened?

Apparently, in a couple countries we ran in, a particular field that was expected by the apps was no longer being sent, preventing the placing of orders. We had no idea since this field was not in the inherited
documentation, and was only applicable in a couple of countries that were not part of the samples we manually tested.

We rolled back and fixed the issue, but I was sad that there was no tool that could have detected this issue faster.

Years later, this is that tool, and we would love to listen to
similar stories you've experienced and help make such stories a
thing of the past.

```=html
  <p class="text-xs text-right">
    Anthony (<a
      href="https://twitter.com/tonialaribe"
      class="text-blue-800"
      >@tonialaribe</a
    >) and Smile(<a
      href="https://twitter.com/SmileEgbai"
      class="text-blue-800"
      >@smilecs</a
    >)
  </p>
```

## APItoolkit is built by real engineers to solve problems that have cost them a lot in the past

We’re engineers at our core, who are very close to the problems we are
solving. So, we encourage our users to be a part of this community,
evolving solutions to solve API documentation, management and observability.

You can do this by joining our Discord channel to join others who are
part of our journey in evolving APItoolkit or book a slot to have an
open conversation with us. We’re always open to have a chat with
everyone and learn about their experiences around API documentation and
observability.

## Business Contact

APItoolkit is a product of Past 3 Technologies, a software consulting firm based out of Berlin, Germany.

[hello@past3.tech](mailto:hello@past3.tech) <br>
Past 3 Technologies UG, <br>
Gruntaler Str. 10553 Berlin, Germany.

```=html
</section>
```
