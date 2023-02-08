const revealBtn = document.querySelector("#reveal-btn");
const hiddenContent = document.querySelector("#hidden-content");

revealBtn.addEventListener("click", e => {
    hiddenContent.style.display = hiddenContent.style.display === "block" ? "none" : "block";
    revealBtn.innerText = hiddenContent.style.display === "none" ? "Reveal More" : "Reveal Less";
});
