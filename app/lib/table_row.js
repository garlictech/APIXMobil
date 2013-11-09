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
    name_ui.text = this.getTitle();

    if ( ! Utils.undefined(this.model.value) && ! Utils.undefined(value_ui)) {
        value_ui.text = this.model.value;
    }

    Controller.call(this, args);

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
    } else {
        var a = Titanium.UI.createAlertDialog({
            title: this.getTitle(),
            message: this.model.value
        });
        a.show();
    }
};

// ----------------------------------------------------------------------------
TableRow.prototype.getTitle = function() {
    if (this.model.text) {
        return this.model.text;
    } else if (this.model.text_id)  {
        return Alloy.Globals.L(this.model.text_id);
    }
};

// ----------------------------------------------------------------------------
TableRow.prototype.hasChild = function() {
    return typeof this.model.childCollection !== 'undefined';
};

module.exports = TableRow;

