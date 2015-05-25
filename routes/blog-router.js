var express = require('express');
var BlogCtrl = require('../controllers/blog');
var blog = express.Router();

blog.route('/')
  .get(BlogCtrl.getPosts)
  .post(BlogCtrl.postPosts);

module.exports = blog;