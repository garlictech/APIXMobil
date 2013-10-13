function TableRow(args, row_ui, name_ui) {
    Controller.call(this, args, [ name_ui ]);
    "undefined" != typeof this.args.text ? name_ui.text = this.args.text : "undefined" != typeof this.args.text_id && (name_ui.text_id = this.args.text_id);
    this.hasChild() && (row_ui.hasChild = true);
}

var Controller = require("controller");

TableRow.prototype = Object.create(Controller.prototype);

TableRow.prototype.openChildWindow = function() {
    if (this.hasChild()) {
        var nextTable = new (require("table_locator").TableLocator)(this.args.childWindow, this.args.child_collection, this.args.text, this.args.text_id);
        require("table_manager").manager.openChildTable(nextTable);
    }
};

TableRow.prototype.hasChild = function() {
    return "undefined" != typeof this.args.child_collection;
};

module.exports = TableRow;