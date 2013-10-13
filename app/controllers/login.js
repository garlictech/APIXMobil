// ----------------------------------------------------------------------------
// Module initialization
var Config = require('config').config;
var webServiceClient = require('webServiceClient');
var WindowController = require("window_controller");

// ----------------------------------------------------------------------------
// Login class, responsible for Info window Login.
function Login(args, uiElements, window) {
    WindowController.call(this, args, uiElements, $.window, $);
    this.addElement('setting', 'language');
}

// Inherits from WindowController...
Login.prototype = Object.create(WindowController.prototype);

// ----------------------------------------------------------------------------
// Create the actial Info object, and bind it to this particular controller
module.exports = new Login(
    arguments,
    [$.username, $.password, $.login_button, $.activity_logging_in]
);

// ----------------------------------------------------------------------------
// Handle clicking on the "Login" button.
function doLogin(e) {
    $.username.blur();
    $.password.blur();
    $.activity_logging_in.show();
    username = $.username.getValue();
    password = $.password.getValue();
    res = webServiceClient.login(username, password);
    $.activity_logging_in.hide();

    if (res) {
        Config.setLoggedIn(username, password);
        Alloy.Globals.tabgroup.setActiveTab(Alloy.Globals.TABLES_TAB);
    } else {
        alert(webServiceClient.errorMessage);
    }
}

// When the login window appears, the activity monitor is hidden.
$.activity_logging_in.hide();
