import { pgTable, serial, text, vector } from 'drizzle-orm/pg-core';

export const documents = pgTable('documents', {
    id: serial('id').primaryKey(),
    content: text('content').notNull(),
    embedding: vector('embedding', { dimensions: 1536 }),
});
