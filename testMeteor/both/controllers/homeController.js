HomeController = RouteController.extend({
    waitOn: function() {
        return [
          ITestNamespace.ITEMSUB=  Meteor.subscribe('venues',Meteor.userId(),ITestNamespace.CATEGORY)
        ];
    }
    /*data: function() {
        if(Meteor.isClient){
            console.log(Venues.find().count());
            var map = new ITestNamespace.Map();
            map.clearOverlays();
            map.setVenuesMarkers(Venues.find().fetch());
        }
        return Venues.find();
    }*/
});
