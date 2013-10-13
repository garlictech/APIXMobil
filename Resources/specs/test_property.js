function newCleanProperty(name, defaultValue) {
    Ti.App.Properties.removeProperty(name);
    return new Property(name, defaultValue);
}

function tearDown(name) {
    Ti.App.Properties.removeProperty(name);
}

require("behave").andSetup(this);

var Property = require("property").Property;

describe("Test Property", function() {
    it("*** Test constructor", function() {
        var name_1 = "TestProperty";
        var defaultValue_1 = "default";
        var property = newCleanProperty(name_1, defaultValue_1);
        expect(property.name).toBe(name_1);
        expect(property.get()).toBe(defaultValue_1);
        var defaultValue_2 = "default 2";
        new Property(name_1, defaultValue_2);
        expect(property.name).toBe(name_1);
        expect(property.get()).toBe(defaultValue_1);
        tearDown(name_1);
    });
    it("*** Test set and get", function() {
        var name = "TestProperty";
        var defaultValue = "default";
        var newValue = "newValue";
        var property = newCleanProperty(name, defaultValue);
        expect(property.get()).toBe(defaultValue);
        property.set(newValue);
        expect(property.get()).toBe(newValue);
        tearDown(name);
    });
    it("*** Test get in case of types", function() {
        function test(val) {
            var property = newCleanProperty(name, val);
            expect(property.get() === val).toBe(true);
            expect(property.getType()).toBe(typeof val);
            tearDown(name);
        }
        var name = "TestProperty";
        test("string");
        test(3);
        test(false);
        var obj = {
            key: "value"
        };
        var property = newCleanProperty(name, obj);
        expect(property.getType()).toBe("object");
        expect(property.get().key).toBe(obj.key);
        tearDown(name);
    });
    it("*** Test getType", function() {
        var name = "TestProperty";
        var property = newCleanProperty(name, "s");
        expect(property.getType()).toBe("string");
        tearDown(name);
        property = newCleanProperty(name, 3);
        expect(property.getType()).toBe("number");
        tearDown(name);
        property = newCleanProperty(name, true);
        expect(property.getType()).toBe("boolean");
        tearDown(name);
        property = newCleanProperty(name, {
            key: "valkue"
        });
        expect(property.getType()).toBe("object");
        tearDown(name);
    });
    it("*** Test stringValue", function() {
        var name = "TestProperty";
        var property = newCleanProperty(name, 3);
        expect("3" === property.stringValue()).toBe(true);
        tearDown(name);
    });
    it("*** Test remove", function() {
        var name = "TestProperty";
        var property = newCleanProperty(name, 3);
        property.remove();
        expect(Ti.App.Properties.hasProperty(name)).toBe(false);
        tearDown(name);
    });
});