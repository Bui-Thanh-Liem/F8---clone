import { StatusCodes } from "http-status-codes";

export interface IBaseResponse<D> {
    message?: string;
    metadata?: D;
    statusCode?: StatusCodes
}