var express = require('express');
var AdminCtrl = require('../controllers/admin-ctrl');
var Post = require('../models/post');

var admin = express.Router();

admin.route('/')
  .get(AdminCtrl.getPosts);

admin.route('/new')
  .get(AdminCtrl.createPost);

admin.route('/:id')
  .get(AdminCtrl.getPost);

admin.route('/login')
  .get(AdminCtrl.getLogin)
  .post(AdminCtrl.postLogin);

module.exports = admin;