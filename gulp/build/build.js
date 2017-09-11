var gulp = require('gulp'),
    config = require('../gulp.config.js')();

module.exports = function() {
  gulp.start(['compile-scss:compile-scss', 'build:minifyJS']);
};