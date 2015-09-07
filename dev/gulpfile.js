var gulp = require('gulp');
var requireDir = require('require-dir');
var tasks = requireDir('./gulp-tasks');

gulp.task('build', ['hdbtemplates', 'browserify', 'less', 'images']);
gulp.task('default', ['del', 'copy-vendor', 'build', 'watch']);