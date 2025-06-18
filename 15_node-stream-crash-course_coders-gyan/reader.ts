import fs from "node:fs";

const readableStream = fs.createReadStream("log-tmp.txt");
readableStream.pipe(process.stdout);
