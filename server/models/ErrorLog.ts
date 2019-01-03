import { Schema, model } from 'mongoose';

const ObjectId = Schema['ObjectId'];

export const ErrorLogSchema = new Schema({
    id: ObjectId,
    message: String,
    stack: String
});

export let ErrorLogModel = model('ErrorLog', ErrorLogSchema);