var utils = require("utils");
var Config = require('config');
var eventHandlers = require('eventHandlers');

function doLogout(e) {
    Config.setLoggedOut();
    Alloy.Globals.tabgroup.setActiveTab(Alloy.Globals.LOGIN_TAB);
}

function doReset(e) {
    Config.resetFactorySettings();
    Ti.App.fireEvent('SettingChanged');
    doLogout();
}

function addSettingChangeEvent(name, controllerName, initial, use) {
    var arg = {
        useValue: function(value) {
            use(name, value);
            Ti.App.fireEvent('SettingChanged');
        },
        initialData: initial
    };

    utils.openWindowWithBottomClicksDisabled(controllerName, arg);
}

function addQueryDateChangeEvent(name) {
    var initial = Config.getDataProperty(name);
    addSettingChangeEvent(name, 'date_picker', initial, function(n, v) {
        Config.setQueryDate(n, v);
    });
}

$.query_start_date.addEventListener('click', function(e) {
    addQueryDateChangeEvent("QueryStartDate");
});

$.query_end_date.addEventListener('click', function(e) {
    addQueryDateChangeEvent("QueryEndDate");
});

$.server_name.addEventListener('click', function(e) {
    var initial = Ti.App.Properties.getString('ServerName');
    addSettingChangeEvent('ServerName', 'text_input', initial, function(n, v) {
        Ti.App.Properties.setString(n, v);
    });
});
