
import { expect } from 'chai';
import { generalUtils } from '../../../server/serviceProviders/Utils/generalUtils';

describe('Testing General Utils service', () => {

    it('should get a random string', () => {
        let utils = new generalUtils();
        expect(utils.getUUID()).not.empty;
    });

});