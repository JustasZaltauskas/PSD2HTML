var gulp = require('gulp'),
    open = require('gulp-open');

module.exports = function() {
  return gulp.src('./index.html')
    .pipe(open());
}