import { openai } from "@ai-sdk/openai";
import { experimental_generateImage as generateImage } from "ai";

export const POST = async (req: Request) => {
    try {
        const { prompt } = await req.json();

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

        return Response.json(image.base64);
    } catch (e: any) {
        console.error("Error image generating:", e);
        return new Response(
            e instanceof Error ? e.message : "Something went wrong",
            { status: 500 },
        );
    }
};
