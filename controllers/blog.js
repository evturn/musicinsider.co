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
  console.log(req.body);
  var post = new Post({
    title : req.body.title,
    body  : req.body.body
  });

  post.save(function(err) {
    if (err) return console.log(err); 
    res.redirect('/admin');
    });
};

exports.getPost = function(req, res) {

};

exports.putPost = function(req, res) {

};

exports.deletePost = function(req, res) {

};