---
title: "The API Developer's Toolbox"
date: 2022-03-23
publishdate: 2022-03-24
description: "Build and maintain your APIs with Less downtimes, Fewer support tickets, Faster time to resolution and always up to date insights into your APIs"
hidenav: true
monitoring-carousel:
    name: "monitoring-carousel"
    items:
    - title: Log Explorer to query Incoming and Outgoing Requests
      img: /assets/img/screenshots/log_explorer_zoom.png
    - title: Performance Analytics
      img: /assets/img/screenshots/analytics_zoomed.png
    - title: API and Endpoint Analytics
      img: /assets/img/screenshots/endpointlist_zoomed.png
    - title: Custom Alerts on API performance and metrics
      img: /features/error-tracking/apitoolkit_slack.png
errors-carousel:
    name: "errors-carousel"
    items:
    - title: See Errors and API Issues at a glance
      img: /assets/img/screenshots/errors_zoomed.png
    - title: Trace Errors to their Root Cause
      img: /features/error-tracking/log_explorer_error.png
    - title: Track Breaking changes in your APIs and integrations
      img: /features/error-tracking/changes_details.png
testing-carousel:
    name: "testing-carousel"
    items:
    - title: Be the first to know when your APIs are down or slow.
      img: /assets/img/dashboard.png
    - title: Create chained/multi-step functional test sequences & assertions
      img: /features/error-tracking/log_explorer_error.png
    - title: Create monitors with AI or by importing Swagger/OpenAPI
      img: /assets/img/dashboard.png
    - title: Run tests and monitors From 50+ Locations
      img: /assets/img/dashboard.png
linting-carousel:
    name: "linting-carousel"
    items:
    - title: Verify your API payloads are returning the correct data.
      img: /assets/img/dashboard.png
    - title: Verify that your API integrations did not introduce breaking changes
      img: /features/error-tracking/log_explorer_error.png
    - title: Lint API payloads for security issues and API best practices
      img: /assets/img/dashboard.png
documentation-carousel:
    name: "documentation-carousel"
    items:
    - title: AI-generated API specification based on live request payloads
      img: /assets/img/dashboard.png 
    - title: Auto verify that Documentation & Spec are in sync with backend implementation 
      img: /features/error-tracking/log_explorer_error.png
    - title: Design beautiful user-facing API documentation portals in minutes.
      img: /assets/img/dashboard.png

somuchmore:
- title: "Powerful Reports"
  description: "Get Daily and weekly Reports about the numbers that matter."
  img: "/assets/img/home/reports.svg"
- title: "Up to date API Docs & Spec"
  description: "AI generated spec based off your traffic. Approve new changes."
  img: "/assets/img/home/specs.svg"
- title: "Automatic Changelogs"
  description: "Maintain a changelog of your APis and APIs your depend on."
  img: "/assets/img/home/auto-changelogs.svg"
- title: "Error Analytics"
  description: "Get deeper insights about errors and the affected users."
  img: "/assets/img/home/error-analytics.svg"
- title: "Self Host"
  description: "Don’t let your data leave your server via self hosting."
  img: "/assets/img/home/selfhost.svg"
- title: "Alerts & Integrations"
  description: "Get notified about realtime issues on your terms."
  img: "/assets/img/home/alerts.svg"
tweets:
xtweets:
    -   - ppic: "https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/twitter-profile-image%2FadeshinaHH-299110704?alt=media"
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
    -   - ppic: 
faqs:
    - q: What programming languages are supported?
      a: "We support Golang, PHP, C#, Java, etc. If we don't support your language or framework, please drop a message. We can create one on demand quite quickly."
    - q: Do my requests have to leave my server to APIToolkit Servers?
      a: "Only if you want to benefit from the API metrics and the logs explorer. You can also enjoy all the other functionality which don't depend on your API traffic."
    - q: Can I prevent sending sensitive Data to APIToolkit?
      a: "Yes. All our SDKs support redacting data. Simply specify the json path to the fields which you don't want the SDKs to forward to APIToolkit, and those fields will be stripped out/redacted before the data even leaves your servers. So we would never see them."
    - q: I really love what you're doing. How do I show support?
      a: "Give a shout out on twitter or discord. We would also appreciate honest feedback about what we're building. And suggestions for what functionality you would love to see next."
    - q: Will the SDKs slow down my backend?
      a: "It depends. Most SDKs stream data asynchronously via google pubsub streaming, so your requests will see almost zero change in performance. Except if you use PHP. Because PHP doesn't support async workflows by default. But if you have the GRPC extension installed in your PHP environment, the GRPC extension is used by pubsub to stream data asynchronously like in other languages. Otherwise, you pay a very tiny performance hit to send data to google pubsub. But this performance hit is rarely noticable and usually under 5ms added to every request."
