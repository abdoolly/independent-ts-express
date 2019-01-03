import { NextFunction, Request, Response, Router } from 'express';
import { twitterServiceProvider } from './serviceProviders/APIs/twitterServiceProvider';
import { Tweet } from './serviceProviders/Database/TweetsRepository';
const router = Router();


router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    return res.render('index', { title: 'Zappy Backend is working...' });
});

/**
 * slack url
 */
router.post('/api/slack/message', async (req: Request, res: Response, next: NextFunction) => {
    let { challenge, type, event } = req.body;

    if (type === 'url_verification')
        return res.send(challenge);

    if (!(event && event.type === 'message'))
        return res.send({});

    // get the event text
    let { text } = event;

    // if go was included then fetch from twitter
    if (text.toLowerCase().indexOf(' go ') !== -1 || text.toLowerCase() == 'go') {
        let twitterProvider = new twitterServiceProvider();
        await twitterProvider.saveTweets();
    }

    return res.send({});
});

router.get('/api/twitter/tweets', async (req: Request, res: Response, next: NextFunction) => {
    let tweets = await Tweet.find({ screenName: req.query.screenName });
    return res.send({ tweets: tweets.reverse(), length: tweets.length });
});

export = router;