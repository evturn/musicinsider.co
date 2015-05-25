var express = require('express');
var BlogCtrl = require('../controllers/blog-ctrl');
var blog = express.Router();

blog.route('/')
  .get(BlogCtrl.getPosts)
  .post(BlogCtrl.postPosts);

blog.route('/:id')
  .get(BlogCtrl.getPost)
  .delete(BlogCtrl.deletePost);

module.exports = blog;