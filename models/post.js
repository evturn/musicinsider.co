var mongoose = require('mongoose');
var postSchema = require('../config/schema').post();

var Post = mongoose.model('Post', postSchema);

module.exports = Post;