import { openai } from "@ai-sdk/openai";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

export const POST = async (req: Request) => {
    try {
        const { messages }: { messages: UIMessage[] } = await req.json();

        const result = streamText({
            model: openai("gpt-5-nano"),
            messages: convertToModelMessages(messages),
            providerOptions: {
                openai: {
                    reasoningSummary: "auto",
                    reasoningEffort: "low",
                },
            },
        });

        result.usage.then(usage => {
            console.log({
                messagesCount: messages.length,
                inputTokens: usage.inputTokens,
                outputTokens: usage.outputTokens,
                totalTokens: usage.totalTokens,
            });
        });

        return result.toUIMessageStreamResponse({
            sendReasoning: true,
        });
    } catch (e: any) {
        console.error("Error chat:", e);
        return new Response(e instanceof Error ? e.message : "Something went wrong", {
            status: 500,
        });
    }
};
