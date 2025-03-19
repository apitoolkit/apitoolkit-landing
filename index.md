---
testimonials:
  - stat: 20x
    desc: faster <span class="underline underline-offset-4 decoration-dotted tooltip tooltip-right" data-tip="mean time to resolution">MTTR</span>
    logo: blockradar-full.svg
    theme: Warning
    color: ffebe0
  - stat: 70%
    desc: reduction in manual troubleshooting
    logo: sameday.svg
    theme: Brand
    color: d3e5f0
  - quote: "We had a major upgrade planned for our iOS/Android app... After adding APItoolkit to our laravel app, we could see every new route and request. It gave me and the dev team complete confidence that our users weren't being affected by our changes. <br/><br/>... became the smoothest and LEAST STRESSFUL rollouts we have ever done. Really an amazing tool and now a permanent part of our workflow. Thank you!!"
    photo: larrison_morrison.jpeg
    name: Lazarus Morrison
    title: Founder of Community Fluency
    logo_raw: <div class="inline-flex items-center text-lg gap-1"><img src="/assets/img/customers/community_fluency.png" alt="Community Fluency" class="logo1 logo2"/> <span class="hidden sm:inline-block">Community<strong class="!text-lg">Fluency</strong></span></div>
  - quote: "The best observability tool we use today at Woodcore, APItoolkit notifies us about any slight change that happens on the system. <br/><br/>Most especially, for the features we utilise today on APItoolkit, would cost us a lot more elsewhere."
    photo: samuel_joseph.jpeg
    name: Samuel Joseph
    title: CEO of Woodcore
    logo: woodcore-logo-full.svg
  - stat: 3x
    desc: faster system recovery
    logo: partna.svg
    theme: Error
    color: e9daff
  - stat: 5x
    desc: faster incident debug times
    logo: coronams-logo.svg
    theme: Warning
    color: ffebe0
  - stat: 9x
    desc: less customer support calls
    logo: platnova.png
    theme: Warning
    color: d3e5f0
  - stat: 500ms
    desc: shaved off improved endpoints
    logo: payfonte.svg
    theme: Brand
    color: e6fae3
  - quote: "I fell for ApitoolKit because it integrated effortlessly with my application and provided valuable API insights. Whenever I needed help, the team was always ready to listen and resolve any issues. That's why we pay for their service."
    photo: david_odohi.jpeg
    name: Odohi David
    title: CTO of Grovepay
    logo: grovepay.svg

features:
  - title: Observability & monitoring
    links:
      - icon: align-left
        id: logs
        title: Logs and Traces
        details: Query all your logs and correlate them with trace breakdowns or the requests which triggered the logs.
        learnmore: /features/api-logs-and-metrics
      - icon: activity
        id: errors
        title: Errors and Performance
        details: Monitor API errors and performance in real time. Detect issues instantly, analyze trends, and optimize response times with detailed insights. Improve reliability with automated tracking, alerting, and in-depth analytics to ensure a seamless user experience.
        learnmore: /features/error-tracking
      - icon: bar-chart
        id: metrics
        title: Metrics and dashboards
        details: Define and track custom metrics tailored to your API needs. Gain actionable insights, monitor key performance indicators, and optimize efficiency with real-time data visualization and alerts. Make data-driven decisions to enhance your API’s performance and reliability.
        learnmore: /features/api-management
  - title: API management
    links:
      - icon: layout
        id: apis
        title: API Catalog and Docs
        details: Organize, manage, and document your APIs effortlessly with a dynamic API catalog. Provide clear, up-to-date documentation, improve discoverability, and streamline onboarding for developers with interactive guides, code samples, and real-time updates.
        learnmore: /features/api-management
      - icon: copy
        id: change
        title: Anomalies
        details: Detect API changes and anomalies in real time. Stay ahead of unexpected behavior with automated monitoring, instant alerts, and detailed insights. Ensure stability, prevent disruptions, and maintain seamless performance with proactive change detection.
        learnmore: /features/api-observability
  - title: Alerts and Monitors
    links:
      - icon: compass
        id: monitors
        title: Monitors and healthchecks
        details: Ensure API reliability with automated monitors and health checks. Continuously track uptime, detect failures early, and receive instant alerts. Keep your services running smoothly with real-time insights and proactive issue resolution.
        learnmore: /docs/monitors
      - icon: radio
        id: alerts
        title: Alerts and notifications
        details: Stay informed with real-time alerts and comprehensive reports. Customize alert channels and receive detailed analytics to monitor your API's performance and reliability effectively.
        learnmore: /docs/alerts
      - icon: calendar
        id: reports
        title: Daily or weekly reports
        details: Receive comprehensive daily or weekly reports summarizing API performance, errors, and key metrics. Get actionable insights delivered to your inbox to stay ahead of potential issues.
        learnmore: /docs/reports

platforms:
  - title: APIs
    id: apis
    icon: rss
    children:
      - title: Catch breaking changes
        details: Spot unexpected changes in API responses or data structures-your services or third-party calls-before they slip into production.
        learnmore: /features/error-tracking
      - title: Monitor request payloads
        details: Create real-time alerts for critical API payloads-like third-party errors or large bank transactions-and get notified instantly.
        learnmore: /features/api-observability
      - title: Create multistep healthchecks
        details: Run multistep checks for critical workflows—create an account, check balance, transfer funds, delete account-on a regular schedule.
        learnmore: /features/api-management
  - title: Backends
    id: backend
    icon: hard-drive
    children:
      - title: Endpoint Performance and Throughput
        details: Spot unexpected changes in API responses or data structures-your services or third-party calls-before they slip into production.
        learnmore: /
      - title: Track Errors and Exceptions
        details: Track all errors and exceptions generated by your application. Prioritize errors based on their frequency.
        learnmore: /
      - title: Background and cron jobs
        details: See and track job runs and get alerted if an important job stops running.
        learnmore: /
      - title: Debug with logs and traces
        details: When theres an issue, debug with all the related logs and traces automatically surfaced for you.
        learnmore: /
  - title: Databases
    id: database
    icon: database
    children:
      - title: Identify Slow Database Queries
        details: Spot unexpected changes in API responses or data structures-your services or third-party calls-before they slip into production.
        learnmore: /
      - title: Query Analytics and Dashboards
        details: Dashboard templates that visualize all the important metrics and datapoints for your database of choice.
        learnmore: /
      - title: Database Error tracking and anomaly detection
        details: Don't let database emergencies sneak up on you. Automatically analyze query results and database logs for errors and anomalies.
        learnmore: /
  # - title: Infra
  # - title: Frontends
  # - title: Mobile
---

