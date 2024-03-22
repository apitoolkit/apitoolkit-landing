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
```

{% render "default/markdown/hero-section", this:this %}

``` =html

<main>
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
{.cols-span-1 .space-y-5 .text-lg .font-medium}
::::
```=html
  <label for="" class="rounded-md border border-base-300 ring hover:ring block p-5">
      API and Endpoint Analytics
  </label>
  <label for="" class="rounded-md border border-base-300 block p-5 hover:ring">
      Log Explorer to query Incoming and Outgoing Requests
  </label>
  <label for="" class="rounded-md border border-base-300 block p-5 hover:ring">
      Performance Analytics 
  </label>
  <label for="" class="rounded-md border border-base-300 block p-5 hover:ring">
      Custom Alerts on API performance and metrics
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

## Backend Errors & API Breaking Changes

{.max-w-4xl .text-lg .pt-2}
Get to the root cause of every issue. Whether it is caused by runtime errors, breaking API changes introduced by third-party integrations, or unintended API-breaking changes by your team.

{.grid .grid-cols-3 .py-8 .gap-5}
:::
{.cols-span-1 .space-y-5 .text-lg .font-medium}
::::
```=html
  <label for="" class="rounded-md border border-base-300 ring hover:ring block p-5">
  See all your errors and API issues at a glance
  </label>
  <label for="" class="rounded-md border border-base-300 block p-5 hover:ring">
  Trace Errors to their Root Cause 
  </label>
  <label for="" class="rounded-md border border-base-300 block p-5 hover:ring">
  Track Breaking changes in your APIs and integrations
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
            <svg width="289" class="w-full" height="150" viewBox="0 0 289 150" fill="none" `
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_1489_231880)">
                <g>
                  <rect x="5" y="25" width="279" height="88"
                    class="stroke-[#505967] transition duration-300 group-hover:stroke-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                    stroke-width="0.5" stroke-linecap="round" stroke-dasharray="4 4"></rect>
                  <rect x="1" y="20" width="9" height="9" rx="2"
                    class="stroke-[#505967] transition duration-300 group-hover:stroke-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF] fill-[#26282D]"
                    stroke-width="0.5"></rect>
                  <rect x="279" y="20" width="9" height="9" rx="2"
                    class="stroke-[#505967] transition duration-300 group-hover:stroke-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF] fill-[#26282D]"
                    stroke-width="0.5"></rect>
                  <rect x="1" y="108" width="9" height="9" rx="2"
                    class="stroke-[#505967] transition duration-300 group-hover:stroke-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF] fill-[#26282D]"
                    stroke-width="0.5"></rect>
                  <rect x="279" y="108" width="9" height="9" rx="2"
                    class="stroke-[#505967] transition duration-300 group-hover:stroke-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF] fill-[#26282D]"
                    stroke-width="0.5"></rect>
                </g>
                <g>
                  <g>
                    <rect x="110" y="92" width="50" height="34" rx="6" fill="#26282D"></rect>
                    <rect x="110.25" y="92.25" width="49.5" height="33.5" rx="5.75" stroke="#383E47"
                      class="stroke-[#383E47] transition duration-300 group-hover:stroke-[#505967] group-data-[active=true]:stroke-[#505967]"
                      stroke-width="0.5"></rect>
                  </g>
                  <rect x="115" y="117" width="18" height="4" rx="2" fill="#383E47"
                    class="transition duration-300 group-hover:fill-[#505967] group-data-[active=true]:fill-[#505967]">
                  </rect>
                </g>
                <g>
                  <g>
                    <rect x="53" y="92" width="50" height="34" rx="6" fill="#26282D"></rect>
                    <rect x="53.25" y="92.25" width="49.5" height="33.5" rx="5.75" stroke="#383E47"
                      class="stroke-[#383E47] transition duration-300 group-hover:stroke-[#505967] group-data-[active=true]:stroke-[#505967]"
                      stroke-width="0.5"></rect>
                  </g>
                  <rect x="58" y="117" width="17" height="4" rx="2" fill="#383E47"
                    class="transition duration-300 group-hover:fill-[#505967] group-data-[active=true]:fill-[#505967]">
                  </rect>
                </g>
                <g>
                  <g>
                    <rect x="53" y="51" width="43" height="34" rx="6" fill="#26282D"></rect>
                    <rect x="53.25" y="51.25" width="42.5" height="33.5" rx="5.75" stroke="#383E47"
                      class="stroke-[#383E47] transition duration-300 group-hover:stroke-[#505967] group-data-[active=true]:stroke-[#505967]"
                      stroke-width="0.5"></rect>
                  </g>
                  <rect x="58" y="76" width="17" height="4" rx="2" fill="#383E47"
                    class="transition duration-300 group-hover:fill-[#505967] group-data-[active=true]:fill-[#505967]">
                  </rect>
                </g>
                <g>
                  <g>
                    <rect x="53" y="10" width="64" height="34" rx="6" fill="#26282D"></rect>
                    <rect x="53.25" y="10.25" width="63.5" height="33.5" rx="5.75" stroke="#383E47"
                      class="stroke-[#383E47] transition duration-300 group-hover:stroke-[#505967] group-data-[active=true]:stroke-[#505967]"
                      stroke-width="0.5"></rect>
                  </g>
                  <rect x="58" y="35" width="17" height="4" rx="2" fill="#383E47"
                    class="transition duration-300 group-hover:fill-[#505967] group-data-[active=true]:fill-[#505967]">
                  </rect>
                  <rect x="58" y="15" width="4" height="4" rx="2" fill="#383E47"
                    class="transition duration-300 group-hover:fill-[#505967] group-data-[active=true]:fill-[#505967]">
                  </rect>
                </g>
                <g class="origin-[201px_109px] transform duration-300 transition group-hover:scale-[95%] group-data-[active=true]:scale-[95%]"
                  width="69" height="34">
                  <g>
                    <rect x="167" y="92" width="69" height="34" rx="6" fill="#26282D"></rect>
                    <rect x="167.25" y="92.25" width="68.5" height="33.5" rx="5.75" stroke="#383E47"
                      class="stroke-[#383E47] transition duration-300 group-hover:stroke-[#505967] group-data-[active=true]:stroke-[#505967]"
                      stroke-width="0.5"></rect>
                  </g>
                  <rect x="172" y="117" width="19" height="4" rx="2" fill="#383E47"
                    class="group-hover:fill-brand-light-primary group-data-[active=true]:fill-brand-light-primary transition duration-300">
                  </rect>
                  <path
                    d="M220.986 99.0858C220.986 98.4783 221.479 97.9858 222.086 97.9858C222.694 97.9858 223.186 98.4783 223.186 99.0858V100.186H222.086C221.479 100.186 220.986 99.6934 220.986 99.0858Z"
                    stroke="#6F7988" stroke-width="1.13143" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path
                    d="M227.9 99.0858C227.9 98.4783 228.393 97.9858 229 97.9858C229.608 97.9858 230.1 98.4783 230.1 99.0858C230.1 99.6934 229.608 100.186 229 100.186H227.9V99.0858Z"
                    stroke="#6F7988" stroke-width="1.13143" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path
                    d="M227.9 104.9H229C229.608 104.9 230.1 105.392 230.1 106C230.1 106.607 229.608 107.1 229 107.1C228.393 107.1 227.9 106.607 227.9 106V104.9Z"
                    stroke="#6F7988" stroke-width="1.13143" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path
                    d="M220.986 106C220.986 105.392 221.479 104.9 222.086 104.9H223.186V106C223.186 106.607 222.694 107.1 222.086 107.1C221.479 107.1 220.986 106.607 220.986 106Z"
                    stroke="#6F7988" stroke-width="1.13143" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M223.186 100.186H227.9V104.9H223.186V100.186Z" stroke="#6F7988" stroke-width="1.13143"
                    stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
                <g
                  class="origin-[120px_68px] duration-300 transform transition group-hover:scale-[88%] group-data-[active=true]:scale-[88%]">
                  <g>
                    <rect x="103" y="51" width="34" height="34" rx="6" fill="#26282D"></rect>
                    <rect x="103.25" y="51.25" width="33.5" height="33.5" rx="5.75" stroke="#383E47"
                      class="stroke-[#383E47] transition duration-300 group-hover:stroke-[#6F7988] group-data-[active=true]:stroke-[#6F7988]"
                      stroke-width="0.5"></rect>
                  </g>
                  <path
                    d="M116.665 73V71.9048L121.02 65.794H116.656V64.2727H123.338V65.3679L118.979 71.4787H123.347V73H116.665Z"
                    class="fill-[#9098A0] group-hover:fill-[#4B8BFF] group-data-[active=true]:fill-[#4B8BFF] transition duration-300">
                  </path>
                </g>
                <g>
                  <g>
                    <rect x="144" y="51" width="34" height="34" rx="6" fill="#26282D"></rect>
                    <rect x="144.25" y="51.25" width="33.5" height="33.5" rx="5.75" stroke="#383E47"
                      class="stroke-[#383E47] transition duration-300 group-hover:stroke-[#505967] group-data-[active=true]:stroke-[#505967]"
                      stroke-width="0.5"></rect>
                  </g>
                  <path
                    d="M159.182 64.2727L161.104 67.4688H161.172L163.102 64.2727H164.905L162.216 68.6364L164.947 73H163.115L161.172 69.8253H161.104L159.161 73H157.337L160.094 68.6364L157.371 64.2727H159.182Z"
                    fill="#6B9FFF"
                    class="transition duration-300 group-hover:fill-[#6F7988] group-data-[active=true]:fill-[#6F7988]">
                  </path>
                </g>
                <g>
                  <g>
                    <rect x="124" y="10" width="34" height="34" rx="6" fill="#26282D"></rect>
                    <rect x="124.25" y="10.25" width="33.5" height="33.5" rx="5.75" stroke="#383E47"
                      class="stroke-[#383E47] transition duration-300 group-hover:stroke-[#505967] group-data-[active=true]:stroke-[#505967]"
                      stroke-width="0.5"></rect>
                  </g>
                  <path
                    d="M138.982 32H137.294L140.366 23.2727H142.318L145.395 32H143.707L141.376 25.0625H141.308L138.982 32ZM139.037 28.5781H143.639V29.848H139.037V28.5781Z"
                    fill="#6B9FFF"
                    class="transition duration-300 group-hover:fill-[#6F7988] group-data-[active=true]:fill-[#6F7988]">
                  </path>
                </g>
                <g>
                  <g>
                    <rect x="165" y="10" width="34" height="34" rx="6" fill="#26282D"></rect>
                    <rect x="165.25" y="10.25" width="33.5" height="33.5" rx="5.75" stroke="#383E47"
                      class="stroke-[#383E47] transition duration-300 group-hover:stroke-[#505967] group-data-[active=true]:stroke-[#505967]"
                      stroke-width="0.5"></rect>
                  </g>
                  <path
                    d="M183.604 25.6719C183.564 25.2997 183.396 25.0099 183.101 24.8026C182.808 24.5952 182.428 24.4915 181.959 24.4915C181.629 24.4915 181.347 24.5412 181.111 24.6406C180.875 24.7401 180.695 24.875 180.57 25.0455C180.445 25.2159 180.381 25.4105 180.378 25.6293C180.378 25.8111 180.419 25.9687 180.501 26.1023C180.587 26.2358 180.702 26.3494 180.847 26.4432C180.991 26.5341 181.152 26.6108 181.328 26.6733C181.504 26.7358 181.682 26.7884 181.861 26.831L182.679 27.0355C183.009 27.1122 183.325 27.2159 183.629 27.3466C183.936 27.4773 184.21 27.642 184.452 27.8409C184.696 28.0398 184.889 28.2798 185.031 28.5611C185.173 28.8423 185.244 29.1719 185.244 29.5497C185.244 30.0611 185.114 30.5114 184.852 30.9006C184.591 31.2869 184.213 31.5895 183.719 31.8082C183.227 32.0241 182.632 32.1321 181.933 32.1321C181.254 32.1321 180.665 32.027 180.165 31.8168C179.668 31.6065 179.278 31.2997 178.997 30.8963C178.719 30.4929 178.568 30.0014 178.545 29.4219H180.101C180.124 29.7259 180.217 29.9787 180.382 30.1804C180.547 30.3821 180.761 30.5327 181.026 30.6321C181.293 30.7315 181.591 30.7812 181.92 30.7812C182.264 30.7812 182.565 30.7301 182.824 30.6278C183.085 30.5227 183.29 30.3778 183.438 30.1932C183.585 30.0057 183.661 29.7869 183.663 29.5369C183.661 29.3097 183.594 29.1222 183.463 28.9744C183.332 28.8239 183.149 28.6989 182.913 28.5994C182.68 28.4972 182.408 28.4062 182.095 28.3267L181.102 28.071C180.384 27.8864 179.815 27.6065 179.398 27.2315C178.983 26.8537 178.776 26.3523 178.776 25.7273C178.776 25.2131 178.915 24.7628 179.193 24.3764C179.474 23.9901 179.857 23.6903 180.339 23.4773C180.822 23.2614 181.369 23.1534 181.98 23.1534C182.599 23.1534 183.142 23.2614 183.608 23.4773C184.077 23.6903 184.445 23.9872 184.712 24.3679C184.979 24.7457 185.116 25.1804 185.125 25.6719H183.604Z"
                    fill="#6B9FFF"
                    class="transition duration-300 group-hover:fill-[#6F7988] group-data-[active=true]:fill-[#6F7988]">
                  </path>
                </g>
              </g>
            </svg>
          </div>
          <h3 class="font-semibold text-[22px] pb-[6px] pt-[18px]">Powerful reports</h3>
          <p class="text-sm text-gray-400">Get Daily and weekly Reports about the
            numbers that matter.
          </p>
        </div>
        <!-- Up to date API Docs & Spec -->
        <div
          class="rounded-[20px] overflow-hidden relative flex flex-col p-[40px] group duration-300  hover:border-[#305FB4] dark-shadow border border-transparent box-border">
          <div class="z-10"><svg width="290" height="150" viewBox="0 0 290 150" class="w-full" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_886_319647)">
                <g>
                  <rect x="5" y="25" width="279" height="88"
                    class="stroke-[#505967] transition duration-300 group-hover:stroke-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                    stroke-width="0.5" stroke-linecap="round" stroke-dasharray="4 4"></rect>
                  <rect x="1" y="20" width="9" height="9" rx="2"
                    class="fill-[#26282D] stroke-[#505967] transition duration-300 group-hover:stroke-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                    stroke-width="0.5"></rect>
                  <rect x="279" y="20" width="9" height="9" rx="2"
                    class="fill-[#26282D] stroke-[#505967] transition duration-300 group-hover:stroke-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                    stroke-width="0.5"></rect>
                  <rect x="1" y="108" width="9" height="9" rx="2"
                    class="fill-[#26282D] stroke-[#505967] transition duration-300 group-hover:stroke-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                    stroke-width="0.5"></rect>
                  <rect x="279" y="108" width="9" height="9" rx="2"
                    class="fill-[#26282D] stroke-[#505967] transition duration-300 group-hover:stroke-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                    stroke-width="0.5"></rect>
                </g>
                <g
                  class="translate-y-0px transform transition duration-300 group-hover:translate-y-[-6px] group-data-[active=true]:translate-y-[-6px]">
                  <g>
                    <rect x="53" y="10" width="183" height="34" rx="6" fill="#26282D"></rect>
                    <rect x="53.25" y="10.25" width="182.5" height="33.5" rx="5.75" stroke="#505967" stroke-width="0.5">
                    </rect>
                  </g>
                  <rect x="83" y="24" width="34" height="6" rx="3" fill="#505967"
                    class="transition-all duration-300 group-hover:w-[64px] group-data-[active=true]:w-[64px]"></rect>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M63.8292 23.6702C63.7256 23.8835 63.668 24.1202 63.668 24.3694V29.6313C63.668 30.5715 64.4888 31.3337 65.5013 31.3337H72.5013C73.5138 31.3337 74.3346 30.5715 74.3346 29.6313V24.3694C74.3346 24.1202 74.277 23.8835 74.1734 23.6702L69.3371 27.5522C69.1465 27.7051 68.8561 27.7051 68.6655 27.5522L63.8292 23.6702ZM73.5516 22.9739C73.2542 22.7805 72.892 22.667 72.5013 22.667H65.5013C65.1106 22.667 64.7484 22.7805 64.451 22.9739L69.0013 26.6263L73.5516 22.9739Z"
                    fill="#6B9FFF"
                    class="transition duration-300 group-hover:fill-[#6F7988] group-data-[active=true]:fill-[#6F7988]">
                  </path>
                  <g class="transition duration-300 group-hover:opacity-100 group-data-[active=true]:opacity-100">
                    <path
                      d="M219.25 22.0625C219.25 24.1336 218.134 26 216.062 26C218.134 26 219.25 27.8664 219.25 29.9375C219.25 27.8664 220.366 26 222.437 26C220.366 26 219.25 24.1336 219.25 22.0625Z"
                      fill="#505967"
                      class="transition duration-300 group-hover:fill-[#505967] group-data-[active=true]:fill-[#505967]">
                    </path>
                    <path
                      d="M214 28.0625C214 29.3051 212.805 30.5 211.562 30.5C212.805 30.5 214 31.6949 214 32.9375C214 31.6949 215.195 30.5 216.437 30.5C215.195 30.5 214 29.3051 214 28.0625Z"
                      fill="#505967"
                      class="transition duration-300 group-hover:fill-[#505967] group-data-[active=true]:fill-[#505967]">
                    </path>
                    <path
                      d="M219.25 22.0625C219.25 24.1336 218.134 26 216.062 26C218.134 26 219.25 27.8664 219.25 29.9375C219.25 27.8664 220.366 26 222.437 26C220.366 26 219.25 24.1336 219.25 22.0625Z"
                      stroke="#505967"
                      class="transition duration-300 group-hover:stroke-[#505967] group-data-[active=true]:stroke-[#505967]"
                      stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path
                      d="M214 28.0625C214 29.3051 212.805 30.5 211.562 30.5C212.805 30.5 214 31.6949 214 32.9375C214 31.6949 215.195 30.5 216.437 30.5C215.195 30.5 214 29.3051 214 28.0625Z"
                      stroke="#505967"
                      class="transition duration-300 group-hover:stroke-[#505967] group-data-[active=true]:stroke-[#505967]"
                      stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"></path>
                  </g>
                </g>
                <g
                  class="translate-y-0px transform transition duration-300 group-hover:translate-y-[6px] group-data-[active=true]:translate-y-[6px]">
                  <g>
                    <rect x="53" y="92" width="183" height="34" rx="6" fill="#26282D"></rect>
                    <rect x="53.25" y="92.25" width="182.5" height="33.5" rx="5.75" stroke="#505967" stroke-width="0.5">
                    </rect>
                  </g>
                  <rect x="83" y="106" width="44" height="6" rx="3" fill="#505967"
                    class="transition-all duration-300 group-hover:w-[64px] group-data-[active=true]:w-[64px]"></rect>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M68.7173 114.246C68.7174 114.247 68.7175 114.247 68.9987 113.833L68.7173 114.246ZM69.2804 114.246L69.2813 114.246L69.2843 114.244L69.2947 114.236L69.3326 114.21C69.3652 114.187 69.4121 114.154 69.4714 114.111C69.5899 114.025 69.7579 113.9 69.9589 113.742C70.3601 113.426 70.8969 112.975 71.4356 112.437C71.9726 111.9 72.5227 111.264 72.9412 110.578C73.3574 109.895 73.6654 109.127 73.6654 108.333C73.6654 105.714 71.4743 103.667 68.9987 103.667C66.5231 103.667 64.332 105.714 64.332 108.333C64.332 109.127 64.64 109.895 65.0562 110.578C65.4747 111.264 66.0248 111.9 66.5618 112.437C67.1005 112.975 67.6373 113.426 68.0385 113.742C68.2395 113.9 68.4075 114.025 68.526 114.111C68.5853 114.154 68.6322 114.187 68.6648 114.21L68.7027 114.236L68.7131 114.244L68.7161 114.246L68.7173 114.246C68.887 114.362 69.1107 114.362 69.2804 114.246ZM68.9987 113.833L69.2804 114.246C69.2803 114.246 69.2799 114.247 68.9987 113.833ZM67.166 108.333C67.166 107.32 67.9868 106.5 68.9993 106.5C70.0119 106.5 70.8327 107.32 70.8327 108.333C70.8327 109.345 70.0119 110.166 68.9993 110.166C67.9868 110.166 67.166 109.345 67.166 108.333Z"
                    fill="#6B9FFF"
                    class="transition duration-300 group-hover:fill-[#6F7988] group-data-[active=true]:fill-[#6F7988]">
                  </path>
                  <g class="transition duration-300 group-hover:opacity-100 group-data-[active=true]:opacity-100">
                    <path
                      d="M219.25 104.062C219.25 106.134 218.134 108 216.062 108C218.134 108 219.25 109.866 219.25 111.937C219.25 109.866 220.366 108 222.437 108C220.366 108 219.25 106.134 219.25 104.062Z"
                      fill="#505967"
                      class="transition duration-300 group-hover:fill-[#505967] group-data-[active=true]:fill-[#505967]">
                    </path>
                    <path
                      d="M214 110.062C214 111.305 212.805 112.5 211.562 112.5C212.805 112.5 214 113.695 214 114.937C214 113.695 215.195 112.5 216.437 112.5C215.195 112.5 214 111.305 214 110.062Z"
                      fill="#505967"
                      class="transition duration-300 group-hover:fill-[#505967] group-data-[active=true]:fill-[#505967]">
                    </path>
                    <path
                      d="M219.25 104.062C219.25 106.134 218.134 108 216.062 108C218.134 108 219.25 109.866 219.25 111.937C219.25 109.866 220.366 108 222.437 108C220.366 108 219.25 106.134 219.25 104.062Z"
                      stroke="#505967"
                      class="transition duration-300 group-hover:stroke-[#505967] group-data-[active=true]:stroke-[#505967]"
                      stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path
                      d="M214 110.062C214 111.305 212.805 112.5 211.562 112.5C212.805 112.5 214 113.695 214 114.937C214 113.695 215.195 112.5 216.437 112.5C215.195 112.5 214 111.305 214 110.062Z"
                      stroke="#505967"
                      class="transition duration-300 group-hover:stroke-[#505967] group-data-[active=true]:stroke-[#505967]"
                      stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"></path>
                  </g>
                </g>
                <g>
                  <g>
                    <rect x="53" y="51" width="183" height="34" rx="6" fill="#26282D"></rect>
                    <rect x="53.25" y="51.25" width="182.5" height="33.5" rx="5.75" stroke="#505967" stroke-width="0.5">
                    </rect>
                  </g>
                  <rect x="83" y="65" width="56" height="6" rx="3" fill="#505967"
                    class="transition-all duration-300 group-hover:w-[49px] group-hover:fill-[#4B8BFF] group-data-[active=true]:w-[49px] group-data-[active=true]:fill-[#4B8BFF]">
                  </rect>
                  <g>
                    <path
                      d="M64.168 72.8332L67.0013 72.1666L73.1966 65.9713C73.4569 65.711 73.4569 65.2888 73.1966 65.0285L71.9727 63.8046C71.7124 63.5443 71.2902 63.5443 71.0299 63.8046L64.8346 69.9999L64.168 72.8332Z"
                      fill="#6F7988" stroke="#6F7988"
                      class="transition duration-300 group-hover:fill-[#4B8BFF] group-hover:stroke-[#4B8BFF] group-data-[active=true]:fill-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                      stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path d="M73.8346 72.833H70.168" stroke="#6F7988"
                      class="transition duration-300 group-hover:stroke-[#6B9FFF] group-data-[active=true]:stroke-[#6B9FFF]"
                      stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                  </g>
                  <g>
                    <path
                      d="M219.25 63.0625C219.25 65.1336 218.134 67 216.062 67C218.134 67 219.25 68.8664 219.25 70.9375C219.25 68.8664 220.366 67 222.437 67C220.366 67 219.25 65.1336 219.25 63.0625Z"
                      fill="#9098A0"
                      class="transition duration-300 group-hover:fill-[#4B8BFF] group-data-[active=true]:fill-[#4B8BFF]">
                    </path>
                    <path
                      d="M214 69.0625C214 70.3051 212.805 71.5 211.562 71.5C212.805 71.5 214 72.6949 214 73.9375C214 72.6949 215.195 71.5 216.437 71.5C215.195 71.5 214 70.3051 214 69.0625Z"
                      fill="#9098A0"
                      class="transition duration-300 group-hover:fill-[#4B8BFF] group-data-[active=true]:fill-[#4B8BFF]">
                    </path>
                    <path
                      d="M219.25 63.0625C219.25 65.1336 218.134 67 216.062 67C218.134 67 219.25 68.8664 219.25 70.9375C219.25 68.8664 220.366 67 222.437 67C220.366 67 219.25 65.1336 219.25 63.0625Z"
                      stroke="#9098A0"
                      class="transition duration-300 group-hover:stroke-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                      stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"></path>
                    <path
                      d="M214 69.0625C214 70.3051 212.805 71.5 211.562 71.5C212.805 71.5 214 72.6949 214 73.9375C214 72.6949 215.195 71.5 216.437 71.5C215.195 71.5 214 70.3051 214 69.0625Z"
                      stroke="#9098A0"
                      class="transition duration-300 group-hover:stroke-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                      stroke-width="1.35" stroke-linecap="round" stroke-linejoin="round"></path>
                  </g>
                </g>
              </g>
            </svg></div>
          <h3 class="font-semibold text-[20px] pb-[6px] pt-[18px]">Up to date API Docs & Spec</h3>
          <p class="text-sm text-gray-400">AI generated spec based off your traffic. Approve new changes.
          </p>
        </div>
        <!-- Change logs -->
        <div
          class="rounded-[20px] overflow-hidden relative flex flex-col p-[40px] group duration-300  hover:border-[#305FB4] dark-shadow border border-transparent box-border">
          <div class="z-10"><svg width="290" class="w-full" height="150" viewBox="0 0 290 150" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_886_319679)">
                <g>
                  <rect x="5" y="25" width="279" height="88"
                    class="stroke-[#505967] transition duration-300 group-hover:stroke-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                    stroke-width="0.5" stroke-linecap="round" stroke-dasharray="4 4"></rect>
                  <rect x="1" y="20" width="9" height="9" rx="2"
                    class="fill-[#26282D] stroke-[#505967] transition duration-300 group-hover:stroke-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                    stroke-width="0.5"></rect>
                  <rect x="279" y="20" width="9" height="9" rx="2"
                    class="fill-[#26282D] stroke-[#505967] transition duration-300 group-hover:stroke-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                    stroke-width="0.5"></rect>
                  <rect x="1" y="108" width="9" height="9" rx="2"
                    class="fill-[#26282D] stroke-[#505967] transition duration-300 group-hover:stroke-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                    stroke-width="0.5"></rect>
                  <rect x="279" y="108" width="9" height="9" rx="2"
                    class="fill-[#26282D] stroke-[#505967] transition duration-300 group-hover:stroke-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                    stroke-width="0.5"></rect>
                </g>
                <g>
                  <rect x="53.666" y="10" width="183" height="34" rx="6" fill="#26282D"></rect>
                  <rect x="53.916" y="10.25" width="182.5" height="33.5" rx="5.75" stroke="#505967" stroke-width="0.5">
                  </rect>
                </g>
                <circle cx="64.666" cy="27" r="3" fill="#505967"></circle>
                <circle cx="74.666" cy="27" r="3" fill="#505967"></circle>
                <circle cx="84.666" cy="27" r="3" fill="#505967"></circle>
                <circle cx="221.666" cy="27" r="7.5" fill="#505967" stroke="#26282D"></circle>
                <circle cx="212.666" cy="27" r="7.5" fill="#6F7988" stroke="#26282D"></circle>
                <circle cx="203.666" cy="27" r="7.5" fill="#505967" stroke="#26282D"></circle>
                <g>
                  <rect x="54" y="51" width="45" height="76" rx="6" fill="#26282D"
                    class="transition-all duration-300 group-hover:w-[32px] group-data-[active=true]:w-[32px]"></rect>
                  <rect x="54.25" y="51.25" width="44.5" height="75.5" rx="5.75" stroke="#505967" stroke-width="0.5"
                    class="transition-all duration-300 group-hover:w-[32px] group-data-[active=true]:w-[32px]"></rect>
                </g>
                <g>
                  <rect x="108" y="51" width="129" height="76" rx="6" fill="#26282D"
                    class="transition-all duration-300 group-hover:w-[142px] group-hover:translate-x-[-13.5px] group-data-[active=true]:w-[142px] group-data-[active=true]:translate-x-[-13.5px]">
                  </rect>
                  <rect x="108.25" y="51.25" width="128.5" height="75.5" rx="5.75" stroke="#505967" stroke-width="0.5"
                    class="transition-all duration-300 group-hover:w-[142px] group-hover:translate-x-[-13.5px] group-data-[active=true]:w-[142px] group-data-[active=true]:translate-x-[-13.5px]">
                  </rect>
                </g>
                <rect x="139.666" y="109" width="72" height="6" rx="3" fill="#505967"
                  class="transition-all duration-300 group-hover:w-[83px] group-hover:translate-x-[-13.5px] group-data-[active=true]:w-[83px] group-data-[active=true]:translate-x-[-13.5px]">
                </rect>
                <path d="M118.666 112.537L123.411 107.167L123.411 111.463H126.494L121.411 116.834V112.537H118.666Z"
                  fill="#6B9FFF" stroke="#6B9FFF"
                  class="transition duration-300 group-hover:translate-x-[-13.5px] group-hover:fill-[#4B8BFF] group-hover:stroke-[#4B8BFF] group-data-[active=true]:translate-x-[-13.5px] group-data-[active=true]:fill-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                  stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                <rect x="139.666" y="86" width="29" height="6" rx="3" fill="#505967"
                  class="transition-all duration-300 group-hover:w-[45px] group-hover:translate-x-[-13.5px] group-hover:fill-[#4B8BFF] group-data-[active=true]:w-[45px] group-data-[active=true]:translate-x-[-13.5px] group-data-[active=true]:fill-[#4B8BFF]">
                </rect>
                <g
                  class="transition-all duration-300 group-hover:translate-x-[-13.5px] group-data-[active=true]:translate-x-[-13.5px]">
                  <path
                    d="M117.834 93.8332L120.667 93.1666L126.863 86.9713C127.123 86.711 127.123 86.2888 126.863 86.0285L125.639 84.8046C125.378 84.5443 124.956 84.5443 124.696 84.8046L118.501 90.9999L117.834 93.8332Z"
                    fill="#9098A0" stroke="#9098A0"
                    class="transition duration-300 group-hover:fill-[#4B8BFF] group-hover:stroke-[#4B8BFF] group-data-[active=true]:fill-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                    stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path d="M127.501 93.833H123.834" stroke="#9098A0"
                    class="transition duration-300 group-hover:fill-[#4B8BFF] group-hover:stroke-[#4B8BFF] group-data-[active=true]:fill-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                    stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
                <rect x="139.666" y="63" width="45" height="6" rx="3" fill="#505967"
                  class="transition-all duration-300 group-hover:w-[32px] group-hover:translate-x-[-13.5px] group-data-[active=true]:w-[32px] group-data-[active=true]:translate-x-[-13.5px]">
                </rect>
                <g
                  class="transition-all duration-300 group-hover:translate-x-[-13.5px] group-data-[active=true]:translate-x-[-13.5px]">
                  <path
                    d="M124.831 63.3337C124.831 64.5303 123.861 65.5003 122.665 65.5003C121.468 65.5003 120.498 64.5303 120.498 63.3337C120.498 62.137 121.468 61.167 122.665 61.167C123.861 61.167 124.831 62.137 124.831 63.3337Z"
                    fill="#6B9FFF" stroke="#6B9FFF"
                    class="transition-all duration-300 group-hover:fill-[#4B8BFF] group-hover:stroke-[#4B8BFF] group-data-[active=true]:fill-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                    stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path
                    d="M119.23 70.833H126.1C126.861 70.833 127.447 70.1784 127.092 69.5053C126.569 68.515 125.377 67.333 122.665 67.333C119.953 67.333 118.76 68.515 118.237 69.5053C117.882 70.1784 118.468 70.833 119.23 70.833Z"
                    fill="#6B9FFF" stroke="#6B9FFF"
                    class="transition-all duration-300 group-hover:fill-[#4B8BFF] group-hover:stroke-[#4B8BFF] group-data-[active=true]:fill-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                    stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
              </g>
            </svg></div>
          <h3 class="font-semibold text-[22px] pb-[6px] pt-[18px]">Automatic Changelogs</h3>
          <p class="text-sm text-gray-400">Maintain a changelog of your APis and APIs your depend on.
          </p>
        </div>
        <!-- Errors and analytics -->
        <div
          class="rounded-[20px] overflow-hidden relative flex flex-col p-[40px] group duration-300  hover:border-[#305FB4] dark-shadow border border-transparent box-border">
          <div class="z-10"><svg width="289" class="w-full" height="150" viewBox="0 0 289 150" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g>
                <g>
                  <rect x="5" y="25" width="279" height="88"
                    class="stroke-[#505967] transition duration-300 group-hover:stroke-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                    stroke-width="0.5" stroke-linecap="round" stroke-dasharray="4 4"></rect>
                  <rect x="1" y="20" width="9" height="9" rx="2"
                    class="fill-[#26282D] stroke-[#505967] transition duration-300 group-hover:stroke-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                    stroke-width="0.5"></rect>
                  <rect x="279" y="20" width="9" height="9" rx="2"
                    class="fill-[#26282D] stroke-[#505967] transition duration-300 group-hover:stroke-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                    stroke-width="0.5"></rect>
                  <rect x="1" y="108" width="9" height="9" rx="2"
                    class="fill-[#26282D] stroke-[#505967] transition duration-300 group-hover:stroke-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                    stroke-width="0.5"></rect>
                  <rect x="279" y="108" width="9" height="9" rx="2"
                    class="fill-[#26282D] stroke-[#505967] transition duration-300 group-hover:stroke-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                    stroke-width="0.5"></rect>
                </g>
                <g>
                  <rect x="70" y="10" width="150" height="34" rx="6" fill="#26282D"
                    class="transition-all duration-300 group-hover:w-[183px] group-hover:translate-x-[-16.5px] group-data-[active=true]:w-[183px] group-data-[active=true]:translate-x-[-16.5px]">
                  </rect>
                  <rect x="70.25" y="10.25" width="149.5" height="33.5"
                    class="transition-all duration-300 group-hover:w-[182.5px] group-hover:translate-x-[-16.5px] group-data-[active=true]:w-[182.5px] group-data-[active=true]:translate-x-[-16.5px]"
                    rx="5.75" stroke="#505967" stroke-width="0.5"></rect>
                </g>
                <g
                  class="translate-x-[-16.5px] opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-data-[active=true]:translate-x-0 group-data-[active=true]:opacity-100">
                  <path d="M158 27.5374L162.745 22.167L162.745 26.4633H165.828L160.745 31.8337V27.5374H158Z"
                    fill="#4B8BFF" stroke="#4B8BFF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
                  </path>
                  <rect x="173" y="24" width="25" height="6" rx="3" fill="#4B8BFF"></rect>
                </g>
                <g>
                  <rect x="70" y="51" width="150" height="75" rx="6" fill="#26282D"
                    class="transition-all duration-300 group-hover:w-[183px] group-hover:translate-x-[-16.5px] group-data-[active=true]:w-[183px] group-data-[active=true]:translate-x-[-16.5px]">
                  </rect>
                  <rect x="70.25" y="51.25" width="149.5"
                    class="transition-all duration-300 group-hover:w-[183px] group-hover:translate-x-[-16.5px] group-data-[active=true]:w-[183px] group-data-[active=true]:translate-x-[-16.5px]"
                    height="74.5" rx="5.75" stroke="#505967" stroke-width="0.5"></rect>
                </g>
                <path d="M169 51L169 126" stroke="#505967" stroke-width="0.5"
                  class="transition duration-300 group-hover:translate-x-[-8px] group-data-[active=true]:translate-x-[-8px]">
                </path>
                <g>
                  <path
                    d="M90.1654 24.3337C90.1654 25.5303 89.1953 26.5003 87.9987 26.5003C86.8021 26.5003 85.832 25.5303 85.832 24.3337C85.832 23.137 86.8021 22.167 87.9987 22.167C89.1953 22.167 90.1654 23.137 90.1654 24.3337Z"
                    fill="#6F7988" stroke="#6F7988"
                    class="transition duration-300 group-hover:translate-x-[-16.5px] group-hover:fill-[#4B8BFF] group-hover:stroke-[#4B8BFF] group-data-[active=true]:translate-x-[-16.5px] group-data-[active=true]:fill-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                    stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                  <path
                    d="M84.5635 31.833H91.4335C92.1948 31.833 92.7812 31.1784 92.4257 30.5053C91.9027 29.515 90.7105 28.333 87.9985 28.333C85.2865 28.333 84.0943 29.515 83.5713 30.5053C83.2158 31.1784 83.8022 31.833 84.5635 31.833Z"
                    fill="#6F7988" stroke="#6F7988"
                    class="transition duration-300 group-hover:translate-x-[-16.5px] group-hover:fill-[#4B8BFF] group-hover:stroke-[#4B8BFF] group-data-[active=true]:translate-x-[-16.5px] group-data-[active=true]:fill-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                    stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
                <rect x="100" y="24" width="52" height="6" rx="3" fill="#505967"
                  class="transition duration-300 group-hover:translate-x-[-16.5px] group-data-[active=true]:translate-x-[-16.5px]">
                </rect>
                <rect x="100" y="62" width="43" height="6" rx="3" fill="#505967"
                  class="transition duration-300 group-hover:translate-x-[-16.5px] group-data-[active=true]:translate-x-[-16.5px]">
                </rect>
                <g
                  class="transition duration-300 group-hover:translate-x-[-16.5px] group-data-[active=true]:translate-x-[-16.5px]">
                  <path
                    d="M90.0174 60.1724C90.0174 62.0166 89.0233 63.6786 87.179 63.6786C89.0233 63.6786 90.0174 65.3406 90.0174 67.1849C90.0174 65.3406 91.0116 63.6786 92.8558 63.6786C91.0116 63.6786 90.0174 62.0166 90.0174 60.1724Z"
                    fill="#6B9FFF" stroke="#6B9FFF"
                    class="transition duration-300 group-hover:fill-[#6F7988] group-hover:stroke-[#6F7988] group-data-[active=true]:fill-[#6F7988] group-data-[active=true]:stroke-[#6F7988]">
                  </path>
                  <path
                    d="M85.3424 65.5152C85.3424 66.6218 84.2784 67.6858 83.1719 67.6858C84.2784 67.6858 85.3424 68.7497 85.3424 69.8563C85.3424 68.7497 86.4064 67.6858 87.5129 67.6858C86.4064 67.6858 85.3424 66.6218 85.3424 65.5152Z"
                    fill="#6B9FFF" stroke="#6B9FFF"
                    class="transition duration-300 group-hover:fill-[#6F7988] group-hover:stroke-[#6F7988] group-data-[active=true]:fill-[#6F7988] group-data-[active=true]:stroke-[#6F7988]">
                  </path>
                  <path
                    d="M90.0174 60.1724C90.0174 62.0166 89.0233 63.6786 87.179 63.6786C89.0233 63.6786 90.0174 65.3406 90.0174 67.1849C90.0174 65.3406 91.0116 63.6786 92.8558 63.6786C91.0116 63.6786 90.0174 62.0166 90.0174 60.1724Z"
                    stroke="#6B9FFF" stroke-width="1.20214" stroke-linecap="round" stroke-linejoin="round"
                    class="transition duration-300 group-hover:fill-[#6F7988] group-hover:stroke-[#6F7988] group-data-[active=true]:fill-[#6F7988] group-data-[active=true]:stroke-[#6F7988]">
                  </path>
                  <path
                    d="M85.3424 65.5152C85.3424 66.6218 84.2784 67.6858 83.1719 67.6858C84.2784 67.6858 85.3424 68.7497 85.3424 69.8563C85.3424 68.7497 86.4064 67.6858 87.5129 67.6858C86.4064 67.6858 85.3424 66.6218 85.3424 65.5152Z"
                    stroke="#6B9FFF" stroke-width="1.20214" stroke-linecap="round" stroke-linejoin="round"
                    class="transition duration-300 group-hover:fill-[#6F7988] group-hover:stroke-[#6F7988] group-data-[active=true]:fill-[#6F7988] group-data-[active=true]:stroke-[#6F7988]">
                  </path>
                </g>
                <rect x="100" y="85" width="30" height="6" rx="3" fill="#505967"
                  class="transition duration-300 group-hover:translate-x-[-16.5px] group-hover:fill-[#4B8BFF] group-data-[active=true]:translate-x-[-16.5px] group-data-[active=true]:fill-[#4B8BFF]">
                </rect>
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M82.6657 84.4034C82.568 84.6045 82.5137 84.8277 82.5137 85.0626V90.0238C82.5137 90.9103 83.2876 91.6289 84.2422 91.6289H90.8422C91.7969 91.6289 92.5708 90.9103 92.5708 90.0238V85.0626C92.5708 84.8277 92.5164 84.6045 92.4188 84.4034L87.8588 88.0635C87.6792 88.2077 87.4053 88.2077 87.2257 88.0635L82.6657 84.4034ZM91.8326 83.7469C91.5521 83.5645 91.2106 83.4575 90.8422 83.4575H84.2422C83.8739 83.4575 83.5324 83.5645 83.2519 83.7469L87.5422 87.1906L91.8326 83.7469Z"
                  fill="#6F7988"
                  class="transition duration-300 group-hover:translate-x-[-16.5px] group-hover:fill-[#4B8BFF] group-data-[active=true]:translate-x-[-16.5px] group-data-[active=true]:fill-[#4B8BFF]">
                </path>
                <rect x="100" y="108" width="58" height="6" rx="3" fill="#505967"
                  class="transition duration-300 group-hover:translate-x-[-16.5px] group-data-[active=true]:translate-x-[-16.5px]">
                </rect>
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M87.2773 114.49C87.2774 114.49 87.2775 114.49 87.5426 114.1L87.2773 114.49ZM87.8082 114.49L87.8091 114.489L87.8119 114.487L87.8217 114.481L87.8574 114.456C87.8881 114.434 87.9324 114.403 87.9883 114.362C88.1 114.281 88.2584 114.163 88.4479 114.014C88.8262 113.717 89.3323 113.292 89.8402 112.784C90.3465 112.277 90.8652 111.678 91.2598 111.031C91.6522 110.388 91.9426 109.663 91.9426 108.915C91.9426 106.445 89.8767 104.515 87.5426 104.515C85.2085 104.515 83.1426 106.445 83.1426 108.915C83.1426 109.663 83.4329 110.388 83.8253 111.031C84.2199 111.678 84.7386 112.277 85.2449 112.784C85.7529 113.292 86.259 113.717 86.6373 114.014C86.8268 114.163 86.9852 114.281 87.0969 114.362C87.1528 114.403 87.197 114.434 87.2278 114.456L87.2635 114.481L87.2733 114.487L87.2761 114.489L87.2773 114.49C87.4373 114.599 87.6482 114.599 87.8082 114.49ZM87.5426 114.1L87.8082 114.49C87.8081 114.49 87.8077 114.49 87.5426 114.1ZM85.8156 108.915C85.8156 107.96 86.5895 107.186 87.5441 107.186C88.4988 107.186 89.2727 107.96 89.2727 108.915C89.2727 109.869 88.4988 110.643 87.5441 110.643C86.5895 110.643 85.8156 109.869 85.8156 108.915Z"
                  fill="#6B9FFF"
                  class="transition duration-300 group-hover:translate-x-[-16.5px] group-hover:fill-[#6F7988] group-data-[active=true]:translate-x-[-16.5px] group-data-[active=true]:fill-[#6F7988]">
                </path>
                <rect x="175" y="62" width="43" height="6" rx="3" fill="#505967"
                  class="translate-x-[-16px] opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-data-[active=true]:translate-x-0 group-data-[active=true]:opacity-100">
                </rect>
                <rect x="175" y="92" width="36" height="6" rx="3" fill="#505967"
                  class="translate-x-[-16px] opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-data-[active=true]:translate-x-0 group-data-[active=true]:opacity-100">
                </rect>
                <rect x="175" y="107" width="20" height="6" rx="3" fill="#4B8BFF"
                  class="translate-x-[-16px] opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-data-[active=true]:translate-x-0 group-data-[active=true]:opacity-100">
                </rect>
                <rect x="175" y="77" width="30" height="6" rx="3" fill="#505967"
                  class="translate-x-[-16px] opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100 group-data-[active=true]:translate-x-0 group-data-[active=true]:opacity-100">
                </rect>
              </g>
            </svg></div>
          <h3 class="font-semibold text-[22px] pb-[6px] pt-[18px]">Errors Analytics</h3>
          <p class="text-sm text-gray-400">Get deeper insights about errors and the affected users.
          </p>
        </div>
        <!-- Self host -->
        <div
          class="rounded-[20px] overflow-hidden relative flex flex-col p-[40px] group duration-300  hover:border-[#305FB4] dark-shadow border border-transparent box-border">
          <div class="z-10"><svg width="290" class="w-full" height="150" viewBox="0 0 290 150" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_886_319755)">
                <g>
                  <rect x="5" y="25" width="279" height="88"
                    class="stroke-[#505967] transition duration-300 group-hover:stroke-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                    stroke-width="0.5" stroke-linecap="round" stroke-dasharray="4 4"></rect>
                  <rect x="1" y="20" width="9" height="9" rx="2"
                    class="fill-[#26282D] stroke-[#505967] transition duration-300 group-hover:stroke-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                    stroke-width="0.5"></rect>
                  <rect x="279" y="20" width="9" height="9" rx="2"
                    class="fill-[#26282D] stroke-[#505967] transition duration-300 group-hover:stroke-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                    stroke-width="0.5"></rect>
                  <rect x="1" y="108" width="9" height="9" rx="2"
                    class="fill-[#26282D] stroke-[#505967] transition duration-300 group-hover:stroke-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                    stroke-width="0.5"></rect>
                  <rect x="279" y="108" width="9" height="9" rx="2"
                    class="fill-[#26282D] stroke-[#505967] transition duration-300 group-hover:stroke-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                    stroke-width="0.5"></rect>
                </g>
                <g
                  class="translate-x-0px transform transition duration-300 group-hover:translate-x-[-10px] group-data-[active=true]:translate-x-[-10px]">
                  <g>
                    <rect x="53.334" y="92" width="183" height="34" rx="6" fill="#26282D"></rect>
                    <rect x="53.584" y="92.25" width="182.5" height="33.5" rx="5.75" stroke="#505967"
                      stroke-width="0.5"></rect>
                  </g>
                  <path d="M225.796 105.981L219.314 112.463" stroke="#6B9FFF" stroke-width="0.933332"
                    stroke-linecap="round" stroke-linejoin="round"
                    class="transition duration-300 group-hover:stroke-[#6F7988] group-data-[active=true]:stroke-[#6F7988]">
                  </path>
                  <path d="M219.314 105.981L225.796 112.463" stroke="#6B9FFF" stroke-width="0.933332"
                    stroke-linecap="round" stroke-linejoin="round"
                    class="transition duration-300 group-hover:stroke-[#6F7988] group-data-[active=true]:stroke-[#6F7988]">
                  </path>
                  <rect x="83.334" y="106" width="91" height="6" rx="3"
                    class="w-[91px] fill-[#505967] transition-all duration-300 group-hover:w-[105px] group-hover:fill-[#4B8BFF] group-data-[active=true]:w-[105px] group-data-[active=true]:fill-[#4B8BFF]">
                  </rect>
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M69.3359 115C72.6496 115 75.3359 112.314 75.3359 109C75.3359 105.686 72.6496 103 69.3359 103C66.0222 103 63.3359 105.686 63.3359 109C63.3359 112.314 66.0222 115 69.3359 115ZM72.737 107.444C72.9825 107.222 73.0011 106.842 72.7785 106.597C72.5559 106.351 72.1765 106.333 71.931 106.556L67.9358 110.178L66.7514 109.031C66.5134 108.8 66.1336 108.806 65.903 109.044C65.6725 109.282 65.6785 109.662 65.9165 109.893L67.5048 111.431C67.7319 111.651 68.0909 111.657 68.3252 111.444L72.737 107.444Z"
                    class="fill-[#6F7988] transition duration-300 group-hover:fill-[#4B8BFF] group-data-[active=true]:fill-[#4B8BFF]">
                  </path>
                </g>
                <g
                  class="translate-x-0px transform transition duration-300 group-hover:translate-x-[-10px] group-data-[active=true]:translate-x-[-10px]">
                  <g>
                    <rect x="170.334" y="10" width="66" height="34" rx="6" fill="#26282D"></rect>
                    <rect x="170.584" y="10.25" width="65.5" height="33.5" rx="5.75" stroke="#505967"
                      stroke-width="0.5"></rect>
                  </g>
                  <path d="M224.963 26.0186L222.556 28.426L220.148 26.0186" stroke="#6B9FFF" stroke-width="1.08333"
                    stroke-linecap="round" stroke-linejoin="round"
                    class="transition duration-300 group-hover:stroke-[#6F7988] group-data-[active=true]:stroke-[#6F7988]">
                  </path>
                  <rect x="180.334" y="24" width="28" height="6" rx="3" fill="#505967"></rect>
                  <g>
                    <rect x="53.334" y="10" width="110" height="34" rx="6" fill="#26282D"></rect>
                    <rect x="53.584" y="10.25" width="109.5" height="33.5" rx="5.75" stroke="#505967"
                      stroke-width="0.5"></rect>
                  </g>
                  <path d="M146.963 26.0186L144.556 28.426L142.148 26.0186" stroke="#6B9FFF" stroke-width="1.08333"
                    stroke-linecap="round" stroke-linejoin="round"
                    class="transition duration-300 group-hover:stroke-[#6F7988] group-data-[active=true]:stroke-[#6F7988]">
                  </path>
                  <rect x="83.334" y="24" height="6" rx="3"
                    class="w-[45px] fill-[#505967] transition-all duration-300 group-hover:w-[37px] group-hover:fill-[#4B8BFF]  group-data-[active=true]:w-[37px] group-data-[active=true]:fill-[#4B8BFF]">
                  </rect>
                  <path d="M65.334 27.5374L70.0787 22.167L70.0787 26.4633H73.162L68.0787 31.8337V27.5374H65.334Z"
                    stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"
                    class="fill-[#6F7988] stroke-[#6F7988] transition duration-300 group-hover:fill-[#4B8BFF] group-hover:stroke-[#4B8BFF] group-data-[active=true]:fill-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]">
                  </path>
                </g>
                <g>
                  <rect x="53.334" y="51" width="66" height="34" rx="6" fill="#26282D"
                    class="w-[66px] transition-all duration-300 group-hover:w-[76px] group-data-[active=true]:w-[76px]">
                  </rect>
                  <rect x="53.584" y="51.25" width="65.5" height="33.5" rx="5.75" stroke="#505967" stroke-width="0.5"
                    class="w-[65.5px] transition-all duration-300 group-hover:w-[75.5px] group-data-[active=true]:w-[75.5px]">
                  </rect>
                </g>
                <path d="M66.8353 67.5003L64.502 65.3337L66.8353 63.167" stroke="#6B9FFF" stroke-width="1.2"
                  stroke-linecap="round" stroke-linejoin="round"
                  class="transition duration-300 group-hover:stroke-[#6F7988] group-data-[active=true]:stroke-[#6F7988]">
                </path>
                <path d="M64.502 65.333H71.502" stroke="#6B9FFF" stroke-width="1.2" stroke-linecap="round"
                  stroke-linejoin="round"
                  class="transition duration-300 group-hover:stroke-[#6F7988] group-data-[active=true]:stroke-[#6F7988]">
                </path>
                <path d="M71.834 68.5L74.1673 70.6667L71.834 72.8333" stroke="#6B9FFF" stroke-width="1.2"
                  stroke-linecap="round" stroke-linejoin="round"
                  class="transition duration-300 group-hover:stroke-[#6F7988] group-data-[active=true]:stroke-[#6F7988]">
                </path>
                <path d="M74.166 70.667H67.166" stroke="#6B9FFF" stroke-width="1.2" stroke-linecap="round"
                  stroke-linejoin="round"
                  class="transition duration-300 group-hover:stroke-[#6F7988] group-data-[active=true]:stroke-[#6F7988]">
                </path>
                <rect x="83.334" y="65" width="22" height="6" rx="3" fill="#505967"
                  class="w-[22px] transition-all duration-300 group-hover:w-[30px] group-data-[active=true]:w-[30px]">
                </rect>
                <g
                  class="translate-x-0px transform transition duration-300 group-hover:translate-x-[10px] group-data-[active=true]:translate-x-[10px]">
                  <g>
                    <rect x="126.334" y="51" width="110" height="34" rx="6" fill="#26282D"></rect>
                    <rect x="126.584" y="51.25" width="109.5" height="33.5" rx="5.75" stroke="#505967"
                      stroke-width="0.5"></rect>
                  </g>
                  <path d="M224.963 67.0186L222.556 69.426L220.148 67.0186" stroke="#6B9FFF" stroke-width="1.08333"
                    stroke-linecap="round" stroke-linejoin="round"
                    class="transition duration-300 group-hover:stroke-[#6F7988] group-data-[active=true]:stroke-[#6F7988]">
                  </path>
                  <rect x="155.334" y="65" width="43" height="6" rx="3"
                    class="w-[43px] fill-[#505967] transition-all duration-300 group-hover:w-[51px] group-hover:fill-[#4B8BFF] group-data-[active=true]:w-[51px] group-data-[active=true]:fill-[#4B8BFF]">
                  </rect>
                  <path
                    d="M143.499 65.3337C143.499 66.5303 142.529 67.5003 141.333 67.5003C140.136 67.5003 139.166 66.5303 139.166 65.3337C139.166 64.137 140.136 63.167 141.333 63.167C142.529 63.167 143.499 64.137 143.499 65.3337Z"
                    stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"
                    class="fill-[#6F7988] stroke-[#6F7988] transition duration-300 group-hover:fill-[#4B8BFF] group-hover:stroke-[#4B8BFF] group-data-[active=true]:fill-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]">
                  </path>
                  <path
                    d="M137.898 72.833H144.767C145.529 72.833 146.115 72.1784 145.76 71.5053C145.237 70.515 144.044 69.333 141.333 69.333C138.621 69.333 137.428 70.515 136.905 71.5053C136.55 72.1784 137.136 72.833 137.898 72.833Z"
                    class="fill-[#6F7988] stroke-[#6F7988] transition duration-300 group-hover:fill-[#4B8BFF] group-hover:stroke-[#4B8BFF] group-data-[active=true]:fill-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                    stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
              </g>
            </svg></div>
          <h3 class="font-semibold text-[22px] pb-[6px] pt-[18px]">Self host</h3>
          <p class="text-sm text-gray-400">Don’t let your data leave your server via self hosting.
          </p>
        </div>
        <!-- Alerts & Integrations -->
        <div
          class="rounded-[20px] overflow-hidden relative flex flex-col p-[40px] group duration-300  hover:border-[#305FB4] dark-shadow border border-transparent box-border">
          <div class="z-10"><svg width="290" class="w-full" height="150" viewBox="0 0 290 150" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <g clip-path="url(#clip0_886_322483)">
                <g>
                  <rect x="5" y="25" width="279" height="88"
                    class="stroke-[#505967] transition duration-300 group-hover:stroke-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                    stroke-width="0.5" stroke-linecap="round" stroke-dasharray="4 4"></rect>
                  <rect x="1" y="20" width="9" height="9" rx="2"
                    class="fill-[#26282D] stroke-[#505967] transition duration-300 group-hover:stroke-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                    stroke-width="0.5"></rect>
                  <rect x="279" y="20" width="9" height="9" rx="2"
                    class="fill-[#26282D] stroke-[#505967] transition duration-300 group-hover:stroke-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                    stroke-width="0.5"></rect>
                  <rect x="1" y="108" width="9" height="9" rx="2"
                    class="fill-[#26282D] stroke-[#505967] transition duration-300 group-hover:stroke-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                    stroke-width="0.5"></rect>
                  <rect x="279" y="108" width="9" height="9" rx="2"
                    class="fill-[#26282D] stroke-[#505967] transition duration-300 group-hover:stroke-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]"
                    stroke-width="0.5"></rect>
                </g>
                <g
                  class="translate-y-0px transform transition duration-300 group-hover:translate-y-[41px] group-data-[active=true]:translate-y-[41px]">
                  <g>
                    <rect x="53.666" y="10" width="183" height="34" rx="6" fill="#26282D"></rect>
                    <rect x="53.916" y="10.25" width="182.5" height="33.5" rx="5.75" stroke="#505967"
                      stroke-width="0.5"></rect>
                  </g>
                  <rect x="83.666" y="24" width="44" height="6" rx="3" fill="#505967"></rect>
                  <path
                    d="M71.8314 24.3337C71.8314 25.5303 70.8613 26.5003 69.6647 26.5003C68.4681 26.5003 67.498 25.5303 67.498 24.3337C67.498 23.137 68.4681 22.167 69.6647 22.167C70.8613 22.167 71.8314 23.137 71.8314 24.3337Z"
                    fill="#6B9FFF" stroke="#6B9FFF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"
                    class="transition duration-300 group-hover:fill-[#6F7988] group-hover:stroke-[#6F7988] group-data-[active=true]:fill-[#6F7988] group-data-[active=true]:stroke-[#6F7988]">
                  </path>
                  <path
                    d="M66.2295 31.833H73.0995C73.8608 31.833 74.4472 31.1784 74.0917 30.5053C73.5688 29.515 72.3765 28.333 69.6645 28.333C66.9525 28.333 65.7603 29.515 65.2374 30.5053C64.8818 31.1784 65.4683 31.833 66.2295 31.833Z"
                    fill="#6B9FFF" stroke="#6B9FFF" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"
                    class="transition duration-300 group-hover:fill-[#6F7988] group-hover:stroke-[#6F7988] group-data-[active=true]:fill-[#6F7988] group-data-[active=true]:stroke-[#6F7988]">
                  </path>
                  <rect x="176.666" y="24" width="27" height="6" rx="3"
                    class="fill-[#505967] transition duration-300 group-hover:fill-[#4B8BFF] group-data-[active=true]:fill-[#4B8BFF]">
                  </rect>
                  <path d="M162.666 24.8337L159.166 29.167L166.166 29.167L162.666 24.8337Z" fill="#6F7988"
                    stroke="#6F7988" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"
                    class="transition duration-300 group-hover:fill-[#4B8BFF] group-hover:stroke-[#4B8BFF] group-data-[active=true]:fill-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]">
                  </path>
                  <path d="M145.666 14L145.666 40" stroke="#505967" stroke-width="0.5"></path>
                </g>
                <g>
                  <rect x="53.666" y="92" width="183" height="34" rx="6" fill="#26282D"></rect>
                  <rect x="53.916" y="92.25" width="182.5" height="33.5" rx="5.75" stroke="#505967" stroke-width="0.5">
                  </rect>
                </g>
                <rect x="83.666" y="106" width="39" height="6" rx="3" fill="#505967"></rect>
                <path
                  d="M72.2917 104.365C72.2917 106.321 71.2373 108.083 69.2812 108.083C71.2373 108.083 72.2917 109.846 72.2917 111.802C72.2917 109.846 73.3461 108.083 75.3021 108.083C73.3461 108.083 72.2917 106.321 72.2917 104.365Z"
                  class="fill-[#6B9FFF] transition duration-300 group-hover:fill-[#4B8BFF] group-data-[active=true]:fill-[#4B8BFF]">
                </path>
                <path
                  d="M67.3333 110.031C67.3333 111.205 66.2049 112.333 65.0312 112.333C66.2049 112.333 67.3333 113.462 67.3333 114.636C67.3333 113.462 68.4618 112.333 69.6354 112.333C68.4618 112.333 67.3333 111.205 67.3333 110.031Z"
                  class="fill-[#6B9FFF] transition duration-300 group-hover:fill-[#4B8BFF] group-data-[active=true]:fill-[#4B8BFF]">
                </path>
                <path
                  d="M72.2917 104.365C72.2917 106.321 71.2373 108.083 69.2812 108.083C71.2373 108.083 72.2917 109.846 72.2917 111.802C72.2917 109.846 73.3461 108.083 75.3021 108.083C73.3461 108.083 72.2917 106.321 72.2917 104.365Z"
                  stroke-width="1.275" stroke-linecap="round" stroke-linejoin="round"
                  class="stroke-[#6B9FFF] transition duration-300 group-hover:stroke-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]">
                </path>
                <path
                  d="M67.3333 110.031C67.3333 111.205 66.2049 112.333 65.0312 112.333C66.2049 112.333 67.3333 113.462 67.3333 114.636C67.3333 113.462 68.4618 112.333 69.6354 112.333C68.4618 112.333 67.3333 111.205 67.3333 110.031Z"
                  stroke-width="1.275" stroke-linecap="round" stroke-linejoin="round"
                  class="stroke-[#6B9FFF] transition duration-300 group-hover:stroke-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]">
                </path>
                <rect x="176.666" y="106" width="37" height="6" rx="3" fill="#505967"></rect>
                <path d="M162.666 106.834L159.166 111.167L166.166 111.167L162.666 106.834Z" stroke-width="1.2"
                  stroke-linecap="round" stroke-linejoin="round"
                  class="fill-[#6F7988] stroke-[#6F7988] transition duration-300 group-hover:fill-[#4B8BFF] group-hover:stroke-[#4B8BFF] group-data-[active=true]:fill-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]">
                </path>
                <path d="M145.666 96L145.666 122" stroke="#505967" stroke-width="0.5"></path>
                <g
                  class="translate-y-0px transform transition duration-300 group-hover:translate-y-[-41px] group-data-[active=true]:translate-y-[-41px]">
                  <g>
                    <rect x="53.666" y="51" width="183" height="34" rx="6" fill="#26282D"></rect>
                    <rect x="53.916" y="51.25" width="182.5" height="33.5" rx="5.75" stroke="#505967"
                      stroke-width="0.5"></rect>
                  </g>
                  <rect x="83.666" y="65" width="25" height="6" rx="3"
                    class="fill-[#505967] transition duration-300 group-hover:fill-[#4B8BFF] group-data-[active=true]:fill-[#4B8BFF]">
                  </rect>
                  <path d="M65.666 68.5374L70.4107 63.167L70.4107 67.4633H73.494L68.4107 72.8337V68.5374H65.666Z"
                    stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"
                    class="fill-[#6F7988] stroke-[#6F7988] transition duration-300 group-hover:fill-[#4B8BFF] group-hover:stroke-[#4B8BFF] group-data-[active=true]:fill-[#4B8BFF] group-data-[active=true]:stroke-[#4B8BFF]">
                  </path>
                  <rect x="176.666" y="65" width="43" height="6" rx="3" fill="#505967"></rect>
                  <path d="M162.666 70.1663L166.166 65.833H159.166L162.666 70.1663Z" stroke-width="1.2"
                    stroke-linecap="round" stroke-linejoin="round"
                    class="fill-[#6B9FFF] stroke-[#6B9FFF] transition duration-300 group-hover:fill-[#6F7988] group-hover:stroke-[#6F7988] group-data-[active=true]:fill-[#6F7988] group-data-[active=true]:stroke-[#6F7988]">
                  </path>
                  <path d="M145.666 55L145.666 81" stroke="#505967" stroke-width="0.5"></path>
                </g>
              </g>
            </svg></div>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
                  <path
                    d="M27.6272 5.84625C31.2205 11.1818 33.0172 17.1707 32.3638 24.0851C32.3638 24.0851 32.3638 24.1395 32.3094 24.1395C29.9138 25.9362 27.1916 27.2973 24.3061 28.1684C24.2516 28.2229 24.2516 28.1684 24.1972 28.1684C23.5983 27.2973 23.0539 26.4262 22.5639 25.5006C22.5639 25.4462 22.5639 25.4462 22.5639 25.3918L22.6183 25.3373C23.4894 25.0106 24.3061 24.6295 25.1227 24.1395C25.1227 24.1395 25.1772 24.1395 25.1772 24.0851C25.1772 24.0306 25.1772 24.0306 25.1227 23.9762C24.9594 23.8673 24.7961 23.7584 24.6327 23.5951C24.5783 23.5951 24.5783 23.5951 24.5239 23.5951C19.3516 25.9906 13.6894 25.9906 8.46277 23.5951C8.40833 23.5951 8.35388 23.5951 8.35388 23.5951C8.19055 23.7584 8.02722 23.8673 7.86389 23.9762C7.80944 24.0306 7.80944 24.0306 7.80944 24.0851C7.80944 24.1395 7.80944 24.1395 7.86389 24.1395C8.62611 24.6295 9.49722 25.0106 10.3683 25.3373C10.3683 25.3373 10.3683 25.3918 10.4228 25.3918C10.4228 25.4462 10.4228 25.4462 10.4228 25.5006C9.93277 26.4262 9.38833 27.2973 8.78944 28.1684C8.73499 28.1684 8.68055 28.2229 8.68055 28.1684C5.795 27.2973 3.07278 25.9362 0.677233 24.1395C0.622789 24.1395 0.622789 24.0851 0.622789 24.0851C0.0783453 18.0962 1.22168 12.0529 5.35945 5.84625C5.35945 5.84625 5.35945 5.84625 5.41389 5.84625C7.48278 4.86626 9.66055 4.21292 11.8928 3.83181C11.9472 3.77737 12.0017 3.83181 12.0017 3.83181C12.3283 4.37626 12.6005 4.97514 12.8183 5.51959C15.2683 5.13848 17.7183 5.13848 20.1683 5.51959C20.3861 4.97514 20.6583 4.37626 20.985 3.83181C20.985 3.83181 21.0394 3.77737 21.0939 3.83181C23.3261 4.21292 25.5039 4.86626 27.5727 5.84625C27.6272 5.84625 27.6272 5.84625 27.6272 5.84625ZM11.185 20.4373C12.7639 20.4373 14.0705 18.9673 14.0705 17.2251C14.0705 15.4284 12.8183 14.0129 11.185 14.0129C9.6061 14.0129 8.29944 15.4284 8.29944 17.2251C8.29944 18.9673 9.6061 20.4373 11.185 20.4373ZM21.8016 20.4373C23.435 20.4373 24.6872 18.9673 24.6872 17.2251C24.7416 15.4284 23.435 14.0129 21.8016 14.0129C20.2227 14.0129 18.9705 15.4284 18.9705 17.2251C18.9705 18.9673 20.2227 20.4373 21.8016 20.4373Z"
                    fill="white" />
                </svg>
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
                </div><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors">
                  <g clip-path="url(#clip0_651_130565)">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M20.3334 6.65735C19.7455 6.93846 19.1125 7.12857 18.4485 7.21351C19.1266 6.77667 19.6469 6.084 19.892 5.25887C19.2571 5.66335 18.5556 5.9576 17.8062 6.11535C17.2089 5.42875 16.3552 5 15.4104 5C13.5989 5 12.1291 6.58252 12.1291 8.53413C12.1291 8.81119 12.1573 9.08018 12.2136 9.33904C9.48545 9.19141 7.06719 7.78584 5.44718 5.64514C5.16451 6.16894 5.00297 6.77667 5.00297 7.42384C5.00297 8.64941 5.58242 9.73139 6.46333 10.3654C5.92614 10.3482 5.41901 10.1874 4.97574 9.92452V9.968C4.97574 11.681 6.10739 13.1098 7.61001 13.4334C7.33484 13.5163 7.04465 13.5577 6.74507 13.5577C6.53376 13.5577 6.32715 13.5365 6.12712 13.4951C6.54503 14.8986 7.75651 15.9209 9.19338 15.9482C8.07018 16.8967 6.65397 17.462 5.11661 17.462C4.85177 17.462 4.58976 17.4458 4.33337 17.4134C5.78621 18.4145 7.51234 19 9.36524 19C15.4039 19 18.7049 13.6154 18.7049 8.94467C18.7049 8.79097 18.7021 8.63727 18.6965 8.4866C19.3379 7.98808 19.8948 7.3662 20.3334 6.65735Z"
                      fill="currentColor"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_651_130565">
                      <rect width="16" height="14" fill="white" transform="translate(4.33337 5)"></rect>
                    </clipPath>
                  </defs>
                </svg>
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
                </div><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors">
                  <g clip-path="url(#clip0_651_130565)">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M20.3334 6.65735C19.7455 6.93846 19.1125 7.12857 18.4485 7.21351C19.1266 6.77667 19.6469 6.084 19.892 5.25887C19.2571 5.66335 18.5556 5.9576 17.8062 6.11535C17.2089 5.42875 16.3552 5 15.4104 5C13.5989 5 12.1291 6.58252 12.1291 8.53413C12.1291 8.81119 12.1573 9.08018 12.2136 9.33904C9.48545 9.19141 7.06719 7.78584 5.44718 5.64514C5.16451 6.16894 5.00297 6.77667 5.00297 7.42384C5.00297 8.64941 5.58242 9.73139 6.46333 10.3654C5.92614 10.3482 5.41901 10.1874 4.97574 9.92452V9.968C4.97574 11.681 6.10739 13.1098 7.61001 13.4334C7.33484 13.5163 7.04465 13.5577 6.74507 13.5577C6.53376 13.5577 6.32715 13.5365 6.12712 13.4951C6.54503 14.8986 7.75651 15.9209 9.19338 15.9482C8.07018 16.8967 6.65397 17.462 5.11661 17.462C4.85177 17.462 4.58976 17.4458 4.33337 17.4134C5.78621 18.4145 7.51234 19 9.36524 19C15.4039 19 18.7049 13.6154 18.7049 8.94467C18.7049 8.79097 18.7021 8.63727 18.6965 8.4866C19.3379 7.98808 19.8948 7.3662 20.3334 6.65735Z"
                      fill="currentColor"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_651_130565">
                      <rect width="16" height="14" fill="white" transform="translate(4.33337 5)"></rect>
                    </clipPath>
                  </defs>
                </svg>
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
                </div><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors">
                  <g clip-path="url(#clip0_651_130565)">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M20.3334 6.65735C19.7455 6.93846 19.1125 7.12857 18.4485 7.21351C19.1266 6.77667 19.6469 6.084 19.892 5.25887C19.2571 5.66335 18.5556 5.9576 17.8062 6.11535C17.2089 5.42875 16.3552 5 15.4104 5C13.5989 5 12.1291 6.58252 12.1291 8.53413C12.1291 8.81119 12.1573 9.08018 12.2136 9.33904C9.48545 9.19141 7.06719 7.78584 5.44718 5.64514C5.16451 6.16894 5.00297 6.77667 5.00297 7.42384C5.00297 8.64941 5.58242 9.73139 6.46333 10.3654C5.92614 10.3482 5.41901 10.1874 4.97574 9.92452V9.968C4.97574 11.681 6.10739 13.1098 7.61001 13.4334C7.33484 13.5163 7.04465 13.5577 6.74507 13.5577C6.53376 13.5577 6.32715 13.5365 6.12712 13.4951C6.54503 14.8986 7.75651 15.9209 9.19338 15.9482C8.07018 16.8967 6.65397 17.462 5.11661 17.462C4.85177 17.462 4.58976 17.4458 4.33337 17.4134C5.78621 18.4145 7.51234 19 9.36524 19C15.4039 19 18.7049 13.6154 18.7049 8.94467C18.7049 8.79097 18.7021 8.63727 18.6965 8.4866C19.3379 7.98808 19.8948 7.3662 20.3334 6.65735Z"
                      fill="currentColor"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_651_130565">
                      <rect width="16" height="14" fill="white" transform="translate(4.33337 5)"></rect>
                    </clipPath>
                  </defs>
                </svg>
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
                </div><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors">
                  <g clip-path="url(#clip0_651_130565)">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M20.3334 6.65735C19.7455 6.93846 19.1125 7.12857 18.4485 7.21351C19.1266 6.77667 19.6469 6.084 19.892 5.25887C19.2571 5.66335 18.5556 5.9576 17.8062 6.11535C17.2089 5.42875 16.3552 5 15.4104 5C13.5989 5 12.1291 6.58252 12.1291 8.53413C12.1291 8.81119 12.1573 9.08018 12.2136 9.33904C9.48545 9.19141 7.06719 7.78584 5.44718 5.64514C5.16451 6.16894 5.00297 6.77667 5.00297 7.42384C5.00297 8.64941 5.58242 9.73139 6.46333 10.3654C5.92614 10.3482 5.41901 10.1874 4.97574 9.92452V9.968C4.97574 11.681 6.10739 13.1098 7.61001 13.4334C7.33484 13.5163 7.04465 13.5577 6.74507 13.5577C6.53376 13.5577 6.32715 13.5365 6.12712 13.4951C6.54503 14.8986 7.75651 15.9209 9.19338 15.9482C8.07018 16.8967 6.65397 17.462 5.11661 17.462C4.85177 17.462 4.58976 17.4458 4.33337 17.4134C5.78621 18.4145 7.51234 19 9.36524 19C15.4039 19 18.7049 13.6154 18.7049 8.94467C18.7049 8.79097 18.7021 8.63727 18.6965 8.4866C19.3379 7.98808 19.8948 7.3662 20.3334 6.65735Z"
                      fill="currentColor"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_651_130565">
                      <rect width="16" height="14" fill="white" transform="translate(4.33337 5)"></rect>
                    </clipPath>
                  </defs>
                </svg>
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
                </div><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors">
                  <g clip-path="url(#clip0_651_130565)">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M20.3334 6.65735C19.7455 6.93846 19.1125 7.12857 18.4485 7.21351C19.1266 6.77667 19.6469 6.084 19.892 5.25887C19.2571 5.66335 18.5556 5.9576 17.8062 6.11535C17.2089 5.42875 16.3552 5 15.4104 5C13.5989 5 12.1291 6.58252 12.1291 8.53413C12.1291 8.81119 12.1573 9.08018 12.2136 9.33904C9.48545 9.19141 7.06719 7.78584 5.44718 5.64514C5.16451 6.16894 5.00297 6.77667 5.00297 7.42384C5.00297 8.64941 5.58242 9.73139 6.46333 10.3654C5.92614 10.3482 5.41901 10.1874 4.97574 9.92452V9.968C4.97574 11.681 6.10739 13.1098 7.61001 13.4334C7.33484 13.5163 7.04465 13.5577 6.74507 13.5577C6.53376 13.5577 6.32715 13.5365 6.12712 13.4951C6.54503 14.8986 7.75651 15.9209 9.19338 15.9482C8.07018 16.8967 6.65397 17.462 5.11661 17.462C4.85177 17.462 4.58976 17.4458 4.33337 17.4134C5.78621 18.4145 7.51234 19 9.36524 19C15.4039 19 18.7049 13.6154 18.7049 8.94467C18.7049 8.79097 18.7021 8.63727 18.6965 8.4866C19.3379 7.98808 19.8948 7.3662 20.3334 6.65735Z"
                      fill="currentColor"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_651_130565">
                      <rect width="16" height="14" fill="white" transform="translate(4.33337 5)"></rect>
                    </clipPath>
                  </defs>
                </svg>
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
                </div><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors">
                  <g clip-path="url(#clip0_651_130565)">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M20.3334 6.65735C19.7455 6.93846 19.1125 7.12857 18.4485 7.21351C19.1266 6.77667 19.6469 6.084 19.892 5.25887C19.2571 5.66335 18.5556 5.9576 17.8062 6.11535C17.2089 5.42875 16.3552 5 15.4104 5C13.5989 5 12.1291 6.58252 12.1291 8.53413C12.1291 8.81119 12.1573 9.08018 12.2136 9.33904C9.48545 9.19141 7.06719 7.78584 5.44718 5.64514C5.16451 6.16894 5.00297 6.77667 5.00297 7.42384C5.00297 8.64941 5.58242 9.73139 6.46333 10.3654C5.92614 10.3482 5.41901 10.1874 4.97574 9.92452V9.968C4.97574 11.681 6.10739 13.1098 7.61001 13.4334C7.33484 13.5163 7.04465 13.5577 6.74507 13.5577C6.53376 13.5577 6.32715 13.5365 6.12712 13.4951C6.54503 14.8986 7.75651 15.9209 9.19338 15.9482C8.07018 16.8967 6.65397 17.462 5.11661 17.462C4.85177 17.462 4.58976 17.4458 4.33337 17.4134C5.78621 18.4145 7.51234 19 9.36524 19C15.4039 19 18.7049 13.6154 18.7049 8.94467C18.7049 8.79097 18.7021 8.63727 18.6965 8.4866C19.3379 7.98808 19.8948 7.3662 20.3334 6.65735Z"
                      fill="currentColor"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_651_130565">
                      <rect width="16" height="14" fill="white" transform="translate(4.33337 5)"></rect>
                    </clipPath>
                  </defs>
                </svg>
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
                </div><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors">
                  <g clip-path="url(#clip0_651_130565)">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M20.3334 6.65735C19.7455 6.93846 19.1125 7.12857 18.4485 7.21351C19.1266 6.77667 19.6469 6.084 19.892 5.25887C19.2571 5.66335 18.5556 5.9576 17.8062 6.11535C17.2089 5.42875 16.3552 5 15.4104 5C13.5989 5 12.1291 6.58252 12.1291 8.53413C12.1291 8.81119 12.1573 9.08018 12.2136 9.33904C9.48545 9.19141 7.06719 7.78584 5.44718 5.64514C5.16451 6.16894 5.00297 6.77667 5.00297 7.42384C5.00297 8.64941 5.58242 9.73139 6.46333 10.3654C5.92614 10.3482 5.41901 10.1874 4.97574 9.92452V9.968C4.97574 11.681 6.10739 13.1098 7.61001 13.4334C7.33484 13.5163 7.04465 13.5577 6.74507 13.5577C6.53376 13.5577 6.32715 13.5365 6.12712 13.4951C6.54503 14.8986 7.75651 15.9209 9.19338 15.9482C8.07018 16.8967 6.65397 17.462 5.11661 17.462C4.85177 17.462 4.58976 17.4458 4.33337 17.4134C5.78621 18.4145 7.51234 19 9.36524 19C15.4039 19 18.7049 13.6154 18.7049 8.94467C18.7049 8.79097 18.7021 8.63727 18.6965 8.4866C19.3379 7.98808 19.8948 7.3662 20.3334 6.65735Z"
                      fill="currentColor"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_651_130565">
                      <rect width="16" height="14" fill="white" transform="translate(4.33337 5)"></rect>
                    </clipPath>
                  </defs>
                </svg>
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
                </div><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors">
                  <g clip-path="url(#clip0_651_130565)">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M20.3334 6.65735C19.7455 6.93846 19.1125 7.12857 18.4485 7.21351C19.1266 6.77667 19.6469 6.084 19.892 5.25887C19.2571 5.66335 18.5556 5.9576 17.8062 6.11535C17.2089 5.42875 16.3552 5 15.4104 5C13.5989 5 12.1291 6.58252 12.1291 8.53413C12.1291 8.81119 12.1573 9.08018 12.2136 9.33904C9.48545 9.19141 7.06719 7.78584 5.44718 5.64514C5.16451 6.16894 5.00297 6.77667 5.00297 7.42384C5.00297 8.64941 5.58242 9.73139 6.46333 10.3654C5.92614 10.3482 5.41901 10.1874 4.97574 9.92452V9.968C4.97574 11.681 6.10739 13.1098 7.61001 13.4334C7.33484 13.5163 7.04465 13.5577 6.74507 13.5577C6.53376 13.5577 6.32715 13.5365 6.12712 13.4951C6.54503 14.8986 7.75651 15.9209 9.19338 15.9482C8.07018 16.8967 6.65397 17.462 5.11661 17.462C4.85177 17.462 4.58976 17.4458 4.33337 17.4134C5.78621 18.4145 7.51234 19 9.36524 19C15.4039 19 18.7049 13.6154 18.7049 8.94467C18.7049 8.79097 18.7021 8.63727 18.6965 8.4866C19.3379 7.98808 19.8948 7.3662 20.3334 6.65735Z"
                      fill="currentColor"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_651_130565">
                      <rect width="16" height="14" fill="white" transform="translate(4.33337 5)"></rect>
                    </clipPath>
                  </defs>
                </svg>
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
                </div><svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="ml-auto mt-[-4px] text-[var(--iconColor,#383E47)] transition-colors">
                  <g clip-path="url(#clip0_651_130565)">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M20.3334 6.65735C19.7455 6.93846 19.1125 7.12857 18.4485 7.21351C19.1266 6.77667 19.6469 6.084 19.892 5.25887C19.2571 5.66335 18.5556 5.9576 17.8062 6.11535C17.2089 5.42875 16.3552 5 15.4104 5C13.5989 5 12.1291 6.58252 12.1291 8.53413C12.1291 8.81119 12.1573 9.08018 12.2136 9.33904C9.48545 9.19141 7.06719 7.78584 5.44718 5.64514C5.16451 6.16894 5.00297 6.77667 5.00297 7.42384C5.00297 8.64941 5.58242 9.73139 6.46333 10.3654C5.92614 10.3482 5.41901 10.1874 4.97574 9.92452V9.968C4.97574 11.681 6.10739 13.1098 7.61001 13.4334C7.33484 13.5163 7.04465 13.5577 6.74507 13.5577C6.53376 13.5577 6.32715 13.5365 6.12712 13.4951C6.54503 14.8986 7.75651 15.9209 9.19338 15.9482C8.07018 16.8967 6.65397 17.462 5.11661 17.462C4.85177 17.462 4.58976 17.4458 4.33337 17.4134C5.78621 18.4145 7.51234 19 9.36524 19C15.4039 19 18.7049 13.6154 18.7049 8.94467C18.7049 8.79097 18.7021 8.63727 18.6965 8.4866C19.3379 7.98808 19.8948 7.3662 20.3334 6.65735Z"
                      fill="currentColor"></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_651_130565">
                      <rect width="16" height="14" fill="white" transform="translate(4.33337 5)"></rect>
                    </clipPath>
                  </defs>
                </svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0" width="24" height="24" viewBox="0 0 24 24"
                fill="none">
                <path
                  d="M8 6.81983V17.1798C8 17.9698 8.87 18.4498 9.54 18.0198L17.68 12.8398C17.8225 12.7496 17.9399 12.6249 18.0212 12.4771C18.1026 12.3294 18.1452 12.1635 18.1452 11.9948C18.1452 11.8262 18.1026 11.6603 18.0212 11.5125C17.9399 11.3648 17.8225 11.24 17.68 11.1498L9.54 5.97983C9.38917 5.88227 9.2148 5.82723 9.0353 5.82052C8.85579 5.81381 8.6778 5.85567 8.52011 5.94168C8.36241 6.0277 8.23085 6.15469 8.13931 6.30924C8.04777 6.4638 7.99964 6.6402 8 6.81983Z"
                  fill="#0E0D11" />
              </svg>
              What programming languages are supported?
            </button>
            <div class="pl-4 py-4 hidden text-gray-600">
              We support Golang, PHP, C#, Java, etc. If we don't support your language or framework, please drop a
              message. We can create one on demand quite quickly.
            </div>
          </div>
          <div class="bg-white px-6 py-3 shadow-sm">
            <button class="flex gap-4 items-center text-left hover:text-gray-800" onclick="toggleFaq(event)">
              <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0" width="24" height="24" viewBox="0 0 24 24"
                fill="none">
                <path
                  d="M8 6.81983V17.1798C8 17.9698 8.87 18.4498 9.54 18.0198L17.68 12.8398C17.8225 12.7496 17.9399 12.6249 18.0212 12.4771C18.1026 12.3294 18.1452 12.1635 18.1452 11.9948C18.1452 11.8262 18.1026 11.6603 18.0212 11.5125C17.9399 11.3648 17.8225 11.24 17.68 11.1498L9.54 5.97983C9.38917 5.88227 9.2148 5.82723 9.0353 5.82052C8.85579 5.81381 8.6778 5.85567 8.52011 5.94168C8.36241 6.0277 8.23085 6.15469 8.13931 6.30924C8.04777 6.4638 7.99964 6.6402 8 6.81983Z"
                  fill="#0E0D11" />
              </svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0" width="24" height="24" viewBox="0 0 24 24"
                fill="none">
                <path
                  d="M8 6.81983V17.1798C8 17.9698 8.87 18.4498 9.54 18.0198L17.68 12.8398C17.8225 12.7496 17.9399 12.6249 18.0212 12.4771C18.1026 12.3294 18.1452 12.1635 18.1452 11.9948C18.1452 11.8262 18.1026 11.6603 18.0212 11.5125C17.9399 11.3648 17.8225 11.24 17.68 11.1498L9.54 5.97983C9.38917 5.88227 9.2148 5.82723 9.0353 5.82052C8.85579 5.81381 8.6778 5.85567 8.52011 5.94168C8.36241 6.0277 8.23085 6.15469 8.13931 6.30924C8.04777 6.4638 7.99964 6.6402 8 6.81983Z"
                  fill="#0E0D11" />
              </svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0" width="24" height="24" viewBox="0 0 24 24"
                fill="none">
                <path
                  d="M8 6.81983V17.1798C8 17.9698 8.87 18.4498 9.54 18.0198L17.68 12.8398C17.8225 12.7496 17.9399 12.6249 18.0212 12.4771C18.1026 12.3294 18.1452 12.1635 18.1452 11.9948C18.1452 11.8262 18.1026 11.6603 18.0212 11.5125C17.9399 11.3648 17.8225 11.24 17.68 11.1498L9.54 5.97983C9.38917 5.88227 9.2148 5.82723 9.0353 5.82052C8.85579 5.81381 8.6778 5.85567 8.52011 5.94168C8.36241 6.0277 8.23085 6.15469 8.13931 6.30924C8.04777 6.4638 7.99964 6.6402 8 6.81983Z"
                  fill="#0E0D11" />
              </svg>
              I really love what you're doing. How do I show support?
            </button>
            <div class="pl-4 py-4 hidden text-gray-600">
              Give a shout out on twitter or discord. We would also appreciate honest feedback about what we're
              building. And suggestions for what functionality you would love to see next.
            </div>
          </div>

          <div class="bg-white px-6 py-3 shadow-sm">
            <button class="flex gap-4 items-center text-left hover:text-gray-800" onclick="toggleFaq(event)">
              <svg xmlns="http://www.w3.org/2000/svg" class="flex-shrink-0" width="24" height="24" viewBox="0 0 24 24"
                fill="none">
                <path
                  d="M8 6.81983V17.1798C8 17.9698 8.87 18.4498 9.54 18.0198L17.68 12.8398C17.8225 12.7496 17.9399 12.6249 18.0212 12.4771C18.1026 12.3294 18.1452 12.1635 18.1452 11.9948C18.1452 11.8262 18.1026 11.6603 18.0212 11.5125C17.9399 11.3648 17.8225 11.24 17.68 11.1498L9.54 5.97983C9.38917 5.88227 9.2148 5.82723 9.0353 5.82052C8.85579 5.81381 8.6778 5.85567 8.52011 5.94168C8.36241 6.0277 8.23085 6.15469 8.13931 6.30924C8.04777 6.4638 7.99964 6.6402 8 6.81983Z"
                  fill="#0E0D11" />
              </svg>
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
</main>

<script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
<script>
  var app = document.getElementById('header-typewriter');
  var typewriter = new Typewriter(app, {
    loop: true,
    delay: 135,
  });
  console.log(app, typewriter)
  typewriter
    .pauseFor(500)
    .typeString('For frustrated API developers')
    .pauseFor(300)
    .deleteChars(10)
    .typeString('consumers')
    .pauseFor(300)
    .deleteChars(13)
    .typeString('customer support teams')
    .pauseFor(300)
    .start();
</script>


<script>

  function switchTab(e, imageId) {
    const tabs = document.querySelectorAll(".tab-button")
    const images = document.querySelectorAll('.tab-image')
    tabs.forEach(tab => {
      tab.classList.remove("active-tab")
    })
    images.forEach(image => {
      image.classList.add('hidden')
    })
    e.currentTarget.classList.add("active-tab")
    document.getElementById(imageId).classList.remove('hidden')
  }

  window.onload = (event) => {
    const mainContainer = document.querySelector("#requests-apitoolkit-container");
    const incomingReqeusts = document.querySelector("#requests-container")
    const apitoolkit = document.querySelector("#apitoolkit-container")
    const contentWidth = window.getComputedStyle(apitoolkit).width;
    const containerWidth = parseInt(window.getComputedStyle(mainContainer).width.replace("px", ""));
    const mainContBounds = mainContainer.getBoundingClientRect()
    const startPos = -1 * parseInt(contentWidth.replace("px", ""));
    let currentPosition = startPos;
    let animationId;
    let startX = 0;
    let isDragging = false



    function animateMarquee() {
      currentPosition++;
      let movedOut = false
      checkItemOut()
      apitoolkit.style.transform = `translateX(${currentPosition}px)`;
      incomingReqeusts.style.transform = `translateX(${currentPosition}px)`;
      animationId = requestAnimationFrame(animateMarquee);
    }

    function stopAnimation() {
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    }

    function startAnimation() {
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null
      }
      animateMarquee();
    }
    mainContainer.addEventListener("mousedown", (event) => {
      stopAnimation()
      startX = event.pageX;
      isDragging = true;
    });

    mainContainer.addEventListener("mouseup", (event) => {
      startX = 0;
      isDragging = false;
      startAnimation()
    })

    mainContainer.addEventListener("mousemove", (event) => {
      if (isDragging) {
        diff = event.pageX - startX
        startX = event.pageX
        checkItemOut()
        currentPosition += diff
        apitoolkit.style.transform = `translateX(${currentPosition}px)`;
        incomingReqeusts.style.transform = `translateX(${currentPosition}px)`;

      }
    });

    function checkItemOut() {
      let movedOut = false

      // Remove child nodes that are too far
      // such that mouse moving the items backward will not likely bring back into view
      // say 3000px deep
      const offsetLimit = 3000

      Array.from(incomingReqeusts.children).forEach(child => {
        const bounds = child.getBoundingClientRect();
        if (child.getAttribute("replaced")) {
          if (bounds.x > mainContBounds.x + mainContBounds.width + offsetLimit) {
            incomingReqeusts.removeChild(child)
          }
        }
        if (bounds.x > mainContBounds.x + mainContBounds.width && !child.getAttribute("replaced")) {
          movedOut = true
          const clone = child.cloneNode(true)
          child.setAttribute("replaced", "true")
          const firstChild = incomingReqeusts.firstElementChild
          incomingReqeusts.insertBefore(clone, firstChild)
        }
      })

      Array.from(apitoolkit.children).forEach(child => {
        const bounds = child.getBoundingClientRect();
        if (child.getAttribute("replaced")) {
          if (bounds.x > mainContBounds.x + mainContBounds.width + offsetLimit) {
            apitoolkit.removeChild(child)
          }
        }
        if (bounds.x > mainContBounds.x + mainContBounds.width && !child.getAttribute("replaced")) {
          let movedOut = true
          const clone = child.cloneNode(true)
          child.setAttribute("replaced", "true")
          const firstChild = apitoolkit.firstElementChild
          apitoolkit.insertBefore(clone, firstChild)
        }
      })
      if (movedOut) {
        currentPosition -= 296
      }
    }

    animateMarquee()
  }
</script>
```
