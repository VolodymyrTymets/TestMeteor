ITestNamespace.VenuesParser = function () {
    this.savecallback = function(data){

        //parse data
        var arrFromServer = parse(data);
        var venues  =  savevenues(arrFromServer);
        showVenuesForMap(venues);
        $('#loading').modal('hide');

    },
    this.changecallback = function(data){

        //parse data
        var arrFromServer = parse(data);

        showVenuesForMap(arrFromServer);
        $('#loading').modal('hide');

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

    var savevenues = function(arrFromServer){
        var arr = [];
        //find searsh venues
        for(var i=0;i<arrFromServer.length;i++){
            if(arrFromServer[i].name.indexOf(ITestNamespace.SEARCHVENUE)> -1){
                arr.push(arrFromServer[i]);
            }
        }
        //save venues for server
        Meteor.call('saveVenues', arr, function(error, result) {
            // display the error to the user and abort
            if (error)
                alert('some Err');
        });
        return arr;
    }
    var showVenuesForMap = function(venues){
        var map = new ITestNamespace.Map();
        map.clearOverlays();
        map.setVenuesMarkers(venues);

    }
}
