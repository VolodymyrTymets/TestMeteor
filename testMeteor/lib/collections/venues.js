Venues = new Mongo.Collection('venues');

Meteor.methods({
    saveVenues: function(venues){

        for(var i=0;i<venues.length;i++){
            var venuesSame = Venues.findOne({foursquareId: venues[i].foursquareId});
            if(!venuesSame){
                Venues.insert(venues[i]);
            }

        }

    }
});