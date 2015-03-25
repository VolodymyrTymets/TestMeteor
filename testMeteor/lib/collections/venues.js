Venues = new Mongo.Collection('venues');

Meteor.methods({
    saveVenues: function(venues){

        if(Meteor.userId()){
            for(var i =0; i<venues.length;i++) {
                var venuesSame = Venues.findOne({foursquareId: venues[i].foursquareId});
                if(!venuesSame){
                        venues[i].userId = Meteor.userId();
                        Venues.insert(venues[i]);
                }
            }
        }
    }
});