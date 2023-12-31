import stream from "node:stream";

export const replaceWordProcessing = new stream.Transform({
    transform: (chunk, encoding, callback) => {
        // replaceWordProcessing.emit("error", new Error("something went wrong"));
        const finalString = chunk.toString().replaceAll(/ipsum/gi, "cool");
        console.log("Reading from transform: ", finalString, "\n\n");
        callback(null, finalString);
    },
});
export const uppercaseWordProcessing = new stream.Transform({
    transform: (chunk, encoding, callback) => {
        const finalString = chunk.toString().toUpperCase();
        console.log("Reading from transform: ", finalString, "\n\n");
        callback(null, finalString);
    },
});
