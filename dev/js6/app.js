'use strict'

var someModule = require('module').doSomething;

var $ = require('../bower_components/jquery/dist/jquery');

var _ = require('../bower_components/underscore/underscore');

var Ember = require('../bower_components/ember/ember');

// log binding activities
Ember.LOG_BINDINGS = true;

let ProductApp = Ember.Application.create({
    //hi: function() { console.log('Hi! Im an app!'); }

    // log when Ember generates a controller or a route from a generic class
    LOG_ACTIVE_GENERATION: true,
    // log when Ember looks up a template or a view
    LOG_VIEW_LOOKUPS: true,
    // render the application in jQuery("#ember-crud-example"), when not specified, app appended to body
    rootElement: "#ember-app"

});

exports.ProductApp = ProductApp;
exports.Ember = Ember;