import express from "express";
import router from './routes/shops.js';
import cors from "cors";

const app = express();

//Allow all domains and selected methods
app.use(cors({
    origin: "*",
    methods: ["GET"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use('/', router)

export default app;