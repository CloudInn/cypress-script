"use strict";
exports.__esModule = true;
var handle_cli_1 = require("../src/handle_cli");
console.log("safasdf");
var _a = process.argv, args = _a.slice(2);
var logger_1 = require("./logger");
logger_1.log(args);
var command = new handle_cli_1.HandleCLI(args);
command.performAction();
