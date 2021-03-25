import { Create } from '../handle_cli/create';
export declare class HandleCLI {
    params: string[];
    createObj: Create;
    constructor(args: string[]);
    validate(): void;
    performAction(): void;
    detectAction(): void;
}
export declare namespace CLI_COMMANDS {
    enum ACTIONS {
        create = "create"
    }
}
