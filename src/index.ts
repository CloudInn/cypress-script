import {HandleCLI} from '../src/handle_cli'
console.log("safasdf")
const [,, ...args] = process.argv 

import {log} from "./logger"

log(args)

var command = new HandleCLI(args)
command.performAction()