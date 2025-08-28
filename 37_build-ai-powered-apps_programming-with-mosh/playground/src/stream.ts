import OpenAI from "openai";

const client = new OpenAI({ apiKey: Bun.env.OPENAI_API_KEY });

const stream = await client.responses.create({
    model: "gpt-4o-mini",
    input: "Write a story about a robot",
    temperature: 0.7,
    max_output_tokens: 50,
    stream: true,
});

for await (const event of stream) {
    // @ts-ignore
    if (event.delta) {
        // @ts-ignore
        await Bun.stdout.write(event.delta);
    }
}
