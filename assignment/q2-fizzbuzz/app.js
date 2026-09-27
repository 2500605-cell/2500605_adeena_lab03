// Name: Adeena | Roll No: 2500605

const limitInput = document.getElementById("limitInput");
const generateBtn = document.getElementById("generateBtn");
const fizzList = document.getElementById("fizzList");

function generateFizzBuzz() {
  const limit = Number(limitInput.value);
  fizzList.innerHTML = "";

  if (isNaN(limit) || limit < 1) {
    alert("Please enter a positive number.");
    return;
  }

  for (let i = 1; i <= limit; i++) {
    const li = document.createElement("li");

    if (i % 3 === 0 && i % 5 === 0) {
      li.textContent = i + " - FizzBuzz";
      li.className = "fizzbuzz";
    }
    else if (i % 3 === 0) {
      li.textContent = i + " - Fizz";
      li.className = "fizz";
    }
    else if (i % 5 === 0) {
      li.textContent = i + " - Buzz";
      li.className = "buzz";
    }
    else {
      li.textContent = i;
    }

    fizzList.appendChild(li);
  }
}

generateBtn.addEventListener("click", generateFizzBuzz);

generateFizzBuzz();