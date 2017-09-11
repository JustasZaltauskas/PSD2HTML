var gulp = require('gulp'),
    config = require('../gulp.config.js')(),
    browserSync = require('browser-sync');

module.exports = function() {
  if (browserSync.get(config.browserSync.name).active) {
    browserSync.get(config.browserSync.name).reload();
  } else {
    console.log('Error in reload.js, browserSync: ' + config.browserSync.name + ' is not active');
  }
}