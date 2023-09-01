const log = console.log;

// Falsy: false, 0, "", null, undefined, NaN

let myVar = NaN;

if (myVar) {
    log("I am Truthy");
} else {
    log("I am Falsy");
}