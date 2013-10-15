function WindowController(args, controller, uiElements) {
    args = Utils.undefined(args) ? {} : args;
    args.window = controller.window;
    Controller.call(this, args, uiElements);
    var self = this;
    this.controller = controller;
    this.window.addEventListener("close", function() {
        self.close();
    });
}

var Controller = require("controller");

var Utils = require("utils");

WindowController.prototype = Object.create(Controller.prototype);

WindowController.prototype.addBackButton = function() {
    this.addElement("back_button");
};

WindowController.prototype.addElement = function(controllerName, args, TSSClass) {
    args = Utils.undefined(args) ? {} : args;
    args.window = this.controller.window;
    if (!Utils.undefined(TSSClass)) {
        var style = this.controller.createStyle({
            classes: TSSClass
        });
        Utils.merge(args, style);
    }
    this.window.add(Alloy.createController(controllerName, args).getView());
};

WindowController.prototype.addBackToTablesButton = function() {
    this.addElement("back_to_tables_button");
};

WindowController.prototype.close = function() {
    this.window.close();
    "undefined" != typeof this.args.cover_window && this.args.cover_window.close();
};

WindowController.prototype.getControllerPath = function() {
    return this.controller.__controllerPath;
};

module.exports = WindowController;