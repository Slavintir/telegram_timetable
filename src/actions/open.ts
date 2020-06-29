import { Action, ActionName } from '@interfaces/action';

class OpenAction extends Action {
    name: ActionName = ActionName.Open;

    async handler(): Promise<void> {
        console.log('Executed action Open');
    }
}

export default new OpenAction();
