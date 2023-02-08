const add_again = (a: number, b: number, c?:number, d:number = 25): number => {
    console.log(c, d);
    return a + b;
}

console.log(add_again(23, 55));
console.log(add_again(23, 55, 100, 99));
