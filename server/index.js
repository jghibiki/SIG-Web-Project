var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();

// enable Cross Origin Requests
app.use(cors());

// create data store
var messages = [];

 // parse application/x-www-form-urlencoded
 app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
 app.use(bodyParser.json())


app.get('/message', function(req, res) {
    console.log("GET  /message");
    res.send(messages);
});

app.post('/message', function(req, res){
    console.log("POST /message");
    messages.push(req.body);
    res.send(JSON.stringify({result: "success"}));
})


/* Start app */
app.listen(8000, function(){
    console.log("Application listening at 0.0.0.0:8000.");
})
