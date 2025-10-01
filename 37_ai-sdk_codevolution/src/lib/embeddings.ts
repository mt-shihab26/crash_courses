import { openai } from "@ai-sdk/openai";
import { embed, Embedding, embedMany } from "ai";

export const generateEmbedding = async (text: string): Promise<Embedding> => {
    const value = text.replace("\n", " ");

    const { embedding } = await embed({
        model: openai.textEmbeddingModel("text-embedding-3-small"),
        value,
    });

    return embedding;
};

export const generateEmbeddings = async (
    texts: string[],
): Promise<Embedding[]> => {
    const values = texts.map((text) => text.replace("\n", " "));

    const { embeddings } = await embedMany({
        model: openai.textEmbeddingModel("text-embedding-3-small"),
        values,
    });

    return embeddings;
};
