import fetch, { Response } from 'node-fetch';

import { config } from '../env/local';
import { Lessons } from '@interfaces/services/timetable';

class KpiRozkladService {
    async getLessons(groupId: string): Promise<Lessons.Datum[] | undefined> {
        const jsonLessons: string = await this.find(groupId, 'lessons');

        if (typeof jsonLessons !== 'string') {
            return undefined;
        }

        return JSON.parse(jsonLessons).data;
    }

    private async find(groupId: string, destination: 'lessons' | 'teachers' | 'timetable'): Promise<string | undefined> {
        try {
            const request: string = `${config.rozklad.apiUrl}/${groupId}/${destination}`;
            const rozkladResponse: Response = await fetch(request);
            const rozkladTextResponse: string = await rozkladResponse.text();
            console.info('Request =>', request, 'status', rozkladResponse.status);

            return rozkladTextResponse;
        } catch (error) {
            console.error(`Couldn't get ${destination} groupId: ${groupId}`, error);

            return undefined;
        }
    }
}

export default new KpiRozkladService();
