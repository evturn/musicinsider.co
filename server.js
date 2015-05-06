var express = require('express');
var logger 	= require('morgan');
var ejs 		= require('ejs');

var app = express();

app.set('views', __dirname + '/public/views');

app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.render('layout');
});

app.listen(app.get('port'), function() {
	console.log('Listening on port ' + app.get('port'));
});