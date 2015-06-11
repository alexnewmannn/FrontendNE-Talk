'use strict';

var gulp = require('gulp');
var livereload = require('gulp-livereload');

gulp.task('watch', function() {
	livereload.listen();
    gulp.watch(['./scss/**/*.scss', '!./scss/inline/*.scss'], ['sass']);
    gulp.watch(['./index.html', './scss/inline/*.scss'], ['minify', 'livereload']);
    gulp.watch(['./Images/**/*.+(png|svg|jpg)'], ['removeRaw']);
});