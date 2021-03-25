"use strict";
exports.__esModule = true;
exports.CLI_COMMANDS = exports.HandleCLI = void 0;
var create_1 = require("../handle_cli/create");
var create_page_obj_1 = require("../handle_cli/create_page_obj");
var custom_exceptions_1 = require("../custom_exceptions");
var HandleCLI = /** @class */ (function () {
    function HandleCLI(args) {
        this.params = args;
        this.createObj = new create_1.Create("None");
    }
    HandleCLI.prototype.validate = function () {
        if (this.params.length == 0) {
            // return help
        }
        this.performAction();
    };
    HandleCLI.prototype.performAction = function () {
        this.detectAction();
        //TODO:
        // why an error
        this.createObj.perform();
    };
    HandleCLI.prototype.detectAction = function () {
        switch (this.params[0]) {
            case CLI_COMMANDS.ACTIONS.create:
                if (this.params[1] == create_1.CATEGORIES.page) {
                    var moduleName = "FIXED_MODULE";
                    if (this.params.includes('--module')) {
                        moduleName = this.params[4];
                    }
                    this.createObj = new create_page_obj_1.CPageObject(moduleName, this.params[2]);
                }
                break;
            default: {
                throw new custom_exceptions_1.NotFoundAction(custom_exceptions_1.NotFoundAction.ACTION_NOT_FOUND, this.params[1]);
            }
        }
    };
    return HandleCLI;
}());
exports.HandleCLI = HandleCLI;
var CLI_COMMANDS;
(function (CLI_COMMANDS) {
    var ACTIONS;
    (function (ACTIONS) {
        ACTIONS["create"] = "create";
    })(ACTIONS = CLI_COMMANDS.ACTIONS || (CLI_COMMANDS.ACTIONS = {}));
})(CLI_COMMANDS = exports.CLI_COMMANDS || (exports.CLI_COMMANDS = {}));
