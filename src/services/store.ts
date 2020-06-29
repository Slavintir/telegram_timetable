import storeModel from '@models/store';
import { StoreModel } from '@interfaces/models/store';

class StoreService {
    async create(userId: number, componentName: string, data: object): Promise<StoreModel> {
        return storeModel.create({ userId, componentName, data });
    }
}

export default new StoreService();
