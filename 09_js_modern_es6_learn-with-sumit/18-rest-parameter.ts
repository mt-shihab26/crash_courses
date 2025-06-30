const add = (a: number, ...numbers: number[]) => {
    console.log(numbers);
    return numbers.reduce((total, current) => total + current, a);
}

let res = add(1, 2, 3, 5, 5);
console.log(res);

res = add(1, 2, 3);
console.log(res);