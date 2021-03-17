
export class CypressNotFoundError extends Error{
    public static CYPRESS_NOT_FOUND_ERROR: string = "it seems you didn't install cypress or you have modified it's folder structure";

    constructor(public message: string) {
        super(message);
        this.name = "CYPRESSNOTFOUND";
        this.stack = (<any> new Error()).stack;
      }
}

export class NotFoundAction extends Error {
    public static ACTION_NOT_FOUND: string = "Action not found";
    constructor(public message: string,action : string ) {
        super(`${message}:${action}`);
        this.name = "NOTFOUNDACTION";
        this.stack = (<any> new Error()).stack;
      }
}