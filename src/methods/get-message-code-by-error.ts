import { NotFoundException, UnauthorizedException, BadRequestException, ForbiddenException } from '@nestjs/common';
import { ThrottlerException } from '@nestjs/throttler';
import { BackendErrorException } from '../classes/backend-error.exception';
import { ResponseErrorDto } from '../dto/response-error.dto';
import { ResponseDto } from '../dto/response.dto';
import { ResponseEnum } from '../enums/response.enum';
import { UserException } from '../exceptions/user.exception';
import isResponseDto from './is-response-dto';

export default function getMessageCodeByError(oError: Error): ResponseEnum {
    if (isResponseDto(oError)) {
        return (oError as unknown as ResponseDto<unknown>).messageCode as ResponseEnum;
    } else if (oError instanceof NotFoundException) {
        return ResponseEnum.NOT_FOUND;
    } else if (oError instanceof ThrottlerException) {
        return ResponseEnum.TOO_MANY_REQUESTS;
    } else if (oError instanceof UnauthorizedException || oError.message === 'jwt expired') {
        return ResponseEnum.UNAUTHORIZED;
    } else if (oError instanceof BackendErrorException) {
        return ResponseEnum.INTERNAL_SERVER_ERROR;
    } else if (oError instanceof BadRequestException || (oError instanceof UserException) || oError instanceof ResponseErrorDto) {
        return ResponseEnum.BAD_REQUEST;
    } else if (oError instanceof ForbiddenException) {
        return ResponseEnum.FORBIDDEN;
    } else if (oError && oError.message === 'Timeout has occurred') {
        return ResponseEnum.GATEWAY_TIMEOUT;
    }

    if (typeof oError === 'string' && (oError as string).includes('There is no matching message handler defined in the remote service.')) {
        return ResponseEnum.SERVICE_UNAVAILABLE;
    } else {
        console.error('ControllerError.getHttpCodeByError(oError)', oError);

        return ResponseEnum.INTERNAL_SERVER_ERROR;
    }
}
