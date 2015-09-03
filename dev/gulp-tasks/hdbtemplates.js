var handlebars = require('gulp-handlebars');
var wrap = require('gulp-wrap');
var declare = require('gulp-declare');
var concat = require('gulp-concat');

var cmpr = require('ember-template-compiler');

var emberTemplates = require('gulp-ember-templates');

var Htmlbars = require('ember-cli-htmlbars');

//var compiler1 = new Htmlbars();

gulp.task('hdbtemplates', function () {
  gulp.src('./templates/**/*.hbs')
    .pipe(emberTemplates(
		{
		  compiler: cmpr,
		  isHTMLBars: true // Will generate `Ember.HTMLBars.template({ ... })`
		}
	))
    .pipe(concat('ember-templates.js')) // make sure to only do concat after 
    .pipe(gulp.dest('../www/scripts'));
	
	var fs = require('fs');
	var template = fs.readFileSync('./templates/pris-app.hbs').toString();
	var input = cmpr.precompile(template, false);
	var output = "Ember.TEMPLATES['pris-app'] = Ember.Handlebars.template(" + input + ");";
	fs.writeFileSync('../www/scripts/output.js', output, { encoding: 'utf8' });
});

// var fs = require('fs');
// var compiler = require('./bower_components/ember/ember-template-compiler');
// var input = fs.readFileSync('./templates/**/*.hbs', { encoding: 'utf8' });
// var template = compiler.precompile(input, false);
// var output = 'export default Ember.HTMLBars.template(' + template + ');';
// fs.writeFileSync('../www/scripts/output.js', output, { encoding: 'utf8' });

// gulp.task('hdbtemplates', function(){
  // gulp.src('./templates/**/*.hbs')
	// .pipe(handlebars({
		// handlebars: require('ember-handlebars')
	// }))
	// Wrap each template function in a call to Ember.Handlebars.template
	// .pipe(wrap('Handlebars.template(<%= contents %>)'))
	// Declare template functions with Ember.TEMPLATES according to their path and filename
	// .pipe(declare({
		  //root: 'ember-app',
		  // namespace: 'Ember.TEMPLATES',
			// noRedeclare: true, // Avoid duplicate declarations 
		// }
	// ))
    // .pipe(handlebars(
		// {
		  // outputType: 'browser',
		  // namespace: 'Ember.TEMPLATES'
		// }
	// ))
	
    // .pipe(wrap('Handlebars.template(<%= contents %>)'))
    // .pipe(declare({
     // namespace: 'ProdApp.templates',
     // noRedeclare: true, // Avoid duplicate declarations 
    // }))
    // .pipe(concat('templates.js'))
    // .pipe(gulp.dest('../www/scripts'));
// });

/*
The template files will be compiled to the following namespace paths:

source/templates/application.hbs	Ember.TEMPLATES.App
source/templates/App/header.hbs	Ember.TEMPLATES.App.header
source/templates/App/footer.hbs	Ember.TEMPLATES.App.footer
source/templates/index.hbs	Ember.TEMPLATES.Other.item

https://github.com/lazd/gulp-handlebars/tree/master/examples/ember
*/