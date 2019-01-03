import * as app from '../../app';
import * as request from 'supertest';
import { expect } from 'chai';

describe('Get tweets API', () => {

    let body = null;
    it('Api is called and database tweets are retrieve successfully', async () => {
        let res = await request(app)
            .get('/api/twitter/tweets?screenName=man_zappy')
            .set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)

        body = res.body;
    });

    it('testing the returned twitter object properties', () => {
        expect(Array.isArray(body.tweets)).true;

        if (!body.tweets.length)
            return;

        let firstTweet = body.tweets[0];
        expect(firstTweet._id).is.not.empty;
        expect(firstTweet.tweet).is.not.empty;
        expect(firstTweet.screenName).is.not.empty;
        expect(firstTweet.tweetId).is.not.empty;
    });

});