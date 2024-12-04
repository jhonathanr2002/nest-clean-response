import {ApiProperty} from '@nestjs/swagger';
import {MessageArgsType} from '../types/message-args.type';
import {ErrorEnum} from 'nest-swagger-validator';

export class ResponseErrorDto {
    @ApiProperty({
        type: String,
    })
    property: string;

    @ApiProperty({
        type: String,
    })
    messageCode: ErrorEnum | string;

    @ApiProperty({
        type: Array<string | number | string[] | number[]>,
    })
    args: MessageArgsType;

    constructor(
        property: string,
        messageCode: ErrorEnum | string,
        args: MessageArgsType,
    ) {
        this.property = property;
        this.messageCode = messageCode;
        this.args = args;
    }
}
