---
title: "API-first Monitoring and Observability"
date: 2022-03-23
updatedDate: 2024-07-17
hidenav: true
monitoring-carousel:
  name: "monitoring-carousel"
  pre-title: "Monitoring & Observability"
  title: "Monitor Critical Systems and Third Parties"
  description: "Query user behavior and see all requests made by users or requests you made to third parties."
  items:
    - title: Log Explorer to Query Incoming and Outgoing Requests
      img: /assets/img/screenshots/log_explorer_zoom.png
    - title: Performance Analytics
      img: /assets/img/screenshots/analytics_zoomed.png
    - title: API and Endpoint Analytics
      img: /assets/img/screenshots/endpointlist_zoomed.png
    - title: Custom Alerts on API Performance and Metrics
      img: /features/error-tracking/apitoolkit_slack.png
errors-carousel:
  name: "errors-carousel"
  pre-title: "Backend Errors & API Breaking Changes"
  title: "No More Guessing Games. Track Code Errors and Breaking Changes with More Context"
  description: >
    Get to the root cause of every issue. 
    Whether runtime errors or breaking API changes"
  items:
    - title: See Errors and API Issues at a Glance
      img: /assets/img/screenshots/errors_zoomed.png
    - title: Trace Code Errors to their Root Cause
      img: /features/error-tracking/log_explorer_error.png
    - title: Track Breaking Changes in your APIs and Integrations
      img: /features/error-tracking/changes_details.png
testing-carousel:
  name: "testing-carousel"
  pre-title: "Healthchecks & Synthetic Monitors"
  title: "Run Active E2E Monitors on any APIs, and Assert if Key Use Cases Work as Expected"
  description: >
    Schedule Health checks and multistep API tests from your OpenAPI/Swagger spec, or API request logs.
  items:
    - title: Be the First to Know When Your APIs are Down or Slow
      img: /assets/img/dashboard.png
    - title: Create Chained/Multi-step Functional Test Sequences & Assertions
      img: /features/error-tracking/log_explorer_error.png
    - title: Create Monitors with AI or by Importing Swagger/OpenAPI
      img: /assets/img/dashboard.png
    - title: Run Tests and Monitors From 50+ Locations
      img: /assets/img/dashboard.png
linting-carousel:
  name: "linting-carousel"
  items:
    - title: Verify your API Payloads are Returning the Correct Data
      img: /assets/img/dashboard.png
    - title: Verify That Your API Integrations Did Not Introduce Breaking Changes
      img: /features/error-tracking/log_explorer_error.png
    - title: Lint API Payloads for Security Issues and API Best Practices
      img: /assets/img/dashboard.png
documentation-carousel:
  name: "documentation-carousel"
  pre-title: "Documentation & API Specification "
  title: "The Best Documentation Is One You Did Not Have to Write: Powered by AI and Your API Usage Logs"
  description: "Automatically generate API specifications from the live API payloads that are analyzed. Enrich this specification with more context, descriptions, etc., and generate public-facing API documentation or OpenAPI/Swagger specifications."
  items:
    - title: AI-Generated API Specification Based on Live Request Payloads
      img: /assets/img/dashboard.png
    - title: Auto Verify That Documentation & Spec Are in Sync With Backend Implementation
      img: /features/error-tracking/log_explorer_error.png
    - title: Design Beautiful User-Facing API Documentation Portals in Minutes
      img: /assets/img/dashboard.png

somuchmore:
  - title: "Powerful Reports"
    description: "Get daily and weekly reports about the numbers that matter."
    img: "/assets/img/home/reports.svg"
  - title: "Up-to-Date API Docs & Spec"
    description: "AI generated spec based off your traffic. Approve new changes."
    img: "/assets/img/home/specs.svg"
  - title: "Automatic Changelogs"
    description: "Maintain a changelog of your APIs and APIs you depend on."
    img: "/assets/img/home/auto-changelogs.svg"
  - title: "Error Analytics"
    description: "Get deeper insights about errors and the affected users."
    img: "/assets/img/home/error-analytics.svg"
  - title: "Self Host"
    description: "Don’t let your data leave your server via self-hosting."
    img: "/assets/img/home/selfhost.svg"
  - title: "Alerts & Integrations"
    description: "Get notified about real-time issues on your terms."
    img: "/assets/img/home/alerts.svg"
