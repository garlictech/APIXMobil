// ----------------------------------------------------------------------------
// argument[0].window: the window that the row is displayed on
// argument[0].model: the model instance of the collection that is in the row

// TextRow class.
function TextRow() {}

// ----------------------------------------------------------------------------
// Inherits from Controller...
TextRow.prototype = new (require("table_row"))(
    arguments[0], $.row, $.name, $.value
);

// ----------------------------------------------------------------------------
// Create the object representing this particular controller
var textRow = new TextRow();

// ----------------------------------------------------------------------------
function openChildWindow(e) {
    textRow.openChildWindow();
    $.row.setBackgroundColor("#e9bf3c");

    setTimeout(function() {
        $.row.setBackgroundColor("black");
    }, 250);
}
