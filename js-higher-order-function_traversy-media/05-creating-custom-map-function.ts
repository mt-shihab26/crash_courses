const players2 = [
    { name: "Sakib", avg: 38.23 },
    { name: "Tamim", avg: 36.74 },
    { name: "Mushfiq", avg: 36.78 },
    { name: "Mahmudullah", avg: 37.12 }
]

const __map = (arr: any[], func: Function): any[] => {
    const len = arr.length;
    const newArr = [];
    for (let i = 0; i < len; i++) {
        newArr.push(func(arr[i]));
    }
    return newArr;
}

const players3 = __map(players2, (player: any) => player.avg * 2);
console.log(players3);

const nums = [1, 2, 3];
const nums2 = __map(nums, num => num * 2);
console.log(nums2);

