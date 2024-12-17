import {applyDecorators, Type} from '@nestjs/common';
import {ApiBadRequestResponse, ApiConsumes, ApiExtraModels, ApiOkResponse, ApiProduces, getSchemaPath} from '@nestjs/swagger';
import {ResponseDto} from '../dto/response.dto';
import {ApiResponseOptions} from "./api-response-options.interface";
import {ResponseErrorDto} from "../dto/response-error.dto";

export const ApiResponse = <TModel extends Type<any>>(
    model: TModel,
    options: ApiResponseOptions
) => {
    const oResults: Array<ClassDecorator | MethodDecorator | PropertyDecorator> = [
        ApiExtraModels(ResponseDto),
        ApiExtraModels(model),
        ApiExtraModels(ResponseErrorDto),
        ApiOkResponse({
            schema: {
                title: `ResponseDtoOf${model.name}`,
                allOf: [
                    {$ref: getSchemaPath(ResponseDto)},
                    {
                        properties: {
                            result: getResultDefinition(model, options),
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
                title: `ResponseDtoOf${model.name}`,
                allOf: [
                    {$ref: getSchemaPath(ResponseDto)},
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

    if(!options.produces){
        oResults.push(ApiProduces('application/json'))
    }

    if(typeof options.consume === "string") {
        ApiConsumes(options.consume);
    }

    oResults.push(ApiProduces(options.produces))

    return applyDecorators(...oResults);
};

function getResultDefinition<TModel extends Type<any>>(model: TModel, options: ApiResponseOptions) {
    if (options.isArray === true) {
        return {
            type: 'array',
            items: {
                $ref: getSchemaPath(options.type),
            },
        };
    } else {
        return {
            type: (options.type ? options.type : undefined),
            $ref: (options.type ? undefined : getSchemaPath(model)),
        };
    }
}
