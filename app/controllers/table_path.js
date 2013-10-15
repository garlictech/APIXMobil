// ----------------------------------------------------------------------------
// TablePath module
// Expected module parameters:
//
// arguments[0].collection: the collection that the actual table displays.
// arguments[0].window: the window itself
// displayed on
// ----------------------------------------------------------------------------
var Utils = require("utils");

// ----------------------------------------------------------------------------
// TablePath object.
function TablePath(collection) {
    this.collection = collection;
    this.addSettingsChangedHandler(this.updateText);
}

// ----------------------------------------------------------------------------
// Inherits from Controller...
TablePath.prototype = new (require("controller"))(arguments[0]);

// ----------------------------------------------------------------------------
TablePath.prototype.updateText = function() {
    var text = "/";
    var parentNode = this.collection.parentNode;

    while ( ! Utils.undefined(parentNode)) {
        text = "/" + (Utils.undefined(parentNode.text_id) ?
            parentNode.text : Alloy.Globals.L(parentNode.text_id)) + text;

        parentNode = parentNode.parentNode;
    }

    $.label.text = text;
};

// ----------------------------------------------------------------------------
// Create the object representing this particular controller
var tablePath = new TablePath(arguments[0].collection);
