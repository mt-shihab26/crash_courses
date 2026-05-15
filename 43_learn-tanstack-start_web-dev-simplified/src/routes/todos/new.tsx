import { saveTodo } from '#/actions/todos';
import { TodoForm } from '#/components/screens/todos/todo-form';
import { Button } from '#/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '#/components/ui/card';
import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { ArrowLeftIcon } from 'lucide-react';

export const Route = createFileRoute('/todos/new')({
    component: RouteComponent,
});

function RouteComponent() {
    const navigate = useNavigate();
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
                        onSubmit={async (data) => {
                            try {
                                await saveTodo({ data });
                                navigate({ to: '/todos' });
                            } catch (e: any) {
                                const parsed = JSON.parse(e?.message ?? '[]') as Array<{
                                    path: string[];
                                    message: string;
                                }>;
                                const fieldErrors = Object.fromEntries(
                                    parsed.map(({ path, message }) => [path[0], message]),
                                );
                                throw Object.assign(new Error('Server validation failed'), {
                                    fieldErrors,
                                });
                            }
                        }}
                    />
                </CardContent>
            </Card>
        </div>
    );
}
