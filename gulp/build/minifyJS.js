var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    config = require('../gulp.config.js')();

module.exports = function() {
  return gulp.src(config.js.src)
    .pipe(uglify())
    .pipe(gulp.dest(config.js.jsFolder))
};