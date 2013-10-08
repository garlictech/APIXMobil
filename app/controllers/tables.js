// ----------------------------------------------------------------------------
// Module initialization
var WindowController = require("window_controller");
var TableManager = require("table_manager").manager;

// ----------------------------------------------------------------------------
function Tables(args, uiElements) {
    WindowController.call(this, args, uiElements, $.window, $);

    if ( ! TableManager.isRootTable()) {
        this.addBackToTablesButton();
    }

    this.updateTable();
}

// Inherits from WindowController...
Tables.prototype = Object.create(WindowController.prototype);

Tables.prototype.addRow = function(TSSClass, model) {
    var style = this.args.controller.createStyle({
        classes: TSSClass,
        window: this.args.window
    });

    for (var key in model) { style[key] = model[key]; }
    var row = Alloy.createController("icon_row", style).getView();
    $.table.appendRow(row);
};

// ----------------------------------------------------------------------------
// Add back button: go back to the previous window, meaning we close this one.
// We should not close it when we are at the root table.
Tables.prototype.addBackButton = function() {
    WindowController.prototype.addBackButton.call(this, {click: goBack});
};

Tables.prototype.updateTable = function() {
    var collection = eval("Alloy.Globals." + this.args.collectionName);
    var self = this;
    $.table.setData([]);

    // loop through collection and add them to table
    for (var i = 0; i < collection.length; i++) {
        self.addRow('icon_row', collection[i]);
    }
};

// ----------------------------------------------------------------------------
// Create the actual Tables object, and bind it to this particular
// controller
var tables = new Tables(arguments, [$.top_label]);

function goHome(e) {
    alert ("GoHome");
}

function goBack() {
    TableManager.closeTable($.window);
}

// alert("0 " + Alloy.Collections.root_table.models[0].toJSON().text_id);
// alert("1 " + this.args.collectionName);
// alert("2 " + collection.models[0].toJSON().text_id);
