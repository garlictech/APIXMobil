var Config = require("config");
var args = arguments[0] || {};

// Read the actual value of the property that this setting is responsible for
function updateValue() {
    $.setting_value.text = args.propertyName ? Config.getStringOfSetting(args.propertyName) : "";
}

// Set up UI event handlers
var handlers = {};
handlers.click = function(e) {}; // Default event handler: do nothing. Can be
// set externally, with addEventListener.

// Handling button click event
function onClick(e) {
    handlers.click(e);
}

// Hook to be able to set event handler externally. We wire in what this
// particular controller should do when clicking on the change button.
exports.addEventListener = function(listenerName, listenerFunction) {
    switch (listenerName) {
    case "click":
        handlers.click = listenerFunction;
    }
};

// Set up what the controller should display.
$.setting.top = args.top || 0;
$.title_label.text = args.text || "";
updateValue();

// Listen to the "SettingChanges" event. It simply updates the string
// representation of the property that the view shows.
Ti.App.addEventListener('SettingChanged', function(e) {
    updateValue();
});


