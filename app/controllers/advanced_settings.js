// ----------------------------------------------------------------------------
// Module initialization
var Config = require('config');
var WindowController = require("window_controller");

// ----------------------------------------------------------------------------
// AdvancedSettings class
function AdvancedSettings(args, uiElements) {
    WindowController.call(this, args, uiElements, $.window, $);
    this.addElement('server_name');
    this.addBackButton({click: goBack});
}

// ----------------------------------------------------------------------------

// Inherits from WindowController...
AdvancedSettings.prototype = Object.create(WindowController.prototype);

// ----------------------------------------------------------------------------

AdvancedSettings.prototype.addElement = function(TSSClass) {
    WindowController.prototype.addElement.call(this, "setting", TSSClass);
};

// ----------------------------------------------------------------------------

AdvancedSettings.prototype.doReset = function() {
    Config.resetFactorySettings();
    require("utils").doLogout();
    this.close();
};

// ----------------------------------------------------------------------------
// Create the actual AdvancedSettings object, and bind it to this particular controller
var advancedSettings = new AdvancedSettings(
    arguments, [$.reset_button, $.top_label]
);

// ----------------------------------------------------------------------------

function doReset(e) {
    advancedSettings.doReset();
}

// ----------------------------------------------------------------------------

function goBack() {
    advancedSettings.close();
}
