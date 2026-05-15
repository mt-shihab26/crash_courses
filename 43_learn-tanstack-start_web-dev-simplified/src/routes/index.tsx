import { db } from '#/db';
import { cn } from '#/lib/utils';
import { createFileRoute } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/react-start';

import { Button } from '#/components/ui/button';
import { Checkbox } from '#/components/ui/checkbox';
import { Input } from '#/components/ui/input';
import { Label } from '#/components/ui/label';
import { Trash2 } from 'lucide-react';

const fetchTodos = createServerFn({ method: 'GET' }).handler(() => {
    return db.query.todos.findMany();
});

export const Route = createFileRoute('/')({
    component: RouteComponent,
    loader: () => fetchTodos(),
});

function RouteComponent() {
    const todos = Route.useLoaderData();

    return (
        <div className="min-h-screen bg-background py-10">
            <div className="mx-auto max-w-lg px-4">
                <h1 className="mb-8 text-3xl font-bold tracking-tight">Todos</h1>

                <form className="mb-6 flex gap-2">
                    <Input name="title" placeholder="Add a new todo..." className="flex-1" />
                    <Button type="submit">Add</Button>
                </form>

                {todos.length === 0 ? (
                    <p className="py-12 text-center text-sm text-muted-foreground">
                        No todos yet. Add one above.
                    </p>
                ) : (
                    <ul className="space-y-2">
                        {todos.map((todo) => (
                            <li
                                key={todo.id}
                                className="flex items-center gap-3 rounded-lg border bg-card px-4 py-3 shadow-sm"
                            >
                                <Checkbox
                                    id={`todo-${todo.id}`}
                                    checked={todo.completedAt != null}
                                />
                                <Label
                                    htmlFor={`todo-${todo.id}`}
                                    className={cn(
                                        'flex-1 cursor-pointer',
                                        todo.completedAt != null &&
                                            'text-muted-foreground line-through',
                                    )}
                                >
                                    {todo.title}
                                </Label>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-muted-foreground hover:text-destructive"
                                >
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </li>
                        ))}
                    </ul>
                )}

                <p className="mt-4 text-right text-xs text-muted-foreground">
                    {todos.length} item{todos.length !== 1 ? 's' : ''}
                </p>
            </div>
        </div>
    );
}
