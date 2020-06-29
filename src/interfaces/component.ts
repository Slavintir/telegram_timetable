
export interface Component {
    send(): Promise<void>;
}

export interface Store {
    set(key: string, value: object): Promise<void>;
    update(key: string, value: object): Promise<void>;
}

export abstract class BaseComponent implements Component {
    protected name: string = this.constructor.name;

    constructor() { }

    protected async componentWillSend(): Promise<void> { }
    protected async componentDidSent(): Promise<void> { }
    async send(): Promise<void> { }

    async next(): Promise<void> {
        console.log('Sent component', this);
    }
}
