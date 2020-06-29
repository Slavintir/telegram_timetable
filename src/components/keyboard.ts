import { Markup } from 'telegraf';
import { CallbackButton } from 'telegraf/typings/markup';
import { Message } from 'telegraf/typings/telegram-types';

import telegramService, { telegram } from '../telegram';

import { BaseComponent } from '../interfaces/component';

import { ButtonComponent } from './button';
import { isArray } from 'lodash';

export interface KeyboardButton {
    text: string;
    data: object;
    listener: (data: object) => Promise<void>;
}

export class KeyboardComponent extends BaseComponent {
    constructor(
        private text: string,
        private listButtons: ButtonComponent[] | ButtonComponent[][],
        ) { super(); }

    async send(): Promise<void> {
        if (telegramService.chatId) {
            if (isArray(this.listButtons[0])) {
               await this.sendButtons(this.text, this.createListButtons(<[][]>this.listButtons));
            }

            await this.sendButtons(this.text, this.createButtons(<[]>this.listButtons));
        }
    }

    protected createListButtons(listButtons: ButtonComponent[][]): CallbackButton[][] {
        return listButtons.map((buttons: ButtonComponent[]) => {
            return this.createButtons(buttons);
        });
    }

    private createButtons(buttons: ButtonComponent[]): CallbackButton[] {
        return buttons.map((button: ButtonComponent) => button.getButton());
    }

    private async sendButtons(headerText: string, buttons: CallbackButton[][] | CallbackButton[]): Promise<Message> {
        return telegram.sendMessage(
            telegramService.chatId,
            headerText,
            Markup.inlineKeyboard(buttons).extra(),
        );
    }
}
