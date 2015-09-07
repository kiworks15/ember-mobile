(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict'

//commonJS module sintaxis example
var someModule = require('module').doSomething;
//var Ember = require('../../bower_components/ember/ember');

// log binding activities
Ember.LOG_BINDINGS = true;

Ember.MODEL_FACTORY_INJECTIONS = true;

var PrislonApp = Ember.Application.create({
    //some custom fields and methods
    customMethod: function() { console.log('Hi! Im an app!'); },
    customField: "this is the app",

    ready: function(){
        console.log("app was created, ready execute before routing");
        this.customField = "22222";
        //embers templates
        console.log(Ember.TEMPLATES["application"]);
    },

    // log when Ember generates a controller or a route from a generic class
    LOG_ACTIVE_GENERATION: true,
    // log when Ember looks up a template or a view
    LOG_VIEW_LOOKUPS: true,

    // render the application in jQuery("#ember-crud-example"), when not specified, app appended to body
    rootElement: "#ember-app",

    customEvents: {

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

PrislonApp.ReviewTextArea = Ember.TextArea.extend({
    placeholder: 'Enter your review'
});

exports.PrislonApp = PrislonApp;
},{"module":2}],2:[function(require,module,exports){

},{}]},{},[1])


//# sourceMappingURL=scripts.js.map