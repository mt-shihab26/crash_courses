import { openai } from "@ai-sdk/openai";
import { streamText } from "ai";

export const POST = async (req: Request) => {
    try {
        const { prompt } = await req.json();

        const result = streamText({
            model: openai("gpt-4.1-nano"),
            prompt,
        });

        result.usage.then((usage) => {
            console.log({
                inputTokens: usage.inputTokens,
                outputTokens: usage.outputTokens,
                totalTokens: usage.totalTokens,
            });
        });

        return result.toUIMessageStreamResponse();
    } catch (e: any) {
        console.error("Error streaming text:", e);
        return new Response(
            e instanceof Error ? e.message : "Something went wrong",
            { status: 500 },
        );
    }
};
