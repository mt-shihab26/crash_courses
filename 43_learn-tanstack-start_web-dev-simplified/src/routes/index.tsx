import { db } from '#/db';
import { createFileRoute } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/react-start';

import { TodosList } from '#/components/screens/todos/todos-list';

const fetchTodos = createServerFn({ method: 'GET' }).handler(() => {
    return db.query.todos.findMany();
});

export const Route = createFileRoute('/')({
    component: RouteComponent,
    loader: () => fetchTodos(),
});

function RouteComponent() {
    const todos = Route.useLoaderData();

    return <TodosList todos={todos} />;
}
