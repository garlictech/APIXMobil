// ----------------------------------------------------------------------------
require('behave').andSetup(this);
var utils = require('utils');

// ----------------------------------------------------------------------------
describe('Test utility functions', function() {
    it ('*** Test registerTextUpdates: no arguments', function() {
        // Must not result error
        utils.registerTextUpdates();
        Ti.App.fireEvent("SettingsChanged");
    });

    it ('*** Test undefined', function() {
        var data = {defined_key: "value"};
        expect(utils.undefined(data.undefined_key)).toBe(true);
        expect(utils.undefined(data.defined_key)).toBe(false);
    });

    it ('*** Test merge', function() {
        var obj1 = {key: "value"};
        var obj2 = {key2: "value2", key3: "value3"};
        utils.merge(obj1, obj2);
        expect(obj1.key).toBe("value");
        expect(obj1.key2).toBe("value2");
        expect(obj1.key3).toBe("value3");
    });
});
