// ----------------------------------------------------------------------------
// Module initialization
var Config = require('config').config;
var WebServiceClient = require('web_service_client');
var WindowController = require("window_controller");
var Utils = require("utils");

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
Login.prototype.doLogin = function() {
    $.username.blur();
    $.password.blur();
    $.activity.show();
    username = $.username.getValue();
    password = $.password.getValue();
    res = WebServiceClient.login(username, password, {
        on_error: function(e) {
            $.activity.hide();
            alert(e.error);
        },

        on_success: function(e) {
            $.activity.hide();

            if ( ! Utils.undefined(e.authenticated) && e.authenticated)  {
                Config.setLoggedIn(username, password);
                Alloy.Globals.tabgroup.setActiveTab(Alloy.Globals.TABLES_TAB);
            } else {
                alert(Alloy.Globals.L("permission_denied"));
            }

        }
    });
};

// ----------------------------------------------------------------------------
// Create the actual Info object, and bind it to this particular controller
var login = new Login(arguments[0]);
module.exports = login;

// ----------------------------------------------------------------------------
// Handle clicking on the "Login" button.
function doLogin(e) {
    login.doLogin();
}

// When the login window appears, the activity monitor is hidden.
$.activity.hide();
