---
title: The API Developer's Toolbox 
date: 2022-03-23
publishdate: 2022-03-24
description: "Build and maintain your APIs with Less downtimes, Fewer support tickets, Faster time to resolution and always up to date insights into your APIs"
hidenav: true 
showcase:
    - title: Monitor
      video: 
    - title: Document 
      video:

---
<script src="https://cdn.jsdelivr.net/npm/jarallax@2/dist/jarallax.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js" integrity="sha512-z4OUqw38qNLpn1libAN9BsoDx6nbNFio5lA6CuTp9NlK83b89hgyCVq+N5FdBJptINztxn1Z3SaKSKUS5UP60Q==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>

<style>
.jarallax {
  position: relative;
  z-index: 0;
}
.jarallax > .jarallax-img {
  position: absolute;
  object-fit: cover;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

svg#bee {
  color: hsl(0, 0%, 10%);
  position: absolute;
  width: 50px;
  height: auto;
}

.background-pattern{
background-color: #f9f9f9;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%23e0e0e0' fill-opacity='0.4' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E");
background-repeat: repeat;
}
</style>

<br/>
<div class=" sticky top-0 z-10 ">
    <div class="border border-gray-200 drop-shadow py-3 px-3 md:max-w-6xl inline-block w-full bg-white rounded-xl">
        {{< nav >}}
    </div>
</div>

<!-- Blurred bg image generated from: https://fffuel.co/bbblurry/ -->
<!-- https://codepen.io/borntofrappe/pen/qBdzaZG -->
<section  style="background-color:#F9F9F9; margin-top:-100px" class=" flex flex-col space-between justify-between background-pattern">
    
<section class="text-center relative pt-24">
    <div class="md:max-w-6xl inline-block text-left w-full px-2 md:px-4" >
    <br/><br/>

  <div class="flex flex-col sm:flex-row pt-16 sm:pt-24 text-left " data-hs="fade up">
    <div class="jarallax" data-jarallax data-speed="-1">
    {{< bee >}}

[✨ Read the latest updates  🚀](/blog/updates-october-2022/)
{class="inline-block bg-blue-900/90 text-white px-5 py-1 text-xs rounded-2xl"}

# <span class="inline-block">How Tech Teams manage <span class="decoration-amber-300 underline underline-offset-4">Reliable APIs!</span> { class="pt-2 text-blue-title leading-relaxed xtracking-tight text-3xl sm:text-5xl drop-shadow-lg"}
--

**Reduce** customer **Bug & Support Tickets**. Increase team **velocity**
{.text-2xl}
The single platform for the entire API lifecycle: <strong id="header-typewriter"></strong>
{.text-2xl}

<!-- {{< param "title" >}} -->

<div class="pt-8 space-y-8 xsm:pr-20">
<div class="space-y-2 text-lg sm:pt-1" id="waitlist-form-1">
  <a
    href="https://app.apitoolkit.io"
    data-hs="fade up"
    class=" drop-shadow-md hover:drop-shadow-xl hover:drop-shadow-lg transition-all rounded-md hover:bg-yellow-300 bg-amber-300 text-black border border-amber-400 font-semibold inline-block px-4 py-2 mt-2 sm:mt-0"
  >
    Get Started for Free
  </a>
  <span class="inline-block px-5"> OR </span>
  <a href="https://calendly.com/tonyalaribe/30min"
    target="_blank"
    data-hs="fade up"
    class="drop-shadow-md hover:drop-shadow-xl rounded-md border border-gray-200 bg-gray-100 hover:bg-gray-200  text-gray-900 inline-block px-4 py-2 sm:ml-1 mt-2 sm:mt-0"
  >
    Get a demo &nbsp;
  </a>
  <div class="sm:space-x-5 text-base" data-hs="fade up">
    <small class="inline-block">✓ Always free plan</small>
    <small class="inline-block">✓ GDPR compliant</small>
    <small class="inline-block">✓ Security first</small>
  </div>
</div>
</div>

<br/>
<br/>
<br/>
<br/>

{{< showcase >}}

<br/>
<br/>
<br/>

</div>
  </div>
  </div>
</section>


<div>
    <div class="our_container pb-12 text-center pt-24 sm:pt-0">
        <strong class="pb-4 block"> Loved By Engineers at these companies and more:</strong>
        <div class="grid  grid-cols-3 sm:grid-cols-6 gap-2 sm:gap-7 justify-center items-center">
            <img class="w-full" src="https://uploads-ssl.webflow.com/641975b718b45d0d6f1822ac/646adf0fa725242fc86306b4_andela.svg" />
            <img class="w-full" src="https://uploads-ssl.webflow.com/641975b718b45d0d6f1822ac/646adf0fb920caa9e1a3b792_paystack-1.svg" />
            <img class="w-full" src="/assets/img/love/thepeer.svg" />
            <img class="w-full" src="/assets/img/love/grovepay.svg" />
            <img class="w-full" src="/assets/img/love/deliveryhero.svg" />
            <img class="w-full" src="/assets/img/love/samedaycustomLogo.svg" />
        </div>
    </div>
