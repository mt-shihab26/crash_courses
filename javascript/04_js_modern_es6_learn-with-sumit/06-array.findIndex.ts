const numbers = [1, 2, 3, 4, 5, 6, 10];

const result = numbers.findIndex((number) => number == 5);

console.log(result);
console.log(numbers);

const result2 = numbers.findIndex((number, index, arrays) => {
    return number == 5;
});

console.log(result2);
