// ----------------------------------------------------------------------------
// Module responsibile for displaying table.

// Module initialization
var SimpleTable = require("simple_table");

// ----------------------------------------------------------------------------
// Expected object arguments:
// - args.controller: The controller creating this view. It must contain a/
// window, the value of that window "id" attribute must be "window".
// - args.collection: The collection that the table displays.
function CompoundTable(args) {
    SimpleTable.call(this, args);
}

// ----------------------------------------------------------------------------
// Inherits from CompoundTable...
CompoundTable.prototype = Object.create(SimpleTable.prototype);

// ----------------------------------------------------------------------------
CompoundTable.prototype.stepRight = function() {
    this.collection.increaseSetIndex();
    this.updateTable();
};

// ----------------------------------------------------------------------------
CompoundTable.prototype.stepLeft = function() {
    this.collection.decreaseSetIndex();
    this.updateTable();
};


// ----------------------------------------------------------------------------
module.exports = CompoundTable;
