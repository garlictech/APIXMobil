// ----------------------------------------------------------------------------
// Module initialization
var Config = require('config').config;
var webServiceClient = require('webServiceClient');
var WindowController = require("window_controller");

// ----------------------------------------------------------------------------
// Login class, responsible for Info window Login.
function Login(args) {
    var uiElements =
        [$.username, $.password, $.login_button, $.activity];

    WindowController.call(this, args, $, uiElements);
    this.addElement('setting', {}, 'language');
}

// Inherits from WindowController...
Login.prototype = Object.create(WindowController.prototype);

// ----------------------------------------------------------------------------
// Create the actial Info object, and bind it to this particular controller
module.exports = new Login(arguments[0]);

// ----------------------------------------------------------------------------
// Handle clicking on the "Login" button.
function doLogin(e) {
    $.username.blur();
    $.password.blur();
    $.activity.show();
    username = $.username.getValue();
    password = $.password.getValue();
    res = webServiceClient.login(username, password);
    $.activity.hide();

    if (res) {
        Config.setLoggedIn(username, password);
        Alloy.Globals.tabgroup.setActiveTab(Alloy.Globals.TABLES_TAB);
    } else {
        alert(webServiceClient.errorMessage);
    }
}

// When the login window appears, the activity monitor is hidden.
$.activity.hide();
