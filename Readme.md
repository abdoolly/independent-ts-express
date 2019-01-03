# Zappy Back


## Installation

all you need to do is just run this command and everything will be working properly

```
sudo docker-composer up -d
```

# API Reference

## Slack Webhook

```
POST /api/slack/message
```
this api will be used as a webhook for slack to send the message events which 
we will put the database.

### Example Request from Slack
```
{
    "token": "TshFAl4NkCIonCi542APojzW",
    "team_id": "TDF7U08KC",
    "api_app_id": "ADF2RRTNG",
    "event": {
        "type": "message",
        "user": "UDEKBRC65",
        "text": "go",
        "client_msg_id": "1c0a7d35-7203-4e68-a481-d8d060be88cf",
        "ts": "1539813338.000100",
        "channel": "CDEFG617S",
        "event_ts": "1539813338.000100",
        "channel_type": "channel"
    },
    "type": "event_callback",
    "event_id": "EvDJ1B3U06",
    "event_time": 1539813338,
    "authed_users": [
        "UDEKBRC65"
    ]
}
```

and then just respond with 200 status

## Get Tweets

```
GET /api/twitter/tweets
```

This api receives just query param for the user you want to get his tweets 

### Example request

```
/api/twitter/tweets?screenName=man_zappy
```
This will get all tweets for the user man_zappy

### Example response

```
{
   "tweets": [
      {
         "_id": "5bc7b0184f068d027bfdaa62",
         "tweet": "A laughing tweet 😄😄🤣🤣",
         "screenName": "man_zappy",
         "tweetId": "1052679741101223936"
      },
      {
         "_id": "5bc7afdc4f068d027bfdaa54",
         "tweet": "new TWeet say hello",
         "screenName": "man_zappy",
         "tweetId": "1052679540357718017"
      },
      {
         "_id": "5bc74e9e027a3e002a0dd211",
         "tweet": "another 1.3",
         "screenName": "man_zappy",
         "tweetId": "1052575136627404801"
      }
   ]
}
```

## How to run the unit tests

for unit tests to work properly you should run them inside the docker container holding the 
backend using this command

```
npm run testall
```

## Run full cycle locally

- to make you backend locally public you need to install a tool called ngrok
which you can dowload from [here](https://ngrok.com/download)

- make sure that you have run the docker compose command above to initiate the server it will open on port 3000

- just make that command to make your server public 

```
ngrok http 3000
```

this will make ngrok makes your localhost public and provide you with 2 urls an http and https when you run the command above the urls will appear take the https url copy it.



### first sigin in to slack using this credentials:

[click to open slack](https://slack.com/signin)

workspace name : zappedemo

email : elgenius3000@gmail.com

password: 12344321

### then go to this url 

[https://api.slack.com/apps/ADF2RRTNG/event-subscriptions?](https://api.slack.com/apps/ADF2RRTNG/event-subscriptions?)

### Now you should change Request Url which is our webhook for slack

click change button

then paste the url followed by this /api/slack/message

```
ex: https://075dbc40.ngrok.io/api/slack/message
```

slack will then verify the link by sending a challenge it should be verified successfully

now just click save change at the bottom which will change the url to your new url


now you are ready to test everything :D 




