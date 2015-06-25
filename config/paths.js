module.exports = {
  js: {
    server: [ 
    './controllers/**/*.js',
    './config/**/*.js',
    './models/**/*.js',
    './routes/**/*.js',
    './models/**/*.js',
    './gulpfile.js',
    './server.js'],
    client: [
      'public/assets/**/*.js']
  },
  css: {
    src: [
      'public/assets/css']
  },
  scss: {
    src: [
      'public/assets/css/scss/**/*.scss'],
    dest: 'public/assets/css'
  }
};