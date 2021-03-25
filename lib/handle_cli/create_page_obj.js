import { Create } from "./create";
import * as fs from "fs";
import { CypressNotFoundError } from "../../src/custom_exceptions";
export class CPageObject extends Create {
    constructor(moduleName) {
        super(moduleName);
    }
    perform() {
        console.log("here in page create perform");
        if (!fs.existsSync(super.getCypressDefaultPath())) {
            throw new CypressNotFoundError(CypressNotFoundError.CYPRESS_NOT_FOUND_ERROR);
        }
        else {
            console.log("here in else");
            if (!fs.existsSync(super.getModulePath())) {
                console.log("here");
                // console.log(`${super.getCypressDefaultPath()}/${this._moduleName}`)
                fs.mkdirSync(`${super.getCypressDefaultPath()}${this._moduleName}`);
            }
            return true;
        }
    }
}
