// ----------------------------------------------------------------------------
// IconRow class.
function IconRow() {
    if (typeof this.args.text !== 'undefined') {
        $.row_name.text = this.args.text;
    }

    if (typeof this.args.text_id !== 'undefined') {
        $.row_name.text_id = this.args.text_id;
    }

    if (typeof this.args.icon_id !== 'undefined') {
        $.icon.image = String.format("images/db_icons/%d.png", this.args.icon_id);
    } else {
        $.icon.image = this.args.image;
    }

    if (! this.hasChild()) {
        $.row.hasChild = false;
    }
}

// ----------------------------------------------------------------------------
// Inherits from Controller...
IconRow.prototype = new (require("controller"))(arguments, [$.row_name]);

IconRow.prototype.openChildWindow = function() {
    if (this.hasChild()) {
        require("table_manager").manager.openChildTable
            (this.args.childWindow, this.args.child_collection);
    }
};

IconRow.prototype.hasChild = function() {
    return typeof this.args.child_collection !== 'undefined';
};

// ----------------------------------------------------------------------------
// Create the object representing this particular controller
var iconrow = new IconRow();

function openChildWindow(e) {
    iconrow.openChildWindow();
}
