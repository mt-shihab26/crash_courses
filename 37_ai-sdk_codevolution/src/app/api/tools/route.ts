import type { InferUITools, UIDataTypes, UIMessage } from "ai";

import { openai } from "@ai-sdk/openai";
import { convertToModelMessages, streamText, tool, stepCountIs } from "ai";
import { z } from "zod";

const tools = {
    getWeather: tool({
        description: "Get the weather for a location",
        inputSchema: z.object({
            city: z.string().describe("The city to get the weather for"),
        }),
        execute: async ({ city }) => {
            if (city.toLowerCase().includes("tokyio")) {
                return "70F and cloudy";
            }
            if (city.toLowerCase().includes("dhaka")) {
                return "80F and sunny";
            }
            return `Unknown`;
        },
    }),
};

export type TTools = InferUITools<typeof tools>;
export type TMessage = UIMessage<never, UIDataTypes, TTools>;

export const POST = async (req: Request) => {
    try {
        const { messages }: { messages: TMessage[] } = await req.json();

        console.log("Messages: ", JSON.stringify(messages));

        const result = streamText({
            model: openai("gpt-4.1-nano"),
            messages: convertToModelMessages(messages),
            tools,
            stopWhen: stepCountIs(2),
        });

        result.usage.then((usage) => {
            console.log({
                messagesCount: messages.length,
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
            {
                status: 500,
            },
        );
    }
};
