var gulp = require('gulp'),
    config = require('../gulp.config.js')(),
    runSequence = require('run-sequence');

module.exports = function() {
  gulp.watch(config.scss.src, function() {
    runSequence('compile-scss', 'reload');
  });
};