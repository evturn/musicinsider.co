var gulp = require('gulp'),
    livereload = require('gulp-livereload'),
    nodemon = require('nodemon'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');
    
var serverJS = [ 
    './controllers/**/*.js',
    './config/**/*.js',
    './models/**/*.js',
    './routes/**/*.js',
    './models/**/*.js',
    './gulpfile.js',
    './server.js'];

gulp.task('default', ['serve', 'sass'], function() {
  gutil.log('Gulp running');
});

gulp.task('sass', function() {
  return gulp.src('./public/assets/css/scss/**/*.scss')
    .pipe(sass({sourceComments: 'map',
      sourceMap: 'sass',
      outputStyle: 'nested'}))
    .pipe(gulp.dest('./public/assets/css'));
});

gulp.task('client-jshint', function() {
  return gulp.src('public/assets/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('server-jshint', function() {
  return gulp.src(serverJS)
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
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
  gulp.watch('public/assets/css/scss/**/*.scss', ['sass']);
  gulp.watch('public/assets/**/*.js', ['client-jshint']);
  gulp.watch(serverJS, ['server-jshint']);
});