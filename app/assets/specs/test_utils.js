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
});
