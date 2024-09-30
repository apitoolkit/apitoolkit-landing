const price_indicator = document.querySelector("#price_range");
let plan = "month";
const prices = [34, 49, 88, 215, 420, 615, 800];
const reqs = ["400k", "1.1M", "2M", "5M", "10M", "15M", "20M"];
const reqsYr = ["400k", "1.1M", "2M", "5M", "10M", "10M", "10M"];
const pricesYr = [29, 34, 61, 150, 294, 294, 294];
const priceContainer = document.querySelector("#price");
const reqsContainer = document.querySelector("#num_requests");
const saveContainer = document.querySelector("#save_container");
const startsAtContainer = document.querySelector("#starts_at");
function priceChange() {
  const value = price_indicator.value;
  let price = prices[value];
  let num_reqs = reqs[value];
  if (reqs[value] === "400k") {
    startsAtContainer.innerText = "Starts at ...";
  } else {
    startsAtContainer.innerText = "Starts at $34/400k requests per month";
  }

  if (plan === "annual") {
    price = pricesYr[value];
    num_reqs = reqsYr[value];
    if (reqsYr[value] === "400k") {
      startsAtContainer.innerText = "Starts at ...";
    } else {
      startsAtContainer.innerText = "Starts at $29/400k requests per month";
    }
  }
  priceContainer.innerText = "$" + price;
  reqsContainer.innerText = "/" + num_reqs + " requests per month";
}
price_indicator.addEventListener("input", priceChange);

function handlePlanToggle() {
  const radios = document.getElementsByName("plans");
  for (let radio of radios) {
    if (radio.checked) {
      plan = radio.value;
      break;
    }
  }
  priceChange();
}
