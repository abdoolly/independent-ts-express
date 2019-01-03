import { expect } from 'chai';
import { twitterServiceProvider } from '../../../server/serviceProviders/APIs/twitterServiceProvider';
import { TweetInterface } from '../../../intefaces/models/Tweet';


describe('Testing twitter service provider', () => {
    let twitterProvider: twitterServiceProvider;

    before(() => {
        twitterProvider = new twitterServiceProvider();
    });

    it('make sure all needed keys exist to authenticate with twitter', () => {
        expect(twitterProvider.accessToken, 'accessToken is emtpy').not.empty;
        expect(twitterProvider.accessTokenSecret, 'accessTokenSecret is empty').not.empty;
        expect(twitterProvider.consumerKey, 'consumerKey is empty').not.empty;
        expect(twitterProvider.consumerSecretKey, 'consumerSecretKey is empty').not.empty;
    });

    it('Getting tweets', async () => {
        let tweets = await twitterProvider.getTweets();
        if (!tweets.length)
            return;

        let firstTweet: TweetInterface = tweets[0];

        expect(firstTweet.tweet, 'Tweet text was doest not exist').not.empty;
        expect(firstTweet.screenName, 'Tweet screen name does not exist').not.empty;
        expect(firstTweet.tweetId, 'Tweet id does not exist').not.empty;

        it('Make sure tweets are saved successfully', async () => {
            await twitterProvider.saveTweets();
        });
    });

});