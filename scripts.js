const convertButton = document.querySelector(".convert-button");
const currencySelectFrom = document.querySelector(".currency-select-from");
const currencySelectTo = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert"); // Valor em Real
    const currencyValueConverted = document.querySelector(".currency-value"); // Outras moedas

    const dolarToday = 5.48;
    const euroToday = 6.10;
    const realToday = 1.00;
    const libraToday = 7.29;
    const bitcoinToday = 0.12345678;

    const fromCurrency = currencySelectFrom.value;
    const toCurrency = currencySelectTo.value;

    const inputValue = parseFloat(inputCurrencyValue);

    if (isNaN(inputValue) || inputValue < 0) {
        alert("Por favor, insira um valor válido.");
        return;
    }

    // Converter para a moeda selecionada
    let convertedValue;
    switch (toCurrency) {
        case "dolar":
            convertedValue = inputValue / dolarToday;
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(convertedValue);
            break;
        case "euro":
            convertedValue = inputValue / euroToday;
            currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(convertedValue);
            break;
        case "real":
            convertedValue = inputValue / realToday;
            currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL"
            }).format(convertedValue);
            break;
        case "libra":
            convertedValue = inputValue / libraToday;
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(convertedValue);
            break;
        case "bitcoin":
            convertedValue = inputValue / bitcoinToday;
            currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 8
            }).format(convertedValue);
            break;
    }

    // Atualiza a primeira div com o valor em reais
    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue);
}

function changeCurrencyFrom() {
    const currencyNameFrom = document.getElementById("convert-name"); // Nome da moeda convertida
    const currencyImageFrom = document.querySelector(".convert-img"); // Imagem da moeda a converter

    const selectedCurrency = currencySelectFrom.value;

    const currencyDetails = {
        dolar: { name: "Dólar Americano", img: "./assets/Dolar.png" },
        euro: { name: "Euro", img: "./assets/Euro.png" },
        real: { name: "Real", img: "./assets/Real.png" },
        libra: { name: "Libra", img: "./assets/Libra.png" },
        bitcoin: { name: "Bitcoin", img: "./assets/Bitcoin.png" }
    };

    currencyNameFrom.innerHTML = currencyDetails[selectedCurrency].name;
    currencyImageFrom.src = currencyDetails[selectedCurrency].img;

    convertValues(); // Mantém a funcionalidade de conversão
}

function changeCurrency() {
    const currencyNameTo = document.getElementById("currency-name"); // Nome da moeda convertida
    const currencyImageTo = document.querySelector(".currency-img"); // Imagem da moeda convertida

    const selectedCurrency = currencySelectTo.value;

    const currencyDetails = {
        dolar: { name: "Dólar Americano", img: "./assets/Dolar.png" },
        euro: { name: "Euro", img: "./assets/Euro.png" },
        real: { name: "Real", img: "./assets/Real.png" },
        libra: { name: "Libra", img: "./assets/Libra.png" },
        bitcoin: { name: "Bitcoin", img: "./assets/Bitcoin.png" }
    };

    currencyNameTo.innerHTML = currencyDetails[selectedCurrency].name;
    currencyImageTo.src = currencyDetails[selectedCurrency].img;

    convertValues(); // Atualiza o valor convertido ao trocar a moeda de destino
}

currencySelectFrom.addEventListener("change", changeCurrencyFrom);
currencySelectTo.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);


