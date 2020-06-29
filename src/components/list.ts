import { ButtonComponent, ButtonData } from './button';
import { ActionName } from '@interfaces/action';
import { KeyboardComponent } from './keyboard';

export interface ListData extends ButtonData {
    group: string;
}

export class ListComponent extends KeyboardComponent {
    constructor(description: string, items: string[], action: ActionName) {
        const buttons: ButtonComponent[] = items.map((group: string) => {
            return new ButtonComponent(group, { action, group });
        });

        super(description, buttons);
    }
}
