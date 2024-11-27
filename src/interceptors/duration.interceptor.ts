import { Injectable, Scope, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import moment from 'moment';
import { Mixin } from 'ts-mixer';
import { BackendErrorException } from '../classes/backend-error.exception';
import { Duration } from '../classes/duration';
import { catchError, map, Observable } from 'rxjs';
import isResponseDto from '../methods/is-response-dto';
import getHttpCodeByError from '../methods/get-http-code-by-error';
import { ResponseDto } from '../dto/response.dto';
import { UserException } from '../exceptions/user.exception';

@Injectable({ scope: Scope.REQUEST })
export class DurationInterceptor extends Mixin(Duration) implements NestInterceptor {
    constructor() {
        super(null);
    }

    intercept(oContext: ExecutionContext, next: CallHandler): Observable<any> {
        const startTime: number = Date.now();

        return next.handle().pipe(
            map(async (data: ResponseDto<any> | any): Promise<any> => {
                moment.locale('es');

                if (isResponseDto(data) || data instanceof ResponseDto) {
                    const oResponse: ResponseDto<any> = data as ResponseDto<any>;

                    return new ResponseDto(
                        oResponse.code,
                        oResponse.messageCode,
                        oResponse.result,
                        Duration.getDuration(startTime).toObject(),
                        oResponse.resultError,
                    );
                } else {
                    return data;
                }
            }),
            catchError((oError: UserException | BackendErrorException | Error) => {
                if ((oError instanceof UserException) || (oError instanceof BackendErrorException)) {
                    oError.startTime = startTime;

                    throw oError;
                } else if (isResponseDto(oError)) {
                    throw oError;
                }

                throw new BackendErrorException(getHttpCodeByError(oError), oError, startTime);
            }),
        );
    }
}
