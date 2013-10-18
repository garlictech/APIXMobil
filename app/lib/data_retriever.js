// ----------------------------------------------------------------------------
// The module is responsible for providing data to the tables. It either serves
// local, static data, or fetches remote data from APIXServer.
// The former cases: tables displaying static, menu-like content, for example,
// the refuelling details, or displaying test data.
var Config = require("config").config;

// ----------------------------------------------------------------------------
function DataRetriever() {}

// ----------------------------------------------------------------------------
// Return data for a table view identified by table ID.
DataRetriever.prototype.retrieveData = function (tableId, testData) {
    this.testData = testData;
    this.tableId = tableId;
    return this.returnTestOrRealData();
};

// ----------------------------------------------------------------------------
DataRetriever.prototype.returnTestOrRealData = function() {
    if (Config.getProperty("ServerName").get() === "test") {
        return this.testData;
    } else {
        alert("Remote stuff not implemented");
    }
};

// ----------------------------------------------------------------------------
DataRetriever.prototype.fetchFromServer = function () {
        var url = "http://127.0.0.1:8000";
    var xhr = Ti.Network.createHTTPClient({
        onload: function(e) {
            // this.responseText holds the raw text return of the message (used for JSON)
            // this.responseXML holds any returned XML (used for SOAP web services)
            // this.responseData holds any returned binary data
            Ti.API.debug(this.responseText);
            alert('success');
        },
        onerror: function(e) {
            Ti.API.debug(e.error);
            alert('error');
        },
        timeout:5000
    });

    xhr.open("GET", url);
    xhr.send();
};

// ----------------------------------------------------------------------------
module.exports = new DataRetriever();
