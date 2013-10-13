function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createTabGroup({
        id: "index"
    });
    $.__views.__alloyId1 = Alloy.createController("login", {
        id: "__alloyId1"
    });
    $.__views.index.addTab($.__views.__alloyId1.getViewEx({
        recurse: true
    }));
    $.__views.tables = Alloy.createController("tables_tab", {
        id: "tables"
    });
    $.__views.index.addTab($.__views.tables.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId2 = Alloy.createController("settings", {
        id: "__alloyId2"
    });
    $.__views.index.addTab($.__views.__alloyId2.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId3 = Alloy.createController("info", {
        id: "__alloyId3"
    });
    $.__views.index.addTab($.__views.__alloyId3.getViewEx({
        recurse: true
    }));
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Config = require("config").config;
    Alloy.Globals.tabgroup = $.index;
    Alloy.Globals.LOGIN_TAB = 0;
    Alloy.Globals.TABLES_TAB = 1;
    Alloy.Globals.SETTINGS_TAB = 2;
    Alloy.Globals.INFO_TAB = 3;
    var activeTab = Config.isLoggedIn() ? Alloy.Globals.TABLES_TAB : Alloy.Globals.LOGIN_TAB;
    $.index.setActiveTab(activeTab);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;