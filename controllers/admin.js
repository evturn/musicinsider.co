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