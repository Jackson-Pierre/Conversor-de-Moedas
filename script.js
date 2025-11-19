const button = document.querySelector(".button-convert")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputCurrency = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

    const dolarToday = 5.32
    const euroToday = 6.17
    const libraToday = 6.99

    if (currencySelect.value === "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
        }).format(inputCurrency / dolarToday)
    }
    if (currencySelect.value === "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR",
        }).format(inputCurrency / euroToday)
    }
    if (currencySelect.value === "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP",
        }).format(inputCurrency * libraToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputCurrency)
}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.getElementById("currency-img")

    if(currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "./assets/dolar.png"
    }
    if(currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/euro.png"
    }
    if(currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra Esterlina"
        currencyImg.src = "./assets/libra.png"
    }


    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
button.addEventListener("click", convertValues)