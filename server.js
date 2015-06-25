var express = require('express'),
    methodOverride = require('method-override'),
    _method = require('./config/method-override'),
    path = require('path'),
    connect = require('connect'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    mongoose = require('mongoose'),
    passport      = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    LocalConfig   = require('./config/passport-local')(passport),    
    db = require('./config/db')(mongoose),
    appRouter = require('./routes/app-router'),
    adminRouter = require('./routes/admin-router'),
    blogRouter = require('./routes/blog-router'),
    hbs = require('./config/handlebars'),
    root = __dirname + '/public';

var app = module.exports = express();

app.set('view engine', 'hbs');
app.set('views', 'views');
app.engine('hbs', hbs.engine);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(require('express-session')({
  secret: 'dudeman jones',
  resave: false,
  saveUninitialized: false
}));
app.use(methodOverride(_method));
app.use(express.static(root));
app.use(logger('dev'));
app.use(passport.initialize());
app.use(passport.session());
app.use('/', appRouter);
app.use('/admin', adminRouter);
app.use('/blog', blogRouter);

var http = require('./config/http');