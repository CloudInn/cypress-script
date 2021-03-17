export class Create {
    private obj = null;
    protected _moduleName : string ;

    //TODO:
    // cohesion
    private _cypressDefaultPath : string = "cypress/integration/";
    constructor(moduleName : string ){
        this._moduleName = moduleName;
    }

    protected perform(){

    }
    // TODO:
    // cohesion
    protected getCypressDefaultPath(){
        return this._cypressDefaultPath;
    }
    protected getModulePath(){
        return `${this._cypressDefaultPath}${this._moduleName}/`;
    }


}


export enum CATEGORIES
{
   page = "pg",
   spec = "spec",
   feature = "featuer",
   module = "module",
}