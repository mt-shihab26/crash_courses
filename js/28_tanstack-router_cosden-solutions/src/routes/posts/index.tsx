import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/posts/")({
    component: Posts,
});

function Posts() {
    const posts = ["post1", "post2", "post3"];

    return (
        <div className="flex flex-col">
            {posts.map(post => (
                <Link key={post} to="/posts/$id" params={{ id: post }}>
                    {post}
                </Link>
            ))}
        </div>
    );
}
