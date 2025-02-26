---
title: FAQs
date: 2024-04-22
updatedDate: 2024-08-03
faLogo: question
menuWeight: 6
hideFileTree: true
hideToc: true
pageFullWidth: true
faqs:
  - q: What programming languages are supported?
    a: We currently support 17+ web frameworks in different programming languages (Python, Golang, Javascript, PHP, C#, Java, etc.). If we don't support your framework, kindly email us at <a href="mailto:hello@apitoolkit.io">hello@apitoolkit.io</a> and we'll create an SDK for you ASAP!
  - q: Do my requests have to leave my server to APItoolkit servers?
    a: If you want to benefit from the API monitoring and the log explorer feature, yes. However, we offer an <a href="/pricing/">enterprise plan</a> that allows you to run APItoolkit on-prem (on your servers).
  - q: Will your SDKs slow down my backend?
    a: It depends. Most SDKs stream data asynchronously via Google PubSub, so your requests will see almost zero change in performance. However, if you use PHP you may pay a very tiny performance hit to send data to Google PubSub. This is because PHP doesn't support async workflows by default. But if you have the GRPC extension installed in your PHP environment, it will be used by PubSub to stream data asynchronously like in other languages. But this performance hit is barely noticeable and usually under 5ms added to every request.
  - q: How do you handle security and sensitive data?
    a: We take security seriously at APItoolkit. We employ encryption and authentication measures to ensure the security of your data during transmission and storage. All our SDKs also support redacting data. You can simply specify the JSONPath to the fields that you don't want the SDKs to forward to APItoolkit, and those sensitive fields will be stripped out/redacted before the data even leaves your servers and replaced with the text "[CLIENT REDACTED]" on our end. We will never see anything you don't want us to see.
  - q: I really love what you're doing. How can I show support?
    a: Give us a shout-out on X (Twitter), Discord, or any social media you use. We would also appreciate honest feedback about what we're building and suggestions for what functionality you would love to see next.
  - q: How are you different from other popular platforms?
    a: For a start, APItoolkit is an API-first monitoring and observability platform. We track all the live users' requests that come in and out of your application (for both internal and external APIs in use) and analyze the requests to catch bugs and breaking changes, while also tracking all the errors and exceptions that happen while we are processing the requests. Kindly explore our <a href="/compare/">comparison pages</a> to see how we stand out compared to different platforms.
---

```=html
<section class="max-w-7xl px-3 w-full text-textWeak flex flex-col md:flex-row gap-8">

    <div class="flex-grow mt-4">
        <p class="text-4xl font-bold mb-3">Frequently Asked <br/> Questions</p>
    </div>

    <div class="flex w-full md:w-[40%] flex-col gap-4 text-gray-700 dark:text-base-content">
        {% for faq in this.frontmatter.faqs %}
        <div class="bg-secondary text-white px-6 py-3 shadow-sm">
            <button class="flex gap-4 items-center text-left" onclick="toggleFaq(event)">
            <svg class="flex-shrink-0 icon h-5 w-5 text-current fill-current stroke-current opacity-70"><use xlink:href="/assets/deps/fontawesome/solid.svg#caret-right"></use></svg>
            {{faq.q}}
            </button>
            <div class="pl-4 py-4 hidden text-white dark:text-base-content faq-answer">{{faq.a}}</div>
        </div>
        {% endfor %}
        </div>
</section>
```
