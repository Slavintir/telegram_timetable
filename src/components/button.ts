import { Markup } from 'telegraf';
import { CallbackButton } from 'telegraf/typings/markup';

import telegramService, { telegram } from '../telegram';

import { BaseComponent } from '../interfaces/component';
import { ActionName } from '@interfaces/action';

export interface ButtonData {
    action: ActionName;
}

export class ButtonComponent extends BaseComponent {
    constructor(private text: string, readonly data: object) { super(); }

    async send(headerText: string = 'Header'): Promise<void> {
        if (telegramService.chatId) {
            await telegram.sendMessage(
                telegramService.chatId,
                headerText,
                Markup.inlineKeyboard([this.getButton()]).extra(),
            );
        }
    }

    getButton(): CallbackButton {
        return Markup.callbackButton(this.text, JSON.stringify(this.data));
    }
}
