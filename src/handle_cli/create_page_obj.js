"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.CPageObject = void 0;
var create_1 = require("./create");
var fs = require("fs");
var custom_exceptions_1 = require("../../src/custom_exceptions");
var CPageObject = /** @class */ (function (_super) {
    __extends(CPageObject, _super);
    function CPageObject(moduleName, pageName) {
        var _this = _super.call(this, moduleName) || this;
        _this.pageName = "FIXED_PG.page.ts";
        _this.pageName = pageName;
        return _this;
    }
    CPageObject.prototype.perform = function () {
        if (!fs.existsSync(_super.prototype.getCypressDefaultPath.call(this))) {
            throw new custom_exceptions_1.CypressNotFoundError(custom_exceptions_1.CypressNotFoundError.CYPRESS_NOT_FOUND_ERROR);
        }
        else {
            var pageNameFullPath = "" + _super.prototype.getCypressDefaultPath.call(this) + this._moduleName + "/" + this.pageName;
            if (!fs.existsSync(_super.prototype.getModulePath.call(this))) {
                fs.mkdirSync("" + _super.prototype.getCypressDefaultPath.call(this) + this._moduleName);
            }
            fs.writeFileSync(pageNameFullPath, "test Page");
            return true;
        }
    };
    return CPageObject;
}(create_1.Create));
exports.CPageObject = CPageObject;
