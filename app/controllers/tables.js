// ----------------------------------------------------------------------------
// Module initialization
var WindowController = require("window_controller");
var TableManager = require("table_manager").manager;
var args = arguments;

// ----------------------------------------------------------------------------
function Tables(args, uiElements) {
    WindowController.call(this, args, uiElements, $.window, $);

    // If there is no tableLocator defined, it means we are at root table. So, create one...
    if (typeof this.args.tableLocator === 'undefined') {
        this.args.tableLocator = new (require("table_locator").TableLocator)(
            "tables", "root_table", "", Alloy.Globals.root_table.tableNameId);
    }

    $.top_label.text_id = this.getCollection().tableNameId;
    // Order matters! OK, to be refacrored here. Root table must be a different story.
    this.addTablePath();

    if ( ! this.isRootTable()) {
        this.addBackToTablesButton();
        this.addRefreshButton();
        this.addGoHomeListener();
    }

    this.addOnTimeButton();
    this.updateTable();
    // Window title must reflect the table type it
    // Table is ready, update everything...
    this.updateUi();
}

// ----------------------------------------------------------------------------
// Inherits from WindowController...
Tables.prototype = Object.create(WindowController.prototype);

// ----------------------------------------------------------------------------
Tables.prototype.addRow = function(model) {
    var controllerName = typeof model.image !== 'undefined' ?
        "icon_row" : "text_row";

    var style = this.args.controller.createStyle({
        classes: "row",
        window: this.args.window
    });

    for (var key in model) { style[key] = model[key]; }
    var row = Alloy.createController(controllerName, style).getView();
    $.table.appendRow(row);
    return row.height;
};

// ----------------------------------------------------------------------------
Tables.prototype.addGoHomeListener = function() {
    var self = this;

    this.goHomeListener = function(e) {
        Ti.API.trace("Handling GoHome...");
        $.window.close();
    };

    Ti.App.addEventListener("GoHome", this.goHomeListener);
};

// ----------------------------------------------------------------------------
Tables.prototype.isRootTable = function() {
    return Alloy.Globals.TablePath.length == 1;
};

// ----------------------------------------------------------------------------
Tables.prototype.addTablePath = function() {
    if (typeof Alloy.Globals.TablePath === 'undefined' ) {
        Alloy.Globals.TablePath = [];
    }

    Alloy.Globals.TablePath.push(this.args.tableLocator);

    this.addElement("table_path", "table_path", {
        path: Alloy.Globals.TablePath
    });
};

// ----------------------------------------------------------------------------
// Add back button: go back to the previous window, meaning we close this one.
// We should not close it when we are at the root table.
Tables.prototype.addBackButton = function() {
    WindowController.prototype.addBackButton.call(this, {click: goBack});
};

// ----------------------------------------------------------------------------
Tables.prototype.addRefreshButton = function() {
    var self = this;

    this.addElement("refresh_button", "button", {
        refresher: function() {
            self.getCollection().refresh();
            self.updateTable();
        }
    });
};

// ----------------------------------------------------------------------------
// Add ontime button: handles "bookmarks"
Tables.prototype.addOnTimeButton = function() {
    var ontimeButton = Alloy.createController("ontime_button", {
        actualTableLocator: this.args.tableLocator,
        window: this.args.window
    }).getView();

    this.args.window.add(ontimeButton);
};

// ----------------------------------------------------------------------------
Tables.prototype.updateTable = function() {
    var collection = this.getCollection();
    var self = this;
    $.table.setData([]);
    var height = 0;

    // loop through collection and add them to table
    for (var i = 0; i < collection.data.length; i++) {
        height += self.addRow(collection.data[i]);
    }

    $.table.height = height;
    this.updateUi();
};

// ----------------------------------------------------------------------------
Tables.prototype.close = function() {
    Alloy.Globals.TablePath.pop();
    Ti.App.removeEventListener("GoHome", this.goHomeListener);
    WindowController.prototype.close.call(this);
};

// ----------------------------------------------------------------------------
Tables.prototype.getCollection = function() {
    return eval("Alloy.Globals." + this.args.tableLocator.collectionName);
};

// ----------------------------------------------------------------------------
// Create the actual Tables object, and bind it to this particular
// controller
var tables = new Tables(arguments, [$.top_label]);

// ----------------------------------------------------------------------------
function goBack() {
    TableManager.closeTable($.window);
}
