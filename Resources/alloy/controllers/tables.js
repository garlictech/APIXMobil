function Controller() {
    function Tables(args, uiElements) {
        WindowController.call(this, args, uiElements, $.window, $);
        TableManager.isRootTable() || this.addBackToTablesButton();
        this.updateTable();
    }
    function goHome() {
        alert("GoHome");
    }
    function goBack() {
        TableManager.closeTable($.window);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tables";
    var __parentSymbol = arguments[0] ? arguments[0]["__parentSymbol"] : null;
    var $model = arguments[0] ? arguments[0]["$model"] : null;
    var __itemTemplate = arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.window = Ti.UI.createWindow({
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        navBarHidden: "true",
        tabBarHidden: "true",
        id: "window"
    });
    $.__views.window && $.addTopLevelView($.__views.window);
    $.__views.top_label = Ti.UI.createLabel({
        backgroundColor: "#e9bf3c",
        borderRadius: 5,
        height: 40,
        width: "100%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "20"
        },
        color: "#000",
        top: "20",
        text_id: "data",
        id: "top_label"
    });
    $.__views.window.add($.__views.top_label);
    $.__views.table = Ti.UI.createTableView({
        top: 100,
        backgroundColor: "black",
        borderColor: "#e9bf3c",
        borderRadius: 5,
        separatorColor: "black",
        left: 3,
        right: 3,
        height: "90",
        id: "table"
    });
    $.__views.window.add($.__views.table);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        backgroundColor: "#e9bf3c",
        borderRadius: 5,
        height: 40,
        width: "100%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "20"
        },
        color: "#000",
        bottom: "0",
        id: "__alloyId8"
    });
    $.__views.window.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Alloy.createController("info_button", {
        id: "__alloyId9",
        __parentSymbol: $.__views.window
    });
    $.__views.__alloyId9.setParent($.__views.window);
    $.__views.__alloyId10 = Alloy.createController("settings_button", {
        id: "__alloyId10",
        __parentSymbol: $.__views.window
    });
    $.__views.__alloyId10.setParent($.__views.window);
    $.__views.__alloyId11 = Alloy.createController("home_button", {
        id: "__alloyId11",
        __parentSymbol: $.__views.window
    });
    $.__views.__alloyId11.setParent($.__views.window);
    $.__views.__alloyId12 = Alloy.createController("set_bookmark_button", {
        id: "__alloyId12",
        __parentSymbol: $.__views.window
    });
    $.__views.__alloyId12.setParent($.__views.window);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var WindowController = require("window_controller");
    var TableManager = require("table_manager").manager;
    Tables.prototype = Object.create(WindowController.prototype);
    Tables.prototype.addRow = function(TSSClass, model) {
        var style = this.args.controller.createStyle({
            classes: TSSClass,
            window: this.args.window
        });
        for (var key in model) style[key] = model[key];
        var row = Alloy.createController("icon_row", style).getView();
        $.table.appendRow(row);
    };
    Tables.prototype.addBackButton = function() {
        WindowController.prototype.addBackButton.call(this, {
            click: goBack
        });
    };
    Tables.prototype.updateTable = function() {
        var collection = eval("Alloy.Globals." + this.args.collectionName);
        var self = this;
        $.table.setData([]);
        for (var i = 0; collection.length > i; i++) self.addRow("icon_row", collection[i]);
    };
    var tables = new Tables(arguments, [ $.top_label ]);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;