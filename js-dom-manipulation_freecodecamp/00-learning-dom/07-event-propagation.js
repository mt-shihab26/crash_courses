// - 3 Phases
//     1. Event Capturing
//     2. Target
//     3. Event Bubbling

window.addEventListener("click", () => {
    console.log("Window");
}, false);

document.addEventListener("click", () => {
    console.log("Document");
}, false);

document.querySelector("#div1")
    .addEventListener("click", e => {
        // e.stopPropagation()
        console.log("Div 1");
    }, { once: true });

document.querySelector("#div2")
    .addEventListener("click", e => {
        console.log("Div 2");
    }, false);

document.querySelector("#button")
    .addEventListener("click", e => {
        e.preventDefault();
        e.target.innerText = e.target.innerText === "Clicked"
            ? "Click" : "Clicked";
        console.log(e.target.innerText);
    }, false);
