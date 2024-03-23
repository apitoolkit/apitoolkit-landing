---
title: "The API Developer's Toolbox"
date: 2022-03-23
publishdate: 2022-03-24
description: "Build and maintain your APIs with Less downtimes, Fewer support tickets, Faster time to resolution and
always up to date insights into your APIs"
hidenav: true
---

``` =html
<script src="https://cdn.jsdelivr.net/npm/jarallax@2/dist/jarallax.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"
  integrity="sha512-z4OUqw38qNLpn1libAN9BsoDx6nbNFio5lA6CuTp9NlK83b89hgyCVq+N5FdBJptINztxn1Z3SaKSKUS5UP60Q=="
  crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<style>
  .formkit-alert {
    font-weight: bold;
    font-size: large;
    margin: 2rem;
    line-height: 2rem;
    color: #353f5f;
  }

  .jarallax {
    position: relative;
    z-index: 0;
  }

  .jarallax>.jarallax-img {
    position: absolute;
    object-fit: cover;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
</style>

<script type="text/hyperscript">
behavior CarouselSection 
    on every change if event.target.checked 
        then remove .{'!block'} from <.${@name}-img/> 
        then add .{'!block'} to <#${my.id}-img/>
    end
    on mouseenter from (next <label/>) 
        set me.checked to true 
        trigger change on me
    end
end

behavior CarouselSectionInit
    init repeat forever 
                repeat in <input/>
                    set it.checked to true 
                    trigger change on it
                    then wait 3s 
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

{class="flex flex-col gap-2 ml-8"}
::::::
## Monitoring & Observability

{.max-w-4xl .text-lg .pt-2}
Gain data-driven insights into your APIs and APIs you depend on. Query user behavior and see all requests made by users or requests you made to third parties.

{.grid .grid-cols-3 .py-8 .gap-5}
:::
{class="carousel-menu cols-span-1 text-lg font-medium [&>label]:mb-5 [&>label]:rounded-md [&>label]:border [&>label]:border-base-300 [&>label]:block [&>label]:p-5 [&>input]:hidden " script="install CarouselSectionInit"}
::::
```=html
  <input type="radio" name="monitoring-carousel" role="tab" id="api-and-endpoint-analytics-c"  _="install CarouselSection"/>
  <label for="api-and-endpoint-analytics-c" >API and Endpoint Analytics</label>
  <input type="radio" name="monitoring-carousel" role="tab" id="log-explorer-c" _="install CarouselSection"/>
  <label for="log-explorer-c" class="hover:ring">Log Explorer to query Incoming and Outgoing Requests</label>
  <input type="radio" name="monitoring-carousel" role="tab" id="performance-analysis-c" _="install CarouselSection"/>
  <label for="performance-analysis-c" class="hover:ring">Performance Analytics </label>
  <input type="radio" name="monitoring-carousel" role="tab" id="custom-alerts-perf-c" _="install CarouselSection" />
  <label for="custom-alerts-perf-c" class="hover:ring">Custom Alerts on API performance and metrics</label>
```
::::
{class="col-span-2 [&>*]:rounded-lg [&>*]:border [&>*]:border-gray-200 [&>*]:drop-shadow-lg [&>*]:hidden [&>*]:object-contain [&>*]:w-full  [&>*]:aspect-[4/3]"}
![Dashboard Screenshot](/assets/img/dashboard.png){#api-and-endpoint-analytics-c-img class="monitoring-carousel-img !block" }
![Dashboard Screenshot](/features/error-tracking/log_explorer_error.png){#log-explorer-c-img class="monitoring-carousel-img"}
![Dashboard Screenshot](/assets/img/dashboard.png){#performance-analysis-c-img class="monitoring-carousel-img"}
![Dashboard Screenshot](/features/error-tracking/apitoolkit_slack.png){#custom-alerts-perf-c-img class="monitoring-carousel-img"}
:::
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

``` =html
    <br/><br/>
  <section class="width-control mx-auto mt-[54px] pb-16 relative">
    <div class="h-full w-[1px] absolute z-10 left-[20px] top-[35px]">
      <div class="relative section-line h-full w-full"></div>
    </div>
    <div class="w-full flex items-start">
      <div class="w-full flex flex-col gap-10">
