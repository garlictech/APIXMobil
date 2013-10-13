// ----------------------------------------------------------------------------
function IconRow() {
   $.icon.image = this.args.image;
}

// ----------------------------------------------------------------------------
// Inherits from TableRow...
IconRow.prototype = new (require("table_row"))(arguments, $.row, $.name);

// ----------------------------------------------------------------------------
// Create the object representing this particular controller
var iconrow = new IconRow();

function openChildWindow(e) {
    iconrow.openChildWindow();
}
