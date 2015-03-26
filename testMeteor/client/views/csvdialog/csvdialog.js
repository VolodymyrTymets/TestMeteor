
Template.csvdialog.helpers ({
    csvdata: function(){
        var csvparser = new ITestNamespace.CSVParser();
        return csvparser.parse(Venues.find().fetch());
    }

})
Template.csvdialog.rendered = function() {
    $('#csvdialog').modal({
        show: false
    })
}