</div>
</section>

<section class="mt-20 text-center">
  <section class="md:max-w-6xl inline-block text-center">
    <div class="inline-block md:max-w-5xl text-left px-2  py-44 text-base sm:text-lg">
    
###### WHY APITOOLKIT?
## Empower <span class="bg-amber-300 px-2 rounded-md"><strong class="drop-shadow-md">Developer</strong></span> teams to build <span class="bg-amber-300 px-2 rounded-md inline-block"><strong class="drop-shadow-md">Happier Customer</strong></span> **experiences**.


<br/>
<br/>
<div class="text-base sm:text-lg" data-hs="fade up">
All the <strong>Tools</strong> you need to <strong>design</strong> your APIs, <strong>interpret</strong> what's going on in your APIs, <strong>Investigate incidents</strong> and <strong>generate insights</strong>. In one package.
<br/><br/>
We'll <strong>Verify</strong> your API payloads are returning the <strong>correct data</strong>.
<br/>
With <strong>daily & weekly reports</strong> on everything going on in your services.
<br/>
<br/>
</div>


### Many features and more...
{class="mt-12 sm:mt-24"}

<div class="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8 text-lg">
  <!-- <div class="col-span-2 text-sm sm:text-lg p-1 sm:p-2 font-normal sm:font-medium"> -->
    <!-- <a class="grid-cols-1 sm:grid-cols-6  block transition-all border-l-4 border-l-amber-400  rounded-md p-2 sm:p-5 border border-gray-200 drop-shadow-md shadow-amber-500 hover:shadow-md" href="/api-anomalies-validation-and-checks"> -->
    <!--   API Designer and Mocker  -->
    <!-- </a> -->
    <a class="grid-cols-1   block transition-all border-l-4 border-l-amber-400 rounded-md p-2 sm:p-5 border border-gray-200 drop-shadow-md shadow-amber-500 hover:shadow-md" href="/api-performance-monitoring-and-compliance">
      Monitor Errors & Performance
    </a>
    <a class="grid-cols-1   block transition-all border-l-4 border-l-amber-400  rounded-md p-2 sm:p-5 border border-gray-200 drop-shadow-md shadow-amber-500 hover:shadow-md" href="/api-logs-and-metrics">
      Debug Errors and See request happening live 
    </a>
    <a class="grid-cols-1  block transition-all border-l-4 border-l-amber-400 rounded-md p-2 sm:p-5 border border-gray-200 drop-shadow-md shadow-amber-500 hover:shadow-md" href="/api-documentation-and-developer-portals">
      Generate Swagger From live traffic or manually upload swagger
    </a>
    <a class="grid-cols-1  block transition-all border-l-4 border-l-amber-400 rounded-md p-2 sm:p-5 border border-gray-200 drop-shadow-md shadow-amber-500 hover:shadow-md" href="/api-anomalies-validation-and-checks">
      Payload Validation & Anomaly Detector  
    </a>
    <a class="grid-cols-1 block transition-all border-l-4 border-l-amber-400 rounded-md p-2 sm:p-5 border border-gray-200 drop-shadow-md shadow-amber-500 hover:shadow-md" href="/api-anomalies-validation-and-checks">
     API Static Analysis & Linter 
    </a>
    <a class="grid-cols-1 block transition-all border-l-4 border-l-amber-400 rounded-md p-2 sm:p-5 border border-gray-200 drop-shadow-md shadow-amber-500 hover:shadow-md" href="/blog/api-testing-automation/">
      Live API tester 
    </a>
  <!-- </div> -->
</div>

<!-- <div class="col-span-4 flex items-center justify-center "> -->
<!--   <div class="backdrop-opacity-5 backdrop-invert-0 bg-white/50 xgradient1 p-5 md:max-w-3xl rounded-xl drop-shadow w-full" id="intro-video"> -->
<!--     <!-- <div  class="w-full" style="position: relative; padding-bottom: 65.77344701583435%; height: 0;"><iframe class="rounded-lg border-4 border-gray-200 " src="https://www.loom.com/embed/24ea3ae9600544d68f1001af3f4feac2?hide_title=true&hide_owner=true&hideEmbedTopBar=true" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div> --> 
<!--     <div class=""> -->
<!--         <video class="lazy w-full" loop autoplay> -->
<!--             <source data-src='/assets/video/APIToolkitDashboardTrimmed.mp4' type='video/mp4'> -->
<!--             Your browser does not support the video tag. -->
<!--         </video> -->
<!--     </div> -->
<!--     <div class="mt-2"><a href="https://www.loom.com/share/24ea3ae9600544d68f1001af3f4feac2" target="_blank" class="inline-block bg-blue-900 text-white px-3 py-1 text-xs rounded-lg" >Learn how APIToolkit works (Video)</a></div> -->
<!--   </div> -->
<!-- </div> -->
<!-- </div> -->
</div>


