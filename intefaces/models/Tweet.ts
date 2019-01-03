import { Document } from "mongoose";

export interface TweetInterface {
    id?: string;
    tweet?: string;
    screenName?: string;
    tweetId?: string;
}