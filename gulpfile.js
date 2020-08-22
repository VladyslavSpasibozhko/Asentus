const gulp = require('gulp');
const less = require('gulp-less');
const browserSync = require('browser-sync').create();

function style () {
	return gulp.src('./style/**/*.less')
		   .pipe(less())
		   .pipe(gulp.dest('./css'))
		   .pipe(browserSync.stream())
}

function watch () {
	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	gulp.watch('./style/**/*.less', style);
	gulp.watch('./*.html').on('change', browserSync.reload);
	
}
exports.style = style;
exports.watch = watch;