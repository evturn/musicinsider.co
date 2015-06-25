var express = require('express');
var Post = require('../models/post');
var AC = require('../controllers/admin-ctrl'),
    isAdmin = AC.isAdmin,
    login = AC.login,
    authenticate = AC.authenticate,
    getAdmin = AC.getAdmin,
    getPost = AC.getPost,
    newPost = AC.newPost;

var admin = express.Router();

admin.route('/')
  .get(isAdmin, getAdmin);
  
admin.route('/login')
  .post(authenticate);

admin.route('/new')
  .get(isAdmin, newPost);

admin.route('/:id')
  .get(isAdmin, getPost);
  

module.exports = admin;