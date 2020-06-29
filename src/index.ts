import 'module-alias/register';

import mongoService from './database';
import telegramService from './telegram';

async function main(): Promise<void> {
    await mongoService.connect();
    await telegramService.connect();
    console.log('Application success running');
}

main();
