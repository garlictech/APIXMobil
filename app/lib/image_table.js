// ----------------------------------------------------------------------------
// Module responsibile for displaying diagrams (images). This is a special,
// one-row table view.

// Module initialization
var SimpleTable = require("simple_table");
var ImageTableManager = require("image_table_manager").Manager;

// ----------------------------------------------------------------------------
// Expected object arguments:
// - args.controller: The controller creating this view. It must contain a/
// window, the value of that window "id" attribute must be "window".
// - args.collection: The collection that the table displays.
function ImageTable(args) {
    var imageTableManager = new ImageTableManager(args.controller.image);
    SimpleTable.call(this, args, imageTableManager);
    this.addBackButton();
    this.addGoHomeButton();
}

// ----------------------------------------------------------------------------
// Inherits from SimpleTable...
ImageTable.prototype = Object.create(SimpleTable.prototype);

// ----------------------------------------------------------------------------
module.exports = ImageTable;
