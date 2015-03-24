if(Meteor.isClient) {
    $(document).ready(function () {

        var ajaxSender = new ITestNamespace.AjaxSender();
        var venusParser = new ITestNamespace.VenuesParser();


        ajaxSender.getVenues(venusParser.callback, "food");
    });
}