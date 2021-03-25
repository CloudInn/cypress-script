import { CATEGORIES, Create } from '../handle_cli/create';
import { CPageObject } from '../handle_cli/create_page_obj';
import { NotFoundAction } from '../custom_exceptions';
export class HandleCLI {
    constructor(args) {
        this.params = args;
        this.createObj = new Create("None");
    }
    validate() {
        if (this.params.length == 0) {
            // return help
        }
        this.performAction();
    }
    performAction() {
        console.log("ana hena fe peform");
        this.detectAction();
        console.log(this.createObj);
        //TODO:
        // why an error
        this.createObj.perform();
    }
    detectAction() {
        switch (this.params[0]) {
            case CLI_COMMANDS.ACTIONS.create:
                if (this.params[1] == CATEGORIES.page) {
                    console.log("here in command create page");
                    // TODO:
                    // where should module name be passed [ parent or child ]
                    this.createObj = new CPageObject("FIXED_MODULE");
                }
                break;
            default: {
                throw new NotFoundAction(NotFoundAction.ACTION_NOT_FOUND, this.params[1]);
            }
        }
    }
}
export var CLI_COMMANDS;
(function (CLI_COMMANDS) {
    let ACTIONS;
    (function (ACTIONS) {
        ACTIONS["create"] = "create";
    })(ACTIONS = CLI_COMMANDS.ACTIONS || (CLI_COMMANDS.ACTIONS = {}));
})(CLI_COMMANDS || (CLI_COMMANDS = {}));
