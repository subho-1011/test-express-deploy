import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();

const CORS_ORIGINS = ["http://localhost:5173", "http://localhost:3000"];

app.use(
    cors({
        origin: CORS_ORIGINS,
        credentials: true,
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(cookieParser());

app.listen(8000, () => {
    console.log("Server started on port 3000");
});

app.get("/", (req, res) => {
    res.send("Hello World!");
});

import { login } from "./controllers/auth.js";

// log in
app.get("/login", login);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!");
});

export default app;
