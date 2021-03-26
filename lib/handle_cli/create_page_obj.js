import { Create } from "./create";
import * as fs from "fs";
import { CypressNotFoundError } from "../../src/custom_exceptions";
export class CPageObject extends Create {
    constructor(moduleName, pageName) {
        super(moduleName);
        this.pageName = "FIXED_PG.page.ts";
        this.pageName = pageName;
    }
    perform() {
        if (!fs.existsSync(super.getCypressDefaultPath())) {
            throw new CypressNotFoundError(CypressNotFoundError.CYPRESS_NOT_FOUND_ERROR);
        }
        else {
            var pageNameFullPath = `${super.getCypressDefaultPath()}${this._moduleName}/${this.pageName}`;
            if (!fs.existsSync(super.getModulePath())) {
                fs.mkdirSync(`${super.getCypressDefaultPath()}${this._moduleName}`);
            }
            fs.writeFileSync(pageNameFullPath, "test Page");
            return true;
        }
    }
}
