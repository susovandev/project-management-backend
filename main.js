import config from './src/_config/_config.js';
import { app } from './src/app.js';
import connectDB from './src/db/db.js';

connectDB()
    .then(() => {
        app.listen(config.PORT, () => {
            console.log(
                `Server is running on http://locakhost:${config.PORT} in ${config.NODE_ENV} mode`,
            );
        });
    })
    .catch((err) => {
        console.error(`Error running server: ${err.message}`);
    });
