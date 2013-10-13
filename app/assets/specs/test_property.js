require('behave').andSetup(this);
var Property = require('property').Property;

// Just in case persistency screwed up,
//require('config').config.resetFactorySettings();

// ----------------------------------------------------------------------------
function newCleanProperty(name, defaultValue) {
    Ti.App.Properties.removeProperty(name);
    return new Property(name, defaultValue);
}

// ----------------------------------------------------------------------------
function tearDown(name) {
    Ti.App.Properties.removeProperty(name);
}

// ----------------------------------------------------------------------------
describe('Test Property', function() {
    it ('*** Test constructor', function() {
        var name_1 = "TestProperty";
        var defaultValue_1 = "default";
        var property = newCleanProperty(name_1, defaultValue_1);
        expect(property.name).toBe(name_1);
        expect(property.get()).toBe(defaultValue_1);
        // Test if property value is not set when property is already defined
        var defaultValue_2 = "default 2";
        var property2 = new Property(name_1, defaultValue_2);
        expect(property.name).toBe(name_1);
        expect(property.get()).toBe(defaultValue_1);
        tearDown(name_1);
    });

    // ------------------------------------------------------------------------
    it ('*** Test set and get', function() {
        var name = "TestProperty";
        var defaultValue = "default";
        var newValue = "newValue";
        var property = newCleanProperty(name, defaultValue);
        expect(property.get()).toBe(defaultValue);
        property.set(newValue);
        expect(property.get()).toBe(newValue);
        tearDown(name);
    });

    // ------------------------------------------------------------------------
    it ('*** Test get in case of types', function() {
        var name = "TestProperty";

        function test(val) {
            var property = newCleanProperty(name, val);
            expect(property.get() === val).toBe(true);
            expect(property.getType()).toBe(typeof val);
            tearDown(name);
        }

        test("string");
        test(3);
        test(false);
        // Tets object case
        var obj = {key: "value"};
        var property = newCleanProperty(name, obj);
        expect(property.getType()).toBe('object');
        expect(property.get().key).toBe(obj.key);
        tearDown(name);
    });

    // ------------------------------------------------------------------------
    it ('*** Test getType', function() {
        var name = "TestProperty";
        // string
        var property = newCleanProperty(name, "s");
        expect(property.getType()).toBe("string");
        tearDown(name);
        // number
        property = newCleanProperty(name, 3);
        expect(property.getType()).toBe("number");
        tearDown(name);
        // bool
        property = newCleanProperty(name, true);
        expect(property.getType()).toBe("boolean");
        tearDown(name);
        // object
        property = newCleanProperty(name, {key: "valkue"});
        expect(property.getType()).toBe("object");
        tearDown(name);
    });

    // ------------------------------------------------------------------------
    it ('*** Test stringValue', function() {
        var name = "TestProperty";
        var property = newCleanProperty(name, 3);
        expect(property.stringValue() === "3").toBe(true);
        tearDown(name);
    });

        // ------------------------------------------------------------------------
    it ('*** Test remove', function() {
        var name = "TestProperty";
        var property = newCleanProperty(name, 3);
        property.remove();
        expect(Ti.App.Properties.hasProperty(name)).toBe(false);
        tearDown(name);
    });
});
