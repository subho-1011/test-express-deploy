import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Hello, Vercel! The Express app is running successfully." });
});

app.get("/test", (req, res) => {
    res.json({ message: "This is a test route on Vercel!" });
});

app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});

export default app;