---

``` =html
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
                repeat in <input/>
                    set it.checked to true 
                    trigger change on it
                    then wait 4s 
                end
            end
end

</script>
```

{% render "default/markdown/hero-section", this:this %}

``` =html

  <section class="width-control mx-auto mt-[54px] pb-16 relative">
    <div class="h-full w-[1px] absolute z-10 left-[20px] top-[35px]">
      <div class="relative section-line h-full w-full"></div>
    </div>
    <div class="w-full flex items-start">
      <div class="w-full flex flex-col gap-10">
```

{class="flex flex-col gap-2 ml-3 sm:ml-8"}
::::::
## Monitoring & Observability

{.max-w-4xl .text-lg .pt-2}
Gain data-driven insights into your APIs and APIs you depend on. Query user behavior and see all requests made by users or requests you made to third parties.

{% render "default/markdown/landing-carousel", this:this.frontmatter.monitoring-carousel  %}
::::::

{.text-center }
:::::::
{.inline-flex .flex-row .justify-center .text-left .gap-4}
:::
![Michael Okoh image](/assets/img/love/trojan_pic.jpg){class="h-24 rounded-md"}

{class="space-y-1 flex-1"}
::::
[“APIToolkit allowed us make a drop in rewrite of our PHP service in Golang. Fixing all bugs without customers noticing any changes.”]{class="flex-1 inline-block max-w-[500px] text-gray-600 pb-1"}

*Michael Okoh* 
[CEO @ Thepeer]{class="text-sm text-gray-500 block"}
::::
:::
:::::::

``` =html
            

      </div>
    </div>
  </section>
```

``` =html
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

## Backend Errors & API Breaking Changes

{.max-w-4xl .text-lg .pt-2}
Get to the root cause of every issue. Whether it is caused by runtime errors, breaking API changes introduced by third-party integrations, or unintended API-breaking changes by your team.

{% render "default/markdown/landing-carousel", this:this.frontmatter.errors-carousel  %}
::::::

{.text-center }
:::::::
{.inline-flex .flex-row .justify-center .text-left .gap-4}
:::
![Joshua Chinemezu image](/assets/img/love/joshua.jpeg){class="h-24 rounded-md object-contain"}

{class="space-y-1 flex-1"}
::::
[“We had a major production incident, and the Engineering team didnt need to get involved, because the support team could see via APItoolkit, that the issues were caused by our third party integration, and they could reach out to the team to fix the issue.”]{class="flex-1 inline-block max-w-[500px] text-gray-600 pb-1"}

*Joshua Chinemezu* 
[CEO @ Platnova]{class="text-sm text-gray-500 block"}
::::
:::
:::::::

``` =html
            

      </div>
    </div>
  </section>
```

{% comment %}

``` =html
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

## E2E API Testing & Synthetic Monitors

{.max-w-4xl .text-lg .pt-2}
Ensure the reliability of your APIs and any APIs you depend on. Call any API at intervals and configure checks and assertions to ensure it continues to behave as expected. 

{% render "default/markdown/landing-carousel", this:this.frontmatter.testing-carousel  %}
::::::

{.text-center .space-y-2}
:::
{.flex .justify-center}
![Michael Okoh image](/assets/img/love/trojan.jpeg){class="w-11 h-11 rounded-full object-contain"}

{class="inline-block max-w-[500px] text-gray-600 text-center"}
“APIToolkit allowed us make a drop in rewrite of our PHP service in Golang. Fixing all bugs without customers noticing any changes.”

::::
Michael Okoh

{class="mt-[2px] text-sm text-gray-500"}
CEO @ Thepeer
::::
:::

``` =html
            

      </div>
    </div>
  </section>
```
{% endcomment %}


{% comment %}
``` =html
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

## Realtime Payload Validation & API Linting


{.max-w-4xl .text-lg .pt-2}
Validate real-time API payloads from your server to check if they introduced breaking changes, are following best practices, or are not meeting security benchmarks and expectations.

{% render "default/markdown/landing-carousel", this:this.frontmatter.linting-carousel  %}
::::::

{.text-center .space-y-2}
:::
{.flex .justify-center}
![Michael Okoh image](/assets/img/love/trojan.jpeg){class="w-11 h-11 rounded-full object-contain"}

{class="inline-block max-w-[500px] text-gray-600 text-center"}
“APIToolkit allowed us make a drop in rewrite of our PHP service in Golang. Fixing all bugs without customers noticing any changes.”

::::
Michael Okoh

{class="mt-[2px] text-sm text-gray-500"}
CEO @ Thepeer
::::
:::

``` =html
            

      </div>
    </div>
  </section>
