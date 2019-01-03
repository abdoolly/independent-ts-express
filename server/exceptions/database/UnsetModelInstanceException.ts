import { BaseException } from "../BaseException";

export class UnsetModelInstanceException extends BaseException {
    modelName = '';

    constructor(modelName) {
        super(`Please set the model instance for model ${modelName}`);
        this.modelName = modelName;
    }
}