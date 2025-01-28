import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/$id")({
    component: Post,
    loader: async context => {
        return { id: context.params.id };
    },
});

function Post() {
    const { id } = Route.useLoaderData();

    return <div>Hello {id}!</div>;
}
