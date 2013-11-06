// ----------------------------------------------------------------------------
// Module initialization
var Controller = require("controller");
var Utils = require("utils");

// ----------------------------------------------------------------------------
function WindowController(args, controller, uiElements, window) {
    args = Utils.undefined(args) ? {} : args;
    args.window = Utils.undefined(window) ? controller.window : window;
    Controller.call(this, args, uiElements, window);
    var self = this;
    this.controller = controller;

    this.window.addEventListener("close", function() {
        self.close();
    });
}

// ----------------------------------------------------------------------------
// Inherits from Controller...
WindowController.prototype = Object.create(Controller.prototype);

// ----------------------------------------------------------------------------
// Add a back button to the top left corner of the window.
WindowController.prototype.addBackButton = function(args) {
    this.addElement("back_button");
};

// ----------------------------------------------------------------------------
// Add a child element to the window. Its properties are defined in a TSS
// class given as parameter. Also, parameter is the controller name whose
// child the new element will be. An optional parameter is the parent
// controller. If it is undefined, the controller set in object level is used.
WindowController.prototype.addElement = function(
    controllerName, args, TSSClass)
{
    args = Utils.undefined(args) ? {} : args;
    args.window = this.window;

    if ( ! Utils.undefined(TSSClass)) {
        var style = this.controller.createStyle({
            classes: TSSClass
        });

        Utils.merge(args, style);
    }

    this.window.add(
        Alloy.createController(controllerName, args).getView()
    );
};

// ----------------------------------------------------------------------------
// Add back button to the tables window... to review!
WindowController.prototype.addBackToTablesButton = function() {
    this.addElement("back_to_tables_button");
};

// ----------------------------------------------------------------------------
// Add back button to the tables window... to review!
WindowController.prototype.close = function() {
    this.window.close();

    if (typeof this.args.cover_window !== 'undefined') {
        this.args.cover_window.close();
    }
};

// ----------------------------------------------------------------------------
// Name (path) of the controller JS, just in case we need cloning it
WindowController.prototype.getControllerPath = function() {
    return this.controller.__controllerPath;
};

// ----------------------------------------------------------------------------
module.exports = WindowController;
