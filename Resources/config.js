var webServiceClient = require("webServiceClient");

exports.isLoggedIn = function() {
    return 1 == Ti.App.Properties.getString("loggedIn");
};

exports.setLoggedIn = function(username, password) {
    Ti.App.Properties.setString("loggedIn", 1);
    Ti.App.Properties.setString("username", username);
    Ti.App.Properties.setString("password", password);
};

exports.setLoggedOut = function() {
    Ti.App.Properties.removeProperty("loggedIn");
    Ti.App.Properties.removeProperty("username");
    Ti.App.Properties.removeProperty("password");
};