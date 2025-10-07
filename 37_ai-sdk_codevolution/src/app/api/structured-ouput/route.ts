import { openai } from "@ai-sdk/openai";
import { streamObject } from "ai";
import { recipeSchema } from "./schema";

export const POST = async (req: Request) => {
    try {
        const { dish } = await req.json();

        const result = streamObject({
            model: openai("gpt-4.1-nano"),
            schema: recipeSchema,
            prompt: `Generate a recipe ${dish}`,
        });

        result.usage.then((usage) => {
            console.log({
                inputTokens: usage.inputTokens,
                outputTokens: usage.outputTokens,
                totalTokens: usage.totalTokens,
            });
        });

        return result.toTextStreamResponse();
    } catch (e: any) {
        console.error("Error generating recipe:", e);
        return new Response(
            e instanceof Error ? e.message : "Error generating recipe",
            { status: 500 },
        );
    }
};
