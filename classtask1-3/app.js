// Lab Task 03 - Interactive Grade Calculator

// Step 1: Select the elements we need
const nameInput = document.getElementById("name");
const marksInput = document.getElementById("marks");
const calcBtn = document.getElementById("calcBtn");
const result = document.getElementById("result");

// Returns the grade for the given marks
function getGrade(marks) {
  if (marks >= 85) {
    return "A";
  } else if (marks >= 70) {
    return "B";
  } else if (marks >= 50) {
    return "C";
  } else {
    return "F";
  }
}

// Shows a message in the result box with the given style (pass / fail / error)
function showResult(message, type) {
  result.textContent = message;
  result.className = type;
}

// Step 2: Run this code when the button is clicked
calcBtn.addEventListener("click", () => {
  // Step 3: Read the values (.value always gives a string)
  const studentName = nameInput.value.trim();
  const marksText = marksInput.value;
  const marks = Number(marksText);

  // Bonus: validation
  if (studentName === "") {
    showResult("Please enter the student's name.", "error");
    return;
  }

  if (marksText === "" || marks < 0 || marks > 100) {
    showResult("Please enter marks between 0 and 100.", "error");
    return;
  }

  // Step 4: Find the grade
  const grade = getGrade(marks);

  // Step 5: Build the message with a template literal
  const message = `${studentName} scored ${marks} → Grade ${grade}`;

  // Step 6: Green for pass, red for fail
  if (grade === "F") {
    showResult(message, "fail");
  } else {
    showResult(message, "pass");
  }
});