// ----------------------------------------------------------------------------
var Utils = require('utils');
var Config = require('config').config;

var args = arguments[0] || {};

// Handling text label update in case of locale change
var listener = Utils.registerTextUpdates($.cancel, $.done);

$.date_picker.type = Ti.UI.PICKER_TYPE_DATE;
$.date_picker.value = args.value;

$.time_picker.type = Ti.UI.PICKER_TYPE_TIME;
$.time_picker.value = args.value;

// ----------------------------------------------------------------------------
// Close the bottom window that prevents from clicking on the visible
// buttons of the settings view. Then, slides down the window and closes it.
function close() {
    Ti.App.removeEventListener("SettingsChanged", listener);
    $.picker_window.close();
    args.cover_window.close();
}

// ----------------------------------------------------------------------------
// On cancel, simply close the picker.
function cancelClicked(e) {
    close();
}

// ----------------------------------------------------------------------------
// Android back button is "cancel"
if (Utils.isAndroid()) {
    $.picker_window.addEventListener('android:back', function(e) {
        cancelClicked(e);
    });
}

// ----------------------------------------------------------------------------
// When done, call the passed function that handles the picker value.
// Then closes the window properly.
exports.doneClicked = function(e) {
    args.useValue(args.value);
    close();
};

// ----------------------------------------------------------------------------
$.date_picker.maxDate = $.time_picker.maxDate = new Date();

$.date_picker.locale = $.time_picker.locale =
    Config.getProperty("Locale").get();

$.date_picker.addEventListener('change', function(e) {
    args.value = new Date(e.value.getFullYear(), e.value.getMonth(),
        e.value.getDate(), args.value.getHours(), args.value.getMinutes());
});

$.time_picker.addEventListener('change', function(e) {
    args.value = new Date(args.value.getFullYear(), args.value.getMonth(),
        args.value.getDate(), e.value.getHours(), e.value.getMinutes());
});
