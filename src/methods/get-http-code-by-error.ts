import { HttpStatus, NotFoundException, UnauthorizedException, BadRequestException, ForbiddenException } from "@nestjs/common";
import { ResponseDto } from "../dto/response.dto";
import isResponseDto from "./is-response-dto";
import { ResponseErrorDto } from "../dto/response-error.dto";
import { BackendErrorException } from "../classes/backend-error.exception";
import { UserException } from "../exceptions/user.exception";
import { ThrottlerException } from "@nestjs/throttler";

export default function getHttpCodeByError(oError: Error): HttpStatus {
    if (isResponseDto(oError)) {
        return (oError as unknown as ResponseDto<unknown>).code;
    } else if (oError instanceof NotFoundException) {
        return HttpStatus.NOT_FOUND;
    } else if (oError instanceof ThrottlerException) {
        return HttpStatus.TOO_MANY_REQUESTS;
    } else if (oError instanceof UnauthorizedException || oError.message === "jwt expired") {
        return HttpStatus.UNAUTHORIZED;
    } else if (oError instanceof BackendErrorException) {
        return oError.getStatus();
    } else if (oError instanceof BadRequestException || (oError instanceof UserException) || oError instanceof ResponseErrorDto) {
        return HttpStatus.BAD_REQUEST;
    } else if (oError instanceof ForbiddenException) {
        return HttpStatus.FORBIDDEN;
    } else if (oError && oError.message === "Timeout has occurred") {
        return HttpStatus.GATEWAY_TIMEOUT;
    } else {
        console.error("getHttpCodeByError(oError)", oError)

        return HttpStatus.INTERNAL_SERVER_ERROR;
    }
}
