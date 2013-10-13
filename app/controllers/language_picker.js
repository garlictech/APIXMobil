// ----------------------------------------------------------------------------
// Module initialization
var locale = require('locale');
exports.baseController = "picker";

var args = arguments[0] || {};

// Constructor

// Create picker rows
var data = [];
var actualRow = 0;

for (var i = 0; i < locale.getSupportedLocales().length; ++i) {
    var loc = locale.getSupportedLocales()[i];

    data[i] = Ti.UI.createPickerRow({
        title: locale.getHumanTextOfLocale(loc)
    });

    if (loc === require("config").config.getProperty("Locale").get()) {
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
    args.value = locale.getSupportedLocales()[e.rowIndex];
});
