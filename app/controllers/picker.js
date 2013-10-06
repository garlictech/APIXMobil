Ti.API.debug('picker constructor started');
// ----------------------------------------------------------------------------
var args = arguments[0] || {};
// Handling text label update in case of locale change
var listener = require('utils').registerTextUpdates($.cancel, $.done);

$.picker.type = Ti.UI.PICKER_TYPE_PLAIN;

// ----------------------------------------------------------------------------
// Public interface
exports.animate_in = Titanium.UI.createAnimation({bottom:0});

// ----------------------------------------------------------------------------
// Private

// Close the bottom window that prevents from clicking on the visible
// buttons of the settings view. Then, slides down the window and closes it.
function close() {
    Ti.App.removeEventListener("SettingsChanged", listener);
    $.picker_window.close(Titanium.UI.createAnimation({bottom:-220}));
    args.cover_window.close();
}

// On cancel, simply close the picker.
function cancelClicked(e) {
    close();
}

// When done, call the passed function that handles the picker value.
// Then closes the window properly.
exports.doneClicked = function(e) {
    args.useValue(args.value);
    close();
};

// ----------------------------------------------------------------------------
Ti.API.debug('picker constructor finished');
