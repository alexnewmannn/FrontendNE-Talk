'use strict';

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
var config = require('./Config/config.js');

gulp.task('inlinesource', ['sass'], function() {
	return gulp.src('./index.html')
		.pipe(plugins.inlineSource())
		.pipe(gulp.dest('./dist'));
});

gulp.task('minify', ['inlinesource'], function() {
	return gulp.src('./dist/index.html')
		.pipe(plugins.htmlmin(config.htmlmin))
		.pipe(gulp.dest('./dist'));
});
