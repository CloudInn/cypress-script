#!/usr/bin/env node
import {HandleCLI} from '../src/handle_cli'

const [,, ...args] = process.argv 

const logger = require("../lib/logger")

console.log(args)

var command = new HandleCLI(args)
command.performAction()