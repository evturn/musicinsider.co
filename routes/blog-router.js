var express = require('express');
var postsCtrl = require('../controllers/posts');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('blog/index');
});

module.exports = router;