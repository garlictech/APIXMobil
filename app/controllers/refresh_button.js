// ----------------------------------------------------------------------------
// RefreshButton
//
// Arguments:
//
// - refresher: a function that refreshesthe table that the window is attached
// to.
function RefreshButton(args) {
    this.refresher = args.refresher;
 }

// ----------------------------------------------------------------------------
// Inherits from Controller...
RefreshButton.prototype = new (require("controller"))(arguments[0]);

// ----------------------------------------------------------------------------
RefreshButton.prototype.onClick = function() {
    this.args.refresher();
};

// ----------------------------------------------------------------------------
// Create the object representing this particular button
var button = new RefreshButton(arguments[0]);

// ----------------------------------------------------------------------------
function onClick(e) {
    button.onClick(e);
}
