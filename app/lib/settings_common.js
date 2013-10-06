var utils = require("utils");
var Config = require('config');

exports.addSettingChangeEvent = function (name, controllerName, initial, use) {
    var arg = {
        useValue: function(value) {
            use(name, value);
            Ti.App.fireEvent('SettingsChanged');
        },
        value: initial
    };

    utils.openWindowWithBottomClicksDisabled(controllerName, arg);
};

exports.doLogout = function(e) {
    Config.setLoggedOut();
    Alloy.Globals.tabgroup.setActiveTab(Alloy.Globals.LOGIN_TAB);
};
