export type IGenericError = {
    path: string;
    message: string;
}
export type IGenericErrorResponse = {
    statusCode: number;
    message: string;
    errorMessage: IGenericError[]
}