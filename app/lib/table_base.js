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
    var uiElements = [args.controller.top_label, args.controller.activity];

    if ( ! Utils.undefined(args.uiElements)) {
        uiElements = uiElements.concat(args.uiElements);
    }

    WindowController.call(this, {}, args.controller, uiElements);
    this.collection = args.collection;
    // Configure the UI
    this.controller.top_label.text_id = this.collection.title_id;
    this.addTablePath();
    this.addOnTimeButton();
    this.updateTable();
    // Window title must reflect the table type it
    // Table is ready and configured, update the texts, etc...
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
        actualCollection: this.collection
    });
};

// ----------------------------------------------------------------------------
TableBase.prototype.updateTable = function() {
    var self = this;
    self.controller.table.height = 0;
    this.controller.activity.show();

    var retriever = this.collection.getData({
        on_timeout: function() {
            alert("timeout");
            self.close();
        },

        on_error: function(e) {
            alert("Error: " + e.error);
            self.close();
        },

        on_success: function(data) {
            self.controller.table.setData([]);
            var height = 0;
            // loop through collection and add them to table
            for (var i = 0; i < data.length; i++) {
                height += self.addRow(data[i]);
            }

            self.controller.table.height = height;
            self.controller.activity.hide();
        }
    });
};

// ----------------------------------------------------------------------------
module.exports = TableBase;
