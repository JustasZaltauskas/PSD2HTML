var gulp = require('gulp'),
    config = require('../gulp.config.js')(),
    browserSync = require('browser-sync').create(config.browserSync.name);

module.exports = function() {
  browserSync.init({
    server: {
      baseDir: config.browserSync.baseDir
    }
  });
}

module.exports.dependencies = ['watch-tasks:watch-all'];