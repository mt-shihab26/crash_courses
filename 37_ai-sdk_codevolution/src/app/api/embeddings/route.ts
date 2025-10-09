import { openai } from "@ai-sdk/openai";
import { embed, embedMany } from "ai";

// curl -X POST http://localhost:3000/api/embeddings -H "Content-Type: application/json" -d '{ "text": "story about spaces" }'
// curl -X POST http://localhost:3000/api/embeddings -H "Content-Type: application/json" -d '{ "texts": ["story about spaces", "marvel movies"] }'

export const POST = async (req: Request) => {
    const body = await req.json();

    if (Array.isArray(body?.texts)) {
        const { values, embeddings, usage } = await embedMany({
            model: openai.textEmbedding("text-embedding-3-small"),
            values: body.texts,
        });

        return Response.json({
            values,
            embeddings,
            usage,
            dimensions: embeddings.map(e => e.length),
        });
    }

    const { value, embedding, usage } = await embed({
        model: openai.textEmbedding("text-embedding-3-small"),
        value: body.text,
    });

    return Response.json({
        value,
        embedding,
        usage,
        dimensions: embedding.length,
    });
};
