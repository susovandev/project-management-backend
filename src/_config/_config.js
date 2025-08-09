import dotenv from 'dotenv';
dotenv.config({ path: './.env', override: true, quiet: true });

const _config = {
    NODE_ENV: process.env.NODE_ENV.trim() || 'development',
    PORT: Number(process.env.PORT) || 4000,
    REQUEST_LIMIT: String(process.env.REQUEST_LIMIT).trim(),
    CORS_ORIGIN: process.env.CORS_ORIGIN,
};

const config = Object.freeze(_config);
export default config;
