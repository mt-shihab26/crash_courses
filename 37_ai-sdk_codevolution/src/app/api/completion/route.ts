import { openai } from "@ai-sdk/openai";
import { generateText } from "ai";

export const POST = async (req: Request) => {
    try {
        const data = await req.json();

        const prompt = data.prompt;

        const { text } = await generateText({
            model: openai("gpt-4.1-nano"),
            prompt,
        });

        return Response.json({ text });
    } catch (e: any) {
        console.error("Error:", e);
        return Response.json(
            {
                error: e instanceof Error ? e.message : "Something went wrong",
            },
            {
                status: 500,
            },
        );
    }
};
