import { ObjectId } from 'bson';

export interface Store {
    _id?: ObjectId;
    userId: number;
    componentName: string;
    data: object;
}
