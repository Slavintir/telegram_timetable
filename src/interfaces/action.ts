export enum ActionName {
    Open,
    Close,
    SelectGroup,
}

export abstract class Action {
    readonly name: ActionName;

    abstract async handler(...args: any[]): Promise<void>;
}
