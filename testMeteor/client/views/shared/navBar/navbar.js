Template.navbar.events({
    "submit form" : function(event,template){
        event.preventDefault();

        ITestNamespace.SEARCHVENUE = $("#searchinput").val();

        var ajaxSender = new ITestNamespace.AjaxSender();
        var venusParser = new ITestNamespace.VenuesParser();

        ajaxSender.getVenues(venusParser.savecallback, ITestNamespace.CATEGORY );
    },
    "click .dropdown-menu li a": function(event,template){
        event.preventDefault();
        var ajaxSender = new ITestNamespace.AjaxSender();
        var venusParser = new ITestNamespace.VenuesParser()

        ITestNamespace.CATEGORY = $(event.target).attr("category");

        ajaxSender.getVenues(venusParser.changecallback, ITestNamespace.CATEGORY );
        if (ITestNamespace.ITEMSUB) {
            ITestNamespace.ITEMSUB.stop();
            Venues.remove({});
        }
        ITestNamespace.ITEMSUB = Meteor.subscribe('venues',Meteor.userId(),ITestNamespace.CATEGORY)
    }
})