var Config = require('config');
var webServiceClient = require('webServiceClient');

Alloy.Globals.tabgroup = $.index;
Ti.UI.iPhone.StatusBar = Ti.UI.LIGHT_CONTENT;

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
