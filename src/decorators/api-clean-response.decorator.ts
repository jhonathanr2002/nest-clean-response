import { applyDecorators } from '@nestjs/common';
import { ApiBadRequestResponse, ApiConsumes, ApiExtraModels, ApiOkResponse, ApiProduces, getSchemaPath } from '@nestjs/swagger';
import { ResponseDto } from '../dto/response.dto';
import { ApiResponseOptions } from "./api-response-options.interface";
import { ResponseErrorDto } from "../dto/response-error.dto";
import { ReferenceObject, SchemaObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';

export const ApiCleanResponse = (
    options: ApiResponseOptions
) => {
    const oResults: Array<ClassDecorator | MethodDecorator | PropertyDecorator> = [
        ApiExtraModels(ResponseDto, options.type == "uuid" ? String : options.type, ResponseErrorDto),
        ApiOkResponse({
            schema: {
                title: `ResponseDtoOf${(options.type == "uuid" ? String : options.type).name}`,
                allOf: [
                    { $ref: getSchemaPath(ResponseDto) },
                    {
                        properties: {
                            result: getResultDefinition(options),
                            duration: {
                                type: 'object',
                                properties: {
                                    ms: {
                                        type: 'string',
                                        description: 'Duración en segundos de la petición',
                                    },
                                    seconds: {
                                        type: 'string',
                                        description: 'Duración en milisegundos de la petición',
                                    },
                                },
                            },
                        },
                    },
                ],
            },
        }),
        ApiBadRequestResponse({
            schema: {
                title: `ResponseDtoOf${(options.type == "uuid" ? String : options.type).name}`,
                allOf: [
                    { $ref: getSchemaPath(ResponseDto) },
                    {
                        properties: {
                            resultError: {
                                type: 'array',
                                items: {
                                    $ref: getSchemaPath(ResponseErrorDto),
                                },
                            },
                            duration: {
                                type: 'object',
                                properties: {
                                    ms: {
                                        type: 'string',
                                        description: 'Duración en segundos de la petición',
                                    },
                                    seconds: {
                                        type: 'string',
                                        description: 'Duración en milisegundos de la petición',
                                    },
                                },
                            },
                        },
                    },
                ],
            },
        }),
    ];

    oResults.push(ApiConsumes(typeof options.consume === "string" ? options.consume : "application/json"));

    oResults.push(ApiProduces(typeof options.produces === "string" ? options.produces : "application/json"));

    return applyDecorators(...oResults);
};

function getResultDefinition(options: ApiResponseOptions): SchemaObject | ReferenceObject {
    if (options.isArray === true) {
        return {
            type: 'array',
            items: {
                $ref: getSchemaPath(options.type == "uuid" ? String : options.type),
            },
        };
    } else {
        return {
            //type: getStringType(options.type),
            $ref: getSchemaPath(getStringType(options.type))
        };
    }
}

function getStringType(oType: Function | string): Function {
    if (typeof oType === "string") {
        return String;
    } else {
        return oType;
    }
}