// The persistent configuration.
var webServiceClient = require('webServiceClient');
var locale = require('locale');
var defaults = require("defaults");

exports.isLoggedIn = function () {
    return Ti.App.Properties.getString('loggedIn') == 1;
};

exports.setLoggedIn = function(username, password) {
    Ti.App.Properties.setString('loggedIn', 1);
    Ti.App.Properties.setString('username', username);
    Ti.App.Properties.setString('password', password);
};

exports.setLoggedOut = function () {
    Ti.App.Properties.removeProperty('loggedIn');
    Ti.App.Properties.removeProperty('username');
    Ti.App.Properties.removeProperty('password');
};

function _setPropertyAsStringIfUndefined(name, value) {
    if (! Ti.App.Properties.hasProperty(name)) {
        Ti.App.Properties.setString(name, value.toString());
    }
}

// Set up beginning and end date of the queries. At first start, start
// date/time is "now", end date/time is now - 30 days.
exports.setInitialDates = function(now) {
    now = (typeof now !== 'undefined' ? now : new Date());
    past = new Date(now);
    past.setDate(now.getDate() - defaults.QUERY_END_DATE);
    _setPropertyAsStringIfUndefined("QueryStartDate", now);
    _setPropertyAsStringIfUndefined("QueryEndDate", past);
};

exports.getDateProperty = function(name) {
    if (Ti.App.Properties.hasProperty(name)) {
        return new Date(Ti.App.Properties.getString(name));
    }
};

exports.getQueryStartDate = function() {
    return exports.getDateProperty("QueryStartDate");
};

exports.getQueryEndDate = function() {
    return exports.getDateProperty("QueryEndDate");
};

function _getQueryDateString(name) {
    date = exports.getDateProperty(name);
    return String.format("%s %d:%d", date.toLocaleDateString(),
        date.getHours(), date.getMinutes());
}

exports.getQueryStartDateString = function() {
    return _getQueryDateString("QueryStartDate");
};

exports.getQueryEndDateString = function() {
    return _getQueryDateString("QueryEndDate");
};

exports.setQueryDate = function(name, date) {
    Ti.App.Properties.setString(name, date.toString());
};

exports.getStringOfSetting = function(name) {
    switch(name) {
    case "QueryStartDate":
    case "QueryEndDate":
        return _getQueryDateString(name);
    default:
        return Ti.App.Properties.getString(name);
    }
};

exports.getStringOfSetting = function(name) {
    switch(name) {
    case "QueryStartDate":
    case "QueryEndDate":
        return _getQueryDateString(name);
    default:
        return Ti.App.Properties.getString(name);
    }
};

exports.init = function() {
    exports.setInitialDates();
    _setPropertyAsStringIfUndefined("ServerName", defaults.SERVER_NAME);
    _setPropertyAsStringIfUndefined("Locale", defaults.LOCALE);
    // Handles property changes in one central place. It listens to property
    // change event, and calls various handlers handling the particular
    // event changes. They should notify then teh controllers to make
    // necessary updates.
    Ti.App.Properties.addEventListener('change', function(e) {
        Ti.API.trace("config.change event handler...");
        Ti.API.debug(String.format("Actual locale: %s", Ti.App.Properties.getString("Locale")));
        locale.setTranslation();
    });
};

exports.resetFactorySettings = function() {
    now = new Date();
    past = new Date(now);
    past.setDate(now.getDate() - defaults.QUERY_END_DATE);
    Ti.App.Properties.setString("QueryStartDate", now.toString());
    Ti.App.Properties.setString("QueryEndDate", past.toString());
    exports.setLoggedOut();
    Ti.App.Properties.setString("ServerName", defaults.SERVER_NAME);
    Ti.App.Properties.removeProperty("Bookmark");
    Ti.App.Properties.setString("Locale", defaults.LOCALE);
};

exports.getProperty = function(name) {
    switch(name) {
    case "QueryStartDate":
    case "QueryEndDate":
        return exports.getDateProperty(name);
    default:
        return Ti.App.Properties.getString(name);
    }
};

exports.setProperty = function(name, value) {
    switch(name) {
    case "QueryStartDate":
    case "QueryEndDate":
        return exports.setQueryDate(name, value);
    default:
        return Ti.App.Properties.setString(name, value);
    }
};

exports.init();
