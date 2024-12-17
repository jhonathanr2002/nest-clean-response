import {Type} from "@nestjs/common";

export interface ApiResponseOptions {
    isArray?: boolean;
    type: Function | "uuid";
    produces: string;
    consume: string;
}