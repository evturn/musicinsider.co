var express = require('express');
var logger 	= require('morgan');
var hbs = require('./config/handlebars');
var app = express();

app.set('view engine', 'hbs');
app.set('views', 'views');
app.engine('hbs', hbs.engine);

app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));

var appRoutes = require('./routes/app-routes');
app.use('/', appRoutes);


app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
	console.log('Listening on port ' + app.get('port'));
});