```=html
<script src="https://unpkg.com/@rive-app/canvas"></script>
<section class="flex flex-col space-y-48 items-center">
  <section class="space-y-20 mt-8 sm:mt-32">
      <div class="flex flex-col md:flex-row max-w-7xl w-full gap-5 px-3">
        <div class="space-y-10 flex-1">
          <h1 class="text-[2.8rem]  font-normal leading-tight sm:leading-none sm:space-y-3">
            <span class="block">Find and fix production issues<span class="text-textDisabled">,</span></span>
            <span class="text-textDisabled block">before <span id="heading-typewriter">customers notice</span></span>
          </h1>
          <script>
          new Typewriter('#heading-typewriter', {
            strings: ['customers notice', 'your inbox explodes', 'they cause downtime'],
            autoStart: true,
            pauseFor: 14000,
            cursor: "",
            loop: true,
          });
          </script>
          <ul class="text-[1.25rem] space-y-4 leading-tight [&_svg]:!text-strokeBrand-strong">
            <li class="flex gap-2 items-center"><svg class="h-5 w-5 flex-shrink-0">
              <use xlink:href="/assets/deps/sprite.svg#pie-chart"></use>
            </svg> Catch breaking changes and critical errors</li>
            <li class="flex gap-2 items-center"><svg class="h-5 w-5 flex-shrink-0">
              <use xlink:href="/assets/deps/sprite.svg#activity"></use>
            </svg> Analyze logs, metrics, traces and request payloads</li>
            <li class="flex gap-2 items-center"><svg class="h-5 w-5 flex-shrink-0">
              <use xlink:href="/assets/deps/sprite.svg#bar-chart-2"></use>
            </svg> Monitor performance and uptime of both APIs and external APIs</li>
          </ul>
          <div class="flex gap-2 sm:gap-4">
            <a href="https://calendar.app.google/1a4HG5GZYv1sjjZG6" target="_blank" class="btn py-3 px-6 rounded-xl bg-fillBrand-strong text-textInverse-strong shadow ">Book a demo</a>
            <a href="https://app.apitoolkit.io" class="btn py-3 px-6 rounded-xl bg-transparent border border-fillBrand-strong text-fillBrand-strong shadow " >Start 30 day free trial</a>
          </div>
          <div class="flex gap-4 items-center text-textWeak">
            <!-- TrustBox Rating -->
            <a class="flex items-center gap-3" href="https://trustpilot.com/review/apitoolkit.io" target="_blank" rel="noopener noreferrer">
                <img src="/assets/img/trustpilot-stars-4.5.svg" class="w-28" alt="APItoolkit Trustpilot Rating" />
                <img class="w-20 dark:hidden" src="/assets/img/trustpilot-black.svg" alt="Trustpilot Logo" />
                <img class="w-20 hidden dark:inline-block" src="/assets/img/trustpilot-white.svg" alt="Trustpilot Logo" />
            </a>
            <!-- End TrustBox Rating -->
            <span>|</span>
            <span>Built for security & compliance</span>
          </div>
        </div>
        <div class="md:w-[45%] mt-[-3.7rem]">
            <!-- <img class="w-full" src="/assets/img/home/hero-dashscreen.svg"/> -->
            <!-- <img class="w-full" src="/assets/img/home/hero-img1.svg"/> -->
            <canvas id="rive-hero-canvas" xwidth="200" class="w-full aspect-square xobject-contain"></canvas>
        </div>
        <script>
            const canvas = document.getElementById("rive-hero-canvas");
            const parentWidth = canvas.parentElement.clientWidth;
            // Set the canvas width attribute to the parent's width.
            const scale = window.devicePixelRatio;
            canvas.width = parentWidth * scale;
            canvas.height = parentWidth * 0.81 * scale;

            const r = new rive.Rive({
                src: '/assets/img/home/apitoolkit-hero.riv',
                canvas: canvas,
                autoplay: true,
                artboard: "Artboard", // Optional. If not supplied the default is selected
                // stateMachines: "bumpy",
                onLoad: () => {
                  r.resizeToCanvas();
                  // r.resizeDrawingSurfaceToCanvas();
                },
            });
        </script>
      </div>

      <div class="max-w-7xl px-3 w-full text-textWeak">
        <div class="space-y-8">
          <p class="">Trusted by 5000+ developers at proactive engineering companies</p>
          <div class="grid grid-cols-4 sm:grid-cols-8 *:col-span-1  gap-4 md:gap-8  items-center *:brightness-0 *:dark:invert opacity-50">
            {% assign customers = "andela.svg,partna.svg,grovepay.svg,sameday.svg,platnova.png,payfonte.svg,thepeer.svg,blockradar-full.svg" | split: "," %}
            {% for logo in customers %}<img src="/assets/img/customers/{{logo}}" alt="{{logo}}" class="h-5 sm:h-8">{% endfor %}
          </div>
          <div class="flex flex-col sm:flex-row text-textWeak gap-24 py-6">
            <div class="timeline-fade-in flex-1 border-l border-fillBrand-strong px-6 py-2 space-y-4">
              <div class="flex gap-1"><div class="inline-flex space-x-1  w-[6rem]">
                {% for i in (1..5) %}<svg class="icon h-5 inline-block"><use xlink:href="/assets/deps/sprite.svg#star"></use></svg>{% endfor %}
              </div></div>
              <p>"Easy onboarding and they added an integration just for our use case, thanks again! We didn't have insights into our api load before and this helps very much."</p>
              <div class="flex gap-3 items-center">
                <img class="rounded-lg grayscale w-12 h-12 object-cover" src="/assets/img/love/sebastian_zwach.jpeg" />
                <div class="flex-1 space-y-1">
                  <p class="text-textStrong">Sebastian Zwach</p>
                  <p class="text-xs">founder of Neorent GmbH</p>
                </div>
              </div>
              <a class="text-textBrand underline underline-offset-2 block">Neorent case study</a>
            </div>
            <div class="timeline-fade-in flex-1 border-l border-fillBrand-strong px-6 py-2 space-y-4">
              <div class="flex gap-1"><div class="inline-flex space-x-1  w-[6rem]">
                {% for i in (1..5) %}<svg class="icon h-5 inline-block"><use xlink:href="/assets/deps/sprite.svg#star"></use></svg>{% endfor %}
              </div></div>
              <p>"We had a major incident, and our tech support could see via APItookit which third-party integration partner was responsible, and could take action without needing the engineering team's help"</p>
              <div class="flex gap-3 items-center">
                <img class="rounded-lg grayscale w-12 h-12 object-cover" src="/assets/img/love/joshua.jpeg" />
                <div class="flex-1 space-y-1">
                  <p class="text-textStrong">Joshua Chinemezum</p>
                  <p class="text-xs">CEO of Platnova</p>
                </div>
              </div>
              <a class="text-textBrand underline underline-offset-2 block">Platnova case study</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="max-w-7xl px-3  py-24 w-full text-3xl leading-relaxed flex flex-col items-start justify-begin text-textWeak">
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/gsap.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/ScrollTrigger.min.js"></script>
        <script src="https://unpkg.com/split-type"></script>

        <div class="max-w-4xl space-y-12 scroll-highlight">
            <p>APItoolkit offers the best features of Datadog, Sentry, Newrelic, etc., <span class="font-medium text-textStrong">at 1/20 the cost</span>. We train <span class="font-medium text-textStrong">private models</span> on your real-time logs, events, and API request payloads to <span class="font-medium text-textStrong">catch errors</span> and breaking or incremental changes that are impossible to detect on any other platform. Thanks to our unique crytography based algorithms. </p>
            <p>You can <span class="font-medium text-textStrong">store all your data in your own S3-compatible storage</span>, giving you complete ownership and letting you query or ask questions of your data forever at no extra storage cost.</p>
        </div>
        <script>
        gsap.registerPlugin(ScrollTrigger);

        const splitTypes = document.querySelectorAll('.scroll-highlight');
        splitTypes.forEach((char, i) => {
            const text = new SplitType(char, {types: ['chars', 'words']});
            gsap.from(text.chars, {
                scrollTrigger: {
                    trigger: char,
                    start: 'top 80%',
                    end: 'bottom 20%',
                    scrub: 1,
                    markers: false,
                },
                opacity: 0.2,
                stagger: 0.1,
            })
        })
        </script>
    </div>

    <div class="max-w-7xl px-3 w-full text-textWeak space-y-5 group/uc">
      <h2 class="text-4xl leading-tight font-normal text-textStrong">Monitoring and Observability<span class="text-textDisabled">, <br/>built to understand your entire stack</span></h2>
      <p class="hidden text-2xl leading-normal">Just because you don't see an error, doesn't mean it's not happening. That's why we built both active <br/>and passive monitoring--<span class="text-textBrand">to keep you informed of the different systems you maintain.<span></p>

      <div class="flex justify-between py-8">
        <div class="inline-flex justify-center bg-fillWeak border border-strokeWeak rounded-lg
          *:px-4 *:py-3 *:inline-flex *:items-center *:gap-2
          [&_svg]:h-5 [&_svg]:w-5 [&>label]:rounded-lg [&>label]:border-strokeStrong
          ">
         {% for platform in this.frontmatter.platforms %}
         <label class="has-[:checked]:border has-[:checked]:border-strokeBrand-strong has-[:checked]:bg-bgOverlay has-[:checked]:shadow has-[:checked]:!text-textBrand"><svg class="peer-checked:text-iconBrand"><use xlink:href="/assets/deps/sprite.svg#{{platform.icon}}"></use></svg> {{platform.title}}<input {% if forloop.first %}checked{% endif %} type="radio" class="hidden uc uc-{{platform.id}}" name="usecase" value="{{platform.id}}"/></label>
         {% endfor %}
        </div>

        <div class="inline-flex gap-4 *:inline-flex *:items-center *:shadow *:border *:border-strokeStrong *:p-4 *:rounded-lg *:cursor-pointer select-none">
          <a class="group-has-[.uc-apis:checked]/uc:!border-strokeDisabled group-has-[.uc-apis:checked]/uc:shadow-none" onclick="cycleRadioButtons('usecase', -1)"><svg class="h-3 w-3"><use xlink:href="/assets/deps/sprite.svg#chevron-left"></use></svg></a>
          <a class="group-has-[.uc-database:checked]/uc:!border-strokeDisabled group-has-[.uc-database:checked]/uc:shadow-none" onclick="cycleRadioButtons('usecase', +1)"><svg class="h-3 w-3"><use xlink:href="/assets/deps/sprite.svg#chevron-right"></use></svg></a>
        </div>
      </div>

      {% for platform in this.frontmatter.platforms %}
      <!-- {{platform.title}} -->
      <div class="hidden group-has-[.uc-{{platform.id}}:checked]/uc:flex gap-5 flex-col md:flex-row">
        <div class="sm:w-1/3 divide-y divide-y-strokeDisabled [&_p]:leading-normal">
         {% for c in platform.children %}
          <label class="flex px-2 py-6 gap-3 group cursor-pointer hover:bg-fillBrand-weak rounded-lg">
            <input type="radio" name="{{platform.id}}" {% if forloop.first %}checked{% endif %}  class="hidden" value="1"/>
            <svg class="h-6 w-6 bg-fillBrand-weak !text-iconBrand p-0.5 mt-0.5 rounded-sm flex-shrink-0">
              <use class="block group-has-[:checked]:hidden" xlink:href="/assets/deps/sprite.svg#plus-square"></use>
              <use class="hidden group-has-[:checked]:block" xlink:href="/assets/deps/sprite.svg#minus-square"></use>
            </svg>
            <div class="flex-1 space-y-2">
                <h5 class="text-xl font-semibold text-textStrong">{{c.title}}</h5>
                <p class="text-lg hidden group-has-[:checked]:block">{{c.details}}</p>
                <a class="text-lg hidden group-has-[:checked]:block text-textBrand underline block" href="{{c.learnmore}}">Learn more</a>
            </div>
          </label>
          {% endfor %}
        </div>

        <div class="flex-1">
            <img src="/assets/img/home/dashboard-012025.svg" class="timeline-fade-in w-full shadow rounded-lg border border-strokeBrand-strong"/>
        </div>
      </div>
      <!-- end {{platform.title}} -->
      {% endfor %}
    </div>

    <!-- Powered by AI -->
    <div class="max-w-7xl px-3 w-full text-textWeak space-y-5">
      <div class="flex justify-between">
        <div class="flex-1 space-y-5">
          <h2 class="text-4xl leading-tight font-normal text-textStrong">Put AI to work. <span class="text-textDisabled">seriously</span></h2>
          <p class="hidden max-w-prose text-2xl leading-normal">Generate queries, create visualizations, fix bugs, monitor logs, payloads, and kickstart whole analyses - all from a prompt.</p>
          <a href="/docs/features/" class="text-lg text-textBrand underline underline-offset-2 block ">Learn more</a>
        </div>
        <div class="flex items-end">
          <div class="inline-flex gap-4  *:p-4  *:inline-flex *:items-center">
            <a class="border border-strokeDisabled p-4 rounded-lg"><svg class="h-3 w-3"><use xlink:href="/assets/deps/sprite.svg#chevron-left"></use></svg></a>
            <a class="border border-strokeStrong p-4 rounded-lg shadow"><svg class="h-3 w-3"><use xlink:href="/assets/deps/sprite.svg#chevron-right"></use></svg></a>
          </div>
        </div>
      </div>
      <div class="flex flex-col md:flex-row gap-12 pt-5 [&>div]:space-y-5 [&_h5]:text-textStrong [&_img]:border [&_img]:h-48 [&_img]:w-auto [&_img]:rounded-lg  [&_img]:border-strokeBrand-strong">
        <div class="">
          <img src="/assets/img/home/error-analytics.svg" class="bg-fillBrand-weak"/>
          <h5 class="text-xl font-normal">Weekly reports that contain exactly what needs attention</h5>
          <p>We tell you want errors popped up, which services or endpoints got slower, which weird log appeared, etc.</p>
        </div>
        <div class="">
          <img src="/assets/img/home/specs.svg" class="bg-fillBrand-weak"/>
          <h5 class="text-xl font-semibold">Query using natural language</h5>
          <p>Ask questions about your data, your systems or logs without learning some strange query langauge.</p>
        </div>
        <div class="">
          <img src="/assets/img/home/selfhost.svg" class="bg-fillBrand-weak"/>
          <h5 class="text-xl font-semibold">Breaking and incremental change detection in APIs (yours or thirdparties)</h5>
          <p>No need to stare at logs all day. See the errors, anomalies, etc which appeared in the last week.</p>
        </div>
      </div>
    </div>

    <!-- FEATURES -->
    <div class="max-w-7xl px-3 w-full text-textWeak space-y-5 group/ft">
      <h2 class="text-[2rem] leading-tight font-normal text-textStrong">Built with features that matter to engineers like us</h2>
      <p class="text-xl leading-normal">Collect, store, and analyze every single log or event <br/>without limits on a platform that gives you complete control.</p>
      <div class="flex gap-16 pt-5">
        <div class="hidden sm:block text-textStrong space-y-8 [&_input]:hidden [&_label]:inline-flex [&_label]:px-2  [&_label]:items-center [&_label]:gap-2
            [&_label]:border-l-2 [&_label]:border-transparent [&_svg]:h-4 [&_svg]:w-4
            ">
          {% for feature in this.frontmatter.features %}
          {% assign ischecked = forloop.first %}
          <div class="flex flex-col *:flex *:gap-2 [&>label]:text-lg [&>label]:p-1">
            <h4 class="text-sm font-semibold pb-3 pl-2.5">{{feature.title}}</h4>
            {% for f in feature.links %}
            <label class="cursor-pointer has-[:checked]:!border-fillBrand-strong has-[:checked]:bg-fillBrand-weak"><svg><use xlink:href="/assets/deps/sprite.svg#{{f.icon}}"></use></svg>{{f.title}}<input {% if ischecked and forloop.first %}checked{% endif %}  type="radio" class="hidden ft ft-{{f.id}}" name="features"/></label>
            {% endfor %}
          </div>
          {% endfor %}

          <div class="flex flex-col *:underline *:underline-offset-2 space-y-1 text-textBrand pl-2.5">
            <a href="https://app.apitoolkit.io/p/00000000-0000-0000-0000-000000000000/">Launch playground</a>
            <a href="https://calendar.app.google/1a4HG5GZYv1sjjZG6" target="_blank">Book a demo</a>
            <a href="https://app.apitoolkit.io">Start free 30 day trial</a>
          </div>

        </div>
        <div class="flex-1 space-y-8">
          <div class="flex-col-reverse flex sm:flex-row sm:items-end gap-5">
            {% for feature in this.frontmatter.features %}
            {% for f in feature.links %}
            <!-- {{feature.title}} -->
            <div class="hidden group-has-[.ft-{{f.id}}:checked]/ft:block space-y-3 flex-1">
              <h5 class="text-xl font-semibold text-textStrong">{{f.title}}</h5>
              <p class="max-w-xl leading-normal">{{f.details}}</p>
              <a href="{{f.learnmore}}" class="block underline underline-offset-2 text-textBrand">Learn more</a>
            </div>
            <!-- end {{feature.title}} -->
            {% endfor %}
            {% endfor %}
            <div class="inline-flex gap-4 *:inline-flex *:items-center *:shadow *:border *:border-strokeStrong *:p-4 *:rounded-lg *:cursor-pointer select-none">
              <a class="group-has-[.ft-logs:checked]/ft:!border-strokeDisabled group-has-[.ft-logs:checked]/ft:shadow-none" onclick="cycleRadioButtons('features', -1)"><svg class="h-3 w-3"><use xlink:href="/assets/deps/sprite.svg#chevron-left"></use></svg></a>
              <a class="group-has-[.ft-reports:checked]/ft:!border-strokeDisabled group-has-[.ft-reports:checked]/ft:shadow-none" onclick="cycleRadioButtons('features', +1)"><svg class="h-3 w-3"><use xlink:href="/assets/deps/sprite.svg#chevron-right"></use></svg></a>
            </div>
          </div>
          <div>
            <img src="/assets/img/home/explore-012025.svg" class="timeline-fade-in w-full shadow rounded-lg border border-strokeBrand-strong"/>
          </div>
        </div>
      </div>
    </div>

    <!-- FLEXIBLE DEPLOYMENTS-->
    <div class="max-w-7xl px-3 w-full text-textWeak space-y-5">
      <h2 class="text-4xl leading-tight font-normal text-textStrong">Flexible deployment options <span class="text-textDisabled">for every company</span></h2>
      <p class="text-2xl leading-normal">Regardless of your company's size or compliance requirements, APItoolkit operates <br/>within your business and regulatory constraints.</p>
      <div>
        <a href="https://calendar.app.google/1a4HG5GZYv1sjjZG6" target="_blank" class="btn py-3 px-6 rounded-xl bg-fillBrand-strong text-textInverse-strong shadow ">Book a demo</a>
        <a href="https://app.apitoolkit.io" class="btn py-3 px-6 rounded-xl bg-transparent border border-fillBrand-strong text-fillBrand-strong shadow " >Start 30 day free trial</a>
      </div>
      <div class="text-xl flex flex-col md:flex-row gap-10 pt-5 *:shadow *:flex-1 *:p-6 *:space-y-5 *:rounded-xl *:border [&_svg]:w-5 [&_svg]:h-5 [&_svg]:!text-iconBrand">
        <div class="border-strokeBrand-weak ">
          <div class="inline-block p-3 bg-fillBrand-weak rounded-full"><svg><use xlink:href="/assets/deps/sprite.svg#cloud"></use></svg></div>
          <div class="flex flex-col">
            <strong class="block font-normal text-sm">APITOOLKIT CLOUD</strong>
            <h5 class="font-semibold text-2xl text-textStrong">Bring nothing</h5>
          </div>
          <ul class="list-disc space-y-2 list-inside">
            <li>Fully managed cloud service</li>
            <li><strong>Predictable Usage-based</strong> pricing</li>
            <li>Intelligent incident alerts</li>
            <li>Query your data in english</li>
          </ul>
          <!-- <p>Fully managed cloud service with <strong>usage-based pricing</strong> and automatic optimization.</p> -->
          <!-- <p>Start for free, then scale seamlessly with <strong>predictable costs</strong> as your needs grow.</p> -->
          <a href="https://app.apitoolkit.io" class="block underline underline-offset-2 text-textBrand">Start 30 day free trial</a>
        </div>

        <div class="bg-fillBrand-weak border-strokeBrand-weak shadow-fillBrand-weak">
          <div class="inline-block p-3 bg-fillBrand-weak rounded-full"><svg><use xlink:href="/assets/deps/sprite.svg#database"></use></svg></div>
          <div class="flex flex-col">
            <strong class="block font-normal text-sm">APITOOLKIT CLOUD</strong>
            <h5 class="font-semibold text-2xl text-textStrong">Bring your own s3 storage</h5>
          </div>
          <ul class="list-disc space-y-2 list-inside text-lg">
            <li>Own and control all your data</li>
            <li>Save <strong>all your data</strong> to any S3-compatible bucket</li>
            <li><strong>Unlimited data retention</strong> period</li>
            <li>Query years of data via APItoolkit</li>
            <li><strong>No extra cost</strong> for data retention</li>
          </ul>
          <!-- <p>Fully managed cloud service but <strong>all your data</strong> is stored in your own s3 compatible storage. </p> -->
          <!-- <p>Keep your data for as long as you want, and freely <strong>query and visualize data from months or years ago</strong>. At no extra cost.</p> -->
          <a href="https://calendar.app.google/1a4HG5GZYv1sjjZG6" target="_blank" class="block underline underline-offset-2 text-textBrand">Book a demo</a>
        </div>

        <div class="bg-fillWarning-weak border-strokeWarning-weak shadow-fillWarning-weak">
          <div class="inline-block p-3 bg-fillBrand-weak rounded-full"><svg><use xlink:href="/assets/deps/sprite.svg#server"></use></svg></div>
          <div class="flex flex-col">
            <strong class="block font-normal text-sm">ON PREM</strong>
            <h5 class="font-semibold text-2xl text-textStrong">Bring your own servers</h5>
          </div>
          <ul class="list-disc space-y-2 list-inside">
            <li>Deploy to your own servers</li>
            <li>Managed by the APItoolkit team</li>
            <li>Ideal for <strong>regulatory compliance</strong></li>
            <li>Predictable custom annual pricing</li>
          </ul>
          <!-- <p>Deploy in your own servers while APItoolkit handles operations.</p> -->
          <!-- <p>Perfect for organizations seeking <strong>complete data control</strong> with <strong>predictable annual pricing</strong>.</p> -->
          <a href="https://calendar.app.google/1a4HG5GZYv1sjjZG6" target="_blank" class="block underline underline-offset-2 text-textBrand">Book a demo</a>
        </div>

      </div>
    </div>

    <!-- INTEGRATIONS-->
    <div class="text-textWeak space-y-5 w-full flex flex-col items-center justify-center">
      <div class="max-w-7xl px-3 w-full space-y-5">
        <h2 class="text-4xl leading-tight font-normal text-textStrong">780+ Integrations with your favorite tech stacks, <br/><span class="text-textDisabled">powered by OpenTelemetry</span></h2>
        <a class="block text-textBrand underline underline-offset-2">View all integrations.</a>
      </div>
      <div class="space-y-5 pt-5 mask-edges">
        <div class="flex w-full overflow-x-hidden gap-5  max-w-[100vw]
          [&_img]:w-full
          [&>div>*]:inline-block [&>div>*]:w-24 [&>div>*]:p-3 [&>div>*]:rounded-xl
          [&>div>*]:border [&>div>*]:border-strokeWeak">
          {% assign icons = "postgresql.png,cloudflare.png,mongodb.png,azure-1.png,mysql.png,nginx.png,redis.png,elasticsearch.png,google-cloud.png,apache-kafka.png,kubernetes.png,prometheus-app.png,haproxy-icon.svg,docker.png" | split: "," %}
          <div class="animate-[scroll-x_60s_linear_infinite] whitespace-nowrap flex w-[max-content] shrink-0 gap-5">
            {% for ic in icons %}<div><img src="/assets/img/opentelemetry-contrib-logos/{{ic}}"/></div>{% endfor %}
          </div>
          <div class="animate-[scroll-x_60s_linear_infinite] whitespace-nowrap flex w-[max-content] shrink-0 gap-5" aria-hidden="true" >
            {% for ic in icons %}<div><img src="/assets/img/opentelemetry-contrib-logos/{{ic}}"/></div>{% endfor %}
          </div>
        </div>
        <div class="flex w-full overflow-x-hidden gap-5  max-w-[100vw]
          [&_img]:w-full
          [&>div>*]:inline-block [&>div>*]:w-24 [&>div>*]:p-3 [&>div>*]:rounded-xl
          [&>div>*]:border [&>div>*]:border-strokeWeak">
          {% assign icons = "statsd-receiver.png,solacereceiver.jpg,zipkin-logo.png,snowflake.png,skywalking.jpg,riak-logo.png,huawei-icon.svg,apache_zookeeper-icon.svg,rabbitmq-icon.svg,podmanio-icon.svg,apache_couchdb-icon.svg,influxdata-icon.svg,jaegertracingio-icon.svg,oracle-icon.svg,memcached-icon.svg,signalfx-icon.svg" | split: "," %}
          <div class="animate-[scroll-x_60s_linear_infinite] animation-reverse  whitespace-nowrap flex w-[max-content] shrink-0 gap-5">
            {% for ic in icons %}<div><img src="/assets/img/opentelemetry-contrib-logos/{{ic}}"/></div>{% endfor %}
          </div>
          <div class="animate-[scroll-x_60s_linear_infinite] animation-reverse whitespace-nowrap flex w-[max-content] shrink-0 gap-5" aria-hidden="true" >
            {% for ic in icons %}<div><img src="/assets/img/opentelemetry-contrib-logos/{{ic}}"/></div>{% endfor %}
          </div>
        </div>
        <div class=" flex w-full overflow-x-hidden gap-5  max-w-[100vw]
          [&_img]:w-full
          [&>div>*]:inline-block [&>div>*]:w-24 [&>div>*]:p-3 [&>div>*]:rounded-xl
          [&>div>*]:border [&>div>*]:border-strokeWeak">
          {% assign icons = "splunk-icon.svg,alibabacloud-icon.svg,apache_cassandra-icon.svg,logicmonitor-icon.svg,sematext-icon.svg,sentryio-icon.svg,tencent-logo.png,pulsar-logo.png,clickhouse-logo.png,coralognix.png,statsd-receiver.png,solacereceiver.jpg,zipkin-logo.png" | split: "," %}
          <div class="animate-[scroll-x_60s_linear_infinite] whitespace-nowrap flex w-[max-content] shrink-0 gap-5">
            {% for ic in icons %}<div><img src="/assets/img/opentelemetry-contrib-logos/{{ic}}"/></div>{% endfor %}
          </div>
          <div class="animate-[scroll-x_60s_linear_infinite] whitespace-nowrap flex w-[max-content] shrink-0 gap-5" aria-hidden="true" >
            {% for ic in icons %}<div><img src="/assets/img/opentelemetry-contrib-logos/{{ic}}"/></div>{% endfor %}
          </div>
        </div>
      </div>

    </div>

    <!-- REAL RESULTS FROM CUSTOMERS -->
    <div class="max-w-7xl px-3 w-full text-textStrong space-y-5">
      <h2 class="text-4xl leading-tight font-normal text-textStrong">Real results for <span class="text-textDisabled">real companies<span></h2>
      <a class="block text-textBrand underline underline-offset-2">View all case studies.</a>
      <div class="relative hidden sm:flex items-end justify-end !-mt-5b">
        <svg class="absolute -mb-3" width="253" height="55" viewBox="0 0 253 55" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M79.8498 8.25355H77.9905C77.9374 7.94863 77.8397 7.6785 77.6971 7.44318C77.5546 7.20455 77.3773 7.00237 77.1652 6.83665C76.9531 6.67093 76.7111 6.54664 76.4393 6.46378C76.1709 6.3776 75.8808 6.33452 75.5693 6.33452C75.0158 6.33452 74.5253 6.47372 74.0977 6.75213C73.6701 7.02722 73.3354 7.43158 73.0934 7.9652C72.8515 8.4955 72.7305 9.14347 72.7305 9.90909C72.7305 10.688 72.8515 11.3442 73.0934 11.8778C73.3387 12.4081 73.6735 12.8092 74.0977 13.081C74.5253 13.3494 75.0141 13.4837 75.5643 13.4837C75.8692 13.4837 76.1543 13.4439 76.4194 13.3643C76.6879 13.2815 76.9282 13.1605 77.1403 13.0014C77.3558 12.8423 77.5364 12.6468 77.6822 12.4148C77.8314 12.1828 77.9341 11.9176 77.9905 11.6193L79.8498 11.6293C79.7802 12.1132 79.6294 12.5672 79.3974 12.9915C79.1687 13.4157 78.8688 13.7902 78.4976 14.1151C78.1263 14.4366 77.6922 14.6884 77.195 14.8707C76.6978 15.0497 76.146 15.1392 75.5395 15.1392C74.6446 15.1392 73.8458 14.9321 73.1432 14.5178C72.4405 14.1035 71.887 13.5052 71.4826 12.723C71.0783 11.9408 70.8761 11.0028 70.8761 9.90909C70.8761 8.81203 71.0799 7.87405 71.4876 7.09517C71.8953 6.31297 72.4504 5.71473 73.1531 5.30043C73.8557 4.88613 74.6512 4.67898 75.5395 4.67898C76.1062 4.67898 76.6332 4.75852 77.1204 4.91761C77.6076 5.0767 78.0418 5.31037 78.423 5.61861C78.8041 5.92353 79.1174 6.29806 79.3626 6.74219C79.6112 7.183 79.7736 7.68679 79.8498 8.25355ZM83.2591 4.81818V15H81.4594V4.81818H83.2591ZM85.1098 15V7.36364H86.9095V15H85.1098ZM86.0146 6.27983C85.7296 6.27983 85.4843 6.18537 85.2788 5.99645C85.0733 5.80421 84.9706 5.57386 84.9706 5.3054C84.9706 5.03362 85.0733 4.80327 85.2788 4.61435C85.4843 4.42211 85.7296 4.32599 86.0146 4.32599C86.303 4.32599 86.5482 4.42211 86.7504 4.61435C86.9559 4.80327 87.0586 5.03362 87.0586 5.3054C87.0586 5.57386 86.9559 5.80421 86.7504 5.99645C86.5482 6.18537 86.303 6.27983 86.0146 6.27983ZM92.0911 15.1491C91.3288 15.1491 90.6742 14.9818 90.1274 14.647C89.5838 14.3123 89.1645 13.8499 88.8695 13.2599C88.5779 12.6667 88.432 11.9839 88.432 11.2116C88.432 10.4361 88.5812 9.75166 88.8795 9.15838C89.1778 8.56179 89.5987 8.09777 90.1423 7.76633C90.6891 7.43158 91.3354 7.2642 92.0812 7.2642C92.701 7.2642 93.2495 7.37855 93.7268 7.60724C94.2074 7.83262 94.5902 8.15246 94.8752 8.56676C95.1603 8.97775 95.3227 9.45833 95.3624 10.0085H93.6423C93.5727 9.64062 93.4069 9.33404 93.1451 9.08878C92.8866 8.8402 92.5402 8.71591 92.106 8.71591C91.7381 8.71591 91.415 8.81534 91.1366 9.0142C90.8582 9.20975 90.6411 9.49148 90.4853 9.85938C90.3328 10.2273 90.2566 10.6681 90.2566 11.1818C90.2566 11.7022 90.3328 12.1496 90.4853 12.5241C90.6378 12.8954 90.8515 13.1821 91.1266 13.3842C91.4051 13.5831 91.7315 13.6825 92.106 13.6825C92.3712 13.6825 92.6082 13.6328 92.817 13.5334C93.0291 13.4306 93.2064 13.2831 93.3489 13.0909C93.4915 12.8987 93.5892 12.665 93.6423 12.3899H95.3624C95.3194 12.9302 95.1603 13.4091 94.8852 13.8267C94.6101 14.241 94.2355 14.5658 93.7616 14.8011C93.2876 15.0331 92.7308 15.1491 92.0911 15.1491ZM98.4809 12.6037L98.4759 10.4311H98.7642L101.509 7.36364H103.612L100.236 11.1222H99.863L98.4809 12.6037ZM96.8402 15V4.81818H98.64V15H96.8402ZM101.633 15L99.1471 11.5249L100.36 10.2571L103.786 15H101.633ZM112.097 7.36364V8.75568H107.707V7.36364H112.097ZM108.791 5.53409H110.59V12.7031C110.59 12.9451 110.627 13.1307 110.7 13.2599C110.776 13.3859 110.875 13.4721 110.998 13.5185C111.121 13.5649 111.257 13.5881 111.406 13.5881C111.518 13.5881 111.621 13.5798 111.714 13.5632C111.81 13.5466 111.883 13.5317 111.933 13.5185L112.236 14.9254C112.14 14.9586 112.002 14.995 111.823 15.0348C111.648 15.0746 111.432 15.0978 111.177 15.1044C110.726 15.1177 110.32 15.0497 109.959 14.9006C109.598 14.7481 109.311 14.5128 109.099 14.1946C108.89 13.8764 108.787 13.4787 108.791 13.0014V5.53409ZM116.851 15.1491C116.105 15.1491 115.459 14.9851 114.912 14.657C114.365 14.3288 113.941 13.8698 113.639 13.2798C113.341 12.6899 113.192 12.0005 113.192 11.2116C113.192 10.4228 113.341 9.73177 113.639 9.13849C113.941 8.54522 114.365 8.08452 114.912 7.75639C115.459 7.42827 116.105 7.2642 116.851 7.2642C117.597 7.2642 118.243 7.42827 118.79 7.75639C119.337 8.08452 119.759 8.54522 120.058 9.13849C120.359 9.73177 120.51 10.4228 120.51 11.2116C120.51 12.0005 120.359 12.6899 120.058 13.2798C119.759 13.8698 119.337 14.3288 118.79 14.657C118.243 14.9851 117.597 15.1491 116.851 15.1491ZM116.861 13.7074C117.265 13.7074 117.603 13.5964 117.875 13.3743C118.147 13.1489 118.349 12.8473 118.482 12.4695C118.617 12.0916 118.685 11.6707 118.685 11.2067C118.685 10.7393 118.617 10.3168 118.482 9.93892C118.349 9.55777 118.147 9.2545 117.875 9.02912C117.603 8.80374 117.265 8.69105 116.861 8.69105C116.447 8.69105 116.102 8.80374 115.827 9.02912C115.555 9.2545 115.351 9.55777 115.215 9.93892C115.083 10.3168 115.016 10.7393 115.016 11.2067C115.016 11.6707 115.083 12.0916 115.215 12.4695C115.351 12.8473 115.555 13.1489 115.827 13.3743C116.102 13.5964 116.447 13.7074 116.861 13.7074ZM125.51 15V7.36364H127.255V8.63636H127.335C127.474 8.19555 127.713 7.85582 128.051 7.61719C128.392 7.37524 128.781 7.25426 129.219 7.25426C129.318 7.25426 129.429 7.25923 129.552 7.26918C129.678 7.2758 129.782 7.2874 129.865 7.30398V8.95952C129.789 8.933 129.668 8.9098 129.502 8.88991C129.34 8.86671 129.183 8.85511 129.03 8.85511C128.702 8.85511 128.407 8.92637 128.145 9.06889C127.887 9.2081 127.683 9.40199 127.534 9.65057C127.384 9.89915 127.31 10.1858 127.31 10.5107V15H125.51ZM134.127 15.1491C133.362 15.1491 132.7 14.9901 132.144 14.6719C131.59 14.3504 131.164 13.8963 130.866 13.3097C130.568 12.7197 130.418 12.0253 130.418 11.2266C130.418 10.4411 130.568 9.75166 130.866 9.15838C131.167 8.56179 131.588 8.09777 132.129 7.76633C132.669 7.43158 133.304 7.2642 134.033 7.2642C134.503 7.2642 134.947 7.34044 135.365 7.4929C135.786 7.64205 136.157 7.87405 136.479 8.18892C136.804 8.50379 137.059 8.90483 137.244 9.39205C137.43 9.87595 137.523 10.4527 137.523 11.1222V11.674H131.264V10.4609H135.798C135.794 10.1162 135.72 9.80966 135.574 9.54119C135.428 9.26941 135.224 9.05563 134.962 8.89986C134.704 8.74408 134.402 8.66619 134.058 8.66619C133.69 8.66619 133.367 8.75568 133.088 8.93466C132.81 9.11032 132.593 9.34233 132.437 9.63068C132.284 9.91572 132.206 10.2289 132.203 10.5703V11.6293C132.203 12.0734 132.284 12.4545 132.447 12.7727C132.609 13.0876 132.836 13.3295 133.128 13.4986C133.42 13.6643 133.761 13.7472 134.152 13.7472C134.414 13.7472 134.651 13.7107 134.863 13.6378C135.075 13.5616 135.259 13.4505 135.415 13.3047C135.571 13.1589 135.688 12.9782 135.768 12.7628L137.448 12.9517C137.342 13.3958 137.14 13.7836 136.842 14.1151C136.547 14.4432 136.169 14.6984 135.708 14.8807C135.247 15.0597 134.72 15.1491 134.127 15.1491ZM141.243 15.1541C140.759 15.1541 140.323 15.0679 139.935 14.8956C139.551 14.7199 139.246 14.4614 139.02 14.12C138.798 13.7786 138.687 13.3577 138.687 12.8572C138.687 12.4264 138.767 12.0701 138.926 11.7884C139.085 11.5066 139.302 11.2812 139.577 11.1122C139.852 10.9432 140.162 10.8156 140.507 10.7294C140.855 10.6399 141.215 10.5753 141.586 10.5355C142.033 10.4891 142.396 10.4477 142.675 10.4112C142.953 10.3714 143.155 10.3118 143.281 10.2322C143.41 10.1494 143.475 10.0218 143.475 9.84943V9.8196C143.475 9.44508 143.364 9.15507 143.142 8.94957C142.92 8.74408 142.6 8.64134 142.182 8.64134C141.742 8.64134 141.392 8.73745 141.133 8.92969C140.878 9.12192 140.706 9.34896 140.616 9.6108L138.936 9.37216C139.069 8.90814 139.287 8.52036 139.592 8.20881C139.897 7.89394 140.27 7.65862 140.711 7.50284C141.152 7.34375 141.639 7.2642 142.172 7.2642C142.54 7.2642 142.907 7.30729 143.271 7.39347C143.636 7.47964 143.969 7.62216 144.27 7.82102C144.572 8.01657 144.814 8.28338 144.996 8.62145C145.182 8.95952 145.275 9.3821 145.275 9.8892V15H143.545V13.951H143.485C143.376 14.1631 143.221 14.362 143.023 14.5476C142.827 14.7299 142.58 14.8774 142.282 14.9901C141.987 15.0994 141.64 15.1541 141.243 15.1541ZM141.71 13.8317C142.071 13.8317 142.385 13.7604 142.65 13.6179C142.915 13.4721 143.119 13.2798 143.261 13.0412C143.407 12.8026 143.48 12.5424 143.48 12.2607V11.3608C143.424 11.4072 143.328 11.4503 143.192 11.4901C143.059 11.5298 142.91 11.5646 142.744 11.5945C142.578 11.6243 142.414 11.6508 142.252 11.674C142.09 11.6972 141.949 11.7171 141.829 11.7337C141.561 11.7701 141.321 11.8298 141.109 11.9126C140.896 11.9955 140.729 12.1115 140.606 12.2607C140.484 12.4065 140.422 12.5954 140.422 12.8274C140.422 13.1589 140.543 13.4091 140.785 13.5781C141.027 13.7472 141.336 13.8317 141.71 13.8317ZM149.918 15.1342C149.318 15.1342 148.781 14.9801 148.307 14.6719C147.833 14.3636 147.459 13.9162 147.184 13.3295C146.909 12.7429 146.771 12.0303 146.771 11.1918C146.771 10.3433 146.91 9.62737 147.189 9.04403C147.471 8.45739 147.85 8.01491 148.327 7.71662C148.805 7.41501 149.337 7.2642 149.923 7.2642C150.371 7.2642 150.739 7.34044 151.027 7.4929C151.315 7.64205 151.544 7.82268 151.713 8.0348C151.882 8.24361 152.013 8.44081 152.106 8.62642H152.18V4.81818H153.985V15H152.215V13.7969H152.106C152.013 13.9825 151.879 14.1797 151.703 14.3885C151.527 14.594 151.295 14.7696 151.007 14.9155C150.719 15.0613 150.356 15.1342 149.918 15.1342ZM150.42 13.6577C150.801 13.6577 151.126 13.5549 151.395 13.3494C151.663 13.1406 151.867 12.8506 152.006 12.4794C152.145 12.1082 152.215 11.6757 152.215 11.1818C152.215 10.688 152.145 10.2588 152.006 9.89418C151.87 9.52959 151.668 9.24621 151.4 9.04403C151.135 8.84186 150.808 8.74077 150.42 8.74077C150.019 8.74077 149.685 8.84517 149.416 9.05398C149.148 9.26278 148.945 9.55114 148.81 9.91903C148.674 10.2869 148.606 10.7079 148.606 11.1818C148.606 11.6591 148.674 12.085 148.81 12.4595C148.949 12.8307 149.153 13.1241 149.421 13.3395C149.693 13.5516 150.026 13.6577 150.42 13.6577ZM162.706 15.1491C161.944 15.1491 161.289 14.9818 160.743 14.647C160.199 14.3123 159.78 13.8499 159.485 13.2599C159.193 12.6667 159.047 11.9839 159.047 11.2116C159.047 10.4361 159.196 9.75166 159.495 9.15838C159.793 8.56179 160.214 8.09777 160.758 7.76633C161.304 7.43158 161.951 7.2642 162.696 7.2642C163.316 7.2642 163.865 7.37855 164.342 7.60724C164.823 7.83262 165.205 8.15246 165.49 8.56676C165.775 8.97775 165.938 9.45833 165.978 10.0085H164.258C164.188 9.64062 164.022 9.33404 163.76 9.08878C163.502 8.8402 163.155 8.71591 162.721 8.71591C162.353 8.71591 162.03 8.81534 161.752 9.0142C161.473 9.20975 161.256 9.49148 161.101 9.85938C160.948 10.2273 160.872 10.6681 160.872 11.1818C160.872 11.7022 160.948 12.1496 161.101 12.5241C161.253 12.8954 161.467 13.1821 161.742 13.3842C162.02 13.5831 162.347 13.6825 162.721 13.6825C162.986 13.6825 163.223 13.6328 163.432 13.5334C163.644 13.4306 163.822 13.2831 163.964 13.0909C164.107 12.8987 164.204 12.665 164.258 12.3899H165.978C165.935 12.9302 165.775 13.4091 165.5 13.8267C165.225 14.241 164.851 14.5658 164.377 14.8011C163.903 15.0331 163.346 15.1491 162.706 15.1491ZM169.653 15.1541C169.169 15.1541 168.733 15.0679 168.345 14.8956C167.961 14.7199 167.656 14.4614 167.431 14.12C167.209 13.7786 167.098 13.3577 167.098 12.8572C167.098 12.4264 167.177 12.0701 167.336 11.7884C167.495 11.5066 167.712 11.2812 167.987 11.1122C168.263 10.9432 168.572 10.8156 168.917 10.7294C169.265 10.6399 169.625 10.5753 169.996 10.5355C170.443 10.4891 170.806 10.4477 171.085 10.4112C171.363 10.3714 171.565 10.3118 171.691 10.2322C171.821 10.1494 171.885 10.0218 171.885 9.84943V9.8196C171.885 9.44508 171.774 9.15507 171.552 8.94957C171.33 8.74408 171.01 8.64134 170.593 8.64134C170.152 8.64134 169.802 8.73745 169.544 8.92969C169.288 9.12192 169.116 9.34896 169.027 9.6108L167.346 9.37216C167.479 8.90814 167.697 8.52036 168.002 8.20881C168.307 7.89394 168.68 7.65862 169.121 7.50284C169.562 7.34375 170.049 7.2642 170.583 7.2642C170.951 7.2642 171.317 7.30729 171.681 7.39347C172.046 7.47964 172.379 7.62216 172.681 7.82102C172.982 8.01657 173.224 8.28338 173.406 8.62145C173.592 8.95952 173.685 9.3821 173.685 9.8892V15H171.955V13.951H171.895C171.786 14.1631 171.632 14.362 171.433 14.5476C171.237 14.7299 170.99 14.8774 170.692 14.9901C170.397 15.0994 170.051 15.1541 169.653 15.1541ZM170.12 13.8317C170.482 13.8317 170.795 13.7604 171.06 13.6179C171.325 13.4721 171.529 13.2798 171.671 13.0412C171.817 12.8026 171.89 12.5424 171.89 12.2607V11.3608C171.834 11.4072 171.738 11.4503 171.602 11.4901C171.469 11.5298 171.32 11.5646 171.154 11.5945C170.989 11.6243 170.825 11.6508 170.662 11.674C170.5 11.6972 170.359 11.7171 170.24 11.7337C169.971 11.7701 169.731 11.8298 169.519 11.9126C169.307 11.9955 169.139 12.1115 169.017 12.2607C168.894 12.4065 168.833 12.5954 168.833 12.8274C168.833 13.1589 168.954 13.4091 169.196 13.5781C169.437 13.7472 169.746 13.8317 170.12 13.8317ZM181.53 9.3821L179.889 9.56108C179.843 9.39536 179.762 9.23958 179.646 9.09375C179.533 8.94792 179.381 8.83026 179.188 8.74077C178.996 8.65128 178.761 8.60653 178.482 8.60653C178.108 8.60653 177.793 8.68774 177.538 8.85014C177.286 9.01255 177.162 9.22301 177.165 9.48153C177.162 9.7036 177.243 9.88423 177.409 10.0234C177.578 10.1626 177.856 10.277 178.244 10.3665L179.546 10.6449C180.269 10.8007 180.806 11.0476 181.157 11.3857C181.512 11.7237 181.691 12.1662 181.694 12.7131C181.691 13.1937 181.55 13.6179 181.272 13.9858C180.996 14.3504 180.614 14.6354 180.123 14.8409C179.633 15.0464 179.069 15.1491 178.433 15.1491C177.498 15.1491 176.746 14.9536 176.176 14.5625C175.606 14.1681 175.266 13.6196 175.156 12.9169L176.911 12.7479C176.991 13.0926 177.16 13.3527 177.419 13.5284C177.677 13.7041 178.013 13.7919 178.428 13.7919C178.855 13.7919 179.198 13.7041 179.457 13.5284C179.719 13.3527 179.85 13.1357 179.85 12.8771C179.85 12.6584 179.765 12.4777 179.596 12.3352C179.43 12.1927 179.172 12.0833 178.821 12.0071L177.518 11.7337C176.785 11.5812 176.244 11.3243 175.892 10.9631C175.541 10.5985 175.367 10.1378 175.37 9.58097C175.367 9.11032 175.495 8.70265 175.753 8.35795C176.015 8.00994 176.378 7.74148 176.842 7.55256C177.309 7.36032 177.848 7.2642 178.458 7.2642C179.352 7.2642 180.057 7.45478 180.571 7.83594C181.088 8.21709 181.407 8.73248 181.53 9.3821ZM186.559 15.1491C185.793 15.1491 185.132 14.9901 184.575 14.6719C184.022 14.3504 183.596 13.8963 183.297 13.3097C182.999 12.7197 182.85 12.0253 182.85 11.2266C182.85 10.4411 182.999 9.75166 183.297 9.15838C183.599 8.56179 184.02 8.09777 184.56 7.76633C185.1 7.43158 185.735 7.2642 186.464 7.2642C186.935 7.2642 187.379 7.34044 187.797 7.4929C188.218 7.64205 188.589 7.87405 188.91 8.18892C189.235 8.50379 189.49 8.90483 189.676 9.39205C189.862 9.87595 189.954 10.4527 189.954 11.1222V11.674H183.695V10.4609H188.229C188.226 10.1162 188.151 9.80966 188.006 9.54119C187.86 9.26941 187.656 9.05563 187.394 8.89986C187.136 8.74408 186.834 8.66619 186.489 8.66619C186.121 8.66619 185.798 8.75568 185.52 8.93466C185.241 9.11032 185.024 9.34233 184.868 9.63068C184.716 9.91572 184.638 10.2289 184.635 10.5703V11.6293C184.635 12.0734 184.716 12.4545 184.878 12.7727C185.041 13.0876 185.268 13.3295 185.56 13.4986C185.851 13.6643 186.193 13.7472 186.584 13.7472C186.846 13.7472 187.082 13.7107 187.295 13.6378C187.507 13.5616 187.691 13.4505 187.846 13.3047C188.002 13.1589 188.12 12.9782 188.199 12.7628L189.88 12.9517C189.774 13.3958 189.572 13.7836 189.273 14.1151C188.978 14.4432 188.6 14.6984 188.14 14.8807C187.679 15.0597 187.152 15.1491 186.559 15.1491ZM200.985 9.3821L199.345 9.56108C199.298 9.39536 199.217 9.23958 199.101 9.09375C198.988 8.94792 198.836 8.83026 198.644 8.74077C198.451 8.65128 198.216 8.60653 197.938 8.60653C197.563 8.60653 197.248 8.68774 196.993 8.85014C196.741 9.01255 196.617 9.22301 196.62 9.48153C196.617 9.7036 196.698 9.88423 196.864 10.0234C197.033 10.1626 197.311 10.277 197.699 10.3665L199.001 10.6449C199.724 10.8007 200.261 11.0476 200.612 11.3857C200.967 11.7237 201.146 12.1662 201.149 12.7131C201.146 13.1937 201.005 13.6179 200.727 13.9858C200.452 14.3504 200.069 14.6354 199.578 14.8409C199.088 15.0464 198.524 15.1491 197.888 15.1491C196.953 15.1491 196.201 14.9536 195.631 14.5625C195.061 14.1681 194.721 13.6196 194.612 12.9169L196.367 12.7479C196.446 13.0926 196.615 13.3527 196.874 13.5284C197.132 13.7041 197.469 13.7919 197.883 13.7919C198.31 13.7919 198.653 13.7041 198.912 13.5284C199.174 13.3527 199.305 13.1357 199.305 12.8771C199.305 12.6584 199.22 12.4777 199.051 12.3352C198.885 12.1927 198.627 12.0833 198.276 12.0071L196.973 11.7337C196.241 11.5812 195.699 11.3243 195.347 10.9631C194.996 10.5985 194.822 10.1378 194.825 9.58097C194.822 9.11032 194.95 8.70265 195.208 8.35795C195.47 8.00994 195.833 7.74148 196.297 7.55256C196.764 7.36032 197.303 7.2642 197.913 7.2642C198.808 7.2642 199.512 7.45478 200.026 7.83594C200.543 8.21709 200.862 8.73248 200.985 9.3821ZM206.446 7.36364V8.75568H202.057V7.36364H206.446ZM203.14 5.53409H204.94V12.7031C204.94 12.9451 204.976 13.1307 205.049 13.2599C205.126 13.3859 205.225 13.4721 205.348 13.5185C205.47 13.5649 205.606 13.5881 205.755 13.5881C205.868 13.5881 205.971 13.5798 206.064 13.5632C206.16 13.5466 206.233 13.5317 206.282 13.5185L206.586 14.9254C206.49 14.9586 206.352 14.995 206.173 15.0348C205.997 15.0746 205.782 15.0978 205.527 15.1044C205.076 15.1177 204.67 15.0497 204.309 14.9006C203.947 14.7481 203.661 14.5128 203.449 14.1946C203.24 13.8764 203.137 13.4787 203.14 13.0014V5.53409ZM212.819 11.7884V7.36364H214.618V15H212.873V13.6428H212.794C212.622 14.0703 212.338 14.42 211.944 14.6918C211.553 14.9635 211.07 15.0994 210.497 15.0994C209.997 15.0994 209.554 14.9884 209.17 14.7663C208.788 14.541 208.49 14.2145 208.275 13.7869C208.059 13.3561 207.952 12.8357 207.952 12.2259V7.36364H209.751V11.9474C209.751 12.4313 209.884 12.8158 210.149 13.1009C210.414 13.3859 210.762 13.5284 211.193 13.5284C211.458 13.5284 211.715 13.4638 211.964 13.3345C212.212 13.2053 212.416 13.013 212.575 12.7578C212.738 12.4993 212.819 12.1761 212.819 11.7884ZM219.303 15.1342C218.703 15.1342 218.166 14.9801 217.692 14.6719C217.218 14.3636 216.844 13.9162 216.569 13.3295C216.293 12.7429 216.156 12.0303 216.156 11.1918C216.156 10.3433 216.295 9.62737 216.574 9.04403C216.855 8.45739 217.235 8.01491 217.712 7.71662C218.189 7.41501 218.721 7.2642 219.308 7.2642C219.755 7.2642 220.123 7.34044 220.412 7.4929C220.7 7.64205 220.929 7.82268 221.098 8.0348C221.267 8.24361 221.398 8.44081 221.49 8.62642H221.565V4.81818H223.37V15H221.6V13.7969H221.49C221.398 13.9825 221.263 14.1797 221.088 14.3885C220.912 14.594 220.68 14.7696 220.392 14.9155C220.103 15.0613 219.74 15.1342 219.303 15.1342ZM219.805 13.6577C220.186 13.6577 220.511 13.5549 220.78 13.3494C221.048 13.1406 221.252 12.8506 221.391 12.4794C221.53 12.1082 221.6 11.6757 221.6 11.1818C221.6 10.688 221.53 10.2588 221.391 9.89418C221.255 9.52959 221.053 9.24621 220.784 9.04403C220.519 8.84186 220.193 8.74077 219.805 8.74077C219.404 8.74077 219.069 8.84517 218.801 9.05398C218.532 9.26278 218.33 9.55114 218.194 9.91903C218.058 10.2869 217.99 10.7079 217.99 11.1818C217.99 11.6591 218.058 12.085 218.194 12.4595C218.333 12.8307 218.537 13.1241 218.806 13.3395C219.078 13.5516 219.411 13.6577 219.805 13.6577ZM225.288 15V7.36364H227.087V15H225.288ZM226.192 6.27983C225.907 6.27983 225.662 6.18537 225.457 5.99645C225.251 5.80421 225.148 5.57386 225.148 5.3054C225.148 5.03362 225.251 4.80327 225.457 4.61435C225.662 4.42211 225.907 4.32599 226.192 4.32599C226.481 4.32599 226.726 4.42211 226.928 4.61435C227.134 4.80327 227.236 5.03362 227.236 5.3054C227.236 5.57386 227.134 5.80421 226.928 5.99645C226.726 6.18537 226.481 6.27983 226.192 6.27983ZM232.319 15.1491C231.553 15.1491 230.892 14.9901 230.335 14.6719C229.781 14.3504 229.356 13.8963 229.057 13.3097C228.759 12.7197 228.61 12.0253 228.61 11.2266C228.61 10.4411 228.759 9.75166 229.057 9.15838C229.359 8.56179 229.78 8.09777 230.32 7.76633C230.86 7.43158 231.495 7.2642 232.224 7.2642C232.695 7.2642 233.139 7.34044 233.557 7.4929C233.977 7.64205 234.349 7.87405 234.67 8.18892C234.995 8.50379 235.25 8.90483 235.436 9.39205C235.621 9.87595 235.714 10.4527 235.714 11.1222V11.674H229.455V10.4609H233.989C233.986 10.1162 233.911 9.80966 233.765 9.54119C233.619 9.26941 233.416 9.05563 233.154 8.89986C232.895 8.74408 232.594 8.66619 232.249 8.66619C231.881 8.66619 231.558 8.75568 231.28 8.93466C231.001 9.11032 230.784 9.34233 230.628 9.63068C230.476 9.91572 230.398 10.2289 230.395 10.5703V11.6293C230.395 12.0734 230.476 12.4545 230.638 12.7727C230.801 13.0876 231.028 13.3295 231.319 13.4986C231.611 13.6643 231.952 13.7472 232.343 13.7472C232.605 13.7472 232.842 13.7107 233.054 13.6378C233.266 13.5616 233.45 13.4505 233.606 13.3047C233.762 13.1589 233.88 12.9782 233.959 12.7628L235.64 12.9517C235.534 13.3958 235.331 13.7836 235.033 14.1151C234.738 14.4432 234.36 14.6984 233.9 14.8807C233.439 15.0597 232.912 15.1491 232.319 15.1491ZM243.272 9.3821L241.632 9.56108C241.585 9.39536 241.504 9.23958 241.388 9.09375C241.275 8.94792 241.123 8.83026 240.931 8.74077C240.738 8.65128 240.503 8.60653 240.225 8.60653C239.85 8.60653 239.535 8.68774 239.28 8.85014C239.028 9.01255 238.904 9.22301 238.907 9.48153C238.904 9.7036 238.985 9.88423 239.151 10.0234C239.32 10.1626 239.598 10.277 239.986 10.3665L241.289 10.6449C242.011 10.8007 242.548 11.0476 242.899 11.3857C243.254 11.7237 243.433 12.1662 243.436 12.7131C243.433 13.1937 243.292 13.6179 243.014 13.9858C242.739 14.3504 242.356 14.6354 241.865 14.8409C241.375 15.0464 240.811 15.1491 240.175 15.1491C239.24 15.1491 238.488 14.9536 237.918 14.5625C237.348 14.1681 237.008 13.6196 236.899 12.9169L238.654 12.7479C238.733 13.0926 238.902 13.3527 239.161 13.5284C239.419 13.7041 239.756 13.7919 240.17 13.7919C240.598 13.7919 240.941 13.7041 241.199 13.5284C241.461 13.3527 241.592 13.1357 241.592 12.8771C241.592 12.6584 241.507 12.4777 241.338 12.3352C241.173 12.1927 240.914 12.0833 240.563 12.0071L239.26 11.7337C238.528 11.5812 237.986 11.3243 237.634 10.9631C237.283 10.5985 237.109 10.1378 237.112 9.58097C237.109 9.11032 237.237 8.70265 237.495 8.35795C237.757 8.00994 238.12 7.74148 238.584 7.55256C239.051 7.36032 239.59 7.2642 240.2 7.2642C241.095 7.2642 241.799 7.45478 242.313 7.83594C242.83 8.21709 243.15 8.73248 243.272 9.3821Z" fill="#0068FF"/>
          <path d="M8.85166 51.4448C8.69432 52.2581 9.22611 53.045 10.0395 53.2024C10.8528 53.3597 11.6397 52.8279 11.7971 52.0146L8.85166 51.4448ZM50.2152 12.7874C51.0361 12.6764 51.6117 11.921 51.5007 11.1C51.3897 10.279 50.6343 9.70348 49.8133 9.81446L50.2152 12.7874ZM4.41835 41.327C3.99148 40.617 3.06988 40.3875 2.3599 40.8144C1.64992 41.2413 1.42042 42.1629 1.84729 42.8729L4.41835 41.327ZM8.60781 51.206L7.32227 51.979L7.323 51.9802L8.60781 51.206ZM12.2243 52.2568L11.6114 50.8878L11.6101 50.8883L12.2243 52.2568ZM23.1434 49.0118C23.8995 48.6732 24.238 47.7859 23.8995 47.0298C23.561 46.2737 22.6736 45.9351 21.9175 46.2737L23.1434 49.0118ZM10.3244 51.7297C11.7971 52.0146 11.797 52.0149 11.7969 52.0152C11.7969 52.0152 11.7969 52.0154 11.7969 52.0154C11.7969 52.0154 11.797 52.0151 11.7971 52.0146C11.7973 52.0135 11.7977 52.0114 11.7983 52.0083C11.7995 52.002 11.8016 51.9915 11.8046 51.977C11.8105 51.9479 11.8198 51.9026 11.8327 51.8418C11.8585 51.7202 11.8987 51.5366 11.9544 51.297C12.066 50.8179 12.2399 50.1155 12.4863 49.2383C12.9792 47.4825 13.7602 45.0333 14.9084 42.2744C17.2144 36.7337 20.9547 30.0577 26.7149 25.1964L24.78 22.9038C18.5074 28.1975 14.5361 35.3613 12.1387 41.1217C10.9353 44.0133 10.1167 46.5799 9.59795 48.4273C9.33841 49.3517 9.15345 50.0978 9.03262 50.6166C8.9722 50.8761 8.92778 51.0789 8.89806 51.2189C8.8832 51.289 8.87201 51.3433 8.86433 51.3812C8.86049 51.4001 8.85753 51.415 8.85543 51.4256C8.85438 51.4309 8.85354 51.4352 8.85291 51.4384C8.8526 51.44 8.85234 51.4413 8.85213 51.4424C8.85203 51.4429 8.85191 51.4435 8.85186 51.4438C8.85175 51.4443 8.85166 51.4448 10.3244 51.7297ZM26.7149 25.1964C38.5275 15.2273 47.9159 13.0982 50.2152 12.7874L49.8133 9.81446C46.9548 10.2009 37.0331 12.5628 24.78 22.9038L26.7149 25.1964ZM1.84729 42.8729L7.32227 51.979L9.89334 50.4331L4.41835 41.327L1.84729 42.8729ZM7.323 51.9802C8.46525 53.876 10.8515 54.5171 12.8385 53.6253L11.6101 50.8883C10.909 51.203 10.1972 50.9375 9.89262 50.4319L7.323 51.9802ZM12.8372 53.6259L23.1434 49.0118L21.9175 46.2737L11.6114 50.8878L12.8372 53.6259Z" fill="#0068FF"/>
        </svg>
      </div>
      <div class="grid grid-cols-6 sm:grid-cols-10 gap-2 sm:gap-6 [&>div]:border [&>div]:rounded-lg  [&>div]:flex [&>div]:flex-col
            [&>div]:justify-between  [&>div]:items-start [&_.logo1]:my-2  [&_.logo1]:brightness-0 [&_.logo1]:dark:invert [&_.logo1]:opacity-50 [&_.logo1]:h-6
            [&_strong]:text-5xl [&_small]:text-xl  [&_.logo2]:!my-0 [&_.quote]:text-2xl
            [&_.col-span-6]:gap-8 [&_.quote]:leading-normal
            ">
        {% for t in this.frontmatter.testimonials %}
            {% if t.stat %}
            <div class="border-stroke{{t.theme}}-weak bg-fill{{t.theme}}-weak  col-span-3 sm:col-span-2 gap-2 p-3 sm:p-5" style="background-color:#{{t.color}}">
              <div class="space-y-3 flex flex-col gap-2 justify-self-center">
                <strong>{{t.stat}}</strong><small>{{t.desc}}</small>
              </div>
              <div><img class="h-8 logo1" src="/assets/img/customers/{{t.logo}}"/></div>
            </div>
            {% else %}
            <div class="border-strokeBrand-weak col-span-6 p-5 sm:p-8">
              <p class="quote">{{t.quote}}</p>
              <div class="flex items-center gap-3 w-full">
                <img class="rounded-lg grayscale w-12" src="/assets/img/love/{{t.photo}}" />
                <div class="flex-1 flex items-center justify-between">
                  <div class="flex-1"><p>{{t.name}}</p><p class="text-xs">{{t.title}}</p></div>
                  <div class="flex-1">{% if t.logo_raw %}{{t.logo_raw}}{% else %}<img src="/assets/img/customers/{{t.logo}}" class="logo1 logo2" />{% endif %}</div>
                </div>
              </div>
            </div>
            {% endif %}
        {% endfor %}
        </div>
      </div>
    </div>
</section>
```
