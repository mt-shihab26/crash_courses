const num = 5;

if (num % 2 === 0) {
    console.log(num, "is diviable by 2");
}
else if (num % 5 === 0) {
    console.log(num, "is diviable by 5");
}
else {
    console.log(num, "is not diviable by 2 and 5");
}


const mark = 80;
let res;
switch (mark) {
    case 80:
        res = "A+";
        break;
    case 70:
        res = "A";
        break
    default:
        res = "<70";
        break;
}
console.log(res);


const value = num % 2 === 0 ? "even" : "odd";
console.log(value);
