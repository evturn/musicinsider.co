var express = require('express');
var Post = require('../models/post');
var router = express.Router();


router.get('/', function(req, res) {
  Post.find(function(err, posts) {
    if (err) res.send(err);
    console.log(posts);
    res.render('welcome/index', {posts: posts});
  });
});

module.exports = router;