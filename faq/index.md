---
title: Frequently asked Questions
date: 2022-03-23
publishdate: 2022-03-24
---

``` =html
<section class="text-center py-28">
<div class="our_container w-full">
```

## Frequently asked Questions

#### Some questions others have asked 

``` =html
<br/><br/><br/>

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
```
