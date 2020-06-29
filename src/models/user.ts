import { model, Schema } from 'mongoose';

import { UserModel } from '@interfaces/models/user';

const userSchema: Schema = new Schema({
    userId: { type: Number, unique: true },
    firstName: { type: String },
});

export default model<UserModel>('User', userSchema);
