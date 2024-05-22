const btn = document.querySelector(".btn");
const from = document.querySelector("#my-form");
const body = document.querySelector("body");
const items = document.querySelector(".items");


btn.addEventListener("mouseout", event => {
    event.preventDefault();
    items.lastElementChild.innerHTML = "<h1>Hello</h1>";
});