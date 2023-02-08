let largest_number = Number.MAX_SAFE_INTEGER;
largest_number += 1;
let largest_number2 = BigInt(largest_number) + 1n;

console.log(largest_number);
console.log(largest_number2);