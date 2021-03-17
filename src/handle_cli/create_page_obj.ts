import {Create} from "./create"
import * as fs from "fs";
import {CypressNotFoundError} from "../../src/custom_exceptions";
import { existsSync } from "node:fs";

export class CPageObject extends Create {
    constructor(moduleName:string){
        super(moduleName);
    }

    perform(){
        if (!fs.existsSync(super.getCypressDefaultPath()))
        {
            throw new CypressNotFoundError(CypressNotFoundError.CYPRESS_NOT_FOUND_ERROR)
        }
        else{
            if (!fs.existsSync(super.getModulePath())){
                fs.mkdirSync(this._moduleName)
            }
            return true;
        }
    }
}