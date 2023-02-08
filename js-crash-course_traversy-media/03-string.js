// String

const names = "John";
const age = 30;

// Concatenation
const full = "My name is " + names + " and I am " + age;
console.log(full);

// Template literals
const hello = `My name is ${names} and I am ${age}`;
console.log(hello);


const str = "Hello World";
const tags = "technology, computers, it, code";

// String properties
const len = str.length
console.log(len);

// String methods
const STR = str.toUpperCase();
console.log(STR);

const substr = str.substring(0, 5)
console.log(substr);

const split = str.split('');
console.log(split);
const split2 = tags.split(", ");
console.log(split2);

// Chain methods
const chain = str.substring(0, 5).toUpperCase();
console.log(chain);

