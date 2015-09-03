'use strict';

//let PrislonApp = require('app/PrislonApp');
//let Ember = require('app/Ember');

window.PrislonApp.Products = Ember.ArrayController.create({
    content:[],
    loadProducts: function(){
        let self = this;
        $.getJSON('data/prods',function(data){(
            self.content[0] = data[0]
        )});
    }
});
/*
window.PrislonApp.Products = Ember.ArrayController.create({
    content:[],
    loadProducts: function(){
        let self = this;
        let jsnData;

        $.getJSON('data/prods',function(data){(
            jsnData = data
        )});

        let newProduct = PrislonApp.Product.create({
            title : jsnData.title,
            description: jsnData.description,
            imageUrl: jsnData.imageUrl
        });


    }
});
*/

//-----another example-----
/*
//Controllers that extend Ember.ArrayController have array as the value of their content property.
//{{#each}} helper is bound to the controller's content property
PrislonApp.PhotosController = Ember.ArrayController.extend({
    contentBinding: 'storage.cache.wish'
});

PrislonApp.WishEditController = Ember.ObjectController.extend({
    needs: [ 'wish' ]
});
    */