<div class="md:max-w-4xl text-left px-2   text-base sm:text-lg" >
<!-- Michael Okoh  Thepeer Testimonial -->
<section class="bg-white px-6 py-40 sm:py-32 lg:px-8 flex flex-col justify-center ">
  <figure class="mx-auto max-w-2xl">
    <p class="sr-only">5 out of 5 stars</p>
    <div data-hs="fade up" class="flex gap-x-1 text-indigo-600">
      <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
      </svg>
      <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
      </svg>
      <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
      </svg>
      <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
      </svg>
      <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
      </svg>
    </div>
    <blockquote data-hs="fade up"  class="mt-10 text-xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
      <p>“APIToolkit allowed us make a drop in rewrite of our PHP service in Golang. Fixing all bugs without customers noticing any changes.”</p>
    </blockquote>
    <figcaption class="mt-10 flex items-center gap-x-6">
      <img data-hs="fade left" class="h-12 w-12 rounded-full bg-gray-50" src="/assets/img/love/trojan.jpeg" alt="Michael Okoh">
      <div data-hs="fade right" class="text-sm leading-6">
        <div class="font-semibold text-gray-900">Michael Okoh</div>
        <div class="mt-0.5 text-gray-600">CTO @ Thepeer</div>
      </div>
    </figcaption>
  </figure>
</section>

</div>


<section class="pt-40 px-2 sm:px-0">
<div data-hs="fade down" >

## Your workflow <span class="bg-amber-300 px-2 rounded-md"><strong class="drop-shadow-md">before</strong></span> APIToolkit 
</div>
<p class="pt-3 text-lg m-w-prose" data-hs="zoom up"> Not having enough details to discover issues, investigate bugs, and test to ensure bugs don't get reintroduced.</p>
<br/>

<div class="py-8 text-lg sm:hidden">
    <ul class="customer-old-workflow flex flex-row flex-wrap gap-4 gap-y-10 justify-items-stretch items-stretch">
     <li data-hs="fade right" class="flex-1">Build & Deploy <strong class="bg-amber-300 px-2 rounded-md inline-block">new features</strong></li>
     <li data-hs="fade right" class="flex-shrink-0 "><img src="/assets/img/svgs/right-arrow-svgrepo-com.svg" class="w-12"/></li>
     <li data-hs="fade right" class="flex-1">Deployment introduces <strong class="bg-amber-300 px-2 rounded-md">BUGS</strong> </li>
     <!-- <li data-hs="fade right" class="flex-shrink-0 "><img src="/assets/img/svgs/right-arrow-svgrepo-com.svg" class="w-12"/></li> -->
     <li data-hs="fade right" class="flex-1">Users Discover Bugs, <strong class="bg-amber-300 px-2 rounded-md">Frustrated</strong> & some leave</li>
     <li data-hs="fade right" class="flex-shrink-0 "><img src="/assets/img/svgs/right-arrow-svgrepo-com.svg" class="w-12"/></li>
     <li data-hs="fade right" class="flex-1">Some users complain, but only give <strong class="bg-amber-300 px-2 rounded-md">vague</strong> pointers.</li>

<li data-hs="fade left" class="flex-1">Spend weeks <strong class="bg-amber-300 px-2 rounded-md">guessing & failing</strong> to reproduce bug. </li>
<li data-hs="fade right" class="flex-shrink-0 "><img src="/assets/img/svgs/right-arrow-svgrepo-com.svg" class="w-12"/></li>
<li data-hs="fade left" class="flex-1">Guess incorrectly and <strong class="bg-amber-300 px-2 rounded-md">fix wrong Bug</strong>, or only a symptom.</li>

<li data-hs="fade left" class="flex-1">Deploy changes and maybe introduce <strong class="bg-amber-300 px-2 rounded-md">new bugs</strong> </li>
<li data-hs="fade right" class="flex-shrink-0 "><img src="/assets/img/svgs/right-arrow-svgrepo-com.svg" class="w-12"/></li>
<li data-hs="fade left" class="flex-1"><strong class="bg-amber-300 px-2 rounded-md">Cycle Repeats.</strong></li>
    </ul>
    <br/>
    <br/><br/><br/>
