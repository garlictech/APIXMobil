require('behave').andSetup(this);
var utils = require('utils');

describe('Test utility functions', function() {
    it ('*** Test registerTextUpdates: no arguments', function() {
        // Must not result error
        utils.registerTextUpdates();
        Ti.App.fireEvent("SettingsChanged");
    });
});
