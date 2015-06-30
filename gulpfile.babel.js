import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';

const $ = gulpLoadPlugins();

gulp.task('sass', () => {
	return gulp.src(['./scss/main.scss', './scss/inline/main.scss'], {base: 'scss'})
		.pipe($.plumber())
		.pipe($.sass(config.sass))
		.pipe(gulp.dest('./dist/css'))
});


