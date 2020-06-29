import { Listener } from '@interfaces/listener';
import { UpdateType, MessageSubTypes, CallbackQuery } from 'telegraf/typings/telegram-types';
import { TelegrafContext } from 'telegraf/typings/context';
import { ButtonData } from '../components/button';
import actions from '../actions';

class MessageListener extends Listener {
    event: UpdateType | MessageSubTypes = 'callback_query';

    protected async handler(ctx: TelegrafContext): Promise<void> {
        const data: ButtonData = this.getData(ctx.callbackQuery);

        if (typeof data?.action === 'number') {
            await actions.exec(ctx, data);
        }
    }

    private getData(callbackQuery: CallbackQuery): ButtonData | undefined {
        return callbackQuery.data ? JSON.parse(callbackQuery.data) : undefined;
    }
}

export default new MessageListener();
