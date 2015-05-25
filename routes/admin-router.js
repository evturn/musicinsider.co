var express = require('express');
var BlogCtrl = require('../controllers/blog');
var AdminCtrl = require('../controllers/admin');
var Post = require('../models/post');

var admin = express.Router();

admin.route('/')
  .get(AdminCtrl.getPosts)

admin.get('/new', function(req, res) {
  res.render('admin/new', {layout: 'admin'});
});

admin.post('/login', function(req, res) {
  res.redirect('/', {layout: 'admin'});
});

module.exports = admin;