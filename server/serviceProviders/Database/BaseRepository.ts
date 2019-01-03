import { Document, Model } from "mongoose";
import { InvalidModelInputException } from "../../exceptions/database/InvalidModelInputException";
import { UnsetModelInstanceException } from "../../exceptions/database/UnsetModelInstanceException";

export class BaseRepository<creationInterface, returnedInterface> {

    /**
     * all models should set this property
     */
    model: Model<Document> = null;

    public static initializeInstance<creationInterface, returnedInterface>() {
        let self = new this<creationInterface, returnedInterface>();
        self.validateModelInstance();
        return self;
    }

    /**
     * @description validate that the model property is set in all this class's parents
     */
    validateModelInstance() {
        // throw an error if the model instance was not set in the extender model
        if (!this.model)
            throw new UnsetModelInstanceException(this.getClassName());
    }

    /**
     * @description function that gets the class name to be used in error reporting
     */
    protected getClassName(): string {
        return Object.getPrototypeOf(this).constructor.name;
    }

    /**
     * 
     * @param object object to create
     * @param raw if true this will return the document json directly other it will return a mongoose document
     */
    async  create(object: creationInterface, raw = true): Promise<returnedInterface | Document> {
        let result = new this.model(object);

        if (raw)
            return (await result.save()).toJSON();

        return await result.save();
    }

    /**
     * @param objects array of objects you want to create
     */
    async createBulk(objects: creationInterface[]) {
        let isValid = Array.isArray(objects) && objects.length;
        if (isValid) {
            try {
                await this.model.collection.insertMany(objects);
            } catch (err) {

            }
        }

        // if the input was invalid then throw an exception
        if (!isValid)
            throw new InvalidModelInputException();

        return objects;
    }

    /**
     * @description find according to condition
     * @param object 
     */
    async find(object?: creationInterface): Promise<Document[]> {
        return await this.model.find(object || {});
    }
}