var Post = require('../models/post');

exports.getPosts = function(req, res) {
  Post.find(function(err, posts) {
    if (err) res.send(err);
    res.render('welcome/index', {posts: posts});
  });
};