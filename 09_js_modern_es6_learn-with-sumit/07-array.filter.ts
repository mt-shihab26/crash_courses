const numbers = [1, 2, 3, 4, 5, 6, 10];

const results = numbers.filter((number) => number > 5);

console.log(results);
console.log(numbers);

const result2 = numbers.filter((number, index, arrays) => {
    return number > 5;
});

console.log(result2);
