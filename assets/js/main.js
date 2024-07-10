const price_indicator = document.querySelector("#price_range");
let plan = "month";
const prices = [19, 49, 88, 215, 420, 615, 800]
const saves = [1, 6, 12, 35, 80, 135, 200]
const reqs = ["400K","1.1M", "2M", "5M", "10M", "15M", "20M"]
const pricesYr = [200,588, 1056, 2580, 5000, 5000, 5000]
const savesYr = [28,72,144,420,960,960,960]
const reqsYr = ["4.8M", "13.2M", "24M", "60M", "120M", "120M", "120M"]
const priceContainer = document.querySelector("#price")
const reqsContainer = document.querySelector("#num_requests")
const saveContainer = document.querySelector("#save_container")
const startsAtContainer = document.querySelector("#starts_at")
function priceChange() {
  const value = price_indicator.value
  let price = prices[value]
  let num_reqs = reqs[value]
  let sav = "save $" + saves[value] + "/month"
  if(saves[value] === 1) {
    sav = ""
    startsAtContainer.innerText = "Starts at ..."
  } else {
    startsAtContainer.innerText = "Starts at $19/400k requests"
  }

  if(plan === "annual") {
     price = pricesYr[value]
     num_reqs = reqsYr[value]
     sav = "save $" + savesYr[value] + "/year"
     if(saves[value] === 1) {
        startsAtContainer.innerText = "Starts at ..."
      } else {
        startsAtContainer.innerText = "Starts at $200/4.8M requests"
      }
    
  }
  priceContainer.innerText = "$" + price
  reqsContainer.innerText = "/" + num_reqs + " requests"
  saveContainer.innerText = sav 
  
}
price_indicator.addEventListener('input', priceChange)

function handlePlanToggle() {
   const radios = document.getElementsByName("plans")
   for(let radio of radios) {
     if(radio.checked) {
         plan = radio.value
         break
     }
   }
   priceChange()
}
