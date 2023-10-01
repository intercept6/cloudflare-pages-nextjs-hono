import { Hono } from "hono";

export const runtime = "edge";

const app = new Hono().basePath("/api");

app.get("/hello", (c) => c.text("Hello World!"));
app.post("/hello", (c) => c.json({ message: "Hello World!" }));

export const GET = app.fetch;
export const POST = app.fetch;
