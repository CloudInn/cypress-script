export declare class CypressNotFoundError extends Error {
    message: string;
    static CYPRESS_NOT_FOUND_ERROR: string;
    constructor(message: string);
}
export declare class NotFoundAction extends Error {
    message: string;
    static ACTION_NOT_FOUND: string;
    constructor(message: string, action: string);
}
