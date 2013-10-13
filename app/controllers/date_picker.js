Ti.API.debug('date_picker constructor started');
// ----------------------------------------------------------------------------
exports.baseController = "picker";
var args = arguments[0] || {};

// Construction
$.picker.value = args.value;
$.picker.maxDate = new Date();
$.picker.type = Ti.UI.PICKER_TYPE_DATE_AND_TIME;

// On change, share the value of the picker with the base controller, by
// using args.value.
$.picker.addEventListener('change', function(e) {
    args.value = e.value;
});

// ----------------------------------------------------------------------------
Ti.API.debug('date_picker constructor finished');
