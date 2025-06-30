import fs from "node:fs";
import http from "node:http";
import { replaceWordProcessing, uppercaseWordProcessing } from "./processor";
import stream from "node:stream";

const root = (res: http.ServerResponse) => {
    // with bad way
    // const file = readFileSync("sample-tmp.txt");
    // return res.end(file);

    // with good way
    const readableStream = fs.createReadStream("sample-tmp.txt");
    // readable stream-> writeable stream
    readableStream.pipe(res);
};

const video = (res: http.ServerResponse) => {
    const readableStream = fs.createReadStream("reddit-clone-tmp.mp4");
    res.writeHead(200, { "Content-Type": "video/mp4" });
    readableStream.pipe(res);
};

const copy = () => {
    // copy big file with bad way
    // const file = readFileSync("sample-tmp.txt");
    // writeFileSync("output-tmp.txt", file);

    // copy big file with good way
    const readStream = fs.createReadStream("sample-tmp.txt");
    const writeStream = fs.createWriteStream("output-tmp.txt");

    readStream.on("data", chunk => {
        console.log("chunk: ", chunk.toString(), "\n\n");
        writeStream.write(chunk);
    });
};

const stringProcessing = () => {
    const sampleFileStream = fs.createReadStream("sample-tmp.txt");
    const outputWritableStream = fs.createWriteStream("output2-tmp.txt");

    // sampleFileStream.on("data", chunk => {
    //     console.log("Data received: ", chunk.toString());
    //     // process
    //     const upperString = chunk.toString().toUpperCase();
    //     const finalString = upperString.replaceAll(/ipsum/gi, "cool");

    //     // writable stream write
    //     outputWritableStream.write(finalString);
    // });
    // sampleFileStream.pipe(outputWritableStream);

    // sampleFileStream
    //     .pipe(replaceWordProcessing)
    //     .on("error", e => {
    //         console.log(e);
    //     })
    //     .pipe(uppercaseWordProcessing)
    //     .on("error", e => {
    //         console.log(e);
    //     })
    //     .pipe(outputWritableStream)
    //     .on("error", e => {
    //         console.log(e);
    //     });
    stream.pipeline(
        sampleFileStream,
        replaceWordProcessing,
        uppercaseWordProcessing,
        outputWritableStream,
        e => {
            if (e) {
                console.log("here", e);
            }
        }
    );
};

const handler = (req: http.IncomingMessage, res: http.ServerResponse) => {
    if (req.url === "/favicon.ico") {
        return res.end();
    }
    console.log("request coming", req.url);

    if (req.url === "/video") {
        console.log("stream video");
        video(res);
        return;
    }
    if (req.url === "/copy") {
        console.log("coping sample-tmp.txt to output-tmp.txt");
        copy();
        return res.end();
    }
    if (req.url === "/string-process") {
        console.log("processing strings");
        stringProcessing();
        return res.end();
    }
    if (req.url !== "/") {
        return res.end();
    }
    root(res);
    return;
};

const PORT = process.env.PORT || 5700;

const server = http.createServer(handler);

server.listen(PORT, () => {
    console.log(`Listening on http://localhost:${PORT}`);
});
