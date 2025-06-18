// ES6 Arrow Function
function number() {
    return 10;
}

console.log(number());

const number2 = () => {
    return 10;
}

console.log(number2());


const number3 = () => 10;

console.log(number3());


const number4 = num => num * 10;

console.log(number4(120));


const number5 = (num, num2) => num + num2;

console.log(number5(10, 22));


const javaScript = {
    name: "JavaScript",
    libraries: ["React", "Angular", "Vue"],
    printLibraries: function () {
        this.libraries.forEach(element => {
            console.log(`${this.name} loves ${element}`)
        });
    }
}

javaScript.printLibraries();


function Person(name) {
    this.name = name;
}

const sakib = new Person("Sakib");

console.log(sakib);