tweets:
xtweets:
  - - ppic: "https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/twitter-profile-image%2FadeshinaHH-299110704?alt=media"
      handle: adeshinaHH
      title: adeshina
      tweet: "If you are bootstrapping an idea or your team already has a product in prod and you need to move fast and focus on the big picture, this is a great tool; abnormalities detector and manual documentation killer, say no more!"
      date: "10:01 PM · Apr 7, 2022"
    - ppic: "https://pbs.twimg.com/profile_images/1609943775358459906/Nwzxhg21_400x400.jpg"
      link: https://x.com/BlavkHades/status/1725140501257466116?s=20
      handle: BlavkHades
      title: Cellotape Man
      tweet: "Use @ApiToolkit and Log everything, I mean everything."
      date: "10:01 PM · Nov 16, 2023"
  - - ppic:
faqs:
  - q: What programming languages are supported?
    a: "Some services like the API testing does not need any SDK integration. But we have SDKs for multiple languages: Golang, PHP, C#, Java, etc. If we don't support your language or framework, please drop us a message at hello@apitoolkit.io. We can create one for you on-demand quite quickly."
  - q: Do my requests have to leave my server to APIToolkit Servers?
    a: "Only if you want to benefit from the API metrics and the logs explorer. You can also enjoy all the other functionality which don't depend on your API traffic."
  - q: Can I prevent sending sensitive data to APItoolkit?
    a: "Yes. All our SDKs support redacting data. Simply specify the JSON path to the fields that you don't want the SDKs to forward to APItoolkit, and those fields will be stripped out/redacted before the data even leaves your servers. So we would never see them."
  - q: I really love what you're doing. How do I show support?
    a: "Give us a shout-out on X (Twitter) or Discord. We would also appreciate honest feedback about what we're building and suggestions for what functionality you would love to see next."
  - q: Will the SDKs slow down my backend?
    a: "It depends. Most SDKs stream data asynchronously via google pubsub streaming, so your requests will see almost zero change in performance, except if you use PHP. PHP doesn't support async workflows by default but if you have the GRPC extension installed in your PHP environment, the GRPC extension is used by pubsub to stream data asynchronously like in other languages. Otherwise, you pay a very tiny performance hit to send data to google pubsub. But this performance hit is barely noticeable and usually under 5ms added to every request."
---

```=html
<script type="text/hyperscript">
behavior CarouselSection
    on every change if event.target.checked
        then remove .{'!block'} from <.${@name}-img>img/>
        then add .{'!block'} to <#${my.id}-img/>
    end
    on mouseenter from (next <label/>)
        set me.checked to true
        trigger change on me
    end
end

behavior CarouselSectionInit
    on intersection(intersecting) having threshold 0.5
     repeat while intersecting
                repeat in <input.carousel-input/>
                    set it.checked to true
                    trigger change on it
                    then wait 4s
                end
            end
end

</script>
```

{% render "default/markdown/hero-section", this:this %}

```=html

  <section class="width-control mx-auto mt-[54px] pb-16 relative">
    <div class="h-full w-[1px] absolute z-10 left-[20px] top-[35px]">
      <div class="relative section-line h-full w-full"></div>
    </div>
    <div class="w-full flex items-start">
      <div class="w-full flex flex-col gap-10">
```

{class="flex flex-col gap-2 ml-3 sm:ml-8"}
::::::
{% render "default/markdown/landing-carousel", this:this.frontmatter.monitoring-carousel  %}
::::::

{.text-center }
:::::::
{.inline-flex .flex-row .justify-center .text-left .gap-4}
:::
![Michael Okoh image](/assets/img/love/trojan_pic.jpg){class="h-24 rounded-md"}

{class="space-y-1 flex-1"}
::::
[“APItoolkit allowed us to make a drop in rewrite of our PHP service in Golang. Fixing all bugs without customers noticing any changes.”]{class="flex-1 inline-block max-w-[500px] text-gray-600 dark:text-base-content pb-1"}

