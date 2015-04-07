// ----------------------------------------------------------------------------
// Module responsibile for displaying diagrams (images). This is a special,
// one-row table view.

// Module initialization
var SimpleTable = require("simple_table");
var Utils = require('utils');
var ImageTableManager = require("image_table_manager").Manager;

// ----------------------------------------------------------------------------
// Expected object arguments:
// - args.controller: The controller creating this view. It must contain a/
// window, the value of that window "id" attribute must be "window".
// - args.collection: The collection that the table displays.
function ImageTable(args) {
    var self = this;
    var imageTableManager = new ImageTableManager(args.controller.image);
    SimpleTable.call(this, args, imageTableManager);
    this.addBackButton();
    this.addGoHomeButton();

    var handler = function(e) {
        if (e.toHideBackground !== true) {
            if (! Utils.undefined(self.landscape_window)) {
                self.landscape_window.close();
                delete self.landscape_window;
            }
        } else if ( (! Utils.undefined(args.controller.image.image) &&
                    args.controller.image.image !== "") &&
                  Utils.undefined(self.landscape_window))
        {
            self.landscape_window = Alloy.createController('landscape_image_window', {image: args.controller.image.image}).getView();
            self.landscape_window.open();
        }
    };

    Ti.App.addEventListener("orient", handler);

    this.window.addEventListener("close", function(e) {
        Ti.App.removeEventListener("orient", handler);
    });
}

// ----------------------------------------------------------------------------
// Inherits from SimpleTable...
ImageTable.prototype = Object.create(SimpleTable.prototype);

// ----------------------------------------------------------------------------
module.exports = ImageTable;
