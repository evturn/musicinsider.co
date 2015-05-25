var mongoose = require('mongoose');
var postSchema = require('../config/schema').post();

module.exports = mongoose.model('Post', postSchema);

exports.findByLink = function(link, fn) {
  for (var i = 0, len = posts.length; i < len; i++) {
    var post = posts[i];
    if (post.link === link) {
      return fn(null, post);
    }
  }
  return fn(null, null);
};