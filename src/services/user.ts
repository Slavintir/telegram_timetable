import { ObjectId } from 'bson';
import { User } from 'telegraf/typings/telegram-types';

import userModel from '@models/user';
import { UserModel } from '@interfaces/models/user';

class StoreService {
    async create(user: User): Promise<UserModel> {
        return userModel.create({
            _id: this.makeId(user.id),
            userId: user.id,
            firstName: user.first_name,
        });
    }

    makeId(userId: number): ObjectId {
        return new ObjectId(userId);
    }
}

export default new StoreService();
