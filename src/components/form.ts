import { ButtonComponent } from './button';
import { ActionName } from '@interfaces/action';
import { KeyboardComponent } from './keyboard';

export class FormComponent extends KeyboardComponent {
    constructor() {
        const headerText: string = 'Can need open it ?';
        const buttons: ButtonComponent[] = [
            new ButtonComponent('open', { action: ActionName.Open }),
            new ButtonComponent('close', { action: ActionName.Close }),
        ];

        super(headerText, buttons);
    }
}
