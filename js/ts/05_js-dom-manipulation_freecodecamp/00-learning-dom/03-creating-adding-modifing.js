const ul = document.querySelector("ul");

// Creating element
const newLi = document.createElement("li");

// Adding element
ul.append(newLi);

// Modifying text
const firstListItem = document.querySelector(".list-item");
console.log(firstListItem.innerText);
console.log(firstListItem.textContent);
console.log(firstListItem.innerHTML);

newLi.innerText = "X-men";

// Modifying Attributes
newLi.setAttribute("id", "main-heading");
newLi.removeAttribute("id");
const title = document.querySelector("#main-heading");
console.log(title.getAttribute("id"));

// Modifying Classes
newLi.classList.add("list-items");
console.log(newLi.classList.contains("list-items"));
newLi.classList.remove("list-items");
console.log(newLi.classList.contains("list-items"));

// Removing Elements 
// newLi.remove();
