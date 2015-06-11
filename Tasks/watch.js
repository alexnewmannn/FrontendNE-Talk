var gulp = require('gulp');

gulp.task('watch', function() {
    gulp.watch(['./scss/**/*.scss', '!./scss/inline/*.scss'], ['sass']);
    gulp.watch(['./index.html', './scss/inline/*.scss'], ['minify']);
    gulp.watch(['./Images/**/*.+(png|svg|jpg)'], ['removeRaw']);
});