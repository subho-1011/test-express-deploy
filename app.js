import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/test", (req, res) => {
    res.json({ message: "This is a test route on Vercel!" });
});

app.use((err, req, res) => {
    res.status(404).json({ message: "Route not found", error: err.message });
});

export default app;