```
{% endcomment %}

{% comment %}

``` =html
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

## Documentation & API Specification 


{.max-w-4xl .text-lg .pt-2}
Automatically generate API specifications from the live API payloads that are analyzed. Enrich this specification with more context, descriptions, etc., and generate public-facing API documentation or OpenAPI/Swagger specifications.

{% render "default/markdown/landing-carousel", this:this.frontmatter.documentation-carousel  %}
::::::

{.text-center .space-y-2}
:::
{.flex .justify-center}
![Michael Okoh image](/assets/img/love/trojan.jpeg){class="w-11 h-11 rounded-full"}

{class="inline-block max-w-[500px] text-gray-600 text-center"}
“APIToolkit allowed us make a drop in rewrite of our PHP service in Golang. Fixing all bugs without customers noticing any changes.”

::::
Michael Okoh

{class="mt-[2px] text-sm text-gray-500"}
CEO @ Thepeer
::::
:::

``` =html
            

      </div>
    </div>
  </section>
```

{% endcomment %}


``` =html
  <section class="py-10 my-16">
    <div class="width-control px-3 mx-auto">
      <div class="w-full border-t border-b grid md:grid-cols-2 relative">
        <div class="h-[calc(100%+30px)] w-[1px] absolute border-l top-[-15px] left-[15px]"></div>
        <div class="h-[calc(100%+30px)] w-[1px] absolute border-l top-[-15px] right-[15px]"></div>
        <div class="hidden md:block h-[calc(100%+30px)] w-[1px] absolute border-l top-[-15px] left-[50%]"></div>
        <div class="px-6 sm:px-16 py-14">
          <h2 class="text-gray-800 font-bold text-4xl">
            Scale with <span class="text-gray-400">security</span></h2>
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
            class="border-t sm:w-[calc(100%-15px)] flex-grow border-b gap-4 sm:gap-10 flex flex-wrap justify-center items-center">
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
            <p class="text-sm text-gray-400 max-w-[300px]">Join us on a mission to build a world from the frustrations
              of broken API
              contracts and unreliability.
            </p>
            <div class="mt-4 flex gap-4">
              <a href="https://discord.gg/dEB6EjQnKB"
                class="rounded-lg bg-[#7289DA] flex gap-2 w-max px-5 py-2 items-center">
                <i class="fa-brands fa-discord" width="33" height="32"></i>
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
            <h3 class="font-semibold text-[22px] pb-[6px] pt-[18px]">Works seemlessly with your tech stack</h3>
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

        <div class=" relative mt-24 p-1 overflow-hidden -mx-5">
            <iframe id='testimonialto-apitoolkit-tag-all-light' src="https://embed-v2.testimonial.to/w/apitoolkit?theme=light&card=base&loadMore=off&initialCount=9&randomize=on&hideDate=on&tag=all" frameborder="0" scrolling="no" width="100%" title="testimonial.to testimonials"></iframe>
        </div>
        <div class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#232529]"></div>
        </div>
      </div>
    </div>
  </section>

```
{class="py-24 bg-[#F9FBFF]"}
::::::
{class="width-control mx-auto flex flex-col md:flex-row gap-16"}
::::
{class="flex-grow mt-16"}
:::
{class="text-4xl md:text-6xl font-bold mb-3"}
### Frequestly asked <br/> Questions

[Some questions others have asked]{class="text-gray-500 text-sm"}
[View all FAQ](https://apitoolkit.io/docs/troubleshooting-and-faq/faq/){class="block  mt-6 text-blue-600 underline text-sm"}
:::
{class="flex w-full md:w-[40%] flex-col gap-4 text-gray-700"}
:::
```=html
  {% for faq in this.frontmatter.faqs %}
  <div class="bg-white px-6 py-3 shadow-sm">
    <button class="flex gap-4 items-center text-left hover:text-gray-800" onclick="toggleFaq(event)">
    <i class="fa-solid fa-caret-right flex-shrink-0"></i> {{faq.q}}
    </button>
    <div class="pl-4 py-4 hidden text-gray-600">{{faq.a}}</div>
  </div>
  {% endfor %}
```
:::
::::
::::::
