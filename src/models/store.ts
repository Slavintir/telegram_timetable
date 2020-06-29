import { model, Schema } from 'mongoose';

import { StoreModel } from '@interfaces/models/store';

const storeSchema: Schema = new Schema({
    userId: { type: Number },
    componentName: { type: String },
    data: { type: Object },
});

export default model<StoreModel>('Store', storeSchema);
