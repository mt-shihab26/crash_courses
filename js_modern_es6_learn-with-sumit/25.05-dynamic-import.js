(async () => {
    const { add } = await import("./calc.js");
    console.log(add(234, 55));
})();

import("./calc.js")
    .then(({ add }) => {
        console.log(add(234, 55));
    });