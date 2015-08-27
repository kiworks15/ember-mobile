var del = require('del');
 
var cb = function (err, paths) {
		console.log('Deleted files/folders:\n', paths.join('\n'));
	}
 
gulp.task('del', function (cb) {
	del([
		//'dist/report.csv',
		// here we use a globbing pattern to match everything inside the `  ` folder
		'../www/scripts/**/*',
		'../www/css/**/*',
		// we don't want to clean this file though so we negate the pattern
		//'!dist/mobile/deploy.json'
	], {'force' : true}, cb);
}); 