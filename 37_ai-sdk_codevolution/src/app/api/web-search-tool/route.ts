import { openai } from "@ai-sdk/openai";
import type { InferUITools, UIDataTypes, UIMessage } from "ai";
import { convertToModelMessages, streamText } from "ai";

const tools = {
    web_search_preview: openai.tools.webSearch({}),
};

export type TTools = InferUITools<typeof tools>;
export type TMessage = UIMessage<never, UIDataTypes, TTools>;

export const POST = async (req: Request) => {
    try {
        const { messages }: { messages: TMessage[] } = await req.json();

        const result = streamText({
            model: openai("gpt-4o-mini"),
            messages: convertToModelMessages(messages),
            tools,
        });

        result.usage.then((usage) => {
            console.log({
                messagesCount: messages.length,
                inputTokens: usage.inputTokens,
                outputTokens: usage.outputTokens,
                totalTokens: usage.totalTokens,
            });
        });

        return result.toUIMessageStreamResponse({ sendSources: true });
    } catch (e: any) {
        console.error("Error chat:", e);
        return new Response(
            e instanceof Error ? e.message : "Something went wrong",
            {
                status: 500,
            },
        );
    }
};
