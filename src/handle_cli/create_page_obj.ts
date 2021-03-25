import {Create} from "./create"
import * as fs from "fs";
import {CypressNotFoundError} from "../../src/custom_exceptions";
import { existsSync } from "node:fs";

export class CPageObject extends Create {
    pageName :string = "FIXED_PG.page.ts"
    constructor(moduleName:string,pageName:string){
        super(moduleName);
        this.pageName = pageName
    }

    perform(){
        if (!fs.existsSync(super.getCypressDefaultPath()))
        {
            throw new CypressNotFoundError(CypressNotFoundError.CYPRESS_NOT_FOUND_ERROR)
        }
        else{
            var pageNameFullPath = `${super.getCypressDefaultPath()}${this._moduleName}/${this.pageName}`
            if (!fs.existsSync(super.getModulePath())){
                fs.mkdirSync(`${super.getCypressDefaultPath()}${this._moduleName}`)
            }
            fs.writeFileSync(pageNameFullPath,"test Page")
            return true;
        }
    }
}