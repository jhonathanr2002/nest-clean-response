export enum ResponseEnum {
    /** ERRORS HTTP **/
    UNKNOWN_ERROR = "UNKNOWN_ERROR",
    NOT_FOUND = "NOT_FOUND",
    UNAUTHORIZED = "UNAUTHORIZED",
    FORBIDDEN = "FORBIDDEN",
    BAD_REQUEST = "BAD_REQUEST",
    TOO_MANY_REQUESTS = "TOO_MANY_REQUESTS",
    INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
    GATEWAY_TIMEOUT = "GATEWAY_TIMEOUT",

    /** GENERAL Responses **/
    READ_OK = "READ_OK",
    SAVE_OK = "SAVE_OK",
    UPDATE_OK = "UPDATE_OK",
    DELETE_OK = "DELETE_OK",
}
