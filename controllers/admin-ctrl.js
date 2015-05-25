var express = require('express');
var mongoose = require('mongoose');
var Post = require('../models/post');

exports.getPosts = function(req, res) {
  Post.find(function(err, posts) {
    if (err) res.send(err);
    console.log(posts);
    res.render('admin/index', {layout: 'admin', posts: posts});
  });
};

exports.getPost = function(req, res) {
  var query = Post.where({ _id: req.params.id });
  query.findOne(function(err, post) {
    if (err) res.send(err);
    if (post) {
      console.log(post);
      res.render('admin/show', {layout: 'admin', post: post});
    }
  });
};