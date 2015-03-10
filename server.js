var express = require('express'),
		 logger = require('morgan');
var app = express();

app.get('/', function(req, res) {
	res.render('index.html');
})