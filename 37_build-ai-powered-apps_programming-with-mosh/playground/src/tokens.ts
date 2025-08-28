import { get_encoding } from "tiktoken";

const prompt = "Hello World, This is the first text token for tiktoken";

const tokens = get_encoding("cl100k_base").encode(prompt);

console.log(tokens);
