var utils = require("utils");
var Config = require('config');
var locale = require('locale');
var eventHandlers = require('eventHandlers');
var common = require("settings_common");

// Handling text label update in case of locale change
utils.registerTextUpdates($.query_start_date, $.query_end_date,
    $.language, $.logout_button, $.top_label, $.advanced_settings_button);

function doAdvancedSettings(e) {
    var controller = Alloy.createController("advanced_settings").getView();
    controller.open();
}

function addQueryDateChangeEvent(name) {
    var initial = Config.getDataProperty(name);
    common.addSettingChangeEvent(name, 'date_picker', initial, function(n, v) {
        Config.setQueryDate(n, v);
    });
}

$.query_start_date.addEventListener('click', function(e) {
    addQueryDateChangeEvent("QueryStartDate");
});

$.query_end_date.addEventListener('click', function(e) {
    addQueryDateChangeEvent("QueryEndDate");
});

$.language.addEventListener('click', function(e) {
    var initial = Ti.App.Properties.getString("Locale");

    function use(n, v) {
        Ti.App.Properties.setString(n, v);
    }

    common.addSettingChangeEvent('Locale', 'language_picker', initial, use);
});
