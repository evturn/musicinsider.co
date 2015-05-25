var mongoose = require('mongoose');
var Post = require('../models/post');

exports.getPosts = function(res, req) {
  Post.find(function(err, posts) {
    if (err) {
      res.send(err);
    }
    console.log(posts);
    res.render('blog/index', {blog: posts});
  });
};

exports.postPosts = function(res, req) {
  Post.create({
    title     : req.body.title,
    body      : req.body.body
  }, function (err, post) {
      if (err) {
        return console.log(err); 
      }
      console.log(post);
      res.redirect('/blog');
    });
};

exports.getPost = function(res, req) {

};

exports.putPost = function(res, req) {

};

exports.deletePost = function(res, req) {

};