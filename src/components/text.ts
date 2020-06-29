import telegramService, { telegram } from '../telegram';

import { BaseComponent, Store } from '../interfaces/component';

export class TextComponent extends BaseComponent {
    constructor(private text: string, ...texts: string[]) {
        super();
        this.text = [text, ...texts].join('\n');
    }

    async send(): Promise<void> {
        if (telegramService.chatId) {
            await telegram.sendMessage(telegramService.chatId, this.text);
        } else {
            console.error('Fail send message. Chat id is', telegramService.chatId);
        }

        return this.next();
    }
}
