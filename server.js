var express = require('express');
var methodOverride = require('method-override');
var connect = require('connect')
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var db = require('./config/db')(mongoose);
var logger = require('morgan');
var hbs = require('./config/handlebars');
var appRouter = require('./routes/app-router');
var adminRouter = require('./routes/admin-router');
var blogRouter = require('./routes/blog-router');

var app = express();

app.set('view engine', 'hbs');
app.set('views', 'views');
app.engine('hbs', hbs.engine);
app.set('port', process.env.PORT || 3000);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method
    delete req.body._method
    return method
  }
}));

app.use(express.static(__dirname + '/public'));
app.use(logger('dev'));

app.use('/', appRouter);
app.use('/admin', adminRouter);
app.use('/blog', blogRouter);


app.listen(app.get('port'), function() {
	console.log('Listening on port ' + app.get('port'));
});