</div>
<!-- desktop version --> 
<div class="py-8 text-lg hidden sm:block">
    <ul class="customer-old-workflow flex flex-row gap-5 justify-items-stretch items-stretch">
     <li data-hs="fade right" class="flex-1">Build & Deploy <strong class="bg-amber-300 px-2 rounded-md inline-block">new features</strong></li>
     <li data-hs="fade right" class="flex-shrink-0 "><img src="/assets/img/svgs/right-arrow-svgrepo-com.svg" class="w-12"/></li>
     <li data-hs="fade right" class="flex-1">Deployment introduces <strong class="bg-amber-300 px-2 rounded-md">BUGS</strong> </li>
     <li data-hs="fade right" class="flex-shrink-0 "><img src="/assets/img/svgs/right-arrow-svgrepo-com.svg" class="w-12"/></li>
     <li data-hs="fade right" class="flex-1">Users Discover Bugs, <strong class="bg-amber-300 px-2 rounded-md">Frustrated</strong> & some leave</li>
     <li data-hs="fade right" class="flex-shrink-0 "><img src="/assets/img/svgs/right-arrow-svgrepo-com.svg" class="w-12"/></li>
     <li data-hs="fade right" class="flex-1">Some users complain, but only give <strong class="bg-amber-300 px-2 rounded-md">vague</strong> pointers.</li>
    </ul>
    <div class="py-8 text-right">
        <img src="/assets/img/svgs/right-arrow-svgrepo-com.svg" class="w-12 rotate-90 inline-block mr-20"/>
    </div>
    <ul class="customer-old-workflow flex flex-row gap-5 justify-items-stretch items-stretch">
     <li data-hs="fade left" class="flex-1"><strong class="bg-amber-300 px-2 rounded-md">Cycle Repeats.</strong></li>
     <li data-hs="fade left" class="flex-shrink-0 "><img src="/assets/img/svgs/right-arrow-svgrepo-com-left_.svg" class="w-12"/></li>
     <li data-hs="fade left" class="flex-1">Deploy changes and maybe introduce <strong class="bg-amber-300 px-2 rounded-md">new bugs</strong> </li>
     <li data-hs="fade left" class="flex-shrink-0 "><img src="/assets/img/svgs/right-arrow-svgrepo-com-left_.svg" class="w-12"/></li>
     <li data-hs="fade left" class="flex-1">Guess incorrectly and <strong class="bg-amber-300 px-2 rounded-md">fix wrong Bug</strong>, or only a symptom.</li>
     <li data-hs="fade left" class="flex-shrink-0 "><img src="/assets/img/svgs/right-arrow-svgrepo-com-left_.svg" class="w-12"/></li>
     <li data-hs="fade left" class="flex-1">Spend weeks <strong class="bg-amber-300 px-2 rounded-md">guessing & failing</strong> to reproduce bug. </li>
    </ul>
    <br/>
    <br/><br/><br/>
</div>

</section>

<div class="md:max-w-4xl text-left px-2 pb-40  text-base sm:text-lg " >
<!-- Eze SundayLoPeer.com Testimonial -->
<section class="bg-white px-6 py-20 lg:px-8 flex flex-col justify-center ">
  <figure class="mx-auto max-w-2xl">
    <p class="sr-only">5 out of 5 stars</p>
    <div data-hs="fade up" class="flex gap-x-1 text-indigo-600">
      <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
      </svg>
      <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
      </svg>
      <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
      </svg>
      <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
      </svg>
      <svg class="h-5 w-5 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clip-rule="evenodd" />
      </svg>
    </div>
    <blockquote data-hs="fade up"  class="mt-10 text-xl font-semibold leading-8 tracking-tight text-gray-900 sm:text-2xl sm:leading-9">
      <p>“Our workflow has not been the same since APIToolkit. We love the reports!”</p>
    </blockquote>
    <figcaption class="mt-10 flex items-center gap-x-6">
      <div data-hs="fade right" class="text-sm leading-6">
        <div class="font-semibold text-gray-900">Eze Sunday</div>
        <div class="mt-0.5 text-gray-600">CTO @ LoPeer.com</div>
      </div>
    </figcaption>
  </figure>
</section>

</div>


<div data-hs="fade down " class="px-2 sm:px-0">

## Your Team's workflow <span class="bg-amber-300 px-2 rounded-md"><strong class="drop-shadow-md">with APIToolkit </strong></span>

<p data-hs="fade up"  class="pt-3 text-lg max-w-3xl inline-block"> You now have enough tools and insight about your APIs and payloads, to discover issues, investigate bugs, and test to ensure bugs don't get reintroduced.</p>
</div>


<br/><br/><br/><br/><br/><br/>

<div class="benefit-section px-2 sm:px-0">

#### <span class="bg-amber-300 px-2 rounded-md"><strong class="drop-shadow-md">Always up to date Documentation</strong></span>
### Collaborate with your team/our AI,<br/>to build your OpenAPI Spec/Docs
<p data-hs="fade up" class="pt-3 prose m-w-prose">Design your APIs with <strong>always up to date</strong> API Docs; Manually written by you, or <strong>auto-generated</strong> by APIToolkit AI based off your <strong>live traffic</strong>, or both. 
</p>

