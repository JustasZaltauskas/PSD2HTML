var gulp = require('gulp'),
    config = require('../gulp.config.js')(),
    sass = require('gulp-sass'),
    neat = require('bourbon-neat').includePaths,
    bourbon = require("bourbon").includePaths,
    sourcemaps = require('gulp-sourcemaps'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cleanCSS = require('gulp-clean-css'),
    plumber = require('gulp-plumber');


module.exports = function() {
  var options = {
    includePaths: [bourbon, neat],
    outputStyle: 'nested', // 'compressed'
    sourceComments: false
  };

  return gulp.src(config.scss.src)
    .pipe(plumber({
      errorHandler: function(err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe(sourcemaps.init())
    .pipe(sass(options)
      .on('error', sass.logError)
    )
    .pipe(postcss([ autoprefixer() ]))
    .pipe(sourcemaps.write('./'), {
      includeContent: false,
      sourceRoot: config.scss.cssFolder
    })
    .pipe(cleanCSS())
    .pipe(gulp.dest(config.scss.cssFolder))
};