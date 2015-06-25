var mongoose = require('mongoose');
var postSchema = require('../config/schema').Post();

module.exports = mongoose.model('Post', postSchema);