<div class="home-feature-section pt-5 pb-24  flex flex-col sm:flex-row odd:flex-col-reverse sm:odd:flex-row  gap-5 x:sm:gap-8 justify-center ">
<div  class="flex-1  home-feature-text-box text-base">

- Auto generated OpenAPI/Swagger from live traffic 
- Manually edit swagger or upload from your CI
- Collaborate on the swagger specs with your team 
- APIToolkit learns expected service payloads from the swagger.

<br/>
<a class="text-blue-900" href="/api-documentation-and-developer-portals">More about our OpenAPI and documentation tools →</a>

</div>
    <div  class="home-feature-image-div" data-hs="fade up">
        <video class="lazy w-full" loop autoplay muted playsinline>
            <source data-src='/assets/video/APIToolkitDocumentation.mp4' type='video/mp4'>
            Your browser does not support the video tag.
        </video>
    </div>
</div>
</div>

<div class="py-8 text-center"  data-hs="fade down slow">
    <!-- https://www.svgrepo.com/collection/hand-drawn-arrows/ -->
    <img src="/assets/img/svgs/3d-turn-right-arrow-svgrepo-com.svg" class="w-24 inline-block mr-20" />
    <!-- <img src="/assets/img/svgs/right-arrow-svgrepo-com.svg" class="w-24 rotate-90 inline-block mr-20"/> -->
</div>



<div class="benefit-section px-2 sm:px-0">

#### <span class="bg-amber-300 px-2 rounded-md"><strong class="drop-shadow-md">Performance monitoring & error tracking</strong></span>
### Monitor Performance and Error Rates 
<p class="pt-3 prose m-w-prose">Be sure that your service is performing within <strong>expected performance</strong> metrics. Run realistic benchmarks across endpoints to test their limits.
</p>

<div class="home-feature-section pt-5 pb-24  flex flex-col sm:flex-row odd:flex-col-reverse sm:odd:flex-row  gap-5 x:sm:gap-8 justify-center ">
<div  class="flex-1  home-feature-text-box text-base">

- Error rates across endpoints
- Latency distributions across endpoints
- Optimization advice. Eg cachable endpoints
- Run Benchmarks to test backend limits (coming soon)

<br/>
<a class="text-blue-900" href="/api-performance-monitoring-and-compliance">More about our Performance and Benchmarking →</a>

</div>
    <div  class="home-feature-image-div" data-hs="fade up">
        <video class="lazy w-full" loop autoplay muted playsinline>
            <source data-src='/assets/video/dashboard.mp4' type='video/mp4'>
            Your browser does not support the video tag.
        </video>
    </div>
</div>
</div>

<div class="py-8 text-center" data-hs="fade down slow">
    <img src="/assets/img/svgs/3d-turn-right-arrow-svgrepo-com.svg" class="w-24 inline-block mr-20" />
    <!-- <img src="/assets/img/svgs/right-arrow-svgrepo-com.svg" class="w-24 rotate-90 inline-block mr-20"/> -->
</div>


<div class="benefit-section px-2 sm:px-0">

#### <span class="bg-amber-300 px-2 rounded-md"><strong class="drop-shadow-md">Anomaly Detection, Monitors & Validation</strong></span>
### Detect bugs and issues via our Anomaly Detection,<br/>your Custom monitors & payload Validation.
<p class="pt-3 prose m-w-prose">There's a bug/issue. But the Anomaly detector or Custom monitors or Custom payload validators caught them <strong>before your customers even noticed</strong>.
</p>

<div class="home-feature-section pt-5 pb-24  flex flex-col sm:flex-row odd:flex-col-reverse sm:odd:flex-row  gap-5 x:sm:gap-8 justify-center ">
<div  class="flex-1  home-feature-text-box text-base">

- Live traffic validated against latest OpenAPI spec
- Your custom API Tests executed on schedule 
- Your validators executed against every payload

<br/>
<a class="text-blue-900" href="/api-anomalies-validation-and-checks">More about Anomalies, Monitors and Validation →</a>

</div>
    <div  class="home-feature-image-div"  data-hs="fade up">
        <video class="lazy w-full" loop autoplay muted playsinline>
            <source data-src='/assets/video/anomalies.mp4' type='video/mp4'>
            Your browser does not support the video tag.
        </video>
    </div>
</div>
</div>

<div class="py-8 text-center" data-hs="fade down slow">
    <img src="/assets/img/svgs/3d-turn-right-arrow-svgrepo-com.svg" class="w-24 inline-block mr-20" />
    <!-- <img src="/assets/img/svgs/right-arrow-svgrepo-com.svg" class="w-24 rotate-90 inline-block mr-20"/> -->
</div>


<div class="benefit-section px-2 sm:px-0">

#### <span class="bg-amber-300 px-2 rounded-md"><strong class="drop-shadow-md">Alerting and Incident Workflows</strong></span>
### The right people must know that there is an issue.
<p class="pt-3 prose m-w-prose">You don't want noise, nor do you want the detected issues to go unnoticed. So the alerts are <strong>routed to the right people</strong>, and trivial issues are delivered in the daily or weekly reports.
</p>

