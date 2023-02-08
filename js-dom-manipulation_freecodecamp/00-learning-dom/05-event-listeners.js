// element.addEventListener("click", function);
const btn2 = document.querySelector("#btn-2");
const func = e => { alert("Second Alert"); }
btn2.addEventListener("click", func);

// Mouseover
const eventText = document.querySelector("#event-text");
eventText.addEventListener("mouseover", e => {
    eventText.style.backgroundColor = "blue";
});
