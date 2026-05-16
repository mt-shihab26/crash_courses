import { getTodo, updateTodo } from '#/actions/todos';
import { createFileRoute, notFound } from '@tanstack/react-router';
import { z } from 'zod';

import { TodoForm } from '#/components/screens/todos/todo-form';
import { Button } from '#/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '#/components/ui/card';
import { Link } from '@tanstack/react-router';
import { ArrowLeftIcon } from 'lucide-react';

export const Route = createFileRoute('/todos/$id/edit')({
    component: RouteComponent,
    parseParams: (params) => ({ id: z.number().parse(Number(params.id)) }),
    loader: async ({ params }) => {
        const todo = await getTodo({ data: params.id });
        if (!todo) {
            throw notFound();
        }
        return todo;
    },
});

function RouteComponent() {
    const todo = Route.useLoaderData();

    return (
        <div className="space-y-2">
            <Button asChild variant="ghost" size="sm" className="text-muted-foreground">
                <Link to="/">
                    <ArrowLeftIcon className="size-5" />
                    Todo List
                </Link>
            </Button>
            <Card>
                <CardHeader>
                    <CardTitle>Add New Todo</CardTitle>
                    <CardDescription>Create a new task to add to your todo list</CardDescription>
                </CardHeader>
                <CardContent>
                    <TodoForm
                        todo={todo}
                        onSubmit={async (data) => {
                            await updateTodo({ data: { ...data, id: todo.id } });
                        }}
                    />
                </CardContent>
            </Card>
        </div>
    );
}
