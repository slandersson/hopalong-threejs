var express = require('express');
var app = express();
var port = 8080;

var router = require('./app/routes');
app.use('/', router);

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 8888)
