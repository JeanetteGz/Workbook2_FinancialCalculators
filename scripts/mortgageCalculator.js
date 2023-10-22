document.addEventListener("DOMContentLoaded", handleOnLoad);

function handleOnLoad() {
    const calculateButtonEl = document.getElementById("calculateButton");

    // Added event handler
    calculateButtonEl.onclick = handleCalculateOnClick;
}

function handleCalculateOnClick() {
    console.log("Calculate button clicked");

    const principalInputEl = document.getElementById("principalField");
    const interestRateInputEl = document.getElementById("interestRateField");
    const loanLengthInputEl = document.getElementById("loanLengthField");
    const monthlyPaymentInputEl = document.getElementById("monthlyPaymentField");
    const totalInterestInputEl = document.getElementById("totalInterestField");

    const principal = parseFloat(principalInputEl.value);
    const interest = parseFloat(interestRateInputEl.value);
    const loanLength = parseFloat(loanLengthInputEl.value);


    const { monthlyPayment, totalInterest } = calculateMortgage(
        principal,
        interest,
        loanLength
    );

    monthlyPaymentInputEl.value = monthlyPayment.toFixed(2);
    totalInterestInputEl.value = totalInterest.toFixed(2);
}

function calculateMortgage(principal, interest, loanLength) {
    // Convert the annual interest rate to a monthly interest rate
    const monthlyInterestRate = (interest / 100) / 12;
    // Calculate the total number of payments (monthly payments for the loan)
    const numberOfPayments = loanLength * 12;

    // Calculate the monthly payment using the formula for amortizing loans
    const monthlyPayment =
      (principal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    // Calculate the total amount paid over the life of the loan
    const totalPaid = monthlyPayment * numberOfPayments;
    // Calculate the total interest paid by subtracting the principal from the total amount paid
    const totalInterest = totalPaid - principal;

    // Return an object containing the monthly payment and total interest
    return { monthlyPayment, totalInterest };
}

