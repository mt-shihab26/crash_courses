const incrementButton = document.querySelector("#increment-button");
const countDisplay = document.querySelector("#count-display");
const incrementButton2 = document.querySelector("#increment-button2");
const countDisplay2 = document.querySelector("#count-display2");

let count = 0;
let increment = 1;
let count2 = 0;
let increment2 = 1;

const incrementCount = event => {
    count += increment;
    countDisplay.innerText = count;
}

const displayCountOnClick = event => {
    increment = count;
    if (increment <= 0) increment = 1;
    incrementButton.innerText = "+" + increment;
}

const incrementCount2 = event => {
    count2 += increment2;
    countDisplay2.innerText = count2;
}

const displayCountOnClick2 = event => {
    increment2 = count2;
    if (increment2 <= 0) increment2 = 1;
    incrementButton2.innerText = "+" + increment2;
}

incrementButton.addEventListener("click", incrementCount);
countDisplay.addEventListener("click", displayCountOnClick);
incrementButton2.addEventListener("click", incrementCount2);
countDisplay2.addEventListener("click", displayCountOnClick2);
