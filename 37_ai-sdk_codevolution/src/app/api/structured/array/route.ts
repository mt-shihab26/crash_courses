import { openai } from "@ai-sdk/openai";
import { streamObject } from "ai";
import { pokemonSchema } from "./schema";

export const POST = async (req: Request) => {
    try {
        const { type } = await req.json();

        const result = streamObject({
            model: openai("gpt-4.1-nano"),
            output: "array",
            schema: pokemonSchema,
            prompt: `Generate a list of 5 ${type} pokemon`,
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
        console.error("Error:", e);
        return new Response(
            e instanceof Error ? e.message : "Something weng wrong",
            { status: 500 },
        );
    }
};
