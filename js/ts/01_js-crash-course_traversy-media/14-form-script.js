const form = document.querySelector("#my-form");
const namc = document.querySelector("#name");
const email = document.querySelector("#email");
const users = document.querySelector("#users");
const msg = document.querySelector("#msg");


form.addEventListener("submit", event => {
    event.preventDefault();
    if (namc.value !== "" && email.value !== "") {
        addItem(namc.value, email.value);
        namc.value = "";
        email.value = "";
    }
    else {
        msg.classList.add("error");
        msg.innerHTML = "Please enter all fields";
        setTimeout(() => msg.remove(), 2000);
    }
});

const addItem = (name, email) => {
    const item = document.createElement('li');
    item.textContent = `${name}, ${email}`
    item.className = "item";
    users.appendChild(item);
}
