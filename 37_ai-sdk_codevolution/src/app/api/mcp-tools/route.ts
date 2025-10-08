import {
    convertToModelMessages,
    stepCountIs,
    streamText,
    tool,
    experimental_createMCPClient as createMCPClient,
} from "ai";

import type { InferUITools, UIDataTypes, UIMessage } from "ai";

import { openai } from "@ai-sdk/openai";
import { z } from "zod";
import { getLocation } from "@/tools/get-location";
import { getWeather } from "@/tools/get-weather";
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js";

const tools = {
    getLocation: tool({
        description: "Get the location of a person",
        inputSchema: z.object({
            name: z.string().describe("The name of a person"),
        }),
        execute: async ({ name }) => getLocation(name),
    }),
    getWeather: tool({
        description: "Get the weather for a location",
        inputSchema: z.object({
            city: z.string().describe("The city to get the weather for"),
        }),
        execute: ({ city }) => getWeather(city),
    }),
};

export type TTools = InferUITools<typeof tools>;
export type TMessage = UIMessage<never, UIDataTypes, TTools>;

export const POST = async (req: Request) => {
    try {
        const { messages }: { messages: TMessage[] } = await req.json();

        const httpTransport = new StreamableHTTPClientTransport(
            new URL(process.env.MCP_SERVER_URL!),
            {
                requestInit: {
                    headers: {
                        Authorization: `Bearer ${process.env.MCP_BEARER_TOKEN}`,
                    },
                },
            },
        );

        const mcpClient = await createMCPClient({ transport: httpTransport });

        const mcpTools = await mcpClient.tools();

        console.log("MCP Tools available:", Object.keys(mcpTools));
        console.log("Local tools available:", Object.keys(tools));
        console.log("Combined tools:", Object.keys({ ...mcpTools, ...tools }));

        const result = streamText({
            model: openai("gpt-4.1-nano"),
            messages: convertToModelMessages(messages),
            tools: { ...mcpTools, ...tools },
            stopWhen: stepCountIs(3),
            onFinish: async () => {
                await mcpClient.close();
            },
            onError: async error => {
                await mcpClient.close();
                console.log("Error during streaming: ", error);
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

        return result.toUIMessageStreamResponse();
    } catch (e: any) {
        console.error("Error chat:", e);
        return new Response(e instanceof Error ? e.message : "Something went wrong", {
            status: 500,
        });
    }
};
