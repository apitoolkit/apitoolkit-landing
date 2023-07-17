---
title: Pay as you grow 
date: 2022-03-23
publishdate: 2022-03-24
layout: baseonly
---
<section class="text-center pt-5">
Trust your APIs, and only pay for what you use as you grow.
<br/>
14 days free trial included with all plans

<div class="flex flex-col sm:flex-row text-sm bg-white drop-shadow-xl pricing-card mt-8  divide-y sm:divide-x-none  divide-x border-2">

<!--  
<div class="flex-1">

### Free
#### **$0**/mo
<br/>

**20,000** Reqs / mo <small>included</small><br/>

1 Team Member <br/>
Last *14 days Data Retained<br/>
<br/>
<br/>

<a class="blue-button" href="https://app.apitoolkit.io/p/new?plan=free&annual">Get Started</a>

</div>
-->
<div class="flex-1">

### Hobby
#### <strong>$<span id="hobby-price">10</span></strong>/mo
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
Last *7 days Data Retained<br/>
API test pipelines<br/>
Custom API request validations<br/>

<a class="blue-button" href="https://app.apitoolkit.io/p/new?plan=startup&annual">Get Started</a>


</div>
<div class="flex-1 border sm:border-t-8 border-t-amber-500">

### Startup
#### <strong class="">*$<span id="startup-price">50</span></strong>/mo
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
Last *14 days Data Retained<br/>
Popular option<br/>
API test pipelines<br/>
Custom API request validations<br/>

<a class="blue-button" href="https://app.apitoolkit.io/p/new?plan=startup&annual">Get Started</a>


</div>
<div class="flex-1">

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
Last *14 days Data Retained <br/>
API test pipelines<br/>
Custom API request validations<br/>

<a class="blue-button" href="https://app.apitoolkit.io/p/new?plan=growth&annual">Get Started</a>

</div>
<div class="flex-1 bg-blue-x-light text-white ">

### Enterprise 
#### **Custom**
<br/>
Single Sign-On<br/>
High Volume Discounts<br/>

Custom Team members<br/>
Custom Data Retention<br/>

<a class="blue-button bg-orange-x-dark" href="https://app.apitoolkit.io/p/new?plan=enterprise&annual">Contact Sales</a>

</div>
</div>
</section>
