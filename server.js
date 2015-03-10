var express = require('express'),
		 logger = require('morgan');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));

app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res) {
	res.render('index.html');
});

app.listen(app.get('port'), function() {
	console.log('Listening on port ' + app.get('port'));
});