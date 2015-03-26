ITestNamespace.CSVParser  = function(){

    this.parse = function(veues){
        var result = "sep =,\n";
        for(var i= 0; i<veues.length;i++){
            result += '"'+ veues[i].name;
            result += '",';
            result += '"'+ veues[i].city;
            result += '",';
            result += '"'+ veues[i].address;
            result += '",';
            result +=  veues[i].latitude;
            result += ',';
            result +=  veues[i].longitude;
            result += '\n';
        }
        return result;
    }
}
