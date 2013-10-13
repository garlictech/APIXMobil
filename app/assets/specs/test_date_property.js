require('behave').andSetup(this);
var DateProperty = require('date_property').DateProperty;

// ----------------------------------------------------------------------------
function newCleanProperty(name, defaultValue) {
    Ti.App.Properties.removeProperty(name);
    return new DateProperty(name, defaultValue);
}

// ----------------------------------------------------------------------------
function tearDown(name) {
    Ti.App.Properties.removeProperty(name);
}

describe('Test DateProperty', function() {
    it ('*** Test constructor', function() {
        var name = "TestDateProperty";
        var defaultValue = new Date(1900, 0, 31, 1, 1, 1);
        var property = newCleanProperty(name, defaultValue);
        expect(property.name).toBe(name);
        expect(property.get().getFullYear()).toBe(1900);
        tearDown(name);
    });

    it ('*** Test getter/setter', function() {
        var name = "TestDateProperty";
        var defaultValue = new Date(1900, 0, 31, 1, 1, 1);
        var property = newCleanProperty(name, defaultValue);
        var value = new Date(2000, 0, 31, 1, 1, 1);
        property.set(value);
        expect(property.get().getFullYear()).toBe(2000);
        tearDown(name);
    });

    it ('*** Test string value', function() {
        var name = "TestDateProperty";
        var defaultValue = new Date(1900, 0, 31, 1, 1, 1);
        var property = newCleanProperty(name, defaultValue);
        expect(property.stringValue()).notToBe("foobar");
        tearDown(name);
    });
});
