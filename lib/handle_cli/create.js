export class Create {
    constructor(moduleName) {
        this.obj = null;
        //TODO:
        // cohesion
        this._cypressDefaultPath = "cypress/integration/";
        this._moduleName = moduleName;
    }
    perform() {
    }
    // TODO:
    // cohesion
    getCypressDefaultPath() {
        return this._cypressDefaultPath;
    }
    getModulePath() {
        return `${this._cypressDefaultPath}${this._moduleName}/`;
    }
}
export var CATEGORIES;
(function (CATEGORIES) {
    CATEGORIES["page"] = "--pg";
    CATEGORIES["spec"] = "--spec";
    CATEGORIES["feature"] = "--featuer";
    CATEGORIES["module"] = "--module";
})(CATEGORIES || (CATEGORIES = {}));
