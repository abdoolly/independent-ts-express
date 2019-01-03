import { Schema, model } from 'mongoose';
import { TweetInterface } from '../../intefaces/models/Tweet';

const ObjectId = Schema['ObjectId'];

export const TweetSchema = new Schema({
    id: ObjectId,
    tweet: String,
    screenName: String,
    tweetId: String
});

// making the tweetId unique so the tweets wont be repeated
TweetSchema.index({ tweetId: 1 }, { unqiue: true });

export let TweetModel = model('Tweets', TweetSchema);