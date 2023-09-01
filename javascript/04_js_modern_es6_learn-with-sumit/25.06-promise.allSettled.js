const promise1 = new Promise(resolve => resolve("barger"));
const promise2 = new Promise((_, reject) => reject("Apple"));
const promise3 = new Promise(resolve => resolve("Pigga"));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));
    