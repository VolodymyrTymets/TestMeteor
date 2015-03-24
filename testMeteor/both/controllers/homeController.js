HomeController = RouteController.extend({
    waitOn: function() {
        return [
            Meteor.subscribe('venues', "food")
        ];
    },
    data: function() {
        if(Meteor.isClient){
            console.log(Venues.find().count());
            var map = new ITestNamespace.Map();
            map.clearOverlays();
            map.setVenuesMarkers(Venues.find().fetch());
        }
        return Venues.find();
    }
});
