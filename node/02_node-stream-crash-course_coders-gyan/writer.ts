import fs from "node:fs";

const writeableStream = fs.createWriteStream("log-tmp.txt");
process.stdin.pipe(writeableStream);
