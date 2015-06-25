var mongoose = require('mongoose');
var schema = require('../config/schema').Admin();
var passportLocalMongoose = require('passport-local-mongoose');
var bcrypt = require('bcrypt');

schema.pre('save', function(next) {
  var admin = this;
  if (!admin.isModified('password')) return next();
  bcrypt.genSalt(10, function(err, salt) {
    if (err) return next(err);

    bcrypt.hash(admin.password, salt, function(err, hash) {
      if (err) return next(err);
      admin.password = hash;
      next();
    });
  });
});

schema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};


schema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Admin', schema);