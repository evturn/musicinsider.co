var express = require('express'),
    methodOverride = require('method-override'),
    _method = require('./method-override'),
    connect = require('connect'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    db = require('./config/db')(mongoose),
    logger = require('morgan'),
    hbs = require('./config/handlebars'),
    appRouter = require('./routes/app-router'),
    adminRouter = require('./routes/admin-router'),
    blogRouter = require('./routes/blog-router'),
    root = __dirname + '/public';

var app = module.exports = express();

app.set('view engine', 'hbs');
app.set('views', 'views');
app.engine('hbs', hbs.engine);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride(_method));
app.use(express.static(root));
appRouter.use(express.static(root));
blogRouter.use(express.static(root));
adminRouter.use(express.static(root));
app.use(logger('dev'));
app.use('/', appRouter);
app.use('/admin', adminRouter);
app.use('/blog', blogRouter);

var http = require('./config/http');