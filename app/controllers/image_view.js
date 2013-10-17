// ----------------------------------------------------------------------------
// Module initialization
var Config = require('config').config;
var WindowController = require("window_controller");

// ----------------------------------------------------------------------------
// ImageView class
function ImageView(args) {
    WindowController.call(this, args, $, [$.top_label]);
    this.addBackButton({click: goBack});
}

// ----------------------------------------------------------------------------
// Inherits from WindowController...
ImageView.prototype = Object.create(WindowController.prototype);

// ----------------------------------------------------------------------------
// Create the actual ImageView object, and bind it to this particular controller
var imageView = new ImageView(arguments[0]);

// ----------------------------------------------------------------------------

function goBack() {
    imageView.close();
}
