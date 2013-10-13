function Property(name, defaultValue) {
    this.type = typeof defaultValue;
    this.name = name;
    Ti.App.Properties.hasProperty(name) || this.set(defaultValue);
}

Property.prototype.set = function(value) {
    switch (this.getType()) {
      case "number":
        return Ti.App.Properties.setInt(this.name, value);

      case "boolean":
        return Ti.App.Properties.setBool(this.name, value);

      case "object":
        return Ti.App.Properties.setObject(this.name, value);

      default:
        return Ti.App.Properties.setString(this.name, value);
    }
    Ti.App.fireEvent("SettingsChanged");
};

Property.prototype.get = function() {
    switch (this.getType()) {
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

Property.prototype.getType = function() {
    return this.type;
};

Property.prototype.stringValue = function() {
    return Ti.App.Properties.getString(this.name);
};

Property.prototype.remove = function() {
    Ti.App.Properties.removeProperty(this.name);
    delete this.name;
    delete this.type;
};

exports.Property = Property;