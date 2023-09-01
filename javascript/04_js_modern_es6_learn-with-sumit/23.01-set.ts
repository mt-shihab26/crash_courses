const log = console.log;

const st = new Set();
st.add(23);
st.add(123);
st.add(55);
st.add(55);
st.add("Hello");
st.add("good").add(99);

log(st);
log(st.has(55));
log(st.size);

st.clear();
log(st);

const arr = [1, 1, 2, 3, 4, 2, 5];
const st2 = new Set(arr);
log(st2);

const st3 = new Set("Bangladesh");
log(st3);

const arr2 = [...st3];
console.log(arr2);

const arr3 = Array.from(st3);
console.log(arr2);

log([...new Set([1, 2, 3, 3, 4, 4, 4, 5, 2, 5, 4, 3,])]);

const a = new Set([1, 2, 3]);
const b = new Set([4, 3, 2]);

const union = new Set([...a, ...b]);
log(union);

const intersection = new Set([...a].filter(x => b.has(x)));
log(intersection);

const difference = new Set([...a].filter(x => !b.has(x)));
log(difference);
