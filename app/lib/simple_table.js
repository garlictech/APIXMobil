// ----------------------------------------------------------------------------
// Module responsibile for displaying table.

// Module initialization
var TableBase = require("table_base");

// ----------------------------------------------------------------------------
// Expected object arguments:
// - args.controller: The controller creating this view. It must contain a/
// window, the value of that window "id" attribute must be "window".
// - args.collection: The collection that the table displays.
function SimpleTable(args, imageTableManager) {
    TableBase.call(this, args, imageTableManager);
    this.addBackButton();
    this.addGoHomeButton();
}

// ----------------------------------------------------------------------------
// Inherits from SimpleTable...
SimpleTable.prototype = Object.create(TableBase.prototype);

// ----------------------------------------------------------------------------
SimpleTable.prototype.close = function() {
    Ti.App.removeEventListener("GoHome", this.goHomeListener);
    TableBase.prototype.close.call(this);
};

// ----------------------------------------------------------------------------
// Add back button: go back to the previous window, meaning we close this one.
// We should not close it when we are at the root table.
SimpleTable.prototype.addBackButton = function() {
    TableBase.prototype.addBackButton.call(this, this.controller.window);
};

// ----------------------------------------------------------------------------
SimpleTable.prototype.addGoHomeButton = function() {
    this.addElement("home_button", {});
    var self = this;

    this.goHomeListener = function() {
        Ti.API.trace("Handling GoHome...");
        self.close();
    };
    Ti.App.addEventListener("GoHome", this.goHomeListener);
};

// ----------------------------------------------------------------------------
module.exports = SimpleTable;
