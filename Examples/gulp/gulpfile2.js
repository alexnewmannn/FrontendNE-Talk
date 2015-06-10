var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
    gulp.src('./scss/main.scss')
        .pipe(sass({
        	outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('./dist/css'));
});