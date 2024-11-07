import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { HttpStatus } from '@nestjs/common';
import getHttpStatusDescription from '../methods/http-status-descripcion';

export class BackendErrorException extends HttpException {
    private readonly _error: Error | undefined;

    constructor(httpStatus?: HttpStatus, error?: Error, _startTime?: number) {
        const nHttpStatus: HttpStatus = httpStatus ?? HttpStatus.INTERNAL_SERVER_ERROR;
        super(getHttpStatusDescription(nHttpStatus), nHttpStatus);
        this._startTime = _startTime;
        this._error = error;
    }

    private _startTime: number | undefined;

    get startTime(): number | undefined {
        return this._startTime;
    }

    set startTime(value: number | undefined) {
        this._startTime = value;
    }

    get error(): Error | undefined {
        return this._error;
    }
}
