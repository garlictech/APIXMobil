function WindowController(args, uiElements, window, controller) {
    args[0] = args[0] || {};
    args[0].window = window;
    args[0].controller = controller;
    Controller.call(this, args, uiElements);
}

var Controller = require("controller");

WindowController.prototype = Object.create(Controller.prototype);

WindowController.prototype.addBackButton = function(args) {
    "undefined" == typeof args.id && (args.id = "back_button");
    args.window = this.args.window;
    this.args.window.add(Alloy.createController("back_button", args).getView());
};

WindowController.prototype.addElement = function(controllerName, TSSClass) {
    var style = this.args.controller.createStyle({
        classes: TSSClass,
        window: this.args.window
    });
    this.args.window.add(Alloy.createController(controllerName, style).getView());
};

WindowController.prototype.addBackToTablesButton = function() {
    this.addBackButton({
        click: require("eventHandlers").goToTables
    });
};

WindowController.prototype.close = function() {
    this.args.window.close();
    "undefined" != typeof this.args.cover_window && this.args.cover_window.close();
};

module.exports = WindowController;