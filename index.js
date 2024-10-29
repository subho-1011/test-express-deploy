import app from "./app.js";

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${process.env.MONGODB_DB_NAME}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
})();

export default app;