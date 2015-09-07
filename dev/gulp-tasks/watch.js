var gulp = require('gulp'),
    watch = require('gulp-watch'),
	batch = require('gulp-batch'),
	watchify = require('watchify');
	
gulp.task('watch', function () {
    watch('./less/**/*.less', batch(function (events, done) {
        gulp.start('less', done);
    }));
	
	watch('./app/js/**/*.js', batch(function (events, done) {
        gulp.start('browserify', done);
    }));
	
	watch('./app/templates/**/*.hbs', batch(function (events, done) {
        gulp.start('hdbtemplates', done);
    }));
	
	//var bundler = watchify(source('./js6/app.js'));
	//bundler.on('update', gulp.start('browserify', done)); //rebundle
		
	// function rebundle() {
		// return bundler.bundle()
		  // .pipe(source('scripts.js'))
		  // .pipe(gulp.dest('../www/scripts'));
	  // }
 
	// return rebundle();
});
 
// gulp.task('watch', function () {
    // return gulp.src('./less/**/*.less')
        // .pipe(watch('./less/**/*.less'))
        // .pipe(gulp.dest('../www/css'));
// });
 
// gulp.task('callback', function (cb) {
    // watch('./less/**/*.less', function () {
        // gulp.src('./less/**/*.less')
            // .pipe(watch('./less/**/*.less'))
            // .on('end', cb);
    // });
// });