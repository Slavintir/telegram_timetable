import { Action, ActionName } from '@interfaces/action';

class CloseAction extends Action {
    name: ActionName = ActionName.Close;

    async handler(): Promise<void> {
        console.log('Executed action Close');
    }
}

export default new CloseAction();
