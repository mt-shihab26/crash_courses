import OpenAI from "openai";

const client = new OpenAI({ apiKey: Bun.env.OPENAI_API_KEY });

const response = await client.responses.create({
    model: "gpt-4o-mini",
    input: "Write a story about a robot",
    temperature: 0.7,
    max_output_tokens: 50,
});

console.log(response);
