var express = require('express');
var BlogCtrl = require('../controllers/blog-ctrl');
var isAdmin = require('../controllers/Admin-ctrl').isAdmin;
var blog = express.Router();

blog.route('/')
  .get(BlogCtrl.getPosts)
  .post(isAdmin, BlogCtrl.postPosts);

blog.route('/:id')
  .get(BlogCtrl.getPost)
  .put(isAdmin, BlogCtrl.putPost)
  .delete(isAdmin, BlogCtrl.deletePost);

module.exports = blog;