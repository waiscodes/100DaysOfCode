import tweepy
import time

# Auth keys not included (OBVIOUSLY)
auth = tweepy.OAuthHandler('',
                           '')
auth.set_access_token(
    '', '')

api = tweepy.API(auth, wait_on_rate_limit=True, wait_on_rate_limit_notify=True)

user = api.me()

search = '#100DaysOfReadingCode'
nrTweets = 10

for tweet in tweepy.Cursor(api.search, search).items(nrTweets):
     try:
         tweet.retweet()
         print('Tweet Retweeted')
         time.sleep(10)
     except tweepy.TweepError as e:
         print(e.reason)
     except StopIteration:
         break
