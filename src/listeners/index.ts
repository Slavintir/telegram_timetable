import readdir from 'recursive-readdir';
import { Listener } from '@interfaces/listener';

class Listeners {
    async init(): Promise<Listener[]> {
        const pathToListeners: string[] = await readdir(__dirname, ['index.js', 'start.js', '*.js.map']);

        return pathToListeners.map((path: string) => {
            return require(path).default;
        });
    }
}

export default new Listeners();
