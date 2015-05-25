var express = require('express');
var mongoose = require('mongoose');
var logger 	= require('morgan');
var hbs = require('./config/handlebars');
var appRouter = require('./routes/app-router');
var adminRouter = require('./routes/admin-router');
var blogRouter = require('./routes/blog-router');
var db = require('./config/db')(mongoose);

var app = express();

app.set('view engine', 'hbs');
app.set('views', 'views');
app.engine('hbs', hbs.engine);

app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));


app.use('/', appRouter);
app.use('/admin', adminRouter);
app.use('/blog', blogRouter);


app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
	console.log('Listening on port ' + app.get('port'));
});