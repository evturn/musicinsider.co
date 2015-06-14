var express = ('express');
var handlebars = require('express-handlebars');

var viewDirectories = [
  'views/partials',
  'views/blog',
  'views/welcome',
  'views/admin'
];

var hbs = handlebars.create({
  defaultLayout: 'main',
  extname: '.hbs',
  partialsDir: viewDirectories
});

module.exports = hbs;