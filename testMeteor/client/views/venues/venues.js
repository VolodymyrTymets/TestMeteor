

Template.Venues.rendered  = function () {


};
Template.Venues.helpers({
    vanuesList: function() {

        return Venues.find();
    }

});
