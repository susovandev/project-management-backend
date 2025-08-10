import mongoose from 'mongoose';
import config from '../_config/_config.js';

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(
            `${config.DATABASE.MONGODB_URI}/${config.DATABASE.MONGODB_DB_NAME}`,
        );

        console.log(
            `Connected to database: ${connectionInstance.connection.db.databaseName}`,
        );
    } catch (err) {
        console.error(`Error connecting to database: ${err.message}`);
        process.exit(1);
    }
};

export default connectDB;
