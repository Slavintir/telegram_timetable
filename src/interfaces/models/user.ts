import { Document } from 'mongoose';

import { User } from '../user';

export interface UserModel extends Omit<User, 'id' | '_id'>, Document { }
