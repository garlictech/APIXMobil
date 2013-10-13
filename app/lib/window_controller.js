// ----------------------------------------------------------------------------
// Module initialization
var Controller = require("controller");

// ----------------------------------------------------------------------------
function WindowController(args, uiElements, window, controller) {
    args[0] = args[0] || {};
    args[0].window = window;
    args[0].controller = controller;
    var self = this;

    window.addEventListener("close", function() {
        self.close();
    });

    Controller.call(this, args, uiElements);
}

// Inherits from Controller...
WindowController.prototype = Object.create(Controller.prototype);

// ----------------------------------------------------------------------------
// Add a back button to the top left corner of the window.
WindowController.prototype.addBackButton = function(args) {
    if (typeof args.id === 'undefined') {
        args.id = 'back_button';
    }

    args.window = this.args.window;

    this.args.window.add(
        Alloy.createController("back_button", args).getView()
    );
};

// ----------------------------------------------------------------------------
// Add a child element to the window. Its properties are defined in a TSS
// class given as parameter. Also, parameter is the controller name whose
// child the new element will be. An optional parameter is the parent
// controller. If it is undefined, the controller set in object level is used.
WindowController.prototype.addElement = function(
    controllerName, TSSClass, extraArgs)
{
    var style = this.args.controller.createStyle({
        classes: TSSClass,
        window: this.args.window
    });

    for (var key in extraArgs) { style[key] = extraArgs[key]; }

    this.args.window.add(
        Alloy.createController(controllerName, style).getView()
    );
};

// ----------------------------------------------------------------------------
// Add back button to the tables window... to review!
WindowController.prototype.addBackToTablesButton = function() {
    this.addBackButton({click: require('eventHandlers').goToTables});
};

// ----------------------------------------------------------------------------
// Add back button to the tables window... to review!
WindowController.prototype.close = function() {
    this.args.window.close();

    if (typeof this.args.cover_window !== 'undefined') {
        this.args.cover_window.close();
    }
};

// ----------------------------------------------------------------------------
module.exports = WindowController;
