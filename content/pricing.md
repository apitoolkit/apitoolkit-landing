---
title: Pay as you grow 
date: 2022-03-23
publishdate: 2022-03-24
layout: baseonly
---
<section class="text-center ">
Trust your APIs, and only pay for what you use as you grow.

<div class="flex flex-col sm:flex-row text-sm bg-white drop-shadow-xl pricing-card mt-8 divide-x border-2">
<div class="flex-1">

### Free
#### **$0**/mo
<br/>

**20,000** Reqs / mo <small>included</small><br/>

1 Team Member <br/>
Last *14 days Data Retained<br/>

<a class="blue-button" href="https://app.apitoolkit.io/p/new?plan=free&annual">Get Started</a>

</div>
<div class="flex-1">

### Startup
#### <strong>$<span id="startup-price">50</span></strong>/mo
<div class="px-3 py-5">
<input type="range" value="0" 
    for="startup-price"
    min="1000000"
    max="15000000"
    steps="10000"
    _="on change set price to parseFloat(Math.trunc((((my value)-1000000)/10000)+50)).toLocaleString('en-US') then 
                 set #startup-price.innerHTML to `${price}` then 
                 set #startup-reqs.innerHTML to (parseFloat(my value).toLocaleString('en-US'))"
    class="price-range">
</div>

<strong id="startup-reqs">1,000,000</strong> Reqs / mo <small>included</small><br/>
$1 per extra 10,000 reqs <br/>

3 Team Member <br/>
Last *14 days Data Retained<br/>

<a class="blue-button" href="https://app.apitoolkit.io/p/new?plan=startup&annual">Get Started</a>


</div>
<div class="flex-1">

### Growth
#### <strong>$<span id="growth-price">250</span></strong>/mo
<div class="px-3 py-5">
  <input type="range" value="0" 
    for="growth-price"
    min="10000000"
    max="100000000"
    steps="15000"
    _="on change set price to parseFloat(Math.trunc((((my value)-10000000)/15000)+250)).toLocaleString('en-US') then 
                 set #growth-price.innerHTML to `${price}` then 
                 set #growth-reqs.innerHTML to (parseFloat(my value).toLocaleString('en-US'))"
    class="price-range ">
</div>

<strong id="growth-reqs">10,000,000</strong> Reqs / mo <small>included</small><br/>
$1 per extra 15,000 reqs <br/>

10 Team members <br/>
Last *14 days Data Retained 

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
