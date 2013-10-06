require("behave").andSetup(this);

var utils = require("utils");

describe("Test utility functions", function() {
    it("*** Test registerTextUpdates: no arguments", function() {
        utils.registerTextUpdates();
        Ti.App.fireEvent("SettingsChanged");
    });
});