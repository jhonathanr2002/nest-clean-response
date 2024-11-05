import { ApiProperty } from "@nestjs/swagger";
import { FieldRuleResponse } from "../enums/field-rule-response.enum";
import { MessageArgsType } from "../types/message-args.type";

export class ResponseErrorDto {
    @ApiProperty({
        type: String
    })
    property: string;

    @ApiProperty({
        type: String
    })
    messageCode: FieldRuleResponse | string;

    @ApiProperty({
        type: Array<string | number | string[] | number[]>
    })
    args: MessageArgsType;

    constructor(
        property: string,
        messageCode: FieldRuleResponse | string,
        args: MessageArgsType
    ) {
        this.property = property;
        this.messageCode = messageCode;
        this.args = args;
    }
}
