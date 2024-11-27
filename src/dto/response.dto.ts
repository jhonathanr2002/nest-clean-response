import { ApiProperty } from '@nestjs/swagger';
import { ResponseErrorDto } from './response-error.dto';
import { IDuration } from '../interfaces/duration.interface';
import { Duration } from '../classes/duration';
import { ResponseEnum } from '../enums/response.enum';

export class ResponseDto<T> {
    @ApiProperty({
        nullable: false,
        description: 'Código HTTP de resultado de la operación',
        type: () => Number,
    })
    code: number;

    @ApiProperty({
        nullable: false,
        description: 'Mensaje HTTP de resultado de la operación',
        type: () => String,
    })
    messageCode: ResponseEnum | string;

    @ApiProperty({
        nullable: false,
        description: 'Duración de la operación',
        type: () => Duration,
    })
    duration?: Duration | IDuration;

    result: T;

    resultError?: ResponseErrorDto[];

    constructor(
        code: number,
        messageCode: ResponseEnum | string,
        result: T,
        duration?: Duration | IDuration,
        resultError?: Array<ResponseErrorDto>,
    ) {
        this.code = code;
        this.messageCode = messageCode;
        this.result = result;
        this.duration = duration;
        this.resultError = resultError;
    }
}
