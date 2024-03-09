let player = "Mashrafi";
let age = 35;
console.log(player, age);

let player2;
player2 = "Mashrafi";
console.log(player2);
player2 = 23;
console.log(player2);


function mul(a: number, b: number) {
    return a * b;
}
console.log(mul(3, 5));


// array
let fruits = ["apple", "banana", "orange"];
let fruits2 = [];
fruits2.push(34);
fruits2.push("shihab");
console.log(fruits, fruits2);

let mixed = ["apple", 3, true, {}];
mixed.push("something"); 
mixed.push(55);
mixed.push(false); 
console.log(mixed);
mixed.push({name: "Sakib"})


// object
let person = {
    name: "Mashrafi",
    age: 35,
    is_caption: true, 
}
person.name = "Sakib";
// person.country = "Bangladesh"; // error
