Meteor.publish('venues', function(cat) {
    return Venues.find({category: cat} );
});
