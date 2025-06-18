const numbers = [1, 2, 3, 4, 5, 6];
const newNumbers = [...numbers, 6, 7, 8, 9];
console.log(newNumbers);

const numbers2 = [...numbers]; // exact copy


const obj = {
    x: 123,
    y: 234,
};
const obj2 = {
    x: 222,
    a: 23423
};
const newObj = { ...obj2, ...obj };

console.log(newObj);