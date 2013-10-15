function TableRow(args, row_ui, name_ui) {
    this.model = args.model;
    var uis = [];
    if ("undefined" != typeof this.model.text) name_ui.text = this.model.text; else if ("undefined" != typeof this.model.text_id) {
        name_ui.text_id = this.model.text_id;
        uis = [ name_ui ];
    }
    Controller.call(this, args, uis);
    this.hasChild() && (row_ui.hasChild = true);
}

var Controller = require("controller");

TableRow.prototype = Object.create(Controller.prototype);

TableRow.prototype.openChildWindow = function() {
    this.hasChild() && require("table_manager").openChildTable(this.model.childCollection);
};

TableRow.prototype.hasChild = function() {
    return "undefined" != typeof this.model.childCollection;
};

module.exports = TableRow;