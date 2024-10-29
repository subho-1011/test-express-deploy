import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/test", (req, res) => {
    res.json({ message: "This is a test route on Vercel!" });
});

app.get("/hello/:name", (req, res) => {
    const { name } = req.params;
    res.send(`Hello, ${name}!`);
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

export default app;
