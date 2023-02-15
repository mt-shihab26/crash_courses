import stream from "node:stream";

// wirable stream
const writableStream = new stream.Writable({
    objectMode: true,
    write: s => {
        // console.log("writing: ", s, "\n", s.toString());
        console.log("writing: ", s);
    },
});

// writableStream.write("Write hello");

const readableStream = new stream.Readable({
    read: () => {},
    highWaterMark: 20,
    objectMode: true,
});

readableStream.on("data", chunk => {
    // console.log("reading: ", chunk, "\n", chunk.toString());
    writableStream.write(chunk);
});

const isGood = readableStream.push("Hello Stream");
console.log(isGood);

readableStream.push({ name: "shihab", age: 20 });
