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
CompoundTable.prototype = Object.create(TableBase.prototype);

// ----------------------------------------------------------------------------
module.exports = CompoundTable;
