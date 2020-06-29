import { Document } from 'mongoose';

import { Store } from '../storeItem';

export interface StoreModel extends Omit<Store, '_id'>, Document { }
