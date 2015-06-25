var mongoose = require('mongoose');

exports.Admin = function() {
  return new mongoose.Schema({
    name      : {type: String},
    password  : {type: String, required: true},
    username  : {type: String, required: true, unique: true},
    posts     : [postSchema]
  });
};
exports.Post = function() {
  return new mongoose.Schema({
    title     : {type: String, required: true},
    body      : {type: String, required: true},
    createdAt : {type: Date, default: Date.now}
  });
};

var postSchema = this.Post();
