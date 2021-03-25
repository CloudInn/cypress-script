export class CypressNotFoundError extends Error {
    constructor(message) {
        super(message);
        this.message = message;
        this.name = "CYPRESSNOTFOUND";
        this.stack = new Error().stack;
    }
}
CypressNotFoundError.CYPRESS_NOT_FOUND_ERROR = "it seems you didn't install cypress or you have modified it's folder structure";
export class NotFoundAction extends Error {
    constructor(message, action) {
        super(`${message}:${action}`);
        this.message = message;
        this.name = "NOTFOUNDACTION";
        this.stack = new Error().stack;
    }
}
NotFoundAction.ACTION_NOT_FOUND = "Action not found";
