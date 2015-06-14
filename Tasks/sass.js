'use strict';

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
var config = require('./Config/config.js');

gulp.task('sass', function() {
    return gulp.src(['./scss/main.scss', './scss/inline/main.scss'], {base: 'scss'})
	    .pipe(plugins.sourcemaps.init())
		.pipe(plugins.sass(config.sass))
        .pipe(plugins.autoprefixer(config.autoprefix))
        .pipe(plugins.minifyCss())
		.pipe(plugins.sourcemaps.write())
        .pipe(gulp.dest('./dist/css'))
        .pipe(plugins.livereload());
});

gulp.task('uncss', function() {
	return gulp.src('./dist/css')
        .pipe(plugins.uncss(config.uncss))
});