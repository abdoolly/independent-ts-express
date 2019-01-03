import { BaseException } from "../BaseException";

export class InvalidModelInputException extends BaseException {
    message = 'Invalid input give to model operation';
}