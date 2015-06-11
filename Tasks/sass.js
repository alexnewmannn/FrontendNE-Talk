// var gulp = require('gulp');
// var sass = require('gulp-sass');
// var prefix = require('gulp-autoprefixer');
// var minifyCss = require('gulp-minify-css');

var gulp = require('gulp');
var gulpLoadPlugins = require('gulp-load-plugins');
var plugins = gulpLoadPlugins();

var config = require('./Config/config.js');
var gutil = require('gulp-util')

gulp.task('sass', function() {
    return gulp.src(['./scss/main.scss', './scss/inline/main.scss'])
		.pipe(plugins.sass(config.sass))
        .pipe(plugins.autoprefixer(config.autoprefix))
        .pipe(plugins.minifyCss())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('inlineSass', function() {
	return gulp.src('./scss/inline/*.scss')
		.pipe(plugins.sass(config.sass))
        .pipe(plugins.autoprefixer(config.autoprefix))
        .pipe(plugins.minifyCss())
        .pipe(gulp.dest('./dist/css/inline'));
})