const price_indicator = document.querySelector("#price_range");
let plan = "month";
const prices = [19, 49, 88, 215, 420, 615, 800]
const saves = [1, 6, 12, 35, 80, 135, 200]
const reqs = ["200K","550k", "1M", "2.5M", "5M", "7.5M", "10M"]
const pricesYr = [200,588, 1056, 2580, 5000, 5000, 5000]
const savesYr = [28,72,144,420,960,960,960]
const reqsYr = ["2.4M", "6.6M", "12M", "30M", "60M", "60M", "60M"]
const priceContainer = document.querySelector("#price")
const reqsContainer = document.querySelector("#num_requests")
const saveContainer = document.querySelector("#save_container")
function priceChange() {
  const value = price_indicator.value
  let price = prices[value]
  let num_reqs = reqs[value]
  let sav = "save $" + saves[value] + "/month"
  if(saves[value] === 1) {
    sav = ""
  }
  if(plan === "annual") {
     price = pricesYr[value]
     num_reqs = reqsYr[value]
     sav = "save $" + savesYr[value] + "/year"
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
