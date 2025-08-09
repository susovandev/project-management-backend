import dotenv from 'dotenv';
dotenv.config({ path: './.env', override: true, quiet: true });

const _config = {
    NODE_ENV: process.env.NODE_ENV.trim() || 'development',
    PORT: process.env.PORT || 4000,
};

const config = Object.freeze(_config);
export default config;
