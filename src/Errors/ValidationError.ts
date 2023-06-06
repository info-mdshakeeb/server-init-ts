import mongoose from "mongoose";
import { IGenericError, IGenericErrorResponse } from "../interfaces/error.interfaces";

const ValidationError = (error: mongoose.Error.ValidationError): IGenericErrorResponse => {
    const err = Object.values(error.errors).map((el: IGenericError) => {
        return {
            path: el.path,
            message: el.message
        }
    })
    return {
        statusCode: 400,
        message: "something not right",
        errorMessage: err
    }
}
export default ValidationError