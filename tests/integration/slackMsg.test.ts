import * as app from '../../app';
import * as request from 'supertest';
import { expect } from 'chai';

describe('Testing Slack Integration webhook', () => {
    let slackURI = '/api/slack/message';

    it('Testing the slack challenge response', async () => {
        let challenge = '123456789'
        let res = await request(app)
            .post(slackURI)
            .set('Content-Type', 'application/json')
            .send({
                challenge,
                type: 'url_verification'
            })
            .expect(200);

        expect(res.text === challenge).true;
    });

    it('Testing a message event with \'go\' text', async () => {
        await request(app)
            .post(slackURI)
            .set('Content-Type', 'application/json')
            .send({
                "token": "TshFAl4NkCIonCi542APojzW",
                "team_id": "TDF7U08KC",
                "api_app_id": "ADF2RRTNG",
                "event": {
                    "type": "message",
                    "user": "UDEKBRC65",
                    "text": "go",
                    "client_msg_id": "b0d4f1ec-c177-4c84-b7e3-f2ee71f9065a",
                    "ts": "1539813399.000100",
                    "channel": "CDEFG617S",
                    "event_ts": "1539813399.000100",
                    "channel_type": "channel"
                },
                "type": "event_callback",
                "event_id": "EvDGERSJLU",
                "event_time": 1539813399,
                "authed_users": [
                    "UDEKBRC65"
                ]
            })
            .expect(200);
    });

});