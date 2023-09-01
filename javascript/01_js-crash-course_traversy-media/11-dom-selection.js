// DOM Selection

console.log(window);

// Single element Selection
const from = document.getElementById("my-form");
console.log(from);
console.dir(from);

const container = document.querySelector(".container")
console.log(container);

// Multiple element
console.log(document.getElementsByClassName("item"));
console.log(document.getElementsByTagName("li"));
console.log(document.querySelectorAll(".item"));

const items = document.querySelectorAll(".item");

for (let i = 0; i < items.length; i++) {
    console.log(items[i]);
}

items.forEach(item => console.log(item));