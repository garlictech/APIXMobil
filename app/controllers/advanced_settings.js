// ----------------------------------------------------------------------------
// Module initialization
var Config = require('config').config;
var WindowController = require("window_controller");

// ----------------------------------------------------------------------------
// AdvancedSettings class
function AdvancedSettings(args) {
    WindowController.call(this, args, $, [$.reset_button, $.top_label]);
    this.addSetting('server_name');
    this.addBackButton({click: goBack});
}

// ----------------------------------------------------------------------------

// Inherits from WindowController...
AdvancedSettings.prototype = Object.create(WindowController.prototype);

// ----------------------------------------------------------------------------

AdvancedSettings.prototype.addSetting = function(TSSClass) {
    WindowController.prototype.addElement.call(this, "setting", {}, TSSClass);
};

// ----------------------------------------------------------------------------

AdvancedSettings.prototype.doReset = function() {
    Config.resetFactorySettings();
    require("utils").doLogout();
    this.close();
};

// ----------------------------------------------------------------------------
// Create the actual AdvancedSettings object, and bind it to this particular controller
var advancedSettings = new AdvancedSettings(arguments[0]);

// ----------------------------------------------------------------------------

function doReset(e) {
    advancedSettings.doReset();
}

// ----------------------------------------------------------------------------

function goBack() {
    advancedSettings.close();
}
