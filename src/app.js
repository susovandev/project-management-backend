import express from 'express';
import config from './_config/_config.js';
import corsConfig from './_config/cors.config.js';

const app = express();

/**
 * @middlewares
 */
app.use(corsConfig);
app.use(express.json({ limit: config.SERVER.REQUEST_LIMIT, strict: true }));
app.use(
    express.urlencoded({ extended: true, limit: config.SERVER.REQUEST_LIMIT }),
);

/**
 * @import routes
 */
import healthCheckRoutes from './routes/healthCheck.routes.js';
app.use('/api/v1/health-check', healthCheckRoutes);
export { app };
