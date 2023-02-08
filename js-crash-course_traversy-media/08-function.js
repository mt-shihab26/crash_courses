function add(num1, num2) {
    return num1 + num2;
}

function add2(num1 = 1, num2 = 1) {
    return num1 + num2;
}

// fat arrow function

const add3 = (num1, num2) => num1 + num2;

console.log(add());
console.log(add(5, 6));

console.log(add2());
console.log(add2(5, 6));

console.log(add3(5, 100));
