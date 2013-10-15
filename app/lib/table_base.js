// ----------------------------------------------------------------------------
// Module responsibile for displaying table.

// Module initialization
var WindowController = require("window_controller");
var TableManager = require("table_manager").manager;
var Utils=require("utils");

// ----------------------------------------------------------------------------
// Expected class arguments:
// - args.controller: The controller creating this view. It must contain a/
// window, the value of that window "id" attribute must be "window".
// - args.collection: The collection that the table displays.
// - args.uiElements: The UI elements to be registered as reveivers of
// SettingsChanged event.
function TableBase(args) {
    var uiElements = [args.controller.top_label];

    if ( ! Utils.undefined(args.uiElements)) {
        uiElements = uiElements.concat(args.uiElements);
    }

    WindowController.call(this, {}, args.controller, uiElements);
    this.collection = args.collection;
    // Configure the UI
    this.controller.top_label.text_id = this.collection.title_id;
    this.addTablePath();
    //this.addOnTimeButton();
    this.updateTable();
    // Window title must reflect the table type it
    // Table is ready and configured, update teh texts, etc...
    this.updateUi();
}

// ----------------------------------------------------------------------------
// Inherits from WindowController...
TableBase.prototype = Object.create(WindowController.prototype);

// ----------------------------------------------------------------------------
TableBase.prototype.addRow = function(model) {
    var rowControllerName = typeof model.image !== 'undefined' ?
        "icon_row" : "text_row";

    var args = {
        window: this.controller.window,
        model: model
    };

    var row = Alloy.createController(rowControllerName, args).getView();
    this.controller.table.appendRow(row);
    return row.height;
};

// ----------------------------------------------------------------------------
TableBase.prototype.addTablePath = function() {
    this.addElement("table_path", {
        collection: this.collection
    });
};

// ----------------------------------------------------------------------------
// Add ontime button: handles "bookmarks"
TableBase.prototype.addOnTimeButton = function() {
    this.addElement("ontime_button", {
        collection: this.collection
    });
};

// ----------------------------------------------------------------------------
TableBase.prototype.updateTable = function() {
    var self = this;
    this.controller.table.setData([]);
    var height = 0;
    // loop through collection and add them to table
    var data = this.collection.getData();
    for (var i = 0; i < data.length; i++) {
        height += self.addRow(data[i]);
    }

    this.controller.table.height = height;

};

// ----------------------------------------------------------------------------
module.exports = TableBase;
