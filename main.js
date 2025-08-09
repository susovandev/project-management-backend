import config from './src/_config/_config.js';
import { app } from './src/app.js';

app.listen(config.PORT, () => {
    console.log(
        `Server is running on http://locakhost:${config.PORT} in ${config.NODE_ENV} mode`,
    );
});
