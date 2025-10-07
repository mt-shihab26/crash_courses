import { openai } from "@ai-sdk/openai";
import { convertToModelMessages, streamText, type UIMessage } from "ai";

export const POST = async (req: Request) => {
    try {
        const { messages }: { messages: UIMessage[] } = await req.json();

        const result = streamText({
            model: openai("gpt-4.1-nano"),
            messages: [
                // {
                //     role: 'system',
                //     // content: 'You are a helpful conding assistant. Keep responses under 3 sentences and focus on practical examples',
                //     content: 'You are a friendly teacher who explains concepts using simple analogies. Always relate technical concepts to everyday experiences',
                // },
                {
                    role: "system",
                    content:
                        "Convert user questions about React into code examples.",
                },
                {
                    role: "user",
                    content: "How to toggle a boolean?",
                },
                {
                    role: "assistant",
                    content:
                        "const [isOpen, setIsOpen] = useState(false); const toggle = () => setIsOpen(prev => !prev)",
                },
                ...convertToModelMessages(messages),
            ],
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
            { status: 500 },
        );
    }
};
