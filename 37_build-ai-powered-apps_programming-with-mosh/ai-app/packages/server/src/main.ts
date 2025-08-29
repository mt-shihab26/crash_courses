import { Hono } from "hono";

const app = new Hono();

app.get("/", c => {
    return c.text("Hello World");
});

app.get("/api/hello", c => {
    return c.json({ message: "Hello World" });
});

export default app;
