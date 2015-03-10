var express = require('express'),
		 logger = require('morgan'),
 formidable = require('formidable'),
	 jqupload = require('jquery-file-upload-middleware');

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));

app.use(express.static(__dirname + '/app'));

// Uploads
app.use('/audio', function(req, res, next) {
	var now = Date.now();
	jqupload.fileHandler({
		uploadDir: function(){
			return __dirname + '/app/assets/audio/' + now;
		},
		uploadUrl: function(){
			return '/audio/' + now; },
		})(req, res, next);
});

app.post('/audio', function(req, res) {
	var form = new formidable.IncomingForm();
	form.parse(req, function(err, fields, files) {
		if (err) return res.redirect(303, '/error');
		console.log('received fields:');
		console.log(fields);
		console.log('received files:');
		console.log(files);
    res.redirect(303);
  });
});


app.get('/', function(req, res) {
	res.render('index.html');
});

app.listen(app.get('port'), function() {
	console.log('Listening on port ' + app.get('port'));
});