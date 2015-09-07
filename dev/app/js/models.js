'use strict'

var PrislonApp = require('PrislonApp');

PrislonApp.Product = Ember.Object.extend({
    title : null,
    description: null,
    imageUrl: null
});

PrislonApp.Contacts = Ember.Object.extend({
    head : null,
    address : null,
    yandexWidget: null
});

PrislonApp.About = Ember.Object.extend({
    head : null,
    mission : null,
    gallery: null
});

//-----another example-----

//reopenClass method allows you to add static methods to classes that were defined by extending Ember.Object.
/*
 App.People.reopenClass({
    'planet': "Earth"
 });
 console.log(App.People.planet) // -> Earth
*/

//типа наследование
//App.Person = Ember.Object.extend({ name: null })

//механизм наследования от нескольких классов, тн Миксины
//App.Person = Em.Object.extend([ App.Walks, App.Speaks ], { name: "John Doe" })

//инстанс класса
//var somePerson = App.Person.create({name: "John Doe"})

/*
PrislonApp.Model = Ember.Object.extend( Ember.Copyable, {
    init: function() {
        // make sure that class has a storageKey property, otherwise throw an error
        // storageKey is the key that's used in localStorage
        if (Em.isNone(this.constructor.storageKey)) {
            throw new Error(Ember.String.fmt("%@ has to implement storageKey property", [this]));
        }
        if (Em.isNone(this.get('guid'))) {
            // guid is null when item is being created
            // set the guid for this item to new guid
            this.set( 'guid', guid() );
        }
    },

    // default guid
    guid: null,
    copy: function() {
        // copy method is used by the PhotoEditRoute to create a clone of the model
        // we create a clone to preserve the original incase Cancel button is clicked
        return Em.run( this.constructor, 'create', this.serialize() );
    },
    serialize: function() {
        // Our presistance layer doesn't know about the fields that custom models need to preserve
        // for this reason, we need a serialize function that will return a version of this model
        // that can be saved to localStorage
        throw new Error(Ember.String.fmt("%@ has to implement serialize() method which is required to convert it to JSON.", [this]));
    }
});

// add a class property ( aka static property )
PrislonApp.Model.reopenClass({

     //String name of the storage key for this model.
     //This is only necessary because Ember has a bug that prevents proper class inspection when using modules
     //TODO: convert Model to a class and remove storageKey after Ember class inspection is fixed.

    storageKey: null
});

PrislonApp.Wish = PrislonApp.Model.extend({
    image: null,
    title: '',
    description: '',
    // thumbnail is taken from placeholder.it or the image if
    thumbnail: function() {
        if (Em.isNone(this.get('image'))) {
            return "http://placehold.it/75x75";
        } else {
            return this.get('image');
        }
    }.property( 'image' ),
    // Tells the resistance layer what properties to save to localStorage
    // Ember Data does this for you.
    serialize: function() {
        return this.getProperties([ "guid", "image", "title", "description" ]);
    }
});

// set storage key for this class of models
PrislonApp.Wish.reopenClass({
    storageKey: 'wish'
});
*/