function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "details";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.details = Ti.UI.createTabGroup({
        id: "details"
    });
    $.__views.win1 = Ti.UI.createWindow({
        navBarHidden: "true",
        tabBarHidden: "true",
        id: "win1",
        title: "Tab 1"
    });
    $.__views.title = Ti.UI.createLabel({
        id: "title"
    });
    $.__views.win1.add($.__views.title);
    $.__views.value = Ti.UI.createLabel({
        id: "value"
    });
    $.__views.win1.add($.__views.value);
    $.__views.__alloyId0 = Ti.UI.createTab({
        window: $.__views.win1,
        icon: Ti.UI.iPhone.SystemIcon.SEARCH,
        title: "Tab 1",
        id: "__alloyId0"
    });
    $.__views.details.addTab($.__views.__alloyId0);
    $.__views.details && $.addTopLevelView($.__views.details);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.title.text = args.title || "Undefined";
    $.value.text = args.value || "Undefined";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;