var gulp = require('gulp');

require('gulp-task-loader')('gulp/compile-scss');
require('gulp-task-loader')('gulp/watch-tasks');
// Live browser synchronization
require('gulp-task-loader')('gulp/browser-sync');
require('gulp-task-loader')('gulp/build');