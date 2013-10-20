// ----------------------------------------------------------------------------
// The module is responsible for providing data to the tables. It either serves
// local, static data, or fetches remote data from APIXServer.
// The former cases: tables displaying static, menu-like content, for example,
// the refuelling details, or displaying test data.
var Utils = require("utils");
var Config = require("config").config;

// ----------------------------------------------------------------------------
function DataRetriever() {
    var self = this;
    this.xhr = Ti.Network.createHTTPClient({
        onload: function(e) {
            Ti.API.debug(this.responseText);
            var data = JSON.parse(this.responseText);
            self.callbacks.on_success(data);
        },
        onerror: function(e) {
            Ti.API.debug(e.error);
            self.callbacks.on_error(e);
        },
        timeout:5000
    });
}

// ----------------------------------------------------------------------------
DataRetriever.prototype.get = function(collection, callbacks) {
    this.callbacks = callbacks;
    var url = String.format("http://%s/%s/",
        Config.getProperty("ServerName").get(), collection.id());
    this.xhr.open("GET", url);
    this.xhr.send();
};

// ----------------------------------------------------------------------------
module.exports = new DataRetriever();
