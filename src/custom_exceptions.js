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
exports.NotFoundAction = exports.CypressNotFoundError = void 0;
var CypressNotFoundError = /** @class */ (function (_super) {
    __extends(CypressNotFoundError, _super);
    function CypressNotFoundError(message) {
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.name = "CYPRESSNOTFOUND";
        _this.stack = new Error().stack;
        return _this;
    }
    CypressNotFoundError.CYPRESS_NOT_FOUND_ERROR = "it seems you didn't install cypress or you have modified it's folder structure";
    return CypressNotFoundError;
}(Error));
exports.CypressNotFoundError = CypressNotFoundError;
var NotFoundAction = /** @class */ (function (_super) {
    __extends(NotFoundAction, _super);
    function NotFoundAction(message, action) {
        var _this = _super.call(this, message + ":" + action) || this;
        _this.message = message;
        _this.name = "NOTFOUNDACTION";
        _this.stack = new Error().stack;
        return _this;
    }
    NotFoundAction.ACTION_NOT_FOUND = "Action not found";
    return NotFoundAction;
}(Error));
exports.NotFoundAction = NotFoundAction;
