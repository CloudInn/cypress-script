"use strict";
exports.__esModule = true;
exports.CATEGORIES = exports.Create = void 0;
var Create = /** @class */ (function () {
    function Create(moduleName) {
        this.obj = null;
        //TODO:
        // cohesion
        this._cypressDefaultPath = "cypress/integration/";
        this._moduleName = moduleName;
    }
    Create.prototype.perform = function () {
    };
    // TODO:
    // cohesion
    Create.prototype.getCypressDefaultPath = function () {
        return this._cypressDefaultPath;
    };
    Create.prototype.getModulePath = function () {
        return "" + this._cypressDefaultPath + this._moduleName + "/";
    };
    return Create;
}());
exports.Create = Create;
var CATEGORIES;
(function (CATEGORIES) {
    CATEGORIES["page"] = "--pg";
    CATEGORIES["spec"] = "--spec";
    CATEGORIES["feature"] = "--featuer";
    CATEGORIES["module"] = "--module";
})(CATEGORIES = exports.CATEGORIES || (exports.CATEGORIES = {}));
