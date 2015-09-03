'use strict'

//let ProductApp = require('app/PrislonApp');
//let Ember = require('app/Ember');
/*
ProductApp.ApplicationRoute = Ember.Route.extend({
    actions: {
        goToNewWish: function () {
            this.transitionTo( 'wish-list.new' );
        },
        goToWish: function( model ) {
            this.transitionTo( 'wish-list', model );
        },
        edit: function( model ) {
            this.transitionTo( 'wish-list.edit', model.copy() );
        },
        create: function( model ) {
            this.storage.create( model );
            this.transitionTo( 'wish-list' );
        },
        update: function( model ) {
            this.storage.update( model );
            this.transitionTo( 'wish-list' );
        },
        remove: function( model ) {
            this.storage.remove( model );
        },
        cancel: function( model ) {
            Ember.run( model, "destroy" );
            this.storage.refresh(ProductApp.Wish);
            this.transitionTo( 'wish-list' );
        }
    }
});

ProductApp.IndexRoute = Ember.Route.extend({
    beforeModel: function( transition ) {
        // redirect root to photos
        this.transitionTo( 'wish-list' );
    }
});

ProductApp.WishesRoute = Ember.Route.extend({
    model: function() {
        return this.storage.findAll(ProductApp.Wish);
    }
});

ProductApp.WishRoute = Ember.Route.extend({
    model: function( params ) {
        return this.storage.find(App.Wish, params.guid);
    },
    serialize: function( model ) {
        return { guid: model.get('guid') };
    }
});

ProductApp.WishNewRoute = Ember.Route.extend({
    model: function() {
        // provide a new photo to the template
        return ProductApp.Wish.create({});
    }
});
    */