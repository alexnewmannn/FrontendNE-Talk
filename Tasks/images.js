'use strict';

var del = require('del');
var gulp = require('gulp');
var vinylPaths = require('vinyl-paths');
var config = require('./Config/config.js');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();

gulp.task('svgmin', function() {
	return gulp.src('./Images/**/raw_*.svg')
		.pipe(plugins.svgmin());
});

gulp.task('kraken', function() {
	return gulp.src([
		'./Images/**/raw_*.png',
		'./Images/**/raw_*.jpg'
	])
		.pipe(plugins.kraken(config.kraken));
});

gulp.task('renameRaw', ['svgmin', 'kraken'], function() {
	return gulp.src(config.imgPaths)
		.pipe(plugins.rename(function(path) {
			path.basename = path.basename.substring(4, path.basename.length);
		}))
		.pipe(gulp.dest('./dist/Images/'));
});

gulp.task('removeRaw', ['renameRaw'], function() {
	return gulp.src(config.imgPaths)
		.pipe(vinylPaths(del));
});
