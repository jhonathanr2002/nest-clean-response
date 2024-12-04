import {applyDecorators, Type} from '@nestjs/common';
import {
    ApiBadRequestResponse,
    ApiExtraModels,
    getSchemaPath,
} from '@nestjs/swagger';
import {ResponseDto} from '../dto/response.dto';
import {ResponseErrorDto} from '../dto/response-error.dto';

export const ApiBadRequestObjectResponse = <TModel extends Type<any>>(
    model: TModel,
) => {
    return applyDecorators(
        ApiExtraModels(ResponseDto),
        ApiExtraModels(ResponseErrorDto),
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
    );
};
