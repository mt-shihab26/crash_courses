const ages3 = [33, 12, 20, 16, 5, 54, 21, 44];

const result = ages3
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((total, cur) => total + cur, 0);

console.log(result);