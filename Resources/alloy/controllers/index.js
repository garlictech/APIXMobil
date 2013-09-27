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
    $.__views.__alloyId2 = Alloy.createController("login", {
        id: "__alloyId2"
    });
    $.__views.index.addTab($.__views.__alloyId2.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId3 = Alloy.createController("tables", {
        id: "__alloyId3"
    });
    $.__views.index.addTab($.__views.__alloyId3.getViewEx({
        recurse: true
    }));
    $.__views.__alloyId4 = Alloy.createController("info", {
        id: "__alloyId4"
    });
    $.__views.index.addTab($.__views.__alloyId4.getViewEx({
        recurse: true
    }));
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {};
    _.extend($, $.__views);
    if ("test" == Ti.App.deployType) {
        require("specs/test_config");
        require("specs/test_webServiceClient");
        require("behave").run("this");
    }
    require("config");
    Alloy.Globals.tabgroup = $.index;
    Alloy.Globals.LOGIN_TAB = 0;
    Alloy.Globals.TABLES_TAB = 1;
    Alloy.Globals.INFO_TAB = 2;
    $.index.setActiveTab(Alloy.Globals.LOGIN_TAB);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;