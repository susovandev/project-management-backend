import dotenv from 'dotenv';
dotenv.config({ path: './.env', override: true, quiet: true });

const _config = {
    SERVER: {
        NODE_ENV: process.env.NODE_ENV.trim() || 'development',
        PORT: Number(process.env.PORT) || 4000,
        REQUEST_LIMIT: String(process.env.REQUEST_LIMIT).trim(),
        CORS_ORIGIN: process.env.CORS_ORIGIN,
    },
    DATABASE: {
        MONGODB_URI: process.env.MONGODB_URI.trim(),
        MONGODB_DB_NAME: process.env.MONGODB_DB_NAME.trim(),
    },
    JWT: {
        ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET.trim(),
        ACCESS_TOKEN_EXPIRY: process.env.ACCESS_TOKEN_EXPIRY.trim(),
        REFRESH_TOKEN_SECRET: process.env.REFRESH_TOKEN_SECRET.trim(),
        REFRESH_TOKEN_EXPIRY: process.env.REFRESH_TOKEN_EXPIRY.trim(),
    },
    MAILTRAP: {
        HOST: process.env.MAILTRAP_SMTP_HOST,
        PORT: Number(process.env.MAILTRAP_SMTP_PORT),
        USER: process.env.MAILTRAP_SMTP_USER,
        PASSWORD: process.env.MAILTRAP_SMTP_PASSWORD,
    },
};

const config = Object.freeze(_config);
export default config;
