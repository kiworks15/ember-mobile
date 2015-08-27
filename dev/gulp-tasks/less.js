var less = require('gulp-less'),
	LessPluginLessHat = require('less-plugin-lesshat'),
	LessPluginAutoPrefix = require('less-plugin-autoprefix'),
	LessPluginCleanCSS = require('less-plugin-clean-css'),
	lesshat = new LessPluginLessHat(),
	autoprefix = new LessPluginAutoPrefix({ browsers: ["> 80%"] }),
	cleancss = new LessPluginCleanCSS({ advanced: true }),
	rev = require('gulp-rev'),
	buffer = require('vinyl-buffer');
	
var gulp = require('gulp'),
	minifyCSS = require('gulp-minify-css'),
	concat = require('gulp-concat');

gulp.task('less', function() {
	return gulp.src('./less/**/*.less')	
		.pipe(less({
		  //paths: [ './', './less', path.join('less', 'includes') ],
		  plugins: [lesshat, autoprefix, cleancss]
		}))
		.pipe(buffer())
		.pipe(sourcemaps.init())
		.pipe(minifyCSS())
		.pipe(concat('styles.css'))
		//.pipe(rev())
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('../www/css'));
});