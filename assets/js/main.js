const price_indicator = document.querySelector("#price_range");
const priceContainer = document.querySelector("#price");
const reqsContainer = document.querySelector("#num_requests");
const saveContainer = document.querySelector("#save_container");
const startsAtContainer = document.querySelector("#starts_at");
function priceChange() {
  const value = price_indicator.value;
  if (value <= 20_000_000) {
    startsAtContainer.innerText = "Starts at ...";
  } else {
    startsAtContainer.innerText = "Starts at $34/20M events per month";
  }
  const price = (value - 20_000_000) / 500_000 + 34;
  priceContainer.innerText = "$" + price;
  reqsContainer.innerText = "/" + value / 1_000_000 + "M events per month";
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
