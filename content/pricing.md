---
title: Pay as you grow
date: 2022-03-23
publishdate: 2022-03-24
layout: baseonly
---

<section class="text-center pt-5">

<!-- <p class="text-sm leading-6 text-white bg-black rounder py-4 py-3 rounded-xl"> -->
<!--     <strong class="font-bold text-white text-lg">Limited Time Offer:&nbsp; </strong> -->
<!--     Use Voucher <strong class="text-white font-bold text-lg">APITOOLKIT50</strong> for 50% off on all plans forever. Offer only valid till 30th September. -->
<!-- </p> -->

Trust your APIs, and only pay for what you use as you grow.
<br/>
14 days free trial included with all plans

<div class="flex flex-col sm:flex-row text-sm bg-white drop-shadow-xl pricing-card mt-8  divide-y sm:divide-x-none  divide-x border-2">

<div class="flex flex-1 ">

### Free

#### **$0**/mo

<br/>

**20,000** Reqs / mo <small>included</small>

1 Team Member
Last \*14 days Data Retained

<a class="blue-button" href="https://app.apitoolkit.io/p/new?plan=free&annual">Get Started</a>

</div>

<div class="flex flex-1">

### Hobby

#### <strong>$<span id="hobby-price">20</span></strong>/mo

<div class="px-3 py-5 hidden">
<input type="range" value="0" 
    for="hobby-price"
    min="250000"
    max="2000000"
    steps="10000"
    _="on change set price to parseFloat(Math.trunc((((my value)-(my min))/10000)+50)).toLocaleString('en-US') then 
                 set #hobby-price.innerHTML to `${price}` then 
                 set #hobby-reqs.innerHTML to (parseFloat(my value).toLocaleString('en-US'))"
    class="price-range">
</div>

<strong id="hobby-reqs">250K</strong> Reqs / mo <small>included</small><br/>
$1 per extra 10,000 reqs <br/>

2 weeks free trial <br/>
3 Team Member <br/>
Last \*7 days Data Retained<br/>
API test pipelines<br/>
Custom API request validations<br/>

<a class="blue-button" href="https://app.apitoolkit.io/p/new?plan=startup&annual">Get Started</a>

</div>
<div class="flex flex-1 border sm:border-t-8 border-t-amber-500 bg-amber-100 text-black">

### Startup

#### <strong class="">\*$<span id="startup-price">50</span></strong>/mo

<div class="px-3 py-5 hidden">
<input type="range" value="0" 
    for="startup-price"
    min="500000"
    max="5000000"
    steps="10000"
    _="on change set price to parseFloat(Math.trunc((((my value)-(my min))/10000)+50)).toLocaleString('en-US') then 
                 set #startup-price.innerHTML to `${price}` then 
                 set #startup-reqs.innerHTML to (parseFloat(my value).toLocaleString('en-US'))"
    class="price-range">
</div>

<strong id="startup-reqs">1M</strong> Reqs / mo <small>included</small><br/>
$1 per extra 10,000 reqs <br/>

2 weeks free trial <br/>
5 Team Members <br/>
Last \*14 days Data Retained<br/>
Popular option<br/>
API test pipelines<br/>
Custom API request validations<br/>

<a class="blue-button" href="https://app.apitoolkit.io/p/new?plan=startup&annual">Get Started</a>

</div>
<div class="flex flex-1">

### Growth

#### <strong>$<span id="growth-price">250</span></strong>/mo

<div class="px-3 py-5 hidden">
  <input type="range" value="0" 
    for="growth-price"
    min="5000000"
    max="100000000"
    steps="15000"
    _="on change set price to parseFloat(Math.trunc((((my value)-(my min))/12000)+250)).toLocaleString('en-US') then 
                 set #growth-price.innerHTML to `${price}` then 
                 set #growth-reqs.innerHTML to (parseFloat(my value).toLocaleString('en-US'))"
    class="price-range ">
</div>

<strong id="growth-reqs">10M</strong> Reqs / mo <small>included</small><br/>
$1 per extra 12,000 reqs <br/>

