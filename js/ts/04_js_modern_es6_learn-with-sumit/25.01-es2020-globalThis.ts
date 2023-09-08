// from ES2020 we can use globalThis
globalThis.setTimeout(() => console.log("Hello"), 100);

// window === globalThis // true in browser
// global === globalThis // true in node
