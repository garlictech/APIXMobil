// ----------------------------------------------------------------------------
// Property. Responsible for handling properties.
function Property(name, defaultValue) {
    this.type = typeof(defaultValue);
    this.name = name;

    if ( !Ti.App.Properties.hasProperty(name)) {
        this.set(defaultValue);
    }
}

// ----------------------------------------------------------------------------
Property.prototype.set = function(value) {
    switch(this.getType()) {
    case "number":
        Ti.App.Properties.setInt(this.name, value);
        break;
    case "boolean":
        Ti.App.Properties.setBool(this.name, value);
        break;
    case "object":
        Ti.App.Properties.setObject(this.name, value);
        break;
    default:
        Ti.App.Properties.setString(this.name, value);
    }

    if (this.name === "Locale" || this.name === "MetricSystem") {
        Ti.App.fireEvent("SettingsChanged");
    }
};

// ----------------------------------------------------------------------------
Property.prototype.get = function() {
    switch(this.getType()) {
    case "number":
        return Ti.App.Properties.getInt(this.name);
    case "boolean":
        return Ti.App.Properties.getBool(this.name);
    case "object":
        return Ti.App.Properties.getObject(this.name);
    default:
        return Ti.App.Properties.getString(this.name);
    }
};

// ----------------------------------------------------------------------------
Property.prototype.getType = function() {
    return this.type;
};

// ----------------------------------------------------------------------------
Property.prototype.stringValue = function() {
    return Ti.App.Properties.getString(this.name);
};

// ----------------------------------------------------------------------------
// Remove property from the system. After this, every operation in the Property
// object results undefined behaviour!
Property.prototype.remove = function() {
    Ti.App.Properties.removeProperty(this.name);
    delete this.name;
    delete this.type;
};

// ----------------------------------------------------------------------------
exports.Property = Property;
