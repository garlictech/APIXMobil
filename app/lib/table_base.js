// ----------------------------------------------------------------------------
// Module responsibile for displaying table.

// Module initialization
var WindowController = require("window_controller");
var TableManager = require("table_manager").manager;
var Utils=require("utils");
var DataTableManager = require("data_table").Manager;

// ----------------------------------------------------------------------------
// Expected class arguments:
// - args.controller: The controller creating this view. It must contain a/
// window, the value of that window "id" attribute must be "window".
// - args.collection: The collection that the table displays.
// - args.uiElements: The UI elements to be registered as reveivers of
// SettingsChanged event.
function TableBase(args, dataTableManager) {
    var uiElements = [args.controller.top_label, args.controller.activity];

    if ( ! Utils.undefined(args.uiElements)) {
        uiElements = uiElements.concat(args.uiElements);
    }

    var window = Utils.undefined(args.controller.root_table_window) ? args.controller.window : args.controller.root_table_window;

    WindowController.call(this, {}, args.controller, uiElements, window);
    this.collection = args.collection;

    this.dataTableManager = Utils.undefined(dataTableManager) ?
        new DataTableManager(window, args.controller.scroll_view) :
        dataTableManager;
    // In this case, we do not register all the individual rows for
    // locale change. We register the whole table, for performance reasons.
    var self = this;

    this.addSettingsChangedHandler(function() {
        self.updateTable();
        self.addTablePath();
    });

    // When windows gets focu,s it checks if the collection to be displayed
    // exists. If it does not, retrieve it.
    this.window.addEventListener("focus", function() {
        if ( ! Utils.collectionExists(self.collection.id())) {
            self.reFetchData();
        }
    });

    // Configure the UI
    this.addOnTimeButton();
    this.addRefreshButton();
}

// ----------------------------------------------------------------------------
// Inherits from WindowController...
TableBase.prototype = Object.create(WindowController.prototype);

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
    this.controller.activity.show();
    self.dataTableManager.deleteAllTables();

    this.collection.getData({
        on_error: function(e) {
            alert("Error: " + e.error);
            self.close();
        },

        on_success: function(data) {
            var set = data[self.collection.setIndex];

            if (Utils.undefined(set)) {
                self.controller.top_label.text_id = "no_data_available";
            } else {
                self.controller.top_label.text_id = self.collection.title_id;
                self.dataTableManager.createTables(set);
            }

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
        self.reFetchData();
    }});
};

// ----------------------------------------------------------------------------
TableBase.prototype.reFetchData = function() {
    this.collection.reset();
    this.updateTable();
};

// ----------------------------------------------------------------------------
module.exports = TableBase;
