import app from "./app.js";

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`\nServer running on http://localhost:${PORT}\nTo test, navigate to the route /shops\nHappy coding.\n`)
})