import { TweetInterface } from "../../../intefaces/models/Tweet";
import { TweetModel } from "../../models/Tweet";
import { BaseRepository } from "./BaseRepository";

export class TweetsRepository extends BaseRepository<any, any> {
    model = TweetModel;
}

export const Tweet = TweetsRepository.initializeInstance<TweetInterface, TweetInterface>();