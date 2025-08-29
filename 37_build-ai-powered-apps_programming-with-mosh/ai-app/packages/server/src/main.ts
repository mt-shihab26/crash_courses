import { Hono } from "hono";
import { OPENAI_API_KEY } from "./env";

const app = new Hono();

app.get("/", c => {
    return c.text(OPENAI_API_KEY);
});

export default app;
