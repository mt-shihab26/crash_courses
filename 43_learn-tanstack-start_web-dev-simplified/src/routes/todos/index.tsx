import { fetchTodos } from '#/actions/todos';
import { cn } from '#/lib/utils';
import { createFileRoute } from '@tanstack/react-router';

import { CheckmarkButton } from '#/components/screens/todos/checkmark-button';
import { DeleteButton } from '#/components/screens/todos/delete-button';
import { Badge } from '#/components/ui/badge';
import { Button } from '#/components/ui/button';
import { Label } from '#/components/ui/label';
import { Link } from '@tanstack/react-router';
import { PlugIcon } from 'lucide-react';

export const Route = createFileRoute('/todos/')({
    component: RouteComponent,
    loader: () => fetchTodos(),
});

function RouteComponent() {
    const todos = Route.useLoaderData();

    const totalCount = todos.length;
    const completedCount = todos.filter((t) => t.completedAt).length;

    return (
        <>
            <div className="flex justify-between">
                <div>
                    <h1 className="mb-8 text-3xl font-bold tracking-tight">Todos</h1>
                    {totalCount > 0 && (
                        <div>
                            <Badge variant="outline">
                                {completedCount} of {totalCount} completed
                            </Badge>
                        </div>
                    )}
                </div>
                <div>
                    <Link to="/todos/new">
                        <Button>
                            <PlugIcon className="size-5" /> Add
                        </Button>
                    </Link>
                </div>
            </div>

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
                            <CheckmarkButton todo={todo} />
                            <Label
                                className={cn(
                                    'flex-1 select-auto',
                                    todo.completedAt != null &&
                                        'text-muted-foreground line-through',
                                )}
                            >
                                {todo.title}
                            </Label>
                            <DeleteButton todo={todo} />
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
}
