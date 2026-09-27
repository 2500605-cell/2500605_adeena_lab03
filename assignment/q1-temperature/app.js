// Student Name: Adeena Akram | Roll No: 2500605

function celsiusToFahrenheit(c) {
  return (c * 9) / 5 + 32;
}

const fahrenheitToCelsius = (f) => ((f - 32) * 5) / 9;

// grabbing all the elements i need
const tempInput = document.getElementById("tempInput");
const toFBtn = document.getElementById("toFahrenheitBtn");
const toCBtn = document.getElementById("toCelsiusBtn");
const resultBox = document.getElementById("output");

// checks the input and shows result, reused for both buttons
function doConversion(conversionFunc, unitLabel) {
  const enteredValue = tempInput.value.trim();

  // agar empty hai ya number nahi hai to error dikhado
  if (enteredValue === "" || isNaN(Number(enteredValue))) {
    resultBox.textContent = "Please enter a valid number.";
    resultBox.style.color = "red";
    return;
  }

  const numValue = Number(enteredValue);
  const finalResult = conversionFunc(numValue);

  resultBox.style.color = "black";
  resultBox.textContent = "Result: " + finalResult.toFixed(1) + "°" + unitLabel;
}

toFBtn.addEventListener("click", function () {
  doConversion(celsiusToFahrenheit, "F");
});

toCBtn.addEventListener("click", function () {
  doConversion(fahrenheitToCelsius, "C");
});