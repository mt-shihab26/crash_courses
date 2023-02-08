const numbers = [1, 2, 3, 4, 5];
const _length = numbers.length;

for (let i = 0; i < _length; i++) {
    console.log(numbers[i]);
}

const language = {
    name: "JavaScript",
    estd: "1995",
    founder: "Brendan Eich"
}

for (let number in numbers) {
    console.log(number);
}

for (let number of numbers) {
    console.log(number);
}