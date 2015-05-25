var express = require('express');
var router = express.Router();
var Post = require('../models/post');

router.get('/', function(req, res) {
	res.render('admin/index', {layout: 'admin'});
});

router.get('/new', function(req, res) {
  res.render('admin/new', {layout: 'admin'});
});

router.post('/login', function(req, res) {
  res.redirect('/', {layout: 'admin'});
});

module.exports = router;