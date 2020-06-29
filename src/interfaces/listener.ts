import { UpdateType, MessageSubTypes } from 'telegraf/typings/telegram-types';
import { TelegrafContext } from 'telegraf/typings/context';

export abstract class Listener {
    readonly event: UpdateType | MessageSubTypes;

    protected abstract async handler(ctx: TelegrafContext): Promise<void>;

    middleware = async (ctx: TelegrafContext, next: () => Promise<void>): Promise<unknown> => {
        await this.handler(ctx);

        return typeof next === 'function' ? next() : next;
    }
}
