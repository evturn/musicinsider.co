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
    body       : req.body.body,
    link       : req.body.link
  });

  post.save(function(err) {
    if (err) return console.log(err); 
    res.redirect('/admin');
    });
};

exports.getPost = function(req, res) {
  Post.findById(req.params._id, function(err, post) {
    if (err)
      res.send(err);
      console.log(post);
      res.send({post: post});
  });
};

exports.putPost = function(req, res) {

};

exports.deletePost = function(req, res) {

};