<div class="home-feature-section pt-5 pb-24  flex flex-col sm:flex-row odd:flex-col-reverse sm:odd:flex-row  gap-5 x:sm:gap-8 justify-center ">
<div  class="flex-1  home-feature-text-box text-base">

- Connect your on-call tracking system for emergencies
- Setup slack and email or pagerduty, etc 
- Detailed reports for retrospectives and planning.

<br/>
<!-- <a class="text-blue-900 hidden" href="/api-documentation-and-developer-portals">More about Alerting and Incident Management →</a> -->
<a class="text-blue-900 " href="https://app.apitoolkit.io">Get Started for Free →</a>

</div>
    <div  class="home-feature-image-div"  data-hs="fade up">
        <video class="lazy w-full" loop autoplay muted playsinline onloadstart="this.playbackRate = 1.5;">
            <source data-src='/assets/video/slack_channels.mp4' type='video/mp4'>
            Your browser does not support the video tag.
        </video>
    </div>
</div>
</div>

<div class="py-8 text-center" data-hs="fade down slow">
    <img src="/assets/img/svgs/3d-turn-right-arrow-svgrepo-com.svg" class="w-24 inline-block mr-20" />
    <!-- <img src="/assets/img/svgs/right-arrow-svgrepo-com.svg" class="w-24 rotate-90 inline-block mr-20"/> -->
</div>


<div class="benefit-section px-2 sm:px-0">

#### <span class="bg-amber-300 px-2 rounded-md"><strong class="drop-shadow-md">Query, Analyze and Visualize API Payloads</strong></span>
### Investigate the bug by exploring live requests and responses from your server.
<p class="pt-3 prose m-w-prose"><strong>Investigate the bug</strong> or other issue using the Log Explorer. Query, <strong>analyze and visualize</strong> real time requests and responses going through your server.
</p>

<div class="home-feature-section pt-5 pb-24  flex flex-col sm:flex-row odd:flex-col-reverse sm:odd:flex-row  gap-5 x:sm:gap-8 justify-center ">
<div  class="flex-1  home-feature-text-box text-base">

- During API incidents Query and analyze failing API requests and responses 
- Analyze or Chart against fields within your API requests and responses 
- Calculate aggregates from fields in your API Data without going to your database

<br/>
<a class="text-blue-900" href="/api-logs-and-metrics">More about the Log Explorer →</a>

</div>
    <div  class="home-feature-image-div">
        <video class="lazy w-full" loop autoplay muted playsinline onloadstart="this.playbackRate = 2;">
            <source data-src='/assets/video/log_explorer.mp4' type='video/mp4'>
            Your browser does not support the video tag.
        </video>
    </div>
</div>
</div>

<div class="py-8 text-center" data-hs="fade down slow">
    <img src="/assets/img/svgs/3d-turn-right-arrow-svgrepo-com.svg" class="w-24 inline-block mr-20" />
    <!-- <img src="/assets/img/svgs/right-arrow-svgrepo-com.svg" class="w-24 rotate-90 inline-block mr-20"/> -->
</div>


<div class="benefit-section px-2 sm:px-0">

#### <span class="bg-amber-300 px-2 rounded-md"><strong class="drop-shadow-md">Schedule API Tests against your APIs at interval</strong></span>
### Write API Tests to ensure the bug is never reintroduced.
<p class="pt-3 prose m-w-prose">Bug is fixed, so now you utiilize the API workflows and tester to <strong>write test cases</strong> for this scenario, so it never happens again. 
Use the APItoolkit test workflow UI builder to easily create these tests. Your tests can be <strong>scheduled</strong> to run against production at any <strong>interval</strong> you prefer.
(Coming soon)
</p>

<div class="home-feature-section pt-5 pb-24  flex flex-col sm:flex-row odd:flex-col-reverse sm:odd:flex-row  gap-5 x:sm:gap-8 justify-center ">
<div  class="flex-1  home-feature-text-box text-base">

- Connect your on-call tracking system for emergencies
- Setup slack and email or pagerduty, etc 
- Detailed reports for retrospectives and planning.

<br/>
<!-- <a class="text-blue-900" href="/api-documentation-and-developer-portals">More about Scheduled API Tests →</a> -->
<a class="text-blue-900 " href="https://app.apitoolkit.io">Get Started for Free →</a>

</div>
    <div  class="home-feature-image-div">
      <img src="/assets/img/integrations/testing_coming_soon.png"/>
    </div>
</div>
</div>

<div class="py-8 text-center" data-hs="fade down slow">
    <img src="/assets/img/svgs/3d-turn-right-arrow-svgrepo-com.svg" class="w-24 inline-block mr-20" />
    <!-- <img src="/assets/img/svgs/right-arrow-svgrepo-com.svg" class="w-24 rotate-90 inline-block mr-20"/> -->
