// Array - variables that hold multiple values

const numbers0 = new Array(1, 2, 3, 4, 5, 6);
console.log(numbers0);

const fruits = ["apples", "oranges", "pears", 10, true];
console.log(fruits);

console.log(fruits[0], fruits[2])

fruits[2] = "grapes";
console.log(fruits);

// Properties
const len = fruits.length;
console.log(len);

// Functions / Methods
fruits.push("mangos");
console.log(fruits);

fruits.unshift("strewberries");
console.log(fruits);

fruits.pop();
console.log(fruits);

let isArray = Array.isArray(fruits);
console.log(isArray);
isArray = Array.isArray("something");
console.log(isArray);

const index = fruits.indexOf("oranges");
console.log(index);
