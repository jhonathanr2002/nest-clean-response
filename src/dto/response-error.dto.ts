import { ApiProperty } from "@nestjs/swagger";
import { MessageArgsType } from "../types/message-args.type";
import { FieldErrorsEnum } from "../enums/field-errors.enum";

export class ResponseErrorDto {
    @ApiProperty({
        type: String
    })
    property: string;

    @ApiProperty({
        type: String
    })
    messageCode: FieldErrorsEnum | string;

    @ApiProperty({
        type: Array<string | number | string[] | number[]>
    })
    args: MessageArgsType;

    constructor(
        property: string,
        messageCode: FieldErrorsEnum | string,
        args: MessageArgsType
    ) {
        this.property = property;
        this.messageCode = messageCode;
        this.args = args;
    }
}
