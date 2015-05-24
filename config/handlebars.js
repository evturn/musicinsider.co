var handlebars = require('express-handlebars');

var viewDirectories = [
	'views/partials',
	'views/blog'
];

var hbs = handlebars.create({
	defaultLayout: 'main',
	extname: '.hbs',
	partialsDir: viewDirectories
});

module.exports = hbs;