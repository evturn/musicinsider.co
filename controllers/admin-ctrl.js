var express = require('express');
var mongoose = require('mongoose');
var Post = require('../models/post');

exports.getPosts = function(req, res) {
  Post.find(function(err, posts) {
    if (err) res.send(err);
    res.render('admin/index', {layout: 'admin', posts: posts});
  });
};

exports.getPost = function(req, res) {
  var query = Post.where({ _id: req.params.id });
  query.findOne(function(err, post) {
    if (err) res.send(err);
    if (post) {
      res.render('admin/show', {layout: 'admin', post: post});
    }
  });
};

exports.createPost = function(req, res) { 
  res.render('admin/new', {layout: 'admin'});
};

exports.getLogin = function(req, res) {
  res.render('welcome/login');
};

exports.postLogin = function(req, res) {
  res.redirect('/', {layout: 'admin'});
};