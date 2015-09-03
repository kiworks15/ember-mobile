

//let someModule = require('module').doSomething;

//var $ = require('../bower_components/jquery/dist/jquery');

//var _ = require('../bower_components/underscore/underscore');

//var Ember = require('../bower_components/ember/ember');

// log binding activities
Ember.LOG_BINDINGS = true;

PrislonApp = Ember.Application.create({
    //some custom fields and methods
    customMethod: function() { console.log('Hi! Im an app!'); },
    customField: "this is the app",

    ready: function(){
        console.log("app was created, ready execute before routing");
        this.customField = "22222";
        console.log(Ember.TEMPLATES["application"]);
        //$("#ember-app").html(Ember.TEMPLATES["application"]);
        /*
        var source   = $("#some-template").html();
        var template = Handlebars.compile(source);

        $("#ember-app").html(template(data));
        */
        var data = { users: [
            {username: "alan", firstName: "Alan", lastName: "Johnson", email: "alan@test.com" },
            {username: "allison", firstName: "Allison", lastName: "House", email: "allison@test.com" },
            {username: "ryan", firstName: "Ryan", lastName: "Carson", email: "ryan@test.com" }
        ]};

        //var template = Ember.HTMLBars.compile(Ember.TEMPLATES["application"]);

        //var template = Handlebars.compile(Ember.TEMPLATES["application"]);
        //$("#ember-app").append(template);
        //$("#ember-app")[0].innerHTML(Ember.TEMPLATES["application"]);
    },

    // log when Ember generates a controller or a route from a generic class
    LOG_ACTIVE_GENERATION: true,
    // log when Ember looks up a template or a view
    LOG_VIEW_LOOKUPS: true

    // render the application in jQuery("#ember-crud-example"), when not specified, app appended to body
    //rootElement: "#ember-app",

    //customEvents: {

    //}
});

PrislonApp.Router.map(function() {
    // put your routes here
});

PrislonApp.IndexRoute = Ember.Route.extend({
    model: function() {
        return ['red', 'yellow', 'blue'];
    }
});

PrislonApp.FooBarComponent = Ember.Component.extend({
    content: {template: Ember.TEMPLATES["pris-app"]},
    foo: function(){
        var self = this;
        Em.run.later(function(){
            console.log('sdf');
            //self.set('content.template', 'Bye');
            self.rerender();
        }, 3000);
    }.on('init'),
    layout:Ember.TEMPLATES["pris-app"]
    //layout: function () {
    //    return Ember.HTMLBars.compile(this.get('content.template'));
    //}.property('content.template')
});

/*
PrislonApp.Router.map(function(){
    // list of all uploaded photos
    this.resource('main',     {path:'/' });
    // form to allow you upload new photo
    this.resource('photo.new',  {path:'/photo/new'});
    // view an existing photo
    this.resource('photo',      {path:'/photo/:guid'}, function(){
        // edit an existing photo
        this.route('edit');
    });
})
*/
/*
PrislonApp.ApplicationRoute = Ember.Route.extend({
    actions: {
        goToNewPhoto: function () {
            this.transitionTo( 'photo.new' );
        },
        goToPhoto: function( model ) {
            this.transitionTo( 'photo', model );
        },
        edit: function( model ) {
            this.transitionTo( 'photo.edit', model.copy() );
        },
        create: function( model ) {
            this.storage.create( model );
            this.transitionTo( 'photos' );
        },
        update: function( model ) {
            this.storage.update( model );
            this.transitionTo( 'photos' );
        },
        remove: function( model ) {
            this.storage.remove( model );
        },
        cancel: function( model ) {
            Ember.run( model, "destroy" );
            this.storage.refresh(App.Photo);
            this.transitionTo( 'photos' );
        }
    }
});
 PrislonApp.IndexRoute = Ember.Route.extend({
 beforeModel: function( transition ) {
 // redirect root to photos
 this.transitionTo( '' );
 }
 });
*/




/*
PrislonApp.Router.map(function() {
    this.resource('products', {path: "/"}, function() {
        this.resource('product', {path: "/products/:product_id"}, function() {

        })
    });
});

PrislonApp.ProductsRoute = Ember.Route.extend({
    model: function() {
        return this.store.find('product');
    }
});
*/


PrislonApp.ReviewTextArea = Ember.TextArea.extend({
    placeholder: 'Enter your review'
});

//PrislonApp.MyView = Ember.View.extend({
//    defaultTemplate: Ember.TEMPLATES.application
//});

//modules not supported yet
//exports.PrislonApp = PrislonApp;