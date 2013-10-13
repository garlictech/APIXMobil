// ----------------------------------------------------------------------------
// TablePath module

// ----------------------------------------------------------------------------
// TablePath object.
function TablePath() {
    // Ensure that in case of language change, the path is not extended beyond
    // the window. It uses the global path object, that may include more items.
    this.endOfPath = this.args.path.length;
    var self = this;

    this.addSettingsChangedHandler(function() {
        self.updateText();
    });
}

// ----------------------------------------------------------------------------
// Inherits from Controller...
TablePath.prototype = new (require("controller"))(arguments);

// ----------------------------------------------------------------------------
TablePath.prototype.updateText = function() {
    var text = "/";

    for (var i = 1; i < Math.min(this.endOfPath, this.args.path.length); ++i) {var locator = this.args.path[i];

        text += (typeof locator.text_id === 'undefined' ?
            locator.text : Alloy.Globals.L(locator.text_id)) + "/";
    }

    $.label.text = text;
};

// ----------------------------------------------------------------------------
// Create the object representing this particular controller
var tablePath = new TablePath();
