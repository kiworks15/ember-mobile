var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');

gulp.task('hdbtemplates', function(){
  gulp.src('./templates/*.hbs')
    .pipe(handlebars(
		{
		  outputType: 'browser',
		  namespace: 'Ember.TEMPLATES'
		}
	))
    //.pipe(wrap('Handlebars.template(<%= contents %>)'))
    //.pipe(declare({
    //  namespace: 'ProdApp.templates',
    //  noRedeclare: true, // Avoid duplicate declarations 
    //}))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('../www/scripts'));
});