_Michael Okoh_
[CEO @ Thepeer]{class="text-sm text-gray-500 block"}
::::
:::
:::::::

```=html


      </div>
    </div>
  </section>
```

```=html
    <br/><br/>
  <section class="width-control mx-auto mt-[54px] pb-16 relative">
    <div class="h-full w-[1px] absolute z-10 left-[20px] top-[35px]">
      <div class="relative section-line h-full w-full"></div>
    </div>
    <div class="w-full flex items-start">
      <div class="w-full flex flex-col gap-10">
```

{class="flex flex-col gap-2 ml-3 sm:ml-8"}
::::::
{% render "default/markdown/landing-carousel", this:this.frontmatter.errors-carousel  %}
::::::

{.text-center }
:::::::
{.inline-flex .flex-row .justify-center .text-left .gap-4}
:::
![Joshua Chinemezu image](/assets/img/love/joshua.jpeg){class="h-24 rounded-md object-contain"}

{class="space-y-1 flex-1"}
::::
[“We had a major production incident, and the engineering team didn't need to get involved, because the support team could see via APItoolkit that the issues were caused by our third-party integration, and they could reach out to the team to fix the issue.”]{class="flex-1 inline-block max-w-[500px] text-gray-600 dark:text-base-content pb-1"}

_Joshua Chinemezu_
[CEO @ Platnova]{class="text-sm text-gray-500 block"}
::::
:::
:::::::

```=html


      </div>
    </div>
  </section>
```

```=html
    <br/><br/>
  <section class="width-control mx-auto mt-[54px] pb-16 relative">
    <div class="h-full w-[1px] absolute z-10 left-[20px] top-[35px]">
      <div class="relative section-line h-full w-full"></div>
    </div>
    <div class="w-full flex items-start">
      <div class="w-full flex flex-col gap-10">
```

{class="flex flex-col gap-2 ml-3 sm:ml-8"}
::::::
{% render "default/markdown/landing-carousel", this:this.frontmatter.testing-carousel  %}
::::::

{.text-center }
:::::::
{.inline-flex .flex-row .justify-center .text-left .gap-4}
:::
![David Odohi Image](/assets/img/love/david.png){class="h-24 rounded-md object-contain"}

{class="space-y-1 flex-1"}
::::
[“We had to deal with very unreliable integration partners, and APItoolkit helped us catch breaking changes they introduced, and armed us better to request better reliability guarantees.”]{class="flex-1 inline-block max-w-[500px] text-gray-600 dark:text-base-content pb-1"}

_David Odohi_
[Engineering Lead @ Grovepay]{class="text-sm text-gray-500 block"}
::::
:::
:::::::

```=html


      </div>
    </div>
  </section>
```

{% comment %}
```=html
    <br/><br/>
  <section class="width-control mx-auto mt-[54px] pb-16 relative">
    <div class="h-full w-[1px] absolute z-10 left-[20px] top-[35px]">
      <div class="relative section-line h-full w-full"></div>
    </div>
    <div class="w-full flex items-start">
      <div class="w-full flex flex-col gap-10">
```

{class="flex flex-col gap-2 ml-3 sm:ml-8"}
::::::
{% render "default/markdown/landing-carousel", this:this.frontmatter.documentation-carousel  %}
::::::

{.text-center }
:::::::
{.inline-flex .flex-row .justify-center .text-left .gap-4}
:::
![Michael Payfonte image](/assets/img/love/michael_payfonte.jpeg){class="h-24 rounded-md object-contain"}

{class="space-y-1 flex-1"}
::::
[“We had a lot of issues coming from merchants on our service, and needed something to track the incoming requests made by these merchants. APItoolkit was exactly what we needed, and even more.”]{class="flex-1 inline-block max-w-[500px] text-gray-600 dark:text-base-content pb-1"}

_Michael Akinwonmi_
[CEO @ Payfonte]{class="text-sm text-gray-500 block"}
::::
:::
:::::::

```=html


      </div>
    </div>
  </section>
```
{% endcomment %}

```=html
  <section class="py-10 my-16">
    <div class="width-control px-3 mx-auto">
      <div class="w-full border-t border-b grid md:grid-cols-2 relative">
        <div class="h-[calc(100%+30px)] w-[1px] absolute border-l top-[-15px] left-[15px]"></div>
        <div class="h-[calc(100%+30px)] w-[1px] absolute border-l top-[-15px] right-[15px]"></div>
        <div class="hidden md:block h-[calc(100%+30px)] w-[1px] absolute border-l top-[-15px] left-[50%]"></div>
        <div class="px-6 sm:px-16 py-14">
          <h2 class="text-gray-800 font-bold text-4xl">
            Scale with <span class="text-gray-400">Security</span></h2>
          <p class="mt-[6px] max-w-[438px]">
            Built for security and privacy. Use our managed service or host on your own infra.</p>
          <div class="mt-[20px] flex gap-4">
            <a href="https://app.apitoolkit.io"
              class="py-2 px-4 rounded-xl bg-[#2E3238] text-white hover:shadow-lg">Start for free</a>
            <a href="https://calendly.com/tonyalaribe/30min" class="py-2 px-4 rounded-xl border hover:border-black">Talk
              to sales</a>
          </div>
        </div>

        <div class="h-full flex flex-col">
          <div class="h-10 w-[calc(100%-(calc(100%-15px))/5)]" style="background: repeating-linear-gradient(90deg,
       white 0 calc((100% - 5*1px)/4),
       #e5e7eb 0 calc((100% - 5*1px)/4 + 1px));"></div>
          <div
            class="border-t sm:w-[calc(100%-15px)] flex-grow border-b gap-2 sm:gap-10 flex flex-wrap justify-center items-center">
            <img src="./assets/img/gdpr.png" alt="CCPA" class="">
            <img src="./assets/img/security.png" alt="GDPR" class="">

          </div>
          <div class="h-10 w-[calc(100%-(calc(100%-15px))/5)]" style="background: repeating-linear-gradient(90deg,
                   white 0 calc((100% - 5*1px)/4),
                   #e5e7eb 0 calc((100% - 5*1px)/4 + 1px));"></div>
        </div>
      </div>
    </div>
  </section>

  <section class="w-full bg-[#232529] py-32 text-gray-100">
    <div class="width-control mx-auto">
      <h3 class="text-4xl md:text-5xl font-bold"><span class="text-gray-400">And so</span> much more...</h4>
      <p class="mt-4 text-gray-400 max-w-lg">
        Stay on top of your APIs, with real-time monitoring, specification, and quality assurance.
      </p>
      <div class="grid grid-cols-2 sm:grid-cols-3 mt-20 gap-1 sm:gap-6">
      {% for item in this.frontmatter.somuchmore %}
        <div
          class="rounded-[20px] overflow-hidden relative flex flex-col p-3 sm:p-8 group duration-300  hover:border-[#305FB4] dark-shadow border border-transparent box-border">
          <div class="z-10">
            <img src="{{item.img}}" alt="{{item.title}}" />
          </div>
          <h3 class="font-semibold text-[22px] pb-[6px] pt-[18px]">{{item.title}}</h3>
          <p class="text-sm text-gray-400">{{item.description}}</p>
        </div>
        {% endfor %}
      </div>

      <div class="flex  w-full flex-col md:flex-row items-center md:justify-between mt-12 gap-6">
        <div class="w-full md:w-max order-2 md:order-1">
          <div
            class="rounded-[20px] overflow-hidden relative flex flex-col p-[40px] group duration-300  hover:border-[#305FB4] dark-shadow border border-transparent box-border">
            <h3 class="font-semibold text-[22px] pb-[6px] pt-[18px]">Build with Community</h3>
            <p class="text-sm text-gray-400 max-w-[300px]">Join us on a mission to build a world free from the frustrations of broken API contracts and unreliability.
            </p>
            <div class="mt-4 flex gap-4">
              <a href="https://discord.gg/dEB6EjQnKB"
                class="rounded-lg bg-[#7289DA] flex gap-2 w-max px-5 py-2 items-center">
                <svg  width="33" height="32" class="icon h-5 w-5 text-current fill-current stroke-current opacity-70"><use xlink:href="/assets/deps/fontawesome/brands.svg#discord"></use></svg>
                <span class="text-sm leading-tight">Join the <br><span class="font-bold text-md">Discord</span>
                </span>
              </a>
              <a href="https://app.apitoolkit.io"
                class="rounded-lg border flex justify-center items-center w-max px-5 text-sm py-2 border-gray-600 hover:border-gray-400">
                Get started- it’s free
              </a>

            </div>
          </div>
        </div>
        <div class="order-1 w-full md:w-max md:order-2  h-full flex-1">
          <div
            class="rounded-[20px] h-full overflow-hidden relative flex flex-col gap-8 p-[40px] group duration-300  hover:border-[#305FB4] dark-shadow border border-transparent box-border">
            <h3 class="font-semibold text-[22px] pb-[6px] pt-[18px]">Works seamlessly with your tech stack</h3>
            <div class="flex items-center gap-4">
              <img src="./assets/img/integrations/cloudflare.png" alt="">
              <img src="./assets/img/integrations/nginx.png" alt="">
              <img src="./assets/img/integrations/caddy.png" alt="">
              <img src="./assets/img/integrations/go.svg" alt="">
              <img src="./assets/img/integrations/php.svg" alt="" class="flex-grow-0">
            </div>
            <a href="https://apitoolkit.io/docs/" class="text-sm text-gray-400 max-w-[300px] underline"> and
              many more...
            </a>
          </div>
        </div>
      </div>

      <div class="mt-32 relative">
        <h4 class="text-4xl md:text-5xl font-bold"><span class="text-gray-400">Loved by</span> Builders</h4>
        <p class="max-w-[400px] my-4">APItoolkit is the intelligent API management system for teams who value peace of mind.</p>

        <div class=" relative mt-24 p-1 overflow-hidden -mx-5 w-full">
            <iframe class="" id='testimonialto-apitoolkit-tag-all-light' src="https://embed-v2.testimonial.to/w/apitoolkit?theme=dark&card=base&loadMore=off&initialCount=9&randomize=on&hideDate=on&tag=all" frameborder="0" scrolling="no" width="100%" title="testimonial.to testimonials"></iframe>
        </div>
        <div class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#232529]"></div>
        </div>
      </div>
    </div>
  </section>

```

{class="py-24 bg-[#F9FBFF] dark:bg-base-100"}
::::::
{class="width-control mx-auto flex flex-col md:flex-row gap-16"}
::::
{class="flex-grow mt-16"}
:::
{class="text-4xl md:text-6xl font-bold mb-3"}

Frequently Asked <br/> Questions

[Some questions others have asked]{class="text-gray-500 dark:text-base-content text-sm"}
[View all FAQs](https://apitoolkit.io/docs/faq/){class="block mt-6 text-blue-600 underline text-sm"}
:::
{class="flex w-full md:w-[40%] flex-col gap-4 text-gray-700 dark:text-base-content"}
:::

```=html
  {% for faq in this.frontmatter.faqs %}
  <div class="bg-base-100 px-6 py-3 shadow-sm">
    <button class="flex gap-4 items-center text-left hover:text-gray-800 dark:hover:text-white" onclick="toggleFaq(event)">
    <svg class="flex-shrink-0 icon h-5 w-5 text-current fill-current stroke-current opacity-70"><use xlink:href="/assets/deps/fontawesome/solid.svg#caret-right"></use></svg>
     {{faq.q}}
    </button>
    <div class="pl-4 py-4 hidden text-gray-600 dark:text-base-content">{{faq.a}}</div>
  </div>
  {% endfor %}
```

:::
::::

{class="text-center width-control mx-auto mt-16 py-24 prose w-full max-w-full prose-pre:p-0"}
::::

## Integrate APItoolkit

{.mx-auto .text-lg}
We currently support 17+ web frameworks in different programming languages.

{.mx-auto .text-md .font-semibold}
If we don't support your framework, kindly email [hello@apitoolkit.io](mailto:hello@apitoolkit.io) and we'll create an SDK for you ASAP!

{% render "default/markdown/integration-footer.liquid", config:config %}
::::
::::::
