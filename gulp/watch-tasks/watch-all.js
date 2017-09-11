var gulp = require('gulp'),
		config = require('../gulp.config.js')();

module.exports = function() {
	gulp.start(['watch-tasks:watch-scss', 'watch-tasks:watch-html']);
};