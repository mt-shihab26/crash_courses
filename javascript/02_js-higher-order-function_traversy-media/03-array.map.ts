const numbers = [1, 2, 3];
const numbers2: number[] = [];

const len = numbers.length;
for (let i = 0; i < len; i++) {
    numbers2.push(numbers[i] * 2);
}
console.log(numbers2);

const numbers3 = numbers.map(number => number * 2);
console.log(numbers3);
