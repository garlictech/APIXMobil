// ----------------------------------------------------------------------------
// TextRow class.
function TextRow() {}

// ----------------------------------------------------------------------------
// Inherits from Controller...
TextRow.prototype = new (require("table_row"))(arguments, $.row, $.name);

// ----------------------------------------------------------------------------
// Create the object representing this particular controller
var textRow = new TextRow();

// ----------------------------------------------------------------------------
function openChildWindow(e) {
    textRow.openChildWindow();
}
