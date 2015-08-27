var sourcemaps = require('gulp-sourcemaps'),
	babel = require('gulp-babel'),
	concat = require('gulp-concat'),
	gulp = require('gulp');

gulp.task('babel', function() {
	return gulp.src('./js6/**/*.js')
		.pipe(sourcemaps.init())
		.pipe(babel())
		.pipe(concat('scripts.js'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('../www/scripts'));
});