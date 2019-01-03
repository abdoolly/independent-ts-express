import * as uuid from 'uuid/v1';

export class generalUtils {
    /**
     * @description get a unique id
     */
    getUUID() {
        return Buffer.from(uuid(), 'utf8').toString('base64');
    }
}