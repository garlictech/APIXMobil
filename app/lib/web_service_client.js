// ----------------------------------------------------------------------------
// The module is responsible for communicating with the server.
// It either serves local, static data, or fetches remote data from APIXServer.
// The former cases: tables displaying static, menu-like content, for example,
// the refuelling details, or displaying test data.
var Utils = require("utils");
var Config = require("config").config;

// ----------------------------------------------------------------------------
function WebServiceClient() {
    var self = this;
    this.xhr = Ti.Network.createHTTPClient({
        onload: function(e) {
            var data = JSON.parse(this.responseText);
            self.callbacks.on_success(data);
        },
        onerror: function(e) {
            Ti.API.debug(e.error);
            self.callbacks.on_error(e);
        },
        timeout:500000,
        enableKeepAlive: true
    });
}

// ----------------------------------------------------------------------------
WebServiceClient.prototype.getCollection = function(collection, callbacks) {
    this.callbacks = callbacks;

    var url = String.format("http://%s/%s/%s/%s/%s/%s/",
        Config.getProperty("ServerName").get(),
        Config.getProperty("Username").get(),
        Config.getProperty("Password").get(),
        Utils.floatDate(Config.getProperty("QueryStartDate").get()),
        Utils.floatDate(Config.getProperty("QueryEndDate").get()),
        collection.id());

    if (collection.id().indexOf("_diagram") !== -1) {
        url += String.format("%s/%d/", Config.getProperty("Locale").get(),
            Utils.isMetric()
        );
    }

    this.send(url);
};

// ----------------------------------------------------------------------------
WebServiceClient.prototype.send = function(url) {
    this.xhr.open("GET", url);
    this.xhr.send();
};

// ----------------------------------------------------------------------------
WebServiceClient.prototype.login = function(username, password, callbacks) {
    this.callbacks = callbacks;
    this.xhr.username = username;
    this.xhr.password = password;
    if (username === 'test') {
        callbacks.on_success({authenticated: true});
    } else {
        var url = String.format("http://%s/login/%s/%s/",
            Config.getProperty("ServerName").get(), username, password);
        this.send(url);
    }
};

// ----------------------------------------------------------------------------
module.exports = new WebServiceClient();
