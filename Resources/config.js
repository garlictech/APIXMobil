function Config() {
    this.init();
}

var Defaults = require("defaults");

Config.prototype.init = function(now) {
    this.properties = [];
    this.registerNewProperty("QueryInterval", Defaults.QUERY_INTERVAL);
    now = "undefined" != typeof now ? now : new Date();
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
    this.registerNewProperty("Bookmark", {});
    this.registerNewProperty("Locale", Defaults.LOCALE);
    this.registerNewProperty("LoggedIn", false);
    this.registerNewProperty("Username", "");
    this.registerNewProperty("Password", "");
    this.registerNewProperty("MetricSystem", Defaults.METRIC_SYSTEM);
    Ti.App.fireEvent("SettingsChanged");
};

Config.prototype.registerNewProperty = function(name, defaultValue) {
    name in this.properties || (this.properties[name] = new (require("property").Property)(name, defaultValue));
};

Config.prototype.registerNewDateProperty = function(name, defaultValue) {
    name in this.properties || (this.properties[name] = new (require("date_property").DateProperty)(name, defaultValue));
};

Config.prototype.getProperty = function(name) {
    if (name in this.properties) return this.properties[name];
    return;
};

Config.prototype.resetFactorySettings = function(now) {
    for (var p in this.properties) this.properties[p].remove();
    this.init(now);
};

Config.prototype.isLoggedIn = function() {
    return this.getProperty("LoggedIn").get();
};

Config.prototype.setLoggedIn = function(username, password) {
    this.getProperty("LoggedIn").set(true);
    this.getProperty("Username").set(username);
    this.getProperty("Password").set(password);
};

Config.prototype.setLoggedOut = function() {
    this.properties["LoggedIn"].set(false);
    this.properties["Password"].set("");
};

Config.prototype.hasProperty = function(name) {
    return name in this.properties;
};

exports.config = new Config();