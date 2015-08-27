'use strict'

let ProductApp = require('app/ProductApp');
let Ember = require('app/Ember');

//Controllers that extend Ember.ArrayController have array as the value of their content property.
//{{#each}} helper is bound to the controller's content property
ProductApp.PhotosController = Ember.ArrayController.extend({
    contentBinding: 'storage.cache.wish'
});

ProductApp.WishEditController = Ember.ObjectController.extend({
    needs: [ 'wish' ]
});