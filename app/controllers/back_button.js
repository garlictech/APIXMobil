// ----------------------------------------------------------------------------
// BackButton class. Implements a button that can be used to go back from
// a window to a previous one, where the actual window was opened from.
function BackButton() { }

// Inherits from Controller...
BackButton.prototype = new (require("controller"))(arguments, [$.back_button]);

// BackButton API
BackButton.prototype.onClick = function() {
    this.args.click.call(undefined);
};

// ----------------------------------------------------------------------------
// Create the object representing this particular button
var button = new BackButton();

function onClick(e) {
    button.onClick(e);
}
