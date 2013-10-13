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
};

// ----------------------------------------------------------------------------
DateProperty.prototype.stringValue = function() {
    var date = this.get();

    return String.format("%s %d:%d", date.toLocaleDateString(),
        date.getHours(), date.getMinutes());
};

// ----------------------------------------------------------------------------
DateProperty.prototype.get = function() {
    return new Date(Ti.App.Properties.getString(this.name));
};

// ----------------------------------------------------------------------------
exports.DateProperty = DateProperty;
