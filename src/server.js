import app from "./app.js";
import { loadEnvFile } from 'node:process';

loadEnvFile();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    if (!process.env.SUPABASE_URL) {
        console.error('Error: DB URL is Missing')
    }
    if (!process.env.SUPABASE_KEY) {
        console.error('Error: DB KEY is Missing')
    }
    if (process.env.SUPABASE_KEY && process.env.SUPABASE_URL) {
        console.log('\nEnvironment variables are all set.')
    }
    console.log(`\nServer running on http://localhost:${PORT}\nTo test, navigate to the route http://localhost:${PORT}/shops\nHappy coding.\n`)
})

