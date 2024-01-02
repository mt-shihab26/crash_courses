import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [{ title: "Remix Blog" }, { name: "description", content: "A Blog for Learning Redmix" }];
};

const Index = () => {
    return <div>hello</div>;
};

export default Index;
