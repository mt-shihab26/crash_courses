let a: string;
let b: number;
let c: boolean;

a = "hello";
b = 23;
c = true;

console.log(a, b, c);

// array
let a2: string[];
a2 = ["shihab", "Mahamud"];

console.log(a2);

let c2: string | number; // union types
c2 = 23;
console.log(c2);
c2 = "Hello";
console.log(c2);


let b2: (string | number)[] = [];
b2.push("hello");
b2.push(23);
console.log(b2);


// object
let c3:object;
c3 = {
    name: "sumit",
    age: 34,
};

let c4: {
    name: string,
    age: number,
    adult: boolean,
};
c4 = {
    name: "Sumit",
    age: 34,
    adult: true,
};

let c5: object;
c5 = [1, 2, 3];
console.log(c5);
