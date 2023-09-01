function hello2() {
    return function () {
        console.log("Hello World");
    };
}

hello2()();
