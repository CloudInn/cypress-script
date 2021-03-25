"use strict";
exports.__esModule = true;
var handle_cli_1 = require("../src/handle_cli");
var _a = process.argv, args = _a.slice(2);
// log(args)
var command = new handle_cli_1.HandleCLI(args);
command.performAction();
