import app from "./app.js";

export default function handler(req, res) {
    app(req, res);  // Pass the request to the Express app
}
