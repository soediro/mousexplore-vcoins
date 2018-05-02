// Setup basic express server
var express = require('express');
var app = express();
var server = require('http').createServer(app);
var bodyParser = require('body-parser');

// var io = require('socket.io')(server);
var port = process.env.PORT || 2000;

// listen the server port
server.listen(port, function () {
  console.log('Server listening at port %d', port);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
require('./route/route')(app);

// require('./unittest/testapi').testTransaction("0x89718DE358A73343bd0F9D71E5f623131792E43d", "0x89718DE358A73343bd0F9D71E5f623131792E43d", "0.1");
// require('./unittest/testapi').getUpdatedTransactions(0);
// require('./unittest/testapi').loadAccounts();