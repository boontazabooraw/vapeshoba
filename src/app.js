import express from "express";
import router from './routes/shops.js';
import cors from "cors";
import rateLimit from "express-rate-limit";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Allow all domains and selected methods
app.use(cors({
    origin: "*",
    methods: ["GET"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// Rate Limiting in production
if (process.env.NODE_ENV === 'production') {
    const limiter = rateLimit({
        windowMs: 15 * 6 * 1000,
        max: 50,
        statusCode: 429,
        standardHeaders: true,
        legacyHeaders: false,
        message: { error: `Error ${statusCode}: Woah woah woah slow down buddy...` }
    });
    app.use(limiter);
}

app.use('/', router)

export default app;