import app from "./app.js";

(async () => {
    try {
        await app();
    } catch (error) {
        console.log(error);
    }
})();
