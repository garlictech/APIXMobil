function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "cover_window";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.cover_window = Ti.UI.createWindow({
        width: "100%",
        height: "100%",
        backgroundColor: "transparent",
        navBarHidden: "true",
        tabBarHidden: "true",
        id: "cover_window"
    });
    $.__views.cover_window && $.addTopLevelView($.__views.cover_window);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;