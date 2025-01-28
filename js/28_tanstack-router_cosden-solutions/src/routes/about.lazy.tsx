import { createLazyFileRoute } from "@tanstack/react-router";

const About = () => {
    return <div>Hello "/about"!</div>;
};

export const Route = createLazyFileRoute("/about")({
    component: About,
});
