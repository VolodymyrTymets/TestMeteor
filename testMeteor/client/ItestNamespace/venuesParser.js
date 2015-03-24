ITestNamespace.VenuesParser = function () {
    this.callback = function(data){

        var arr = parse(data);

        Meteor.call('saveVenues', arr, function(error, result) {
            // display the error to the user and abort
            if (error)
                alert('some Err');
        });
    }

    var parse = function(data){
        var resulrArr = data.response.groups[0].items;
        var returnArr = [];
        for(var i=0;i<resulrArr.length;i++){
            var  venue = new ITestNamespace.Venue();
            venue.category = data.response.query;
            venue.name = resulrArr[i].venue.name;
            venue.foursquareId = resulrArr[i].venue.id;
            venue.address = resulrArr[i].venue.location.address;
            venue.city = resulrArr[i].venue.location.city;
            venue.latitude = resulrArr[i].venue.location.lat;
            venue.longitude = resulrArr[i].venue.location.lng;
            returnArr.push(venue);
        }
        return returnArr;
    }
}