```

{class="flex flex-col gap-2 ml-8"}
::::::

## Backend Errors & API Breaking Changes

{.max-w-4xl .text-lg .pt-2}
Get to the root cause of every issue. Whether it is caused by runtime errors, breaking API changes introduced by third-party integrations, or unintended API-breaking changes by your team.

{.grid .grid-cols-3 .py-8 .gap-5}
:::
{class="carousel-menu cols-span-1 text-lg font-medium [&>label]:mb-5 [&>label]:rounded-md [&>label]:border [&>label]:border-base-300 [&>label]:block [&>label]:p-5 [&>input]:hidden " script="install CarouselSectionInit"}
::::
```=html
    <input type="radio" name="errors-carousel" role="tab" id="see-errors-c" _="install CarouselSection" />
    <label for="see-errors-c" class="hover:ring">See all your errors and API issues at a glance</label>
    <input type="radio" name="errors-carousel" role="tab" id="error-root-cause-c" _="install CarouselSection" />
    <label for="error-root-cause-c" class="hover:ring">Trace Errors to their Root Cause </label>
    <input type="radio" name="errors-carousel" role="tab" id="breaking-changes-c" _="install CarouselSection" />
    <label for="breaking-changes-c" class="hover:ring">Track Breaking changes in your APIs and integrations</label>
```
::::
{class="col-span-2 [&>*]:rounded-lg [&>*]:border [&>*]:border-gray-200 [&>*]:drop-shadow-lg [&>*]:hidden [&>*]:object-contain [&>*]:w-full [&>*]:aspect-[4/3]"}
![Dashboard Screenshot](/assets/img/dashboard.png){#see-errors-c-img class="errors-carousel-img !block" }
![Dashboard Screenshot](/features/error-tracking/log_explorer_error.png){#error-root-cause-c-img class="errors-carousel-img" }
![Dashboard Screenshot](/assets/img/dashboard.png){#breaking-changes-c-img class="errors-carousel-img" }
:::
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

``` =html
    <br/><br/>
  <section class="width-control mx-auto mt-[54px] pb-16 relative">
    <div class="h-full w-[1px] absolute z-10 left-[20px] top-[35px]">
      <div class="relative section-line h-full w-full"></div>
    </div>
    <div class="w-full flex items-start">
      <div class="w-full flex flex-col gap-10">
```

{class="flex flex-col gap-2 ml-8"}
::::::

## E2E API Testing & Synthetic Monitors

{.max-w-4xl .text-lg .pt-2}
Ensure the reliability of your APIs and any APIs you depend on. Call any API at intervals and configure checks and assertions to ensure it continues to behave as expected. 

{.grid .grid-cols-3 .py-8 .gap-5}
:::
{.cols-span-1 .space-y-5 .text-lg .font-medium}
::::
```=html
  <label for="" class="rounded-md border border-base-300 ring hover:ring block p-5">
  Be the first to know when your APIs are down or slow.
  </label>
  <label for="" class="rounded-md border border-base-300 block p-5 hover:ring">
  Create chained/multi-step functional test sequences & assertions
  </label>
  <label for="" class="rounded-md border border-base-300 block p-5 hover:ring">
  Create monitors with AI or by importing Swagger/OpenAPI 
  </label>
  <label for="" class="rounded-md border border-base-300 block p-5 hover:ring">
  Run tests and monitors From 50+ Locations
  </label>
```
::::
{.col-span-2}
::::
![Dashboard Screenshot](/assets/img/dashboard.png){.drop-shadow-lg .w-full .block .rounded-lg .border .border-gray-200}
::::
:::
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


``` =html
    <br/><br/>
  <section class="width-control mx-auto mt-[54px] pb-16 relative">
    <div class="h-full w-[1px] absolute z-10 left-[20px] top-[35px]">
      <div class="relative section-line h-full w-full"></div>
    </div>
    <div class="w-full flex items-start">
      <div class="w-full flex flex-col gap-10">
