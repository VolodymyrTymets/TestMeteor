
ITestNamespace.Map = function () {
    this.init = function () {

        var mapCanvas = document.getElementById('map-canvas');
        var myLatlng = new google.maps.LatLng(ITestNamespace.CURRENTPOSITION.coords.latitude,ITestNamespace.CURRENTPOSITION.coords.longitude );
        var mapOptions = {
            center: myLatlng,
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }

        ITestNamespace.MAP = new google.maps.Map(mapCanvas, mapOptions);

       /* ITestNamespace.MARKER =   new MarkerWithLabel({
            position: myLatlng,
            map: ITestNamespace.MAP,
            labelContent: "you",
            labelAnchor: new first.maps.Point(3, 30),
            labelClass: "label label-primary markers_labels", // the CSS class for the label
            labelInBackground: false
        });*/

    }
    this.setVenuesMarkers = function(venus){

        for (var i = 0; i < venus.length; i++) {
            var userLatlng = new google.maps.LatLng(venus[i].latitude, venus[i].longitude);

            var marker =   new MarkerWithLabel({
                position: userLatlng,
                map: ITestNamespace.MAP,
                labelContent: venus[i].name,
                labelAnchor: new google.maps.Point(3, 30),
                labelClass: "label label-primary markers_labels", // the CSS class for the label
                labelInBackground: false
            });
            ITestNamespace.MARKERS[i]=marker;
        }
    };
    /*this.setDeviceLocationsMarker = function(position){
        var myLatlng = new google.maps.LatLng(position.coords.latitude,position.coords.longitude );

        ITestNamespace.MARKER =   new MarkerWithLabel({
            position: myLatlng,
            map: ITestNamespace.MAP,
            labelContent: "you",
            labelAnchor: new google.maps.Point(3, 30),
            labelClass: "label label-primary markers_labels", // the CSS class for the label
            labelInBackground: false
        });
    }
    this.getDeviceLocations = function(secses,error){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(secses,error);
        } else {
            alert("Your device is not support locations");
        }
    }*/
    this.clearOverlays = function () {
        for (var i = 0; i < ITestNamespace.MARKERS.length; i++ ) {
            if(ITestNamespace.MARKERS[i]) {
                ITestNamespace.MARKERS[i].setMap(null);
            }

        }

        ITestNamespace.MARKERS.length = 0;
    }


}