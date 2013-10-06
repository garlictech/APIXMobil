var eventHandlers = require('eventHandlers');
// Handling text label update in case of locale change
var listener = require('utils').registerTextUpdates($.content, $.top_label);

function close() {
    Ti.App.removeEventListener("SettingsChanged", listener);
    $.window.close();
}

function goBack() {
    close();
}
