import { index, pgTable, serial, text, vector } from "drizzle-orm/pg-core";

export const documents = pgTable(
    "documents",
    {
        id: serial("id").primaryKey(),
        content: text("content").notNull(),
        embedding: vector("embedding", { dimensions: 1536 }),
    },
    (table) => [
        index("embeddingIndex").using(
            "hnsw",
            table.embedding.op("vector_cosine_ops"),
        ),
    ],
);

export type TInsertDocument = typeof documents.$inferInsert;
export type TSelectDocument = typeof documents.$inferSelect;
