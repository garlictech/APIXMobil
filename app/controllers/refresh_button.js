// ----------------------------------------------------------------------------
// RefreshButton
//
// Arguments:
//
// - refresher: a function that refreshesthe table that the window is attached
// to.
function RefreshButton() { }

// ----------------------------------------------------------------------------
// Inherits from Controller...
RefreshButton.prototype = new (require("controller"))(arguments);

// ----------------------------------------------------------------------------
RefreshButton.prototype.onClick = function() {
    this.args.refresher();
};

// ----------------------------------------------------------------------------
// Create the object representing this particular button
var button = new RefreshButton();

// ----------------------------------------------------------------------------
function onClick(e) {
    button.onClick(e);
}
