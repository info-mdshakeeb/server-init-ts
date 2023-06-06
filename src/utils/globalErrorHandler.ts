import { ErrorRequestHandler } from "express";
import ApiErrors from "../Errors/ApiErrors";
import ValidationError from "../Errors/ValidationError";
import { IGenericError } from "../interfaces/error.interfaces";

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {

    let statusCode = 500;
    let message = "something is not right"
    let errorMessage: IGenericError[] = []

    if (error?.name === "ValidationError") {
        const strErr = ValidationError(error)
        statusCode = strErr.statusCode
        message = strErr.message
        errorMessage = strErr.errorMessage
    }
    else if (error instanceof ApiErrors) {
        statusCode = error.statusCode
        message = error.message
        errorMessage = error.message ? [
            {
                path: '',
                message: error.message
            }
        ] : []

    } else if (error instanceof Error) {
        statusCode = 503
        message = error.message
        errorMessage = error.message ? [
            {
                path: '',
                message: error.message
            }
        ] : []
    }
    res.status(statusCode).json({
        statusCode, message, errorMessage
    })



    next()
}
export default globalErrorHandler