let add_signature: (x: number, y: number) => number;

add_signature = (a, b) => {
    return a + b;
}

console.log(add_signature(23, 55));


let userDetails2: (id: number | string, userInfo: { name: string, age: number }) => void;

userDetails2 = (id2, userInfo2) => {
    console.log(id2, userInfo2);
}

userDetails2(234, { name: "Shihab", age: 19 });
