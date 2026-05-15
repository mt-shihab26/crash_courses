import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const todos = sqliteTable('todos', {
    id: integer({ mode: 'number' }).primaryKey({ autoIncrement: true }),
    title: text().notNull(),
    completedAt: integer({ mode: 'timestamp' }),
    createdAt: integer({ mode: 'timestamp' }).default(sql`(unixepoch())`),
    updatedAt: integer({ mode: 'timestamp' }).default(sql`(unixepoch())`),
});

export type TTodo = typeof todos.$inferSelect;