</div>


<div  class="p-5 md:p-16 bg-amber-50/50 border border-amber-50 rounded-lg space-y-2">

##### <span class="bg-amber-300 px-1  font-bold">Peace of Mind</span>
## Now your customers are happy and don't even know that there was an issue 

<br/><br/>
<a href="https://app.apitoolkit.io" data-hs="fade up" class="drop-shadow hover:drop-shadow-lg transition-all rounded-md hover:bg-yellow-300 bg-amber-300 text-black border border-amber-400 font-semibold inline-block px-4 py-2 mt-2 sm:mt-0 hs-init hs-inview">
Get Started for Free
</a>

</div>

  </section>
</section>

<section class="my-24">

#### Wall of <span class="bg-amber-300 px-1 font-bold">**LOVE**</span>
### Loved by Devs and Engineering teams

<br/>
<br/>

<iframe height="800px" id="testimonialto-apitoolkit-light-animated" src="https://embed-v2.testimonial.to/w/apitoolkit?animated=off&theme=light&shadowColor=f78da740" frameborder="0" scrolling="no" width="100%"></iframe>
</section>


{{% container %}}
  <section class="pt-20 sm:pt-36">
    <!-- integrations -->
    <div class="flex flex-row gap-2 md:gap-10 flex-wrap text-xs sm:text-base">
      <span class="flex-grow">Plug & Play<br />integrations</span>
      <img
        class="h-7 sm:h-10"
        src="/assets/img/integrations/cloudflare.png"
      />
      <img class="h-7 sm:h-10" src="/assets/img/integrations/nginx.png" />
      <img class="h-7 sm:h-10" src="/assets/img/integrations/caddy.png" />
      <img class="h-7 sm:h-10" src="/assets/img/integrations/go.svg" />
      <img class="h-7 sm:h-10" src="/assets/img/integrations/php.svg" />
      <span class="flex-grow text-right">&<br />more</span>
    </div>
  </section>
  <section class="mt-48 mb-28">
    <!-- Founders note -->




  <br/>
  <div
    class="fade-in-section px-4 sm:px-12 py-8 bg-amber-300 border border-gray-200 text-black filter drop-shadow-xl text-sm font-medium rounded-sm monospace"
  >
    <div class="pt-2 space-y-4 leading-5 text-xs sm:columns-2 gap-8 ">

## Founders Note
#### ( Why we are solving API reliability )

Picture this: I joined a food delivery company, all excited and ready to tackle challenges. 
One day, we migrated a service from PHP to Golang, following the swagger docs diligently. 
We made sure the responses matched, tested everything, and launched with confidence.

But oh boy, did things go haywire! Our order monitoring charts went berserk within minutes. 
A whopping 20k orders vanished into thin air. Panic ensued. What on earth happened?

Turns out, in a few countries we operated in, a crucial field required by the apps mysteriously disappeared. 
No one saw it coming because it wasn't mentioned in the inherited documentation. It only affected specific countries that weren't part of our manual tests.

We swiftly fixed the issue and reverted to the old system. But here's the kicker: I wished we had a magical tool that could have caught this problem way sooner.

Fast forward to today, and guess what? We've created that tool! We want to hear your own epic tales of API chaos and help you bid them farewell. 
Let's make sure those stories become relics of the past together.

Join us on this exciting journey!

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
  </div>
</div>
  </section>
{{% /container %}}

<section>
<div class="our_container w-full">

## Frequently asked Questions
#### Some questions others have asked 
<br/><br/><br/>

<div class="text-left space-y-4 prose"  data-hs="fade up">
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

  <section class="bg-gradient-yellow  mt-32 text-white gradient-yellow">
    {{% container %}}
<div class="space-y-5 py-16 sm:py-36 max-w-prose sm:text-lg ">

  ## APIToolkit is built by <span class="bg-amber-300 px-1 font-bold text-black inline-block ">Developers for Developers</span>. To solve pain points we've all faced.

  We’re engineers at our core, who are very close to the problems we are
  solving. So, we encourage you to be a part of this community
  evolving solutions to solve API documentation, management and observability.

  <div class="flex flex-row items-center pt-8">
    <a
      class="inline-block drop-shadow-xl"
      href="https://discord.gg/dEB6EjQnKB"
      target="_blank"
      ><img class="w-32" src="/assets/img/jointhediscord.png"
    /></a>
    <span class="inline-block px-3">Or</span>
    <a
      class="inline-block rounded bg-amber-300 hover:bg-yellow-300 text-black font-bold px-8 py-2 drop-shadow-xl hover:drop-shadow hover:shadow-md"
      href="https://calendly.com/tonyalaribe/30min"
      target="_blank"
      >Let's have a Chat</a
    >
  </div>
</div>
    {{% /container%}}
  </section>




