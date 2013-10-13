// ----------------------------------------------------------------------------
// Module initialization
var Controller = require("controller");

// TableRow class.
function TableRow(args, row_ui, name_ui) {
    Controller.call(this, args, [name_ui]);

    if (typeof this.args.text !== 'undefined') {
        name_ui.text = this.args.text;
    } else if (typeof this.args.text_id !== 'undefined') {
        name_ui.text_id = this.args.text_id;
    }

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
        var nextTable = new (require("table_locator").TableLocator)(
            this.args.childWindow,
            this.args.child_collection,
            this.args.text,
            this.args.text_id
        );

        require("table_manager").manager.openChildTable(nextTable);
    }
};

// ----------------------------------------------------------------------------
TableRow.prototype.hasChild = function() {
    return typeof this.args.child_collection !== 'undefined';
};

module.exports = TableRow;

