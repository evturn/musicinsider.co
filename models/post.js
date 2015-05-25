var mongoose = require('mongoose');
var postSchema = require('../config/schema').post();
var userSchema = require('../config/schema').user();



var Post = mongoose.model('Post', postSchema);