```

{class="flex flex-col gap-2 ml-8"}
::::::

## Realtime Payload Validation & API Linting


{.max-w-4xl .text-lg .pt-2}
Validate real-time API payloads from your server to check if they introduced breaking changes, are following best practices, or are not meeting security benchmarks and expectations.

{.grid .grid-cols-3 .py-8 .gap-5}
:::
{.cols-span-1 .space-y-5 .text-lg .font-medium}
::::
```=html
  <label for="" class="rounded-md border border-base-300 ring hover:ring block p-5">
  Verify your API payloads are returning the correct data.
  </label>
  <label for="" class="rounded-md border border-base-300 block p-5 hover:ring">
  Verify that your API integrations did not introduce breaking changes 
  </label>
  <label for="" class="rounded-md border border-base-300 block p-5 hover:ring">
  Lint API payloads for security issues and API best practices
  </label>
```
::::
{.col-span-2}
::::
![Dashboard Screenshot](/assets/img/dashboard.png){.drop-shadow-lg .w-full .block .rounded-lg .border .border-gray-200}
::::
:::
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



``` =html
    <br/><br/>
  <section class="width-control mx-auto mt-[54px] pb-16 relative">
    <div class="h-full w-[1px] absolute z-10 left-[20px] top-[35px]">
      <div class="relative section-line h-full w-full"></div>
    </div>
    <div class="w-full flex items-start">
      <div class="w-full flex flex-col gap-10">
```

{class="flex flex-col gap-2 ml-8"}
::::::

## Documentation & API Specification 


{.max-w-4xl .text-lg .pt-2}
Automatically generate API specifications from the live API payloads that are analyzed. Enrich this specification with more context, descriptions, etc., and generate public-facing API documentation or OpenAPI/Swagger specifications.

{.grid .grid-cols-3 .py-8 .gap-5}
:::
{.cols-span-1 .space-y-5 .text-lg .font-medium}
::::
```=html
  <label for="" class="rounded-md border border-base-300 ring hover:ring block p-5">
  AI-generated API specification based on live request payloads
  </label>
  <label for="" class="rounded-md border border-base-300 block p-5 hover:ring">
  Auto verify that Documentation & Spec are in sync with backend implementation
  </label>
  <label for="" class="rounded-md border border-base-300 block p-5 hover:ring">
  Design beautiful user-facing API documentation portals in minutes.
  </label>
