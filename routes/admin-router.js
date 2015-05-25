var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('admin/index', {layout: 'admin'});
});

router.get('/new', function(req, res) {
  res.render('admin/new', {layout: 'admin'});
});


module.exports = router;