import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("Hello, Vercel! The Express app is running successfully.");
});

app.get("/test", (req, res) => {
    res.json({ message: "This is a test route on Vercel!" });
});

export default app;