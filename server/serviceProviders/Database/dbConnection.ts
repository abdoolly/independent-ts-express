import { connect } from 'mongoose';
import { ConnectionParams } from '../../../intefaces/connectionParams.interface';

export const connection = ({ username, password, host, port = '27017', dbname = 'zappy' }: ConnectionParams) => {
    // if there were username or password
    if (username && password)
        return connect(`mongodb://${username}:${password}@${host}:${port}/${dbname}`, { useNewUrlParser: true });

    // connection in case there were no username or password
    return connect(`mongodb://${host}:${port}/${dbname}`, { useNewUrlParser: true });
};