var express = require('express');
var AppCtrl = require('../controllers/app-ctrl'),
    getPosts = AppCtrl.getPosts;

var router = express.Router();

router.route('/')
  .get(getPosts);

module.exports = router;