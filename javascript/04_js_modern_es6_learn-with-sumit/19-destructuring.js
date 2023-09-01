const user = {
    id: 399,
    name: "Sakib",
    age: 35,
    // education: {
    // degree: "Masters",
    // }
}

const { id, good, name: title } = user;
const good2 = user.good
const good3 = user["good"]
console.log(id, good, good2, good3, title);

const { education: { degree } = {} } = user;
console.log(degree);


const numbers = [1, 2, 3, 4, 5, 6, [100, 500]];

const [, a, , , b] = numbers;
console.log(a, b);

const [, , , , , , [, fiveH]] = numbers;
console.log(fiveH);

let a2 = 1, b2 = 2;

// swap
[b2, a2] = [a2, b2];
console.log(a2, b2);