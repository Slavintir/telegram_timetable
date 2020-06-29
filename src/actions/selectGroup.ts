import { Action, ActionName } from '@interfaces/action';
import { ListData } from '../components/list';

class CloseAction extends Action {
    name: ActionName = ActionName.SelectGroup;

    async handler(data: ListData): Promise<void> {
        console.log('Selected group: ', data.group);
    }
}

export default new CloseAction();
