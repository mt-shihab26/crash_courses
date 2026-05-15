import type { TTodo } from '#/db/schema';

import { cn } from '#/lib/utils';

import { TodoForm } from '#/components/screens/todos/todo-form';
import { Badge } from '#/components/ui/badge';
import { Button } from '#/components/ui/button';
import { Checkbox } from '#/components/ui/checkbox';
import { Label } from '#/components/ui/label';
import { Trash2 } from 'lucide-react';

export const TodosList = ({ todos }: { todos: TTodo[] }) => {
    const totalCount = todos.length;
    const completedCount = todos.filter((t) => t.completedAt).length;

    return (
        <div className="mx-auto max-w-lg px-4">
            <div className="flex justify-between">
                <h1 className="mb-8 text-3xl font-bold tracking-tight">Todos</h1>
                {totalCount > 0 && (
                    <div>
                        <Badge variant="outline">
                            {completedCount} of {totalCount} completed
                        </Badge>
                    </div>
                )}
            </div>

            <TodoForm />

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
                            <Checkbox id={`todo-${todo.id}`} checked={todo.completedAt != null} />
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
    );
};
