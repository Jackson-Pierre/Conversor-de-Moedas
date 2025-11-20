const button = document.querySelector(".button-convert")
const currencySelect = document.querySelector(".currency-select")
const mainValue = document.querySelector(".main-value")

let dolarToday = 5.32
let euroToday = 6.17
let libraToday = 6.99
let bitcoinToday = 486577.45
let realToday = 1
function convertValues() {
    const inputCurrency = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")

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
    if (currencySelect.value === "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en", {
            style: "currency",
            currency: "BTC",
        }).format(inputCurrency / bitcoinToday)
    }
    if (currencySelect.value === "real") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
        }).format(inputCurrency / realToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(inputCurrency / realToday)
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
    if(currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }
    if(currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImg.src = "./assets/real.png"
    }

    convertValues()
}

function changeMainCurrency() {
    const mainCurrencyName = document.getElementById("main-currency-name")
    const mainCurrencyImg = document.getElementById("main-currency-img")

    if(mainValue.value == "main-real") {
        mainCurrencyName.innerHTML = "Real"
        mainCurrencyImg.src = "./assets/real.png"
    }
    if(mainValue.value == "main-dolar") {
        mainCurrencyName.innerHTML = "Dólar Americano"
        mainCurrencyImg.src = "./assets/dolar.png"
    }
    if(mainValue.value == "main-euro") {
        mainCurrencyName.innerHTML = "Euro"
        mainCurrencyImg.src = "./assets/euro.png"
    }
    if(mainValue.value == "main-libra") {
        mainCurrencyName.innerHTML = "Libra Esterlina"
        mainCurrencyImg.src = "./assets/libra.png"
    }
    if(mainValue.value == "main-bitcoin") {
        mainCurrencyName.innerHTML = "Bitcoin"
        mainCurrencyImg.src = "./assets/Bitcoin.png"
    }
}



mainValue.addEventListener("change", changeMainCurrency)
currencySelect.addEventListener("change", changeCurrency)
button.addEventListener("click", convertValues)