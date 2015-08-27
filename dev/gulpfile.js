var requireDir = require('require-dir');
var tasks = requireDir('./gulp-tasks');
var gulp = require('gulp');

gulp.task('build', ['browserify', 'hdbtemplates', 'less', 'images']);
gulp.task('default', ['del', 'build', 'watch']);