var Config = require('config');
var utils = require("utils");
var common = require("settings_common");

// Handling text label update in case of locale change
var listener = utils.registerTextUpdates($.reset_button, $.server_name,
    $.top_label);

function close() {
    Ti.App.removeEventListener("SettingsChanged", listener);
    $.window.close();
}

function doReset(e) {
    Config.resetFactorySettings();
    common.doLogout();
    close();
}

$.server_name.addEventListener('click', function(e) {
    var initial = Ti.App.Properties.getString('ServerName');
    common.addSettingChangeEvent('ServerName', 'text_input', initial,
    function(n, v) {
        Ti.App.Properties.setString(n, v);
    });
});

function goBack() {
    close();
}
