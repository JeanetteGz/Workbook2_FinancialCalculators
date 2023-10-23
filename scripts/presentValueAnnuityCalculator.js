document.addEventListener("DOMContentLoaded", handleOnLoad);

function handleOnLoad() {
    const calculateButtonEl = document.getElementById("calculateButton");

    // Added event handler
    calculateButtonEl.onclick = handleCalculateOnClick;
}

function handleCalculateOnClick() {
    console.log("Calculate button clicked");

    const monthlyPayoutInputEl = document.getElementById("monthlyPayoutField");
    const expectedInterestRateInputEl = document.getElementById("expectedInterestRateField");
    const yearsToPayoutInputEl = document.getElementById("yearsToPayoutField");  
    const presentValueInputEl = document.getElementById("presentValueField");

    const monthlyPayout = parseFloat(monthlyPayoutInputEl.value);
    const expectedInterestRate = parseFloat(expectedInterestRateInputEl.value);
    const yearsToPayout = parseFloat(yearsToPayoutInputEl.value);

    const numberOfMonths = yearsToPayout * 12;

    // Calculate the present value
    const monthlyInterestRate = expectedInterestRate / 12; // Monthly interest rate
    const presentValue = monthlyPayout * (1 - Math.pow(1 + monthlyInterestRate, -numberOfMonths)) / monthlyInterestRate;

    presentValueInputEl.value = presentValue.toFixed(2);
}

