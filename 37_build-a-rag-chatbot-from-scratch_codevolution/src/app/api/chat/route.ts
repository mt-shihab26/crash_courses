import type { InferUITools, UIDataTypes } from 'ai';

import { openai } from '@ai-sdk/openai';
import { convertToModelMessages, streamText, UIMessage, tool, stepCountIs } from 'ai';
import { searchDocuments } from '@/lib/search';
import { z } from 'zod';

const tools = {
    searchKnowledgeBase: tool({
        description: 'Search the knowledge base for relevant information',
        inputSchema: z.object({
            query: z.string().describe('The search query to find relevant documents'),
        }),
        execute: async ({ query }) => {
            try {
                const results = await searchDocuments(query, 3, 0.5);
                if (results.length === 0) {
                    return 'No relevant information found in the knowledge base';
                }

                const formattedResults = results.map((r, i) => `[${i + 1}] - ${r.content}`).join('\n\n');

                return formattedResults;
            } catch (e) {
                console.log('Search error by llm:', e);
                return 'Error searching the knowledge base';
            }
        },
    }),
};

export type TChatTools = InferUITools<typeof tools>;
export type TChatMessage = UIMessage<never, UIDataTypes, TChatTools>;

export const maxDuration = 30;

const systemPrompt = `
    You are a helpful assistant with access to a knowledge base. 
    When users ask questions, search the knowledge base for relevant information.
    Always search before answering if the question might relate to uploaded documents.
    Base your answers on the search results when available.
    Give concise answers that correctly answer what the user is asking for.
    Do not flood them with all the information from the search results.
`;

export async function POST(req: Request) {
    try {
        const { messages }: { messages: UIMessage[] } = await req.json();

        const result = streamText({
            model: openai('gpt-4.1-mini'),
            system: systemPrompt,
            messages: convertToModelMessages(messages),
            tools,
            stopWhen: stepCountIs(2),
        });

        return result.toUIMessageStreamResponse();
    } catch (e: any) {
        console.error('Error streaming chat completion:', e);
        return new Response('Failed to stream chat completion', {
            status: 500,
        });
    }
}
