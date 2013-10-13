// ----------------------------------------------------------------------------
require('behave').andSetup(this);
var config = require('config').config;
var Defaults = require("defaults");

// Just in case persistency screwed up,
// config.resetFactorySettings();

// ----------------------------------------------------------------------------
function tearDown(name) {
    Ti.App.Properties.removeProperty(name);
    config.properties = [];
}

// ----------------------------------------------------------------------------
describe('Test config properties', function() {
    it ('*** Tests registerNewProperty', function() {
        var name = "TestProperty";
        config.registerNewProperty(name, 3);
        expect(config.properties !== 'undefined').toBe(true);
        expect(name in config.properties).toBe(true);
        expect(config.properties[name].get()).toBe(3);
        tearDown(name);
    });

    it ('*** Tests registerNewDateProperty', function() {
        var name = "TestDateProperty";
        var defaultValue = new Date(1905, 0, 31, 1, 1, 1);
        config.registerNewDateProperty(name, defaultValue);
        expect(config.properties !== 'undefined').toBe(true);
        expect(name in config.properties).toBe(true);
        expect(config.properties[name].get().getFullYear()).toBe(1905);
        tearDown(name);
    });

    it ('*** Tests getProperty', function() {
        var name = "TestProperty";
        var property = config.getProperty(name);
        expect(typeof property === 'undefined').toBe(true);
        config.registerNewProperty(name, 3);
        property = config.getProperty(name);
        expect(property.get()).toBe(3);
        tearDown(name);
    });

    it ('*** Tests resetFactorySettings', function() {
        var name1 = "TestProperty";
        config.registerNewProperty(name1, 3);
        var name2 = "TestProperty2";
        config.registerNewProperty(name2, 4);
        config.resetFactorySettings();
        expect(Ti.App.Properties.hasProperty(name1)).toBe(false);
        expect(Ti.App.Properties.hasProperty(name2)).toBe(false);
        tearDown(name1);
        tearDown(name2);
    });

    // ------------------------------------------------------------------------
    it ('*** Tests init', function() {
        var now = new Date(1906, 8, 31, 1, 1, 1);
        Ti.App.Properties.removeProperty('Username');
        Ti.App.Properties.removeProperty('QueryEndDate');
        Ti.App.Properties.removeProperty('QueryStartDate');
        Ti.App.Properties.removeProperty('ServerName');
        Ti.App.Properties.removeProperty('QueryInterval');
        Ti.App.Properties.removeProperty('ServerName');
        Ti.App.Properties.removeProperty('MetricSystem');
        Ti.App.Properties.removeProperty('Locale');
        Ti.App.Properties.removeProperty('LoggedIn');
        config.resetFactorySettings(now);
        config.init(now);
        expect(config.getProperty("LoggedIn").get()).toBe(false);
        expect(config.getProperty("MetricSystem").get()).toBe(Defaults.METRIC_SYSTEM);
        expect(config.getProperty("Username").get()).toBe("");
        expect(config.getProperty("Password").get()).toBe("");
        expect(config.getProperty("QueryInterval").get()).toBe(Defaults.QUERY_INTERVAL);
        expect(config.getProperty("ServerName").get()).toBe(Defaults.SERVER_NAME);
        expect(config.getProperty("Locale").get()).toBe(Defaults.LOCALE);
        expect(config.getProperty("QueryStartDate").get().getFullYear()).toBe(1906);
        var past = new Date(now);
        past.setDate(now.getDate() - Defaults.QUERY_INTERVAL);
        expect(config.getProperty("QueryEndDate").get().getFullYear()).toBe(past.getFullYear());
        expect(config.getProperty("QueryStartDate").get().getMonth()).toBe(past.getMonth());
        expect(config.getProperty("QueryStartDate").get().getDay()).toBe(past.getDay());
    });

    // ------------------------------------------------------------------------
    it ('*** Tests login/logout functionality', function() {
        var username = "user";
        var password = "password";
        config.setLoggedIn(username, password);
        expect(config.isLoggedIn()).toBe(true);
        expect(config.getProperty('LoggedIn').get()).toBe(true);
        expect(config.getProperty('Username').get()).toBe(username);
        expect(config.getProperty('Password').get()).toBe(password);
        config.setLoggedOut();
        expect(config.isLoggedIn()).toBe(false);
        expect(config.getProperty('LoggedIn').get()).toBe(false);
        expect(config.getProperty('Username').get()).toBe(username);
        expect(config.getProperty('Password').get()).toBe('');
    });
});
