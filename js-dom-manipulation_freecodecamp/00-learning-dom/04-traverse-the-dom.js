// Parent Node Traversal
const ul = document.querySelector("ul");

console.log(ul);
console.log(ul.parentNode);
console.log(ul.parentElement);
console.log(ul.parentElement.parentElement);

const html = document.querySelector("html");

console.log(html.parentNode);
console.log(html.parentElement);

// Child Node Traversal

console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);
ul.childNodes[1].style.backgroundColor = "blue";

console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);

// Sibling Node Traversal

console.log(ul.previousSibling);
console.log(ul.nextSibling);

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
