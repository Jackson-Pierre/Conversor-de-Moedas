const button = document.querySelector(".button-convert")
const currencySelect = document.querySelector(".currency-select")
const mainValue = document.querySelector(".main-value")

let dolarToday = 5.32
let euroToday = 6.17
let libraToday = 6.99
let bitcoinToday = 486577.45
let realToday = 1

function originalValue() {
    const inputCurrency = document.querySelector(".input-currency")
    if (mainValue.value === "main-real") {
        inputCurrency.placeholder = "R$ 10.000,00"
        dolarToday = 5.32
        euroToday = 6.17
        libraToday = 6.99
        bitcoinToday = 486577.45
        realToday = 1
    }
    if (mainValue.value === "main-dolar") {
        inputCurrency.placeholder = "$10,000.00"
        dolarToday = 1
        euroToday = 1.16
        libraToday = 1.31
        bitcoinToday = 91221
        realToday = 0.19
    }
    if (mainValue.value === "main-euro") {
        inputCurrency.placeholder = "10.000 €"
        dolarToday = 0.86
        euroToday = 1
        libraToday = 1.13
        bitcoinToday = 78560
        realToday = 0.16
    }
    if (mainValue.value === "main-libra") {
        inputCurrency.placeholder = "£10,000.00"
        dolarToday = 0.76
        euroToday = 0.89
        libraToday = 1
        bitcoinToday = 69500
        realToday = 0.14
    }
    if (mainValue.value === "main-bitcoin") {
        inputCurrency.placeholder = "1 BTC"
        dolarToday = 0.000011
        euroToday = 0.000013
        libraToday = 0.000014
        bitcoinToday = 1
        realToday = 0.000002
    }
}

function formatMainCurrencyValue(valorNum) {
    if (mainValue.value === "main-real") {
        return new Intl.NumberFormat("pt-BR", {style: "currency",currency: "BRL"}).format(valorNum)
    }
    if (mainValue.value === "main-dolar") {
        return new Intl.NumberFormat("en-US", {style: "currency",currency: "USD"}).format(valorNum)
    }
    if (mainValue.value === "main-euro") {
        return new Intl.NumberFormat("de-DE", {style: "currency",currency: "EUR"}).format(valorNum)
    }
    if (mainValue.value === "main-libra") {
        return new Intl.NumberFormat("en-GB", {style: "currency",currency: "GBP"}).format(valorNum)
    }
    if (mainValue.value === "main-bitcoin") {
        return new Intl.NumberFormat("en", {style: "currency",currency: "BTC", minimumFractionDigits: 5}).format(valorNum)
    }
    return valorNum
}

function convertValues() {
    const inputCurrency = document.querySelector(".input-currency").value
    if (!inputCurrency || inputCurrency.trim() === "") {
        document.querySelector(".currency-value-to-convert").innerHTML = ""
        document.querySelector(".currency-value").innerHTML = ""
        return
    }
    const valorNum = parseFloat(inputCurrency.replace('.', '').replace(',', '.'))
    if (isNaN(valorNum)) {
        alert("Por favor, insira um valor válido!")
        return
    }
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
    const currencyValueConverted = document.querySelector(".currency-value")
    let resultado = 0
    if (currencySelect.value === "dolar") {
        resultado = valorNum / dolarToday
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {style: "currency",currency: "USD"}).format(resultado)
    }
    if (currencySelect.value === "euro") {
        resultado = valorNum / euroToday
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {style: "currency",currency: "EUR"}).format(resultado)
    }
    if (currencySelect.value === "libra") {
        resultado = valorNum / libraToday
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {style: "currency",currency: "GBP"}).format(resultado)
    }
    if (currencySelect.value === "bitcoin") {
        resultado = valorNum / bitcoinToday
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en", {style: "currency",currency: "BTC"}).format(resultado)
    }
    if (currencySelect.value === "real") {
        resultado = valorNum / realToday
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {style: "currency",currency: "BRL"}).format(resultado)
    }
    currencyValueToConvert.innerHTML = formatMainCurrencyValue(valorNum)
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
    originalValue()
    convertValues()
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

mainValue.addEventListener("change", changeMainCurrency)
currencySelect.addEventListener("change", changeCurrency)
button.addEventListener("click", convertValues)
