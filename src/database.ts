import Mongoose from 'mongoose';

import { config } from './env/local';

class MongoService {
    async connect(): Promise<void> {
        try {
            await Mongoose.connect(config.database.uri, { useUnifiedTopology: true, useNewUrlParser: true });
            console.log('Connected to database');
        } catch (err) {
            console.error('Can not connect to database');
            throw err;
        }
    }
}

export default new MongoService();
