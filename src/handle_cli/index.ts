import {CATEGORIES,Create} from '../handle_cli/create';
import {CPageObject} from '../handle_cli/create_page_obj';
import {NotFoundAction} from '../custom_exceptions'
export class HandleCLI{
    params : string [] ;
    createObj : Create;
    constructor(args : string []){
        this.params = args
        this.createObj = new Create("None")
    }

    validate(){
        if (this.params.length == 0){
            // return help
        }
        this.performAction()
    }
    performAction(){
        this.detectAction()
        //TODO:
        // why an error
        this.createObj.perform()
    }

    detectAction(){
        switch(this.params[0]){
            case CLI_COMMANDS.ACTIONS.create:
                if (this.params[1] == CATEGORIES.page){
                    var moduleName = "FIXED_MODULE"
                    if (this.params.includes('--module')){
                        moduleName = this.params[4]
                    }
                    this.createObj = new CPageObject(moduleName,this.params[2])
                }
                break;
            
            default: { 
                    throw new NotFoundAction(NotFoundAction.ACTION_NOT_FOUND,this.params[1])
                } 
        }
    }
}

export namespace CLI_COMMANDS
{
    export enum ACTIONS
    {
        create = "create"
    }
}