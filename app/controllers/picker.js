Ti.API.debug('picker constructor started');
var args = arguments[0] || {};

$.picker.value = args.initialData;
$.picker.maxData = new Date();
$.picker.type = Ti.UI.PICKER_TYPE_DATE;
// public

exports.getController = function() {
    return $.picker;
};

exports.animate_in = Titanium.UI.createAnimation({bottom:0});

// Close the bottom window that prevents from clicking on the visible
// buttons of the settings view. Then, slides down the window and closes it.
function close() {
    $.picker_window.close(Titanium.UI.createAnimation({bottom:-220}));
    args.cover_window.close();
}

// On cancel, simply close the picker.
function cancelClicked(e) {
    close();
}

// When done, call the passed function that handles the picker value.
// Then closes the window properly.
function doneClicked(e) {
    args.useValue($.picker.value);
    close();
}

Ti.API.debug('picker constructor finished');
