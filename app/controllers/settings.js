// ----------------------------------------------------------------------------
// Module initialization
var WindowController = require("window_controller");

// ----------------------------------------------------------------------------
// Settings class, responsible for Settings window logic.
function Settings(args, uiElements) {
    WindowController.call(this, args, uiElements, $.window, $);
    this.addElement('query_start_date');
    this.addElement('query_end_date');
    this.addElement('locale');
    this.addElement('default_query_interval');
    this.addElement('metric_system');
    this.addBackToTablesButton();
}

// Inherits from WindowController...
Settings.prototype = Object.create(WindowController.prototype);

Settings.prototype.addElement = function(TSSClass) {
    WindowController.prototype.addElement.call(this, "setting", TSSClass);
};

// ----------------------------------------------------------------------------
// Create the actial Settings object, and bind it to this particular controller
var settings = new Settings(
    arguments,
    [$.logout_button, $.top_label, $.advanced_settings_button]
);

// Click event handlers
function doAdvancedSettings(e) {
    Alloy.createController("advanced_settings").getView().open();
}

function doLogout(e) {
    require("utils").doLogout();
}
