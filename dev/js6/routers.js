'use strict'

let ProductApp = require('app/ProductApp');

ProductApp.Router.map(function() {
    this.resource('main-menu', { path: '/' });

    this.resource('wish-list.new',  {path:'/wishlist/new'});

    this.resource('wish-list', {path:'/wishlist/:guid'}, function(){
        // edit an existing photo
        this.route('edit');
    });
});