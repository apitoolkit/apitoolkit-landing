---
title: Test JSON Redaction via JSONPath
date: 2024-06-06
hide_date: true
---

```=html
<section class="our_container w-full px-6 md:px-0 lg:px-0">
```

## Test JSON Redaction via JSONPath

```=html
<script src="jsonpath.min.js"></script>
<script src="jsonpath-plus-umd.min.cjs"></script>
<script>
    // Source: https://github.com/apitoolkit/apitoolkit-js/blob/main/src/payload.ts
    function redactFields(body, fieldsToRedact) {
      try {
        const bodyOB = JSON.parse(body);
        fieldsToRedact.forEach((path) => {
          jsonpath.apply(bodyOB, path, function () {
            return "[CLIENT_REDACTED]";
          });
        });
        return JSON.stringify(bodyOB, null, 2);
      } catch (err) {
        console.error(err)
        return body;
      }
    }


    function redactFieldsPlus(body, fieldsToRedact) {
      try {
        const bodyOB = JSON.parse(body);
        fieldsToRedact.forEach((path) => {
          JSONPath.JSONPath({
            path,
            json: bodyOB,
            callback: (value, type, payload) => {
              payload.parent[payload.parentProperty] = "[CLIENT_REDACTED]";
            }
          });
        });
        return JSON.stringify(bodyOB, null, 2);
      } catch (err) {
        console.error(err);
        document.getElementById('redactedResultError').innerHTML = err;
        return body;
      }
    }

    function redact(){
        var expressionsTxtList = document.getElementById("expressions").value.trim().split("\n").map(x=>x.trim());
        var jsonToRedact = document.getElementById("jsonToRedact").value.trim();
        var redactedResult = redactFields(jsonToRedact, expressionsTxtList);
    
        const highlightedCode = hljs.highlight(redactedResult, { language: 'json' }).value
        document.getElementById("redactedResult").innerHTML = highlightedCode;
    }
    function adjustTextareaHeight(textarea) {
        textarea.style.height = 'auto'; // Reset the height to auto to correctly calculate the new height
        textarea.style.height = (textarea.scrollHeight) + 'px'; // Set the height to the scrollHeight of the textarea
    }

    // Optionally, you can also call the function initially to adjust the height based on the initial content
    document.addEventListener('DOMContentLoaded', function() {
        adjustTextareaHeight(document.getElementById('jsonToRedact'));
        adjustTextareaHeight(document.getElementById('expressions'));
    });
</script>
<section class="flex flex-row gap-8">
    <div class="flex-1">
        Your JSON content
        <textarea class="textarea textarea-bordered w-full" id="jsonToRedact" oninput="adjustTextareaHeight(this)" rows="1" style="overflow:hidden;">
{
  "store": {
    "book": [
      {
        "category": "reference",
        "author": "Nigel Rees",
        "title": "Sayings of the Century",
        "price": 8.95
      },
      {
        "category": "fiction",
        "author": "Evelyn Waugh",
        "title": "Sword of Honour",
        "price": 12.99
      }
    ],
    "bicycle": {
      "color": "red",
      "price": 19.95
    }
  }
}
        </textarea>
    </div>
    <div class="flex-1">
        JSONpath Expressions. 1 per line.
<textarea class="textarea textarea-bordered w-full" id="expressions">
$.store.book[*].*
$.store.bicycle.color
</textarea>
        <button class="btn btn-primary" onclick="redact()">Redact</button>
        <code class="language-js block" id="redactedResultError"></code>
        <pre><code class="language-js" id="redactedResult"></code></pre>
    </div>
</section>

```

```=html
</section>
```
