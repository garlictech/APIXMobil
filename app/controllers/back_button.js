// ----------------------------------------------------------------------------
// BackButton class. Implements a button that can be used to go back from
// a window to a previous one, where the actual window was opened from.
//
// Expected parameters:
// - arguments[0].window: The window that should be closed on click.
function BackButton() { }

// Inherits from Controller...
BackButton.prototype = new (require("controller"))(
    arguments[0], [$.back_button]
);

// BackButton API
BackButton.prototype.onClick = function() {
    this.window.close();
};

// ----------------------------------------------------------------------------
// Create the object representing this particular button
var button = new BackButton();

function onClick(e) {
    button.onClick(e);
}
