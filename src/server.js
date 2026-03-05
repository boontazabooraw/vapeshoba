import app from "./app.js";
import dotenv from 'dotenv';

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    if (!supabaseUrl) {
        console.error('Error: DB URL is Missing')
    }
    if (!supabaseKey) {
        console.error('Error: DB KEY is Missing')
    }
    if (supabaseUrl && supabaseKey) {
        console.log('\nEnvironment variables are all set.')
    }
    console.log(`\nServer running on http://localhost:${PORT}\nTo test, navigate to the route http://localhost:${PORT}/shops\nHappy coding.\n`)
})

