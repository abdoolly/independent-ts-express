import { ErrorLogInterface } from "../../../intefaces/models/ErrorLog";
import { ErrorLogModel } from "../../models/ErrorLog";
import { BaseRepository } from "./BaseRepository";

export class ErrorLogRepository extends BaseRepository<any, any> {
    model = ErrorLogModel;
}

export const ErrorLog = ErrorLogRepository.initializeInstance<ErrorLogInterface, ErrorLogInterface>();