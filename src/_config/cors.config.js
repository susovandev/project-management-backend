import cors from 'cors';
import config from './_config.js';

const corsConfig = cors({
    origin: config.CORS_ORIGIN?.split(',') || 'http://localhost:5173',
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
});
export default corsConfig;
