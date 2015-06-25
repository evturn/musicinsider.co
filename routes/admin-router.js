var express = require('express');
var Post = require('../models/post');
var AdminCtrl = require('../controllers/admin-ctrl'),
    isAdmin = AdminCtrl.isAdmin,
    getAdmin = AdminCtrl.getAdmin,
    postAdmin = AdminCtrl.postAdmin,
    getPosts = AdminCtrl.getPosts;

var admin = express.Router();

admin.route('/')
  .get(isAdmin, getPosts);

admin.route('/new')
  .get(AdminCtrl.createPost);

admin.route('/:id')
  .get(AdminCtrl.getPost);

admin.route('/login')
  .get(AdminCtrl.getAdmin)
  .post(AdminCtrl.postAdmin);

module.exports = admin;