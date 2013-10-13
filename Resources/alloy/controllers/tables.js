function Controller() {
    function Tables(args, uiElements) {
        WindowController.call(this, args, uiElements, $.window, $);
        "undefined" == typeof this.args.tableLocator && (this.args.tableLocator = new (require("table_locator").TableLocator)("tables", "root_table", "", Alloy.Globals.root_table.tableNameId));
        $.top_label.text_id = this.getCollection().tableNameId;
        this.addTablePath();
        if (!this.isRootTable()) {
            this.addBackToTablesButton();
            this.addRefreshButton();
            this.addGoHomeListener();
        }
        this.addOnTimeButton();
        this.updateTable();
        this.updateUi();
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
        backgroundColor: "black",
        borderColor: "#e9bf3c",
        borderRadius: 5,
        separatorColor: "black",
        top: 130,
        left: 3,
        right: 3,
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
    exports.destroy = function() {};
    _.extend($, $.__views);
    var WindowController = require("window_controller");
    var TableManager = require("table_manager").manager;
    var args = arguments;
    Tables.prototype = Object.create(WindowController.prototype);
    Tables.prototype.addRow = function(model) {
        var controllerName = "undefined" != typeof model.image ? "icon_row" : "text_row";
        var style = this.args.controller.createStyle({
            classes: "row",
            window: this.args.window
        });
        for (var key in model) style[key] = model[key];
        var row = Alloy.createController(controllerName, style).getView();
        $.table.appendRow(row);
        return row.height;
    };
    Tables.prototype.addGoHomeListener = function() {
        this.goHomeListener = function() {
            Ti.API.trace("Handling GoHome...");
            $.window.close();
        };
        Ti.App.addEventListener("GoHome", this.goHomeListener);
    };
    Tables.prototype.isRootTable = function() {
        return 1 == Alloy.Globals.TablePath.length;
    };
    Tables.prototype.addTablePath = function() {
        "undefined" == typeof Alloy.Globals.TablePath && (Alloy.Globals.TablePath = []);
        Alloy.Globals.TablePath.push(this.args.tableLocator);
        this.addElement("table_path", "table_path", {
            path: Alloy.Globals.TablePath
        });
    };
    Tables.prototype.addBackButton = function() {
        WindowController.prototype.addBackButton.call(this, {
            click: goBack
        });
    };
    Tables.prototype.addRefreshButton = function() {
        var self = this;
        this.addElement("refresh_button", "button", {
            refresher: function() {
                self.getCollection().refresh();
                self.updateTable();
            }
        });
    };
    Tables.prototype.addOnTimeButton = function() {
        var ontimeButton = Alloy.createController("ontime_button", {
            actualTableLocator: this.args.tableLocator,
            window: this.args.window
        }).getView();
        this.args.window.add(ontimeButton);
    };
    Tables.prototype.updateTable = function() {
        var collection = this.getCollection();
        var self = this;
        $.table.setData([]);
        var height = 0;
        for (var i = 0; collection.data.length > i; i++) height += self.addRow(collection.data[i]);
        $.table.height = height;
        this.updateUi();
    };
    Tables.prototype.close = function() {
        Alloy.Globals.TablePath.pop();
        Ti.App.removeEventListener("GoHome", this.goHomeListener);
        WindowController.prototype.close.call(this);
    };
    Tables.prototype.getCollection = function() {
        return eval("Alloy.Globals." + this.args.tableLocator.collectionName);
    };
    var tables = new Tables(arguments, [ $.top_label ]);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;