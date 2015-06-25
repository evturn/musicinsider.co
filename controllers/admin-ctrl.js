var express = require('express');
var mongoose = require('mongoose');
var Post = require('../models/post');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var LocalConfig = require('../config/passport-local');
var Admin = require('../models/admin');


exports.isAdmin = function(req, res, next) {
  if (req.isAuthenticated()) {
    console.log('isAdmin(): ', req);
    return next();
  }
  res.render('admin/login', {
    layout: 'main'
  });
};

exports.login = function(req, res) {
  res.render('admin/login', {
    layout: 'main'
  });
};

exports.authenticate = function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.redirect('/admin/login', {
        layout: 'main', 
        message: 'Incorrect credentials'
      });
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      return res.redirect('/admin');
    });
  })(req, res, next);
};

exports.getAdmin = function(req, res) {
  Post.find(function(err, posts) {
    if (err) res.send(err);
    res.render('admin/index', {layout: 'admin', posts: posts});
  });
};

exports.getPost = function(req, res) {
  var query = Post.where({ _id: req.params.id });
  query.findOne(function(err, post) {
    if (err) res.send(err);
    if (post) {
      res.render('admin/show', {layout: 'admin', post: post});
    }
  });
};

exports.newPost = function(req, res) { 
  res.render('admin/new', {layout: 'admin'});
};