2 weeks free trial <br/>
10 Team members <br/>
Last \*14 days Data Retained <br/>
API test pipelines<br/>
Custom API request validations<br/>

<a class="blue-button" href="https://app.apitoolkit.io/p/new?plan=growth&annual">Get Started</a>

</div>
<!-- <div class="flex-1 bg-blue-x-light text-white "> -->

<!-- ### Enterprise  -->
<!-- #### **Custom** -->
<!-- <br/> -->
<!-- Single Sign-On<br/> -->
<!-- High Volume Discounts<br/> -->

<!-- Custom Team members<br/> -->
<!-- Custom Data Retention<br/> -->

<!-- <a class="blue-button bg-orange-x-dark" href="https://app.apitoolkit.io/p/new?plan=enterprise&annual">Contact Sales</a> -->

<!-- </div> -->
</div>

<div class="mt-10 flex-1 bg-blue-x-light text-white flex gap-5 py-5 content-around justify-around">
<div class=" items-center text-white ">

### <span class="text-white">Enterprise</span>

</div>
<div class="flex items-center">
Single Sign-On<br/>
High Volume Discounts<br/>
On-prem or on your own infra<br/>
</div>
<div class="flex items-center">
Custom Team members<br/>
Custom Data Retention<br/>
</div>
<div class="flex items-center ">
<a class="blue-button bg-orange-x-dark" href="mailto:hello@apitoolkit.io">Contact Sales</a>
</div>
</div>

</section>

<section class="text-center py-28">
<div class="our_container w-full">

## Frequently asked Questions

#### Some questions others have asked

<br/>

<div class="text-left space-y-4 prose"  >
<details class="p-4 border border-blue-900 rounded-md ">
    <summary class="cursor-pointer py-3 text-lg font-medium">What programming languages are supported?</summary>
    <p>Some services like the API testing does not need any SDK integration. But we have SDKs for multiple languages: Golang, PHP, C#, Java, etc. If we don't support your language or framework, please drop a message. We can create one on demand quite quickly.</p>
</details>

<details class="p-4 border border-blue-900 rounded-md ">
    <summary class="cursor-pointer py-3 text-lg font-medium">Do my requests have to leave my server to APIToolkit Servers?</summary>
    <p>Only if you want to benefit from the API metrics and the logs explorer. You can also enjoy all the other functionality which don't depend on your API traffic.</p>
</details>

<details class="p-4 border border-blue-900 rounded-md ">
    <summary class="cursor-pointer py-3 text-lg font-medium">Can I prevent sending sensitive Data to APIToolkit?</summary>
    <p>Yes. All our SDKs support redacting data. Simply specify the json path to the fields which you don't want the SDKs to forward to APIToolkit, and those fields will be stripped out/redacted before the data even leaves your servers. So we would never see them.</p>
</details>

<details class="p-4 border border-blue-900 rounded-md ">
    <summary class="cursor-pointer py-3 text-lg font-medium">I really love what you're doing. How do I show support?</summary>
    <p>Give a shout out on twitter or discord. We would also appreciate honest feedback about what we're building. And suggestions for what functionality you would love to see next.</p>
</details>

<details class="p-4 border border-blue-900 rounded-md ">
    <summary class="cursor-pointer py-3 text-lg font-medium">Will the SDKs slow down my backend?</summary>
    <p>It depends. Most SDKs stream data asynchronously via google pubsub streaming, so your requests will see almost zero change in performance. Except if you use PHP. Because PHP doesn't support async workflows by default. But if you have the GRPC extension installed in your PHP environment, the GRPC extension is used by pubsub to stream data asynchronously like in other languages. Otherwise, you pay a very tiny performance hit to send data to google pubsub. But this performance hit is rarely noticable and usually under 5ms added to every request.</p>
</details>

</div>
<br/>
<a class="showcase1-buttons showcase1-buttons-active " href="/faq">See all questions</a>

</div>
</section>
