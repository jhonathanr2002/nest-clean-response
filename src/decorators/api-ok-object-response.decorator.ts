import { applyDecorators, Type } from '@nestjs/common';
import { ApiExtraModels, ApiOkResponse, ApiProduces, getSchemaPath } from '@nestjs/swagger';
import { ResponseDto } from '../dto/response.dto';

export const ApiOkObjectResponse = <TModel extends Type<any>>(
    model: TModel,
    sPrimaryType?: 'boolean' | 'array',
) => {
    return applyDecorators(
        ApiExtraModels(ResponseDto),
        ApiExtraModels(model),
        ApiOkResponse({
            schema: {
                title: `ResponseDtoOf${model.name}`,
                allOf: [
                    { $ref: getSchemaPath(ResponseDto) },
                    {
                        properties: {
                            result: getResultDefinition(model, sPrimaryType),
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
        ApiProduces('application/json'),
    );
};

function getResultDefinition<TModel extends Type<any>>(model: TModel, sPrimaryType: 'boolean' | 'array') {
    if (sPrimaryType === 'array') {
        return {
            type: 'array',
            items: {
                $ref: getSchemaPath(model),
            },
        };
    } else {
        return {
            type: (sPrimaryType ? sPrimaryType : undefined),
            $ref: (sPrimaryType ? undefined : getSchemaPath(model)),
        };
    }
}
