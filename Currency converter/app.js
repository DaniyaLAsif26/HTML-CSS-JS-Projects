const URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/inr/usd.json"

const dropdown = document.querySelectorAll(".dropdown select")

for (let select of dropdown) {
    for (currcode in countryList) {
        let newoption = document.createElement("option")
        newoption.innerHTML = currcode
        newoption.value = currcode
        if (select.name === "from" && currcode === "INR") {
            newoption.selected = true
        }
        if (select.name === "to" && currcode === "USD") {
            newoption.selected = true
        }
        select.append(newoption)
    }
    select.addEventListener("change", (evt) => {
        updateFlag(evt.target)
    })
}
const updateFlag = (element) => {
    let currcode = element.value
    countryCode = countryList[currcode]
    let newsrc=`https://flagsapi.com/${countryCode}/flat/64.png`
    let img = element.parentElement.querySelector("img");
    img.src=newsrc
}