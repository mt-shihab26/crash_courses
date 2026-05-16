import { db } from '#/db';
import { todos } from '#/db/schema';
import { createServerFn } from '@tanstack/react-start';
import { eq } from 'drizzle-orm';
import { z } from 'zod';

export const fetchTodos = createServerFn({ method: 'GET' }).handler(() => {
    return db.query.todos.findMany();
});

export const todoFormSchema = z.object({
    title: z
        .string()
        .min(5, 'todo title must be at least 5 characters.')
        .max(255, 'todo title must be at most 255 characters.'),
});

export const saveTodo = createServerFn({ method: 'POST' })
    .inputValidator(todoFormSchema)
    .handler(({ data }) => {
        return db.insert(todos).values(data);
    });

export const deleteTodo = createServerFn({ method: 'POST' })
    .inputValidator(z.number())
    .handler(({ data: todoId }) => {
        return db.delete(todos).where(eq(todos.id, todoId));
    });

export const getTodo = createServerFn({ method: 'POST' })
    .inputValidator(z.number())
    .handler(async ({ data: todoId }) => {
        return await db.query.todos.findFirst({ where: eq(todos.id, todoId) });
    });

export const toggleComplete = createServerFn({ method: 'POST' })
    .inputValidator(z.number())
    .handler(async ({ data: todoId }) => {
        const todo = await getTodo({ data: todoId });
        return db
            .update(todos)
            .set({ completedAt: todo?.completedAt ? null : new Date() })
            .where(eq(todos.id, todoId));
    });

export const updateTodo = createServerFn({ method: 'POST' })
    .inputValidator(todoFormSchema && z.object({ id: z.number() }))
    .handler(async ({ data }) => {
        return db.update(todos).set({ title: data.title }).where(eq(todos.id, data.id));
    });
