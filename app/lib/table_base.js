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

    var window = Utils.undefined(args.controller.root_table_window) ? args.controller.window : args.controller.root_table_window;

    WindowController.call(this, {}, args.controller, uiElements, window);
    this.collection = args.collection;
    // In this case, we do not register all teh individual rows for
    // locale change. We register the whole table, for performance reasons.
    var self = this;

    this.window.addEventListener("focus", function() {
        self.addSettingsChangedHandler(function() {
            self.updateTable();
            self.addTablePath();
        });
    });

    // Configure the UI
    this.addOnTimeButton();
    this.addRefreshButton();
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

    this.collection.getData({
        on_error: function(e) {
            alert("Error: " + e.error);
            if (Utils.undefined(self.controller.root_table_window)) {
                self.close();
            } else {
                Alloy.Globals.tabgroup.setActiveTab(Alloy.Globals.LOGIN_TAB);
                // Clear all the downloaded collections
                Alloy.Globals.collections = {};
            }
        },

        on_success: function(data) {
            self.controller.table.setData([]);
            var height = 0;
            // loop through collection and add them to table
            var set = data[self.collection.setIndex];

            if (Utils.undefined(set)) {
                self.controller.top_label.text_id = "no_data_available";
            } else {
                self.controller.top_label.text_id = self.collection.title_id;

                for (var i = 0; i < set.length; i++) {
                    height += self.addRow(set[i]);
                }

                self.controller.table.height = height;
            }
            // We do not fire settings changed, because it slows things down
            // at this point. So, we set text content manually.
            self.controller.top_label.text =
                Alloy.Globals.L(self.controller.top_label.text_id);
            self.controller.activity.hide();
        }
    });
};

// ----------------------------------------------------------------------------
TableBase.prototype.addRefreshButton = function() {
    var self = this;

    this.addElement("refresh_button", {refresher: function() {
        // Reopen the window without animation
        self.collection.reset();
        self.updateTable();
    }});
};

// ----------------------------------------------------------------------------
module.exports = TableBase;
