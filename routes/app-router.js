var express = require('express');
var Post = require('../models/post');
var AppCtrl = require('../controllers/app-ctrl'),
    getPosts = AppCtrl.getPosts;

var router = express.Router();

router.route('/')
  .get(getPosts);

module.exports = router;