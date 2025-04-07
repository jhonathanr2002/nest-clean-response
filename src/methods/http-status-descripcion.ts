import {HttpStatus} from '@nestjs/common';

const httpStatusDescriptions: {
    [HttpStatus.CONTINUE]: string;
    [HttpStatus.SWITCHING_PROTOCOLS]: string;
    [HttpStatus.PROCESSING]: string;
    [HttpStatus.EARLYHINTS]: string;
    [HttpStatus.OK]: string;
    [HttpStatus.CREATED]: string;
    [HttpStatus.ACCEPTED]: string;
    [HttpStatus.NON_AUTHORITATIVE_INFORMATION]: string;
    [HttpStatus.NO_CONTENT]: string;
    [HttpStatus.RESET_CONTENT]: string;
    [HttpStatus.PARTIAL_CONTENT]: string;
    [HttpStatus.MOVED_PERMANENTLY]: string;
    [HttpStatus.FOUND]: string;
    [HttpStatus.SEE_OTHER]: string;
    [HttpStatus.NOT_MODIFIED]: string;
    [HttpStatus.TEMPORARY_REDIRECT]: string;
    [HttpStatus.PERMANENT_REDIRECT]: string;
    [HttpStatus.BAD_REQUEST]: string;
    [HttpStatus.UNAUTHORIZED]: string;
    [HttpStatus.PAYMENT_REQUIRED]: string;
    [HttpStatus.FORBIDDEN]: string;
    [HttpStatus.NOT_FOUND]: string;
    [HttpStatus.METHOD_NOT_ALLOWED]: string;
    [HttpStatus.NOT_ACCEPTABLE]: string;
    [HttpStatus.PROXY_AUTHENTICATION_REQUIRED]: string;
    [HttpStatus.REQUEST_TIMEOUT]: string;
    [HttpStatus.CONFLICT]: string;
    [HttpStatus.GONE]: string;
    [HttpStatus.LENGTH_REQUIRED]: string;
    [HttpStatus.PRECONDITION_FAILED]: string;
    [HttpStatus.PAYLOAD_TOO_LARGE]: string;
    [HttpStatus.URI_TOO_LONG]: string;
    [HttpStatus.UNSUPPORTED_MEDIA_TYPE]: string;
    [HttpStatus.REQUESTED_RANGE_NOT_SATISFIABLE]: string;
    [HttpStatus.EXPECTATION_FAILED]: string;
    [HttpStatus.I_AM_A_TEAPOT]: string;
    [HttpStatus.MISDIRECTED]: string;
    [HttpStatus.UNPROCESSABLE_ENTITY]: string;
    [HttpStatus.FAILED_DEPENDENCY]: string;
    [HttpStatus.PRECONDITION_REQUIRED]: string;
    [HttpStatus.TOO_MANY_REQUESTS]: string;
    [HttpStatus.INTERNAL_SERVER_ERROR]: string;
    [HttpStatus.NOT_IMPLEMENTED]: string;
    [HttpStatus.BAD_GATEWAY]: string;
    [HttpStatus.SERVICE_UNAVAILABLE]: string;
    [HttpStatus.GATEWAY_TIMEOUT]: string;
    [HttpStatus.HTTP_VERSION_NOT_SUPPORTED]: string;
    [HttpStatus.AMBIGUOUS]: string
} = {
    [HttpStatus.CONTINUE]: 'Continue',
    [HttpStatus.SWITCHING_PROTOCOLS]: 'Switching Protocols',
    [HttpStatus.PROCESSING]: 'Processing',
    [HttpStatus.EARLYHINTS]: 'Early Hints',
    [HttpStatus.OK]: 'OK',
    [HttpStatus.CREATED]: 'Created',
    [HttpStatus.ACCEPTED]: 'Accepted',
    [HttpStatus.NON_AUTHORITATIVE_INFORMATION]: 'Non-Authoritative Information',
    [HttpStatus.NO_CONTENT]: 'No Content',
    [HttpStatus.RESET_CONTENT]: 'Reset Content',
    [HttpStatus.PARTIAL_CONTENT]: 'Partial Content',
    [HttpStatus.MOVED_PERMANENTLY]: 'Moved Permanently',
    [HttpStatus.FOUND]: 'Found',
    [HttpStatus.SEE_OTHER]: 'See Other',
    [HttpStatus.NOT_MODIFIED]: 'Not Modified',
    [HttpStatus.TEMPORARY_REDIRECT]: 'Temporary Redirect',
    [HttpStatus.PERMANENT_REDIRECT]: 'Permanent Redirect',
    [HttpStatus.BAD_REQUEST]: 'Bad Request',
    [HttpStatus.UNAUTHORIZED]: 'Unauthorized',
    [HttpStatus.PAYMENT_REQUIRED]: 'Payment Required',
    [HttpStatus.FORBIDDEN]: 'Forbidden',
    [HttpStatus.NOT_FOUND]: 'Not Found',
    [HttpStatus.METHOD_NOT_ALLOWED]: 'Method Not Allowed',
    [HttpStatus.NOT_ACCEPTABLE]: 'Not Acceptable',
    [HttpStatus.PROXY_AUTHENTICATION_REQUIRED]: 'Proxy Authentication Required',
    [HttpStatus.REQUEST_TIMEOUT]: 'Request Timeout',
    [HttpStatus.CONFLICT]: 'Conflict',
    [HttpStatus.GONE]: 'Gone',
    [HttpStatus.LENGTH_REQUIRED]: 'Length Required',
    [HttpStatus.PRECONDITION_FAILED]: 'Precondition Failed',
    [HttpStatus.PAYLOAD_TOO_LARGE]: 'Payload Too Large',
    [HttpStatus.URI_TOO_LONG]: 'URI Too Long',
    [HttpStatus.UNSUPPORTED_MEDIA_TYPE]: 'Unsupported Media Type',
    [HttpStatus.REQUESTED_RANGE_NOT_SATISFIABLE]: 'Range Not Satisfiable',
    [HttpStatus.EXPECTATION_FAILED]: 'Expectation Failed',
    [HttpStatus.I_AM_A_TEAPOT]: 'Im a teapot',
    [HttpStatus.MISDIRECTED]: 'Misdirected Request',
    [HttpStatus.UNPROCESSABLE_ENTITY]: 'Unprocessable Entity',
    [HttpStatus.FAILED_DEPENDENCY]: 'Failed Dependency',
    [HttpStatus.PRECONDITION_REQUIRED]: 'Precondition Required',
    [HttpStatus.TOO_MANY_REQUESTS]: 'Too Many Requests',
    [HttpStatus.INTERNAL_SERVER_ERROR]: 'Internal Server Error',
    [HttpStatus.NOT_IMPLEMENTED]: 'Not Implemented',
    [HttpStatus.BAD_GATEWAY]: 'Bad Gateway',
    [HttpStatus.SERVICE_UNAVAILABLE]: 'Service Unavailable',
    [HttpStatus.GATEWAY_TIMEOUT]: 'Gateway Timeout',
    [HttpStatus.HTTP_VERSION_NOT_SUPPORTED]: 'HTTP Version Not Supported',
    [HttpStatus.AMBIGUOUS]: 'Ambiguous',
};

export default function getHttpStatusDescription(statusCode: HttpStatus): string {
    return httpStatusDescriptions[statusCode] || 'Unknown Status Code';
}
