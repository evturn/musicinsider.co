var express = require('express');
var BlogCtrl = require('../controllers/blog-ctrl');
var AdminCtrl = require('../controllers/admin-ctrl');
var Post = require('../models/post');

var admin = express.Router();

admin.route('/')
  .get(AdminCtrl.getPosts);

admin.route('/new')
  .get(function(req, res) { res.render('admin/new', {layout: 'admin'});
 });

admin.route('/:id')
  .get(AdminCtrl.getPost);

admin.route('/login')
  .get(AdminCtrl.getLogin)
  .post(AdminCtrl.postLogin);

module.exports = admin;