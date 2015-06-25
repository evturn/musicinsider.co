var gulp = require('gulp'),
    gutil = require('gulp-util'),
    livereload = require('gulp-livereload'),
    nodemon = require('nodemon'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    minifyCss = require('gulp-minify-css'),
    notify = require('gulp-notify');
    
var paths = require('./config/paths');

gulp.task('default', ['serve', 'compileSass', 'server-jshint', 'client-jshint']);

gulp.task('compileSass', function() {
  return gulp.src(paths.scss.src)
    .pipe(sass({sourceComments: 'map',
      sourceMap: 'sass',
      outputStyle: 'nested'}))
    .pipe(gulp.dest(paths.scss.dest))
    .on('error', gutil.log);
});

gulp.task('client-jshint', function() {
  return gulp.src(paths.js.client)
    .pipe(jshint())
    .pipe(notify(function(file) {
    if (file.jshint.success) {
      return false;
    }
    var errors = file.jshint.results.map(function(data) {
      if (data.error) {
        return "(" + data.error.line + ':' + data.error.character + ') ' + data.error.reason;
      }
    }).join("\n");
    return file.relative + " (" + file.jshint.results.length + " errors)\n" + errors;
  }));
});

gulp.task('server-jshint', function() {
  return gulp.src(paths.js.server)
    .pipe(jshint())
    .pipe(notify(function(file) {
    if (file.jshint.success) {
      return false;
    }
    var errors = file.jshint.results.map(function(data) {
      if (data.error) {
        return "(" + data.error.line + ':' + data.error.character + ') ' + data.error.reason;
      }
    }).join("\n");
    return file.relative + " (" + file.jshint.results.length + " errors)\n" + errors;
    }))
    .pipe(livereload());
});

gulp.task('serve', function() {
  livereload.listen();
  nodemon({
    script: './config/http.js',
    stdout: false
  }).on('readable', function() {
    this.stdout.on('data', function(chunk) {
      if (/^listening/.test(chunk)) {
        livereload.reload();
      }
      process.stdout.write(chunk);
    });
  });
  gulp.watch(paths.scss.src, ['compileSass']);
  gulp.watch(paths.js.client, ['client-jshint']);
  gulp.watch(paths.js.server, ['server-jshint']);
});