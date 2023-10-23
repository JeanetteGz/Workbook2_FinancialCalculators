document.addEventListener("DOMContentLoaded", handleOnLoad);

// This function is executed when the DOM is fully loaded.
function handleOnLoad() {
    // Get the 'calculateButton' element and add a click event handler to it.
    const calculateButtonEl = document.getElementById("calculateButton");
    calculateButtonEl.onclick = handleCalculateOnClick;
}

// This function is executed when the 'calculateButton' is clicked.
function handleCalculateOnClick() {
    console.log("Calculate button clicked");

    // Get user inputs from HTML input fields.
    const depositInputEl = document.getElementById("depositField");
    const interestRateInputEl = document.getElementById("interestRateField");
    const yearsInputField = document.getElementById("yearsField");

    // Parse user inputs into floating-point numbers.
    const deposit = parseFloat(depositInputEl.value);
    const interestRate = parseFloat(interestRateInputEl.value) / 100; // Convert interest rate to a decimal.
    const numYears = parseFloat(yearsInputField.value);

    // Calculate the future value of the investment.
    const futureValue = calculateFutureCD(deposit, interestRate, numYears);

    // Get elements to display the results.
    const futureValueField = document.getElementById("futureValueField");
    const totalInterestField = document.getElementById("totalInterestField");

    // Display the calculated future value in the appropriate field.
    futureValueField.value = futureValue;

    // Calculate and display the total interest earned.
    const totalInterest = calculateTotalInterest(deposit, futureValue);
    totalInterestField.value = totalInterest;
}

// Function to calculate the future value of an investment.
function calculateFutureCD(deposit, interestRate, numYears) {
    const numCompounds = 365; // Assumes daily compounding.
    const total = deposit * (1 + interestRate / numCompounds) ** (numCompounds * numYears);
    return total.toFixed(2); // Format the result with two decimal places.
}

// Function to calculate the total interest earned.
function calculateTotalInterest(deposit, futureValue) {
    return (futureValue - deposit).toFixed(2);
}

