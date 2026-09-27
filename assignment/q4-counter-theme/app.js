// Name: adeena akram | Roll No: 2500605
let count = 0;

const countText = document.getElementById("count");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const theme = document.getElementById("theme");


function updateCount() {
countText.textContent = count;
}

increase.addEventListener("click", function() {
count++;
updateCount();
});

decrease.addEventListener("click", function() {
if (count > 0) {
count--;
}


updateCount();


});

reset.addEventListener("click", function() {
count = 0;
updateCount();
});

theme.addEventListener("click", function() {
document.body.classList.toggle("dark");


if (document.body.classList.contains("dark")) {
    theme.textContent = "Light Mode";
}
else {
    theme.textContent = "Dark Mode";
}

});
