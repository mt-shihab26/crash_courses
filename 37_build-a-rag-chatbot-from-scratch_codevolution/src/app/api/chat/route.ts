import { openai } from '@ai-sdk/openai';
import { convertToModelMessages, streamText, UIMessage } from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
    try {
        const { messages }: { messages: UIMessage[] } = await req.json();

        const result = streamText({
            model: openai('gpt-4.1-mini'),
            system: 'You are a helpful assistant.',
            messages: convertToModelMessages(messages),
        });

        return result.toUIMessageStreamResponse();
    } catch (e: any) {
        console.error('Error streaming chat completion:', e);
        return new Response('Failed to stream chat completion', { status: 500 });
    }
}
