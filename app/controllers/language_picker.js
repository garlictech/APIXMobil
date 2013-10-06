Ti.API.debug('language_picker constructor started');
// ----------------------------------------------------------------------------
exports.baseController = "picker";
var locale = require("locale");
var args = arguments[0] || {};

// Constructor

// Create picker rows
var data = [];
var actualRow = 0;

for (var i = 0; i < locale.supportedLocales.length; ++i) {
    loc = locale.supportedLocales[i];

    data[i] = Ti.UI.createPickerRow({
        title: locale.getHumanTextOfLocale(loc)
    });

    if (loc === Ti.App.Properties.getString("Locale")) {
        actualRow = i;
    }
}

// Add rows to picker
$.picker.add(data);
// Set selected data to actual locale
$.picker.setSelectedRow(0, actualRow);

// On change, share the value of the picker with the base controller, by
// using args.value.
$.picker.addEventListener('change', function(e) {
    args.value = locale.supportedLocales[e.rowIndex];
});

// ----------------------------------------------------------------------------
Ti.API.debug('language_picker constructor finished');
