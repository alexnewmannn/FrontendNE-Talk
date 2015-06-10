var gulp = require('gulp');
var sass = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var minifyCss = require('gulp-minify-css');

gulp.task('sass', function () {
    gulp.src('./scss/main.scss')
        .pipe(sass({
        	outputStyle: 'compressed'
        }))
        .pipe(prefix("last 10 versions", "ie 6"))
        .pipe(minifyCss())
        .pipe(gulp.dest('./dist/css'));
});