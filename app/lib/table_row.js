// ----------------------------------------------------------------------------
// Module initialization
var Controller = require("controller");
var Utils = require("utils");

// TableRow class.
//
// Argument parameters:
// args.window: the window that the row is displayed on
// args.model: the model instance of the collection that is in the row
function TableRow(args, row_ui, name_ui, value_ui) {
    this.model = args.model;
    var uis = [];

    if (typeof this.model.text !== 'undefined') {
        name_ui.text = this.model.text;
    } else if (typeof this.model.text_id !== 'undefined') {
        name_ui.text_id = this.model.text_id;
        // Register for locale update only of necessary.
        uis = [name_ui];
    }

    if ( ! Utils.undefined(this.model.value) && ! Utils.undefined(value_ui)) {
        value_ui.text = this.model.value;
    }

    Controller.call(this, args, uis);

    if (this.hasChild()) {
        row_ui.hasChild = true;
    }
}

// ----------------------------------------------------------------------------
// Inherits from Controller...
TableRow.prototype = Object.create(Controller.prototype);

// ----------------------------------------------------------------------------
TableRow.prototype.openChildWindow = function() {
    if (this.hasChild()) {
        require("table_manager").openChildTable(this.model.childCollection);
    }
};

// ----------------------------------------------------------------------------
TableRow.prototype.hasChild = function() {
    return typeof this.model.childCollection !== 'undefined';
};

module.exports = TableRow;

