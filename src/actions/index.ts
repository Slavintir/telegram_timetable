import readdir from 'recursive-readdir';
import { Action, ActionName } from '@interfaces/action';
import { ButtonData } from '../components/button';
import { ExecuteActionError } from '../errors/action';
import { TelegrafContext } from 'telegraf/typings/context';

type ActionHandler = (data?: ButtonData) => Promise<void>;

class TelegramActions {
    private handlers: Map<ActionName, ActionHandler> = new Map();

    async init(): Promise<void> {
        const pathToListeners: string[] = await readdir(__dirname, ['index.js', '*.js.map']);

        pathToListeners.forEach((path: string) => {
            const { name, handler }: Action = require(path).default;
            this.handlers.set(name, handler);
        });
    }

    async exec(ctx: TelegrafContext, data: ButtonData): Promise<void> {
        const handler: ActionHandler = this.handlers.get(data.action);
        console.debug('User execute action', { data, user: ctx.from });

        if (typeof handler === 'function') {
            try {
                return await handler(data);
            } catch (err) {
                throw new ExecuteActionError(data);
            }
        }

        console.error('Action %s not found', data.action);
    }
}

export default new TelegramActions();
