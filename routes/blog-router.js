var express = require('express');
var postsCtrl = require('../controllers/posts');
var blog = express.Router();

blog.route('/')
  .get(postsCtrl.getPosts)
  .post(postsCtrl.postPosts);

module.exports = blog;