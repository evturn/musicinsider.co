var mongoose = require('mongoose');
var postSchema = require('../config/schema').post();

module.exports = mongoose.model('Post', postSchema);