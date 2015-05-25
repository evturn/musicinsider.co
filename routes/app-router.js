var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('welcome/index');
});

router.get('/login', function(req, res) {
  res.render('welcome/login');
});

module.exports = router;