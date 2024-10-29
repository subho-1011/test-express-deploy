import app from "./app.js";
import mongoose from "mongoose";
// export default function handler(req, res) {
//     app(req, res);
// }

import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

(async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
        console.log(error);
    }
})();

export default app;