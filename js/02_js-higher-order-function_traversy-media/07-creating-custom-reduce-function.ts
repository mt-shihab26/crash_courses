const __reduce = (arr: any[], func: Function, start_value: any) => {
    let total = start_value;
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        total = func(total, arr[i]);
    }
    return total;
}


const ages2 = [33, 12, 20, 16, 5, 54, 21, 44];

const sum2 = ages2.reduce((total, cur) => total + cur, 0);
console.log(sum2);

const sum3 = __reduce(ages2, (total: any, cur: any) => total + cur, 0);
console.log(sum3);
