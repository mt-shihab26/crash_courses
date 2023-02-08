// Arrays.prototype.find()

const numbers = [1, 2, 3, 4, 5, 6, 10];

const result = numbers.find((number) => number == 5);

console.log(result);
console.log(numbers);

const result2 = numbers.find((number, index, arrays) => {
    return number == 5;
});

// own find

const _find_ = (array: number[], callback: Function) => {
    const len = array.length;
    for (let i = 0; i < len; i++) {
        if (callback(array[i], i, array) === true) return array[i];
    }
};

const result3 = _find_(numbers, (num: number, index: number, arrays: number[]) => {
    console.log(num, index, arrays, "\n\n");
    return num == 5;
});

console.log(result3);
