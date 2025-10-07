import { openai } from "@ai-sdk/openai";

import type { InferUITools, UIDataTypes, UIMessage } from "ai";
import {
    convertToModelMessages,
    experimental_generateImage as generateImage,
    stepCountIs,
    streamText,
    tool,
} from "ai";
import { z } from "zod";

const tools = {
    generateImage: tool({
        description: "Generate an image from a prompt",
        inputSchema: z.object({
            prompt: z.string().describe("The prompt to generate an image for"),
        }),
        execute: async ({ prompt }) => {
            const { image } = await generateImage({
                model: openai.imageModel("dall-e-3"),
                prompt,
                size: "1024x1024",
                providerOptions: {
                    openai: {
                        style: "vivid",
                        quality: "hd",
                    },
                },
            });
            return image.base64;
        },
        toModelOutput: () => {
            return {
                type: "content",
                value: [
                    {
                        type: "text",
                        text: "generated image in base64",
                    },
                ],
            };
        },
    }),
};

export type TTools = InferUITools<typeof tools>;
export type TMessage = UIMessage<never, UIDataTypes, TTools>;

export const POST = async (req: Request) => {
    try {
        const { messages }: { messages: UIMessage[] } = await req.json();

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
