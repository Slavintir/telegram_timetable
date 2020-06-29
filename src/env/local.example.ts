import { AppConfig } from '@interfaces/env';

export const config: AppConfig = {
    telegram: { token: '<api_token>' },
    rozklad: { apiUrl: 'http://api.rozklad.org.ua/v2/groups' },
    database: {
        uri: 'mongodb+srv://username:password@cluster0-iyvfp.azure.mongodb.net/telegram?retryWrites=true&w=majority',
    },
};
