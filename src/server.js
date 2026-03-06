import app from "./app.js";
import dotenv from 'dotenv';
import cors from "cors";

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const PORT = process.env.PORT || 3000;


app.use(cors());
//Allow all domains and selected methods
app.use(cors({
    origin: "*",
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

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
    console.log(`\nServer running on http://localhost:${PORT}\nTo test, navigate to the route http://localhost:${PORT}\nHappy coding.\n`)
})

