var mongoose = require('mongoose');

exports.post = function() {
  return new mongoose.Schema({
    title     : {type: String},
    body      : {type: String},
    link      : {type: String},
    createdAt : {type: Date, default: Date.now}
  });
};

exports.user = function() {
  return new mongoose.Schema({
    name     : {type: String, required: true},
    password : {type: String, required: true},
    email    : {type: String, required: true, unique: true},
    username : {type: String, required: true, unique: true}
  });
};
