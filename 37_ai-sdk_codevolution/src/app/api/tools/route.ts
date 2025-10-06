import type { InferUITools, UIDataTypes, UIMessage } from "ai";

import { openai } from "@ai-sdk/openai";
import { convertToModelMessages, streamText, tool, stepCountIs } from "ai";
import { z } from "zod";
import { getWeather } from "@/tools/get-weather";
import { getLocation } from "@/tools/get-location";

const tools = {
    getLocation: tool({
        description: "Get the location of a person",
        inputSchema: z.object({ name: z.string().describe("The name of a person") }),
        execute: async ({ name }) => getLocation(name),
    }),
    getWeather: tool({
        description: "Get the weather for a location",
        inputSchema: z.object({ city: z.string().describe("The city to get the weather for") }),
        execute: ({ city }) => getWeather(city),
    }),
};

export type TTools = InferUITools<typeof tools>;
export type TMessage = UIMessage<never, UIDataTypes, TTools>;

export const POST = async (req: Request) => {
    try {
        const { messages }: { messages: TMessage[] } = await req.json();

        const result = streamText({
            model: openai("gpt-4.1-nano"),
            messages: convertToModelMessages(messages),
            tools,
            stopWhen: stepCountIs(3),
        });

        result.usage.then(usage => {
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
        return new Response(e instanceof Error ? e.message : "Something went wrong", {
            status: 500,
        });
    }
};
