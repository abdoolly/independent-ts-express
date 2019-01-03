import { expect } from 'chai';
import { ErrorLogModel } from '../../../server/models/ErrorLog';
import { ErrorLog, ErrorLogRepository } from '../../../server/serviceProviders/Database/ErrorLogRepository';


describe('Error Log model', () => {

    it('should initiate successfully', () => {
        expect(typeof ErrorLogModel).equals('function');
    });

    it('model repo should initiate successfully', () => {
        expect(ErrorLog).instanceof(ErrorLogRepository);
        expect(typeof ErrorLog.model).equals('function');
    });

});