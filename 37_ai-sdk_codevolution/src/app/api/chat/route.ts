import { openai } from "@ai-sdk/openai";
import { convertToModelMessages, streamText, UIMessage } from "ai";

export const POST = async (req: Request) => {
    try {
        const { messages, prompt }: { messages: UIMessage[]; prompt: any } =
            await req.json();

        const result = streamText({
            model: openai("gpt-4.1-nano"),
            messages: convertToModelMessages(messages),
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
        console.error("Error chat:", e);
        return new Response(
            e instanceof Error ? e.message : "Something went wrong",
            { status: 500 },
        );
    }
};
