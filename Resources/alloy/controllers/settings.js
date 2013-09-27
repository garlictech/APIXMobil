function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "settings";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.settings = Ti.UI.createTabGroup({
        id: "settings"
    });
    $.__views.win1 = Ti.UI.createWindow({
        navBarHidden: "true",
        tabBarHidden: "true",
        id: "win1",
        title: "Tab 1"
    });
    $.__views.label1 = Ti.UI.createLabel({
        text: "I am Window 1",
        id: "label1",
        color: "#999"
    });
    $.__views.win1.add($.__views.label1);
    $.__views.__alloyId12 = Ti.UI.createTab({
        window: $.__views.win1,
        icon: Ti.UI.iPhone.SystemIcon.SEARCH,
        title: "Tab 1",
        id: "__alloyId12"
    });
    $.__views.settings.addTab($.__views.__alloyId12);
    $.__views.settings && $.addTopLevelView($.__views.settings);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.settings.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;