var express = require('express');
var app = express();
var server = require('http').Server(app)
var io = require('socket.io')(server);

// enable Cross Origin Requests
var cors = require('cors');
app.use(cors());

 // parse application/x-www-form-urlencoded
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
 app.use(bodyParser.json());

// configure tweet streamer
var Twitter = require('twitter');
var process = require('process');
var tweets = [];
var tweet_skip_rate = 50;
var tweet_count = 0;

var client = new Twitter({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
	access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

/* Start Tweet Streamer */
var stream = client.stream('statuses/filter', {track: 'trump'});
stream.on('data', function(event) {
    if(tweet_count % tweet_skip_rate === 0){
		io.emit("tweet", event);
    }
	tweet_count = tweet_count + 1;
});

stream.on('error', function(error) {
	throw error;
});

/* Register route for static file hosting */
app.use('/', express.static(__dirname + '/'));


/* Start app */
server.listen(8000, function(){
    console.log("Application listening at 0.0.0.0:8000.");
})


