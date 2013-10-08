// ----------------------------------------------------------------------------
// Module initialization
var eventHandlers = require('eventHandlers');
var WindowController = require("window_controller");

// ----------------------------------------------------------------------------
// Info class, responsible for Info window logic.
function Info(args, uiElements, window) {
    WindowController.call(this, args, uiElements, $.window, $);
}

// Inherits from WindowController...
Info.prototype = Object.create(WindowController.prototype);

// ----------------------------------------------------------------------------
// Create the actial Info object, and bind it to this particular controller
var info = new Info(arguments, [$.content, $.top_label]);

// ----------------------------------------------------------------------------
// Create back button. Cannot do it from alloy XML, as we have to pass
// the window as well.
info.addBackToTablesButton();
