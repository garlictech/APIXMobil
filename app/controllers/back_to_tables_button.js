// ----------------------------------------------------------------------------
// BackToTablesButton class. Implements a button that can be used to go back from
// a window to a previous one, where the actual window was opened from.
//
// Expected parameters:
// - arguments[0].window: The window that should be closed on click.
function BackToTablesButton() { }

// Inherits from Controller...
BackToTablesButton.prototype = new (require("controller"))(
    arguments[0], [$.back_button]
);

// BackToTablesButton API
BackToTablesButton.prototype.onClick = function() {
    Alloy.Globals.tabgroup.setActiveTab(Alloy.Globals.TABLES_TAB);
};

// ----------------------------------------------------------------------------
// Create the object representing this particular button
var button = new BackToTablesButton();

function onClick(e) {
    button.onClick(e);
}
