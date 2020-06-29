import { ObjectId } from 'bson';

export interface User {
    _id?: ObjectId;
    userId: number;
    firstName: string;
}
