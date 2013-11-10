// ----------------------------------------------------------------------------
// Module initialization
var WindowController = require("window_controller");

// ----------------------------------------------------------------------------
// Settings class, responsible for Settings window logic.
function Settings(args) {
    var uiElements =
        [$.logout_button, $.top_label, $.advanced_settings_button];
    WindowController.call(this, args, $, uiElements);
    this.addSetting('query_start_date');
    this.addSetting('query_end_date');
    this.addSetting('locale');
    this.addSetting('default_query_interval');
    this.addSetting('metric_system');
    this.addBackButton();
}

// Inherits from WindowController...
Settings.prototype = Object.create(WindowController.prototype);

Settings.prototype.addSetting = function(TSSClass) {
    this.addElement.call(this, "setting", {}, TSSClass);
};

// ----------------------------------------------------------------------------
// Create the actial Settings object, and bind it to this particular controller
var settings = new Settings(arguments[0]);

// Click event handlers
function doAdvancedSettings(e) {
    Alloy.createController("advanced_settings").getView().open();
}

function doLogout(e) {
    require("utils").doLogout();
}
