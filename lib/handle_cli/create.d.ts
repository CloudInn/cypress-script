export declare class Create {
    private obj;
    protected _moduleName: string;
    private _cypressDefaultPath;
    constructor(moduleName: string);
    perform(): void;
    protected getCypressDefaultPath(): string;
    protected getModulePath(): string;
}
export declare enum CATEGORIES {
    page = "pg",
    spec = "spec",
    feature = "featuer",
    module = "module"
}
