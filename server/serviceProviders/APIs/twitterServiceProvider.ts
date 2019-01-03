import { generalUtils } from "../Utils/generalUtils";
import { Tweet } from "../Database/TweetsRepository";
import { TweetInterface } from "../../../intefaces/models/Tweet";
let Twitter = require('twitter');
let requestDebug = require('request-debug');

export class twitterServiceProvider {
    private utils = new generalUtils();

    /**
     * main twitter keys
     */
    public consumerKey = 'LyZ0fu7v7l2tE2OLiZOS4VGaz';
    public consumerSecretKey = 'WyiS2HZaIcJQLcsYiiv2vIaMOpomjD8fQ5yF8RVBuKvJducbjX';
    public accessToken = '107007348-V377OHOkxtFIDRJX68MwrngWdDuWMSGBmoxJdcnw';
    public accessTokenSecret = 'wW4inWMBrnvXjGat4SuUnhbjPwg7afdbDLIHDzkkGZUKz';

    public myUserScreenName = 'man_zappy';

    /**
     * @description this function get the tweets from twitter screenname is optional because there is a default
     * screenName which will be used 
     * @param screenName 
     * @returns an array of tweets
     */
    async getTweets(screenName: string = null): Promise<TweetInterface[]> {

        let client = new Twitter({
            consumer_key: this.consumerKey,
            consumer_secret: this.consumerSecretKey,
            access_token_key: this.accessToken,
            access_token_secret: this.accessTokenSecret
        });

        let params = { screen_name: this.getScreenName(screenName), count: 10 };
        try {
            let tweets: TweetInterface[] = await client.get('statuses/user_timeline', params);

            // reshapping the tweets for our db
            return tweets.map((item: any) => ({ tweet: item.text, screenName: item.user.screen_name, tweetId: item.id_str }));
        } catch (err) {
            console.log('err', err);
            return [];
        }
    }

    /**
     * @description this function is independent because in the future maybe we will want to customize 
     * how are we gonna get the screen name
     * @param screenName 
     */
    getScreenName(screenName: string = null) {
        if (screenName)
            return screenName;

        return this.myUserScreenName;
    }

    /**
     * @description this function just get the tweets and save them in the database
     * its called when slack send us a 'go' message
     */
    async saveTweets() {
        let tweets = await this.getTweets();
        return await Tweet.createBulk(tweets);
    }
}