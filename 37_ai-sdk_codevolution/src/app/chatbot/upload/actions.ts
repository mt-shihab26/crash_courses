"use server";

import pdfParse from "pdf-parse";
import { chunkContent } from "@/lib/chunking";
import { db } from "@/lib/db";
import { generateEmbeddings } from "@/lib/embeddings";
import { documents } from "@/lib/schema";

export const processPDFFile = async (formData: FormData) => {
    try {
        const file = formData.get("pdf") as File;
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        const data = await pdfParse(buffer);

        if (!data.text || data.text.trim().length === 0) {
            return {
                success: false,
                error: "No text found in PDF",
            };
        }

        const chunks = await chunkContent(data.text);
        const embeddings = await generateEmbeddings(chunks);

        const records = chunks.map((chunk, index) => ({
            content: chunk,
            embedding: embeddings[index],
        }));

        await db.insert(documents).values(records);

        return {
            success: true,
            message: `Created ${records.length} searchable chunks`,
        };
    } catch (e: any) {
        console.error("PDF processing error:", e);
        return {
            success: false,
            error: "Failed to process PDF",
        };
    }
};
