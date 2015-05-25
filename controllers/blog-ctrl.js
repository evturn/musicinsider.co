var express = require('express');
var mongoose = require('mongoose');
var Post = require('../models/post');

exports.getPosts = function(req, res) {
  Post.find(function(err, posts) {
    if (err) res.send(err);
    console.log(posts);
    res.render('blog/index', {posts: posts});
  });
};

exports.postPosts = function(req, res) {
  var post = new Post({
    title      : req.body.title,
    body       : req.body.body
  });

  post.save(function(err) {
    if (err) return console.log(err); 
    res.redirect('/admin');
    });
};

exports.getPost = function(req, res) {
  var query = Post.where({ _id: req.params.id });
  query.findOne(function(err, post) {
    if (err) res.send(err);
    if (post) {
      console.log(post);
      res.render('blog/show', {post: post});
    }
  });
};

exports.putPost = function(req, res) {

};

exports.deletePost = function(req, res) {
  Post.remove({_id: req.params.id}, function(err) {
    if (err) res.send(err);
    res.redirect('admin/index', {message: 'Post successfully deleted'});
  });
};