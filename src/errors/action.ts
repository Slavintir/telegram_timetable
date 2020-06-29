import { ButtonData } from 'src/components/button';

export class ExecuteActionError extends Error {
    constructor(data: ButtonData) {
        super(`Fail execute action ${data.action}. ${data}`);
    }
}