{{< rawhtml >}}
<section class="flex flex-row justify-center">
  <div
    class="our_container space-y-5 py-36 flex flex-col sm:flex-row items-center"
  >
    <div class="sm:pr-16">
      <h1 class="text-3xl text-blue-title">
        APIToolkit is fixing <span class="bg-amber-300 px-1 font-bold">API Workflows</span> & <span class="bg-amber-300 px-1 font-bold">Reliability </span>
      </h1>
      <div class="pt-8 space-y-5">
        <p>
          APIToolkit is creating a world where you don’t lose customers
          due to broken API contracts or reliability. Signup 
          to be a part of our journey. 
        </p>
        <div class="space-y-2 text-sm">
          <small class="text-blue-title font-semibold px-1"
            >Subscribe to keep up with our journey below</small
          >
<div id="6430710fa90d72f544ac4d87" style="width: 100%; height: 100%;">
    <div id="6430710fa90d72f544ac4d87-form" class="6430710fa90d72f544ac4d87-template" >
        <div id="selected-_ok1f66w6r" class="ap3w-embeddable-form-6430710fa90d72f544ac4d87 ap3w-embeddable-form-6430710fa90d72f544ac4d87-full ap3w-embeddable-form-6430710fa90d72f544ac4d87-solid" data-select="true">
            <form id="ap3w-embeddable-form-6430710fa90d72f544ac4d87" class="ap3w-embeddable-form-content flex flex-col sm:flex-row mt-4">
                <div id="selected-_bilsjlm83" class="sm:w-96 grow  ap3w-form-input ap3w-form-input-6430710fa90d72f544ac4d87" data-select="true" data-field-id="str::email" data-merge-strategy="override">
                    <input type="email" id="ap3w-form-input-email-6430710fa90d72f544ac4d87" step="1" name="email" required="" 
                        class="border border-blue-500 rounded-md px-4 py-2 text-xs w-full" name="email_address"
                        placeholder="Email address. eg abc@example.com"
                    />
                </div>
                <div id="selected-_v0kuy19nx" class="ap3w-form-button ap3w-form-button-6430710fa90d72f544ac4d87">
                    <button id="ap3w-form-button-6430710fa90d72f544ac4d87" type="submit" data-select="true" data-button-on-click="thank-you"
                        class="rounded-md bg-blue-900 hover:bg-blue-800 border-blue-900 text-xs text-white inline-block px-4 py-2 sm:ml-1 mt-2 sm:mt-0"
                    >Subscribe</button>
                </div>
            </form>
        </div>
    </div>
    <div id="6430710fa90d72f544ac4d87-thank-you" class="6430710fa90d72f544ac4d87-template" style="display: none;">
        <div id="selected-_zv10celpx" class="ap3w-embeddable-form-6430710fa90d72f544ac4d87 ap3w-embeddable-form-6430710fa90d72f544ac4d87-full ap3w-embeddable-form-6430710fa90d72f544ac4d87-solid" data-select="true">
            <form id="ap3w-embeddable-form-6430710fa90d72f544ac4d87" class="ap3w-embeddable-form-content">
                <div id="selected-_z3k25bmgb" class="ap3w-text ap3w-text-6430710fa90d72f544ac4d87 ap3w-text--first ap3w-text--last">
                    <div data-select="true">
                        <p data-size="h1" class="text-lg py-4">Success! Now check your email to confirm your subscription.</p>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
        </div>
      </div>
    </div>
    <img
      src="/assets/img/ill_phone_and_chart.svg"
      alt="Man measuring a graph"
      class="w-48 sm:w-60"
    />
  </div>
</section>

<script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>
<script>
var app = document.getElementById('header-typewriter');
var typewriter = new Typewriter(app, {
  loop: true,
  delay: 135,
});

typewriter
  .pauseFor(500)
  .typeString('Monitoring.')
  .pauseFor(300)
  .deleteChars(11)
  .typeString('Documentation.')
  .pauseFor(300)
  .deleteChars(14)
  .typeString('Specification.')
  .pauseFor(300)
  .deleteChars(14)
  .typeString('Testing.')
  .pauseFor(300)
  .deleteChars(8)
  .typeString('Debugging.')
  .pauseFor(300)
  .start();
</script>

<script>
const targets = document.querySelectorAll(".home-feature-image-div, .fade-in-section");
for (var i = 0; i < targets.length; i++) {
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("is-visible");
        }
        if(!entry.isIntersecting) entry.target.classList.remove("is-visible");
      });
    });
  observer.observe(targets[i]);
}
</script>
<script>
const path = anime.path('#path');

anime({
  targets: '#bee',
  translateX: path('x'),
  translateY: path('y'),
  rotate: path('angle'),
  loop: true,
  duration: 12500,
  easing: 'linear'
});


const scroll = new HumbleScroll({})
</script>

{{< /rawhtml >}}
