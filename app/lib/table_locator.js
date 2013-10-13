// ----------------------------------------------------------------------------
// Module initialization
var Property = require("property").Property;

// ----------------------------------------------------------------------------
// Property. Responsible for handling properties.
function TableLocator(controller, collection, text, text_id) {
    this.controllerName = controller;
    this.collectionName = collection;
    this.text = text;
    this.text_id = text_id;
}

// ----------------------------------------------------------------------------
TableLocator.prototype.equal = function(tableLocator) {
    return this.controllerName === tableLocator.controllerName &&
        this.collectionName === tableLocator.collectionName;
};

// ----------------------------------------------------------------------------
TableLocator.prototype.getCollection = function() {
    return eval("Alloy.Globals." + this.collectionName);
};

// ----------------------------------------------------------------------------
TableLocator.prototype.copyFrom = function(from) {
    this.controllerName = from.controllerName;
    this.collectionName = from.collectionName;
    this.text = from.text;
    this.text_id = from.text_id;
};

// ----------------------------------------------------------------------------
TableLocator.prototype.copyTo = function(to) {
    to.controllerName = this.controllerName;
    to.collectionName = this.collectionName;
    to.text = this.text;
    to.text_id = this.text_id;
};

// ----------------------------------------------------------------------------
TableLocator.prototype.copyToProperty = function(propertyName) {
    var obj = {};
    this.copyTo(obj);
    require("config").config.getProperty(propertyName).set(obj);
};

// ----------------------------------------------------------------------------
exports.TableLocator = TableLocator;
