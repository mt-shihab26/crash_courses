import { db } from '#/db';
import { createFileRoute } from '@tanstack/react-router';
import { createServerFn } from '@tanstack/react-start';

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
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>{todo.title}</div>
            ))}
        </div>
    );
}
