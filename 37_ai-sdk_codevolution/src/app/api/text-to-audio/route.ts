import { openai } from "@ai-sdk/openai";
import { experimental_generateSpeech as generateSpeech } from "ai";

export const POST = async (req: Request) => {
    try {
        const { text } = await req.json();

        const { audio } = await generateSpeech({
            model: openai.speech("tts-1"),
            text,
        });

        return new Response(audio.uint8Array as any, {
            headers: {
                "Content-Type": audio.mediaType || "audio/mpeg",
            },
        });
    } catch (e: any) {
        console.error("Error transcribing audio:", e);
        return new Response("Failed to transcribe audio", { status: 500 });
    }
};
