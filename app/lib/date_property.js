// ----------------------------------------------------------------------------
// Module initialization
var Property = require("property").Property;

// ----------------------------------------------------------------------------
// Property. Responsible for handling properties.
function DateProperty(name, defaultValue) {
    Property.call(this, name, defaultValue);
}

// ----------------------------------------------------------------------------
// Inherits from Property...
DateProperty.prototype = Object.create(Property.prototype);

// ----------------------------------------------------------------------------
DateProperty.prototype.set = function(value) {
    Ti.App.Properties.setString(this.name, value.toString());
    Ti.App.fireEvent("DatesChanged");
};

// ----------------------------------------------------------------------------
DateProperty.prototype.stringValue = function() {
    var date = this.get();

    if (Utils.isAndroid()) {
        return String.format("%s %02d:%02d", date.toLocaleDateString(), date.getHours(), date.getMinutes());
    } else {
        return String.format("%s %02.0f:%02.0f", date.toLocaleDateString(), date.getHours(), date.getMinutes());
    }
};

// ----------------------------------------------------------------------------
DateProperty.prototype.get = function() {
    return new Date(Ti.App.Properties.getString(this.name));
};

// ----------------------------------------------------------------------------
exports.DateProperty = DateProperty;
