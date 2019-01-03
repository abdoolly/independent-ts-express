import { expect } from 'chai';
import { TweetModel } from '../../../server/models/Tweet';
import { Tweet, TweetsRepository } from '../../../server/serviceProviders/Database/TweetsRepository';


describe('Tweet model', () => {

    it('should initiate successfully', () => {
        expect(typeof TweetModel).equals('function');
    });

    it('model repo should initiate successfully', () => {
        expect(Tweet).instanceof(TweetsRepository);
        expect(typeof Tweet.model).equals('function');
    });

});