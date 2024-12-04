import {HttpStatus, HttpException} from '@nestjs/common';
import {MessageArgsType} from '../types/message-args.type';
import {ErrorEnum} from 'nest-swagger-validator';

export class UserException extends HttpException {
    private readonly _property: string;
    private readonly _messageCode: ErrorEnum | string;
    private readonly _args: MessageArgsType;
    private readonly _error: Error | null;
    private _startTime: number | undefined;

    constructor(property: string, messageCode: ErrorEnum | string, args: MessageArgsType, error?: Error) {
        super(messageCode, HttpStatus.BAD_REQUEST);
        this._property = property;
        this._messageCode = messageCode;
        this._args = args;
        this._error = error ?? null;
    }

    get property(): string {
        return this._property;
    }

    get messageCode(): ErrorEnum | string {
        return this._messageCode;
    }

    get args(): MessageArgsType {
        return this._args;
    }

    get error(): Error | null {
        return this._error;
    }

    get startTime(): number | undefined {
        return this._startTime;
    }

    set startTime(value: number | undefined) {
        this._startTime = value;
    }
}
