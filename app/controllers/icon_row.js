// ----------------------------------------------------------------------------
// Module arguments:
//
// argument[0].window: the window that the row is displayed on
// argument[0].model: the model instance of the collection that is in the row
function IconRow() {
   $.icon.image = Ti.Utils.base64decode(this.model.image);
}

// ----------------------------------------------------------------------------
// Inherits from TableRow...
IconRow.prototype = new (require("table_row"))(arguments[0], $.row, $.name);

// ----------------------------------------------------------------------------
// Create the object representing this particular controller
var iconrow = new IconRow();

// ----------------------------------------------------------------------------
function openChildWindow(e) {
    iconrow.openChildWindow();
    $.row.setBackgroundColor("#e9bf3c");

    setTimeout(function() {
        $.row.setBackgroundColor("black");
    }, 250);
}
