ITestNamespace.AjaxSender = function () {
    this.getVenues = function (calback,category) {

          /* $.ajax({
                url: "https://api.foursquare.com/v2/venues/explore?section="+category+"&near=tokyo&oauth_token=B3SARUALZ3I1JX20GUP0RSQNDKJMK2D4ALI4CXSE5XC2QPI0&v=20150324",
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                success: calback,
                error: function (){
                    alert("Server not responce");
                }
            })*/
        $.getJSON("https://api.foursquare.com/v2/venues/explore?section="+category+"&near=tokyo&oauth_token=B3SARUALZ3I1JX20GUP0RSQNDKJMK2D4ALI4CXSE5XC2QPI0&v=20150324",
                 calback).fail(function() {
                                    alert("Server not responce");
                                });

    }
}
