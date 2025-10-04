import { openai } from "@ai-sdk/openai";
import { generateObject } from "ai";

export const POST = async (req: Request) => {
    try {
        const { pokemonName } = await req.json();

        const result = await generateObject({
            model: openai("gpt-4.1-mini"),
            output: "enum",
            enum: ["positive", "negative", "neutral"],
            prompt: `Generate details for ${pokemonName || "a random"} pokemon. Include name, type (must be one of the valid pokemon types), and a brief description.`,
        });

        return result.toJsonResponse();
    } catch (e: any) {
        console.error("Error:", e);
        return new Response(
            e instanceof Error ? e.message : "Something went wrong",
            { status: 500 },
        );
    }
};
