// In this exercice we need to get the currencies first to display it in the form select
// Many options:
// - consume 1 times the api: write manually all the currencies in the html file and then consume the api. Cons: the values will never be update
// - consume 2 times the api: one to get the currencies values to display it and then another one to convert. Cons: we use 2 times the same request for one operation
// - consume 1 time the api: we save the currencies values and we convert manually without using the api. Cons: maybe less accurate? => *** this one is chosen ***

const apiKey = "1fa8d93f110dc9edba3d4cf7"

const container = document.getElementById("container")
const currencyFrom = document.getElementById("currencyFrom")
const currencyTo = document.getElementById("currencyTo")
const spinner = document.getElementById("spinner")
const form = document.getElementById("form")
const btn = document.getElementById("btn")
const amount = document.getElementById("amount")
const result = document.getElementById("result")

spinner.style.display = "block"
form.style.display = "none"

const spin = () => {
    let degSpinner = 0
    setInterval(() => {
        degSpinner += 45
        spinner.style.transform = `rotate(${degSpinner}deg)`
    },500)
}

const displayCurrencies = (currencies) => {
    form.style.display = "block"
    spinner.style.display = "none"

    for(const key in currencies) {
        const option1 = document.createElement("option")
        const option2 = document.createElement("option")

        option1.textContent = key
        option2.textContent = key
        option1.value = currencies[key]
        option2.value = currencies[key]

        currencyFrom.appendChild(option1)
        currencyTo.appendChild(option2)
    };
}

const displayResult = (res) => {
    result.textContent = `${res[0]} ${res[1]}`
}

const getApiConverterDatas = async () => {
    const url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`

    try {
        const res = await fetch(url)
        if (res.status != 200) {
            throw new Error("Something went wrong")
        }
        else {
            let data = await res.json()
            console.log("done");
            const currencies = data.conversion_rates
            displayCurrencies(currencies)

            btn.addEventListener("click", (e) => {
                e.preventDefault()
                const result = [parseInt(amount.value) * (currencyTo.value / currencyFrom.value), currencyTo.options[currencyTo.selectedIndex].text]
                displayResult(result)
            })
        }
    }
    catch (err) {
        console.log(err);
    }
}

spin()
getApiConverterDatas()