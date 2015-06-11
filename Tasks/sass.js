'use strict';

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();
var config = require('./Config/config.js');

gulp.task('sass', function() {
    return gulp.src(['./scss/main.scss', './scss/inline/main.scss'], {base: 'scss'})
		.pipe(plugins.sass(config.sass))
        .pipe(plugins.autoprefixer(config.autoprefix))
        .pipe(plugins.minifyCss())
        .pipe(gulp.dest('./dist/css'))
        .pipe(plugins.livereload());
});