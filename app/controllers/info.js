// ----------------------------------------------------------------------------
// Module initialization
var eventHandlers = require('eventHandlers');
var WindowController = require("window_controller");

// ----------------------------------------------------------------------------
// Info class, responsible for Info window logic.
function Info(args, uiElements) {
    WindowController.call(this, args, $, [$.top_label]);
    file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, "info.txt");
    var blob = file.read();
    $.content.text = blob.text;
    // dispose of file handle & blob.
    file = null;
    blob = null;
    this.addBackToTablesButton();
}

// Inherits from WindowController...
Info.prototype = Object.create(WindowController.prototype);

// ----------------------------------------------------------------------------
// Create the actial Info object, and bind it to this particular controller
var info = new Info(arguments[0]);
