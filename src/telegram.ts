import Telegraf, { Context, Telegram } from 'telegraf';
import { Listener } from '@interfaces/listener';
import listeners from './listeners';
import startListener from './listeners/start';
import actions from './actions';
import { TelegrafContext } from 'telegraf/typings/context';

import { config } from './env/local';

class TelegramService {
    // TODO: move token to config
    readonly bot: Telegraf<Context> = new Telegraf(config.telegram.token);
    private currentUser: Context['from'];

    get telegram(): Telegram {
        return this.bot.telegram;
    }

    get chatId(): number {
        return this.currentUser?.id;
    }

    async initListeners(): Promise<void> {
        await actions.init();
        const listListeners: Listener[] = await listeners.init();
        this.bot.use(this.request);
        this.bot.start(startListener.middleware);
        listListeners.forEach(({ event, middleware }: Listener) => {
            if (typeof middleware === 'function') {
                this.bot.on(event, middleware);

                return;
            }

            console.error('Fail initialization event: %s', event);
        });
    }

    async connect(): Promise<void> {
        await this.initListeners();
        this.bot.startPolling();
        console.log('Connected to telegram bot');
    }

    request = async (ctx: TelegrafContext, next: () => Promise<void>): Promise<void> => {
        this.currentUser = ctx.from;

        return typeof next === 'function' ? next() : next;
    }
}

const telegramService: TelegramService = new TelegramService();

export const telegram: Telegram = telegramService.telegram;
export const bot: Telegraf<Context> = telegramService.bot;
export default telegramService;
