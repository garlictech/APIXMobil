var Config = require('config');
var args = arguments[0] || {};

if (args.initialData !== 'undefined') {
    $.input.value = args.initialData;
}
// Close the bottom window that prevents from clicking on the visible
// buttons of the settings view. Then, slides down the window and closes it.
function close() {
    $.text_input.close();
    args.cover_window.close();
}

// On cancel, simply close the picker.
function cancelClicked(e) {
    close();
}

// When done, call the passed function that handles the picker value.
// Then closes the window properly.
function doneClicked(e) {
    if (typeof args.useValue !== 'undefined') {
        args.useValue($.input.value);
    }

    close();
}
