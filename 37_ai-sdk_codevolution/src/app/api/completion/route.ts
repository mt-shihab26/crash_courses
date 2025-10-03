import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

export async function POST(req: Request) {
    const prompt = req.body.prompt;

    const { text } = await generateText({
        model: openai("gpt-4.1-nano"),
        prompt,
    });

    return Response.json({ text });
}
