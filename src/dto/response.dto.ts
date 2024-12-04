import { ApiProperty } from '@nestjs/swagger';
import { ResponseErrorDto } from './response-error.dto';
import { ResponseEnum } from '../enums/response.enum';
import { DurationDto } from './duration.dto';

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
        type: () => DurationDto,
    })
    duration?: DurationDto;

    result: T;

    resultError?: ResponseErrorDto[];

    constructor(
        code: number,
        messageCode: ResponseEnum | string,
        result: T,
        duration?: DurationDto,
        resultError?: Array<ResponseErrorDto>,
    ) {
        this.code = code;
        this.messageCode = messageCode;
        this.result = result;
        this.duration = duration;
        this.resultError = resultError;
    }
}
