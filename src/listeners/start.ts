import { Listener } from '@interfaces/listener';
import componentService from '../component';
import { ListComponent } from '../components/list';
import { ActionName } from '@interfaces/action';

class StartListener extends Listener {
    protected async handler(): Promise<void> {
        const listGroups: ListComponent = new ListComponent(
            'Выберите групу из списка, или напишите ее в сообщении',
            ['ip-61', 'ip-62', 'ip-63', 'ip-64'],
            ActionName.SelectGroup,
        );

        await componentService.sendComponent(listGroups);
    }
}

export default new StartListener();
