var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    sass = require('gulp-sass'),
    livereload = require('gulp-livereload'),
    nodemon = require('nodemon'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function() {
  gutil.log('Gulp running');
});

gulp.task('compileSass', function() {
  return gulp.src('public/assets/css/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('public/assets/css'));
});