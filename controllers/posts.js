var mongoose = require('mongoose');
var Post = require('../models/post');

exports.getPosts = function(res, req) {

};

exports.postPosts = function(res, req) {
  Post.create(new Post({
    title     : req.body.title,
    body      : req.body.body
  }))
};

exports.getPost = function(res, req) {

};

exports.putPost = function(res, req) {

};

exports.deletePost = function(res, req) {

};