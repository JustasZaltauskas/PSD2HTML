var gulp = require('gulp'),
    config = require('../gulp.config.js')();

module.exports = function() {
  gulp.start(['compile-scss', 'minifyJS']);
};