```
::::
{.col-span-2}
::::
![Dashboard Screenshot](/assets/img/dashboard.png){.drop-shadow-lg .w-full .block .rounded-lg .border .border-gray-200}
::::
:::
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




``` =html
  <section class="py-10 my-16">
    <div class="width-control px-2 mx-auto">
      <div class="w-full border-t border-b grid md:grid-cols-2 relative">
        <div class="h-[calc(100%+30px)] w-[1px] absolute border-l top-[-15px] left-[15px]"></div>
        <div class="h-[calc(100%+30px)] w-[1px] absolute border-l top-[-15px] right-[15px]"></div>
        <div class="hidden md:block h-[calc(100%+30px)] w-[1px] absolute border-l top-[-15px] left-[50%]"></div>
        <div class="px-16 py-14">
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
            class="border-t w-[calc(100%-15px)] flex-grow border-b gap-10 flex flex-wrap justify-center items-center">
            <img src="./assets/img/gdpr.png" alt="">
            <img src="./assets/img/security.png" alt="">

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
      <h4 class="text-4xl md:text-5xl font-bold"><span class="text-gray-400">And so</span> much more...</h4>
      <p class="mt-4 text-gray-400 max-w-lg">
        Stay on top of your APIs, with real-time monitoring, specification, and quality assurance.
      </p>
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 mt-20 gap-6">
        <!-- powerful reports -->
        <div
          class="rounded-[20px] overflow-hidden relative flex flex-col p-[40px] group duration-300  hover:border-[#305FB4] dark-shadow border border-transparent box-border">
          <div class="z-10">
            <img src="/assets/img/home/reports.svg" />
          </div>
          <h3 class="font-semibold text-[22px] pb-[6px] pt-[18px]">Powerful reports</h3>
          <p class="text-sm text-gray-400">Get Daily and weekly Reports about the
            numbers that matter.
          </p>
        </div>
        <!-- Up to date API Docs & Spec -->
        <div
          class="rounded-[20px] overflow-hidden relative flex flex-col p-[40px] group duration-300  hover:border-[#305FB4] dark-shadow border border-transparent box-border">
          <div class="z-10"><img src="/assets/img/home/specs.svg"/></div>
          <h3 class="font-semibold text-[20px] pb-[6px] pt-[18px]">Up to date API Docs & Spec</h3>
          <p class="text-sm text-gray-400">AI generated spec based off your traffic. Approve new changes.
          </p>
        </div>
        <!-- Change logs -->
        <div
          class="rounded-[20px] overflow-hidden relative flex flex-col p-[40px] group duration-300  hover:border-[#305FB4] dark-shadow border border-transparent box-border">
          <div class="z-10"><img src="/assets/img/home/auto-changelogs.svg"/></div>
          <h3 class="font-semibold text-[22px] pb-[6px] pt-[18px]">Automatic Changelogs</h3>
          <p class="text-sm text-gray-400">Maintain a changelog of your APis and APIs your depend on.
          </p>
        </div>
        <!-- Errors and analytics -->
        <div
          class="rounded-[20px] overflow-hidden relative flex flex-col p-[40px] group duration-300  hover:border-[#305FB4] dark-shadow border border-transparent box-border">
          <div class="z-10"><img src="/assets/img/home/error-analytics.svg"/></div>
          <h3 class="font-semibold text-[22px] pb-[6px] pt-[18px]">Errors Analytics</h3>
          <p class="text-sm text-gray-400">Get deeper insights about errors and the affected users.
          </p>
        </div>
        <!-- Self host -->
        <div
          class="rounded-[20px] overflow-hidden relative flex flex-col p-[40px] group duration-300  hover:border-[#305FB4] dark-shadow border border-transparent box-border">
          <div class="z-10"><img src="/assets/img/home/selfhost.svg"/></div>
          <h3 class="font-semibold text-[22px] pb-[6px] pt-[18px]">Self host</h3>
          <p class="text-sm text-gray-400">Don’t let your data leave your server via self hosting.
          </p>
        </div>
        <!-- Alerts & Integrations -->
        <div
          class="rounded-[20px] overflow-hidden relative flex flex-col p-[40px] group duration-300  hover:border-[#305FB4] dark-shadow border border-transparent box-border">
          <div class="z-10"><img src="/assets/img/home/alerts.svg"/></div>
          <h3 class="font-semibold text-[22px] pb-[6px] pt-[18px]">Alerts & Integrations</h3>
          <p class="text-sm text-gray-400">Get notified about realtime issues on your terms.
          </p>
        </div>
      </div>

      <div class="flex  w-full flex-col md:flex-row items-center md:justify-between mt-32 gap-6">
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
        <div class="order-1 w-full md:w-max md:order-2  h-full">
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

      <div class="mt-32">
        <h4 class="text-4xl md:text-5xl font-bold"><span class="text-gray-400">Loved by</span> Builders</h4>
        <p class="max-w-[400px] my-4">APItoolkit is the intelligent API management system for teams who value peace of
          mind.</p>

        <div
          class="relative mt-24 p-1 h-[650px] overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[24px]">
          <!--First column-->
          <div class="flex flex-col gap-[24px]">
            <div
              class="rounded-[20px] overflow-hidden w-full p-[24px] flex flex-col gap-[16px] flex-shrink-0 hover:[--iconColor:#266DF0] bg-[#26282D] dark-shadow border border-transparent box-border transition-colors">
              <div class="flex flex-row items-center gap-[10px]">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/twitter-profile-image%2FadeshinaHH-299110704?alt=media"
                  alt="adeshina" loading="lazy" class="rounded-full w-[34px] h-[34px]">
                <div class="flex flex-col gap-[2px]">
                  <p class="text-[currentColor]">adeshina 🇳🇬</p>
                  <p class="text-[#505967]">@adeshinaHH</p>
                </div><i class="fa-brands fa-twitter ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors"></i>                  
              </div>
              <div class="flex flex-col gap-[14px]">
                <p class="text-[#BCC3CE]">
                  If you are bootstrapping an idea or your team already has a product in prod and you need to move fast
                  and focus on the
                  big picture, this is a great tool; abnormalities detector and manual documentation killer, say no
                  more!
                </p>
                <p class="text-[#505967]">10:01 PM · Apr 7, 2022</p>
              </div>
            </div>

            <div
              class="rounded-[20px] overflow-hidden w-full p-[24px] flex flex-col gap-[16px] flex-shrink-0 hover:[--iconColor:#266DF0] bg-[#26282D] dark-shadow border border-transparent box-border transition-colors">
              <div class="flex flex-row items-center gap-[10px]"><img
                  src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/twitter-profile-image%2F_jumaallan-824924295432396800?alt=media&token=8495d793-16bb-4e38-b8a9-9347ed187855"
                  alt="Juma Allan #ThePeople'sWatchman!" loading="lazy" class="rounded-full w-[34px] h-[34px]">
                <div class="flex flex-col gap-[2px]">
                  <p class="text-[currentColor]">Juma Allan #ThePeople'sWatchman!</p>
                  <p class="text-[#505967]">@_jumaallan</p>
                </div>
                <i class="fa-brands fa-twitter ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors"></i>
              </div>
              <div class="flex flex-col gap-[14px] text-[#BCC3CE]">
                <div style="--link-color:#5d5dff">We had <a href="https://twitter.com/spankie_dee"
                    target="_blank">@spankie_dee</a> and
                  <a href="https://twitter.com/tonialaribe" target="_blank">@tonialaribe</a> speak at our last Golang
                  Meetup on
                  Saturday!

                  They preached the Go gospel in our first physical since the pandemic.

                  Be sure to checkout <a href="https://twitter.com/ApiToolkit" target="_blank">@ApiToolkit</a>, which an
                  amazing tool
                  that Anthony is working on 🤩🔥
                  Special thanks to <a href="https://twitter.com/marvin_hosea" target="_blank">@marvin_hosea</a> 🙏
                </div>
                <p class="text-[#505967]">10:01 PM · Apr 7, 2022</p>
              </div>
            </div>
            <div
              class="rounded-[20px] overflow-hidden w-full p-[24px] flex flex-col gap-[16px] flex-shrink-0 hover:[--iconColor:#266DF0] bg-[#26282D] dark-shadow border border-transparent box-border transition-colors">
              <div class="flex flex-row items-center gap-[10px]"><img
                  src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/twitter-profile-image%2Fchangelog-90286855?alt=media&token=6c192f5a-bd29-4e3c-8265-44f22dcd1569"
                  alt="" loading="lazy" class="rounded-full w-[34px] h-[34px]">
                <div class="flex flex-col gap-[2px]">
                  <p class="text-[currentColor]">Changelog</p>
                  <p class="text-[#505967]">@changelog</p>
                </div>
                <i class="fa-brands fa-twitter ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors"></i>
              </div>
              <div class="flex flex-col gap-[14px] text-[#BCC3CE]">
                <div style="--link-color:#5d5dff">3️⃣ Co-founders of <a href="https://twitter.com/ApiToolkit"
                    target="_blank">@ApiToolkit</a> (<a href="https://twitter.com/SmileEgbai"
                    target="_blank">@SmileEgbai</a> &amp; <a href="https://twitter.com/tonialaribe"
                    target="_blank">@tonialaribe</a>) are guests on <a href="https://twitter.com/GoTimeFM"
                    target="_blank">@GoTimeFM</a> for a deep-dive on building and using <a
                    href="https://twitter.com/hashtag/APIs" target="_blank">#APIs</a> with <a
                    href="https://twitter.com/hashtag/golang" target="_blank">#golang</a>

                  🎧 <a href="http://gotime.fm/216" target="_blank">gotime.fm/216</a> </div>
                <p class="text-[#505967]">10:01 PM · Apr 7, 2022</p>
              </div>
            </div>

          </div>
          <!--Second column-->
          <div class="hidden sm:flex flex-col gap-[24px]">
            <div
              class="rounded-[20px] overflow-hidden w-full p-[24px] flex flex-col gap-[16px] flex-shrink-0 hover:[--iconColor:#266DF0] bg-[#26282D] dark-shadow border border-transparent box-border transition-colors">
              <div class="flex flex-row items-center gap-[10px]"><img
                  src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/twitter-profile-image%2Fchangelog-90286855?alt=media&token=6c192f5a-bd29-4e3c-8265-44f22dcd1569"
                  alt="" loading="lazy" class="rounded-full w-[34px] h-[34px]">
                <div class="flex flex-col gap-[2px]">
                  <p class="text-[currentColor]">Changelog</p>
                  <p class="text-[#505967]">@changelog</p>
                </div>
                <i class="fa-brands fa-twitter ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors"></i>
              </div>
              <div class="flex flex-col gap-[14px] text-[#BCC3CE]">
                <div style="--link-color:#5d5dff">3️⃣ Co-founders of <a href="https://twitter.com/ApiToolkit"
                    target="_blank">@ApiToolkit</a> (<a href="https://twitter.com/SmileEgbai"
                    target="_blank">@SmileEgbai</a> &amp;
                  <a href="https://twitter.com/tonialaribe" target="_blank">@tonialaribe</a>) are guests on <a
                    href="https://twitter.com/GoTimeFM" target="_blank">@GoTimeFM</a> for a deep-dive on building and
                  using <a href="https://twitter.com/hashtag/APIs" target="_blank">#APIs</a> with <a
                    href="https://twitter.com/hashtag/golang" target="_blank">#golang</a>

                  🎧 <a href="http://gotime.fm/216" target="_blank">gotime.fm/216</a>
                </div>
                <p class="text-[#505967]">10:01 PM · Apr 7, 2022</p>
              </div>
            </div>


            <div
              class="rounded-[20px] overflow-hidden w-full p-[24px] flex flex-col gap-[16px] flex-shrink-0 hover:[--iconColor:#266DF0] bg-[#26282D] dark-shadow border border-transparent box-border transition-colors">
              <div class="flex flex-row items-center gap-[10px]"><img
                  src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/twitter-profile-image%2Fcollseo-1518927530732015616?alt=media&token=817fb740-20b2-420b-9a92-d974391816a9"
                  alt="" loading="lazy" class="rounded-full w-[34px] h-[34px]">
                <div class="flex flex-col gap-[2px]">
                  <p class="text-[currentColor]">Tech Guy</p>
                  <p class="text-[#505967]">@collseo</p>
                </div>
                <i class="fa-brands fa-twitter ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors"></i>
              </div>
              <div class="flex flex-col gap-[14px]">
                <div class="text-[#BCC3CE]">Invaluable thread.
                  Use this one super tool to tackle API downtime issues <a href="https://twitter.com/ApiToolkit"
                    target="_blank">@ApiToolkit</a> </div>
                <p class="text-[#505967]">10:01 PM · Apr 7, 2022</p>
              </div>
            </div>

            <div
              class="rounded-[20px] overflow-hidden w-full p-[24px] flex flex-col gap-[16px] flex-shrink-0 hover:[--iconColor:#266DF0] bg-[#26282D] dark-shadow border border-transparent box-border transition-colors">
              <div class="flex flex-row items-center gap-[10px]"><img
                  src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/twitter-profile-image%2Ftonialaribe-2382836425?alt=media&token=0b3c07ef-ed05-43d1-abf1-b111c5757567"
                  alt="Anthony Alaribe" loading="lazy" class="rounded-full w-[34px] h-[34px]">
                <div class="flex flex-col gap-[2px]">
                  <p class="text-[currentColor]">Anthony Alaribe</p>
                  <p class="text-[#505967]">@tonialaribe</p>
                </div>
                <i class="fa-brands fa-twitter ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors"></i>
              </div>
              <div class="flex flex-col gap-[14px]">
                <div style="--link-color:#5d5dff">Not gonna lie, I really like what the <a
                    href="https://twitter.com/ApiToolkit" target="_blank">@ApiToolkit</a> log explorer let's me do.
                </div>
                <p class="text-[#505967]">10:01 PM · Apr 7, 2022</p>
              </div>
            </div>

          </div>
          <!--Third column-->
          <div class="hidden md:flex flex-col gap-[24px]">
            <div
              class="rounded-[20px] overflow-hidden w-full p-[24px] flex flex-col gap-[16px] flex-shrink-0 hover:[--iconColor:#266DF0] bg-[#26282D] dark-shadow border border-transparent box-border transition-colors">
              <div class="flex flex-row items-center gap-[10px]"><img
                  src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/twitter-profile-image%2Ftonialaribe-2382836425?alt=media&token=0b3c07ef-ed05-43d1-abf1-b111c5757567"
                  alt="Anthony Alaribe" loading="lazy" class="rounded-full w-[34px] h-[34px]">
                <div class="flex flex-col gap-[2px]">
                  <p class="text-[currentColor]">Anthony Alaribe</p>
                  <p class="text-[#505967]">@tonialaribe</p>
                </div>
                <i class="fa-brands fa-twitter ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors"></i>
              </div>
              <div class="flex flex-col gap-[14px]">
                <div style="--link-color:#5d5dff">Not gonna lie, I really like what the <a
                    href="https://twitter.com/ApiToolkit" target="_blank">@ApiToolkit</a> log explorer let's me do.
                </div>
                <p class="text-[#505967]">10:01 PM · Apr 7, 2022</p>
              </div>
            </div>

            <div
              class="rounded-[20px] overflow-hidden w-full p-[24px] flex flex-col gap-[16px] flex-shrink-0 hover:[--iconColor:#266DF0] bg-[#26282D] dark-shadow border border-transparent box-border transition-colors">
              <div class="flex flex-row items-center gap-[10px]"><img
                  src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/twitter-profile-image%2FJM_Bassey-2196860159?alt=media&token=b134e829-31dc-4554-9346-3c3ea77744f7"
                  alt="JB" loading="lazy" class="rounded-full w-[34px] h-[34px]">
                <div class="flex flex-col gap-[2px]">
                  <p class="text-[currentColor]">JB</p>
                  <p class="text-[#505967]">@JM_Bassey</p>
                </div>
                <i class="fa-brands fa-twitter ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors"></i>
              </div>
              <div class="flex flex-col gap-[14px]">
                <div class="text-[#BCC3CE]">one of the major problem <a href="https://twitter.com/SmileEgbai"
                    target="_blank">@SmileEgbai</a>, <a href="https://twitter.com/tonialaribe"
                    target="_blank">@tonialaribe</a>, <a href="https://twitter.com/ApiToolkit"
                    target="_blank">@ApiToolkit</a> is trying to solve. <a
                    href="http://twitter.com/GergelyOrosz/status/1502947315279187979"
                    target="_blank">twitter.com/GergelyOrosz/status/1502947315279187979</a> </div>
                <p class="text-[#505967]">10:01 PM · Apr 7, 2022</p>
              </div>
            </div>

            <div
              class="rounded-[20px] overflow-hidden w-full p-[24px] flex flex-col gap-[16px] flex-shrink-0 hover:[--iconColor:#266DF0] bg-[#26282D] dark-shadow border border-transparent box-border transition-colors">
              <div class="flex flex-row items-center gap-[10px]">
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/testimonialto.appspot.com/o/twitter-profile-image%2FadeshinaHH-299110704?alt=media"
                  alt="adeshina" loading="lazy" class="rounded-full w-[34px] h-[34px]">
                <div class="flex flex-col gap-[2px]">
                  <p class="text-[currentColor]">adeshina 🇳🇬</p>
                  <p class="text-[#505967]">@adeshinaHH</p>
                </div>
                <i class="fa-brands fa-twitter ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors"></i>
              </div>
              <div class="flex flex-col gap-[14px]">
                <p class="text-[#BCC3CE]">
                  If you are bootstrapping an idea or your team already has a product in prod and you need to move fast
                  and focus on the
                  big picture, this is a great tool; abnormalities detector and manual documentation killer, say no
                  more!
                </p>
                <p class="text-[#505967]">10:01 PM · Apr 7, 2022</p>
              </div>
            </div>

          </div>
          <div class="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#232529]">
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="py-24 bg-[#F9FBFF]">
    <div class="width-control mx-auto">
      <div class="flex flex-col md:flex-row gap-16">
        <div class="flex-grow mt-16">
          <h3 class="text-4xl md:text-6xl font-bold mb-3">Frequently Asked <br> Questions</h3>
          <span class="text-gray-500 text-sm">Some questions others have asked</span>
          <a href="https://apitoolkit.io/docs/troubleshooting-and-faq/faq/"
            class="block  mt-6 text-blue-600 underline text-sm">View all FAQ</a>
        </div>
        <div class="flex w-full md:w-[40%] flex-col gap-4 text-gray-700">
          <div class="bg-white px-6 py-3 shadow-sm">
            <button class="flex gap-4 items-center text-left hover:text-gray-800" onclick="toggleFaq(event)">
                <i class="fa-solid fa-caret-right flex-shrink-0"></i>
              What programming languages are supported?
            </button>
            <div class="pl-4 py-4 hidden text-gray-600">
              We support Golang, PHP, C#, Java, etc. If we don't support your language or framework, please drop a
              message. We can create one on demand quite quickly.
            </div>
          </div>
          <div class="bg-white px-6 py-3 shadow-sm">
            <button class="flex gap-4 items-center text-left hover:text-gray-800" onclick="toggleFaq(event)">
            <i class="fa-solid fa-caret-right flex-shrink-0"></i>
              Do my requests have to leave my server to APIToolkit Servers?
            </button>
            <div class="pl-4 py-4 hidden text-gray-600">
              Only if you want to benefit from the API metrics and the logs explorer. You can also enjoy all the other
              functionality
              which don't depend on your API traffic.
            </div>
          </div>
          <div class="bg-white px-6 py-3 shadow-sm">
            <button class="flex gap-4 items-center text-left hover:text-gray-800" onclick="toggleFaq(event)">
                <i class="fa-solid fa-caret-right flex-shrink-0"></i>
              Can I prevent sending sensitive Data to APIToolkit?
            </button>
            <div class="pl-4 py-4 hidden text-gray-600">
              Yes. All our SDKs support redacting data. Simply specify the json path to the fields which you don't
              want the SDKs to
              forward to APIToolkit, and those fields will be stripped out/redacted before the data even leaves your
              servers. So we
              would never see them.

            </div>
          </div>
          <div class="bg-white px-6 py-3 shadow-sm">
            <button class="flex gap-4 items-center text-left hover:text-gray-800" onclick="toggleFaq(event)">
                <i class="fa-solid fa-caret-right flex-shrink-0"></i>
              I really love what you're doing. How do I show support?
            </button>
            <div class="pl-4 py-4 hidden text-gray-600">
              Give a shout out on twitter or discord. We would also appreciate honest feedback about what we're
              building. And suggestions for what functionality you would love to see next.
            </div>
          </div>

          <div class="bg-white px-6 py-3 shadow-sm">
            <button class="flex gap-4 items-center text-left hover:text-gray-800" onclick="toggleFaq(event)">
                <i class="fa-solid fa-caret-right flex-shrink-0"></i>
              Will the SDKs slow down my backend?
            </button>
            <div class="pl-4 py-4 hidden text-gray-600">
              It depends. Most SDKs stream data asynchronously via google pubsub streaming, so your requests will see
              almost zero
              change in performance. Except if you use PHP. Because PHP doesn't support async workflows by default.
              But if you have
              the GRPC extension installed in your PHP environment, the GRPC extension is used by pubsub to stream
              data asynchronously
              like in other languages. Otherwise, you pay a very tiny performance hit to send data to google pubsub.
              But this
              performance hit is rarely noticable and usually under 5ms added to every request.
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

```
