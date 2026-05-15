import { TodoForm } from '#/components/screens/todos/todo-form';
import { Button } from '#/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '#/components/ui/card';
import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowLeftIcon } from 'lucide-react';

export const Route = createFileRoute('/todos/new')({
    component: RouteComponent,
});

function RouteComponent() {
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
                    <TodoForm />
                </CardContent>
            </Card>
        </div>
    );
}
