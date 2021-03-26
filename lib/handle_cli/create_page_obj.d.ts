import { Create } from "./create";
export declare class CPageObject extends Create {
    pageName: string;
    constructor(moduleName: string, pageName: string);
    perform(): boolean;
}
