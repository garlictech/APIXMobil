// ----------------------------------------------------------------------------
// Module initialization
var Defaults = require("defaults");

// ----------------------------------------------------------------------------
// Config. Responsibile for handling the app configuration. This is the model
// of the settings/setting views.
// The constructor registers all the properties, and sets their default values.
// Default value: if there is no such property yet, the constructor registers
// it and sets the default value.
function Config() {
    this.init();
}

// ----------------------------------------------------------------------------
// now: only for testing!!! Inject a well defined date instead of now.
Config.prototype.init = function(now) {
    // For testing only: dependence injection. We give explicitely what "now"
    // is.
    this.properties = [];
    this.registerNewProperty("QueryInterval", Defaults.QUERY_INTERVAL);
    now = (typeof now !== 'undefined' ? now : new Date());
    now.setMinutes(59);
    now.setSeconds(59);
    now.setHours(23);
    this.registerNewDateProperty("QueryEndDate", now);
    past = new Date(now);
    past.setMinutes(0);
    past.setSeconds(0);
    past.setHours(0);
    past.setDate(now.getDate() - this.getProperty("QueryInterval").get());
    this.registerNewDateProperty("QueryStartDate", past);
    this.registerNewProperty("ServerName", Defaults.SERVER_NAME);
    Ti.App.Properties.setString("ServerName", "127.0.0.1:8000");
    //Ti.App.Properties.setString("ServerName", "192.168.1.17:8000");
    //Ti.App.Properties.setString("ServerName", Defaults.SERVER_NAME);
    this.registerNewProperty("Bookmark", {});
    this.registerNewProperty("Locale", Defaults.LOCALE);
    this.registerNewProperty('LoggedIn', false);
    this.registerNewProperty('Username', "");
    this.registerNewProperty('Password', "");
    this.registerNewProperty('MetricSystem', Defaults.METRIC_SYSTEM);
    Ti.App.fireEvent("SettingsChanged");
};

// ----------------------------------------------------------------------------
Config.prototype.registerNewProperty = function(name, defaultValue) {
    if (! (name in this.properties)) {
        this.properties[name] =
            new (require("property").Property)(name, defaultValue);
    }
};

// ----------------------------------------------------------------------------
Config.prototype.registerNewDateProperty = function(name, defaultValue) {
    if (! (name in this.properties)) {
        this.properties[name] =
            new (require("date_property").DateProperty)(name, defaultValue);
    }
};

// ----------------------------------------------------------------------------
Config.prototype.getProperty = function(name) {
    if (name in this.properties) {
        return this.properties[name];
    }

    return;
};

// ----------------------------------------------------------------------------
// now: only for testing!!! Inject a well defined date instead of now.
Config.prototype.resetFactorySettings = function(now) {
    for (var p in this.properties) {
        this.properties[p].remove();
    }

    this.init(now);
};

// ----------------------------------------------------------------------------
Config.prototype.isLoggedIn = function () {
    return this.getProperty('LoggedIn').get();
};

// ----------------------------------------------------------------------------
Config.prototype.setLoggedIn = function(username, password) {
    this.getProperty('LoggedIn').set(true);
    this.getProperty('Username').set(username);
    this.getProperty('Password').set(password);
};

// ----------------------------------------------------------------------------
Config.prototype.setLoggedOut = function () {
    this.properties['LoggedIn'].set(false);
    this.properties['Password'].set("");
};

// ----------------------------------------------------------------------------
Config.prototype.hasProperty = function (name) {
    return (name in this.properties);
};

// ----------------------------------------------------------------------------
exports.config = new Config();
