var gulp = require('gulp');

gulp.task('copy-vendor', function() {
   gulp.src('./bower_components/ember/ember.min.js')
   .pipe(gulp.dest('../www/vendor'));
   
   gulp.src('./bower_components/jquery/dist/jquery.min.js')
   .pipe(gulp.dest('../www/vendor'));
});