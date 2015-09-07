var babelify = require('babelify'),
	browserify = require('browserify'),
	source = require('vinyl-source-stream'),
	buffer = require('vinyl-buffer')
	sourcemaps = require('gulp-sourcemaps'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	es = require('event-stream'),
	rev = require('gulp-rev');
	
var gulp = require('gulp');

// var browsersync  = require('browser-sync'),
	// livereload = require('gulp-livereload');
	
var destFile = 'scripts.js',
	destFolder = '../www/scripts',
	srcFiles = './app/js/app.js';

var bConfig = {
		entries: srcFiles,
		// Enable source maps
		debug: true,
		// Additional file extensions to make optional
		extensions: [],
		// Required watchify args
		cache: {}, packageCache: {}, fullPaths: false,
		// bundleConfigs: [{
				// entries:    './js6/modules1/*.js',
				// dest:       destFolder + '/mdd',
				// outputName: 'md1.js'
			// }, {
				// entries:    './' + srcAssets + '/javascripts/app.js',
				// dest:       destFolder,
				// outputName: 'scripts.js'
			// }]
    };	
	
gulp.task('browserify', function() {
	var files = [
        ['./app/js/app.js','scripts','../www/scripts']
		//['./bower_components/ember/ember.min','ember.min','../www/vendor'],
		//['./bower_components/jquery/dist/jquery.min','jquery.min','../www/vendor']
    ];	
	
	var tasks = files.map(function(entry) {
		bConfig.entries = [entry[0]];
        return browserify(bConfig)
			//.transform(babelify)
            .bundle()
            .pipe(source(entry[1]))
            // rename them to have "bundle as postfix"
            .pipe(rename({
                extname: '.js'
            }))
			.pipe(buffer())
			.pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
			//.pipe(uglify())
			//.pipe(rev())
			.pipe(sourcemaps.write('./')) // writes .map file
            .pipe(gulp.dest(entry[2])); 
	});
	
    //browserify(bConfig)
    //.transform(babelify)
    //.bundle()
    //.pipe(source(destFile))
	//.pipe(source(files))
	//.pipe(rename({
	//	extname: '.bundle.js'
	//}))
	//.pipe(buffer())
    //.pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
    //.pipe(uglify())
	//.pipe(rev())
    //.pipe(sourcemaps.write('./')) // writes .map file
    //.pipe(gulp.dest(destFolder));
	
	return es.merge.apply(null, tasks);
});