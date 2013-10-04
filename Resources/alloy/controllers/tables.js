function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tables";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.__alloyId24 = Alloy.createController("table_root", {
        id: "__alloyId24"
    });
    $.__views.tables = Ti.UI.createTab({
        window: $.__views.__alloyId24.getViewEx({
            recurse: true
        }),
        id: "tables"
    });
    $.__views.tables && $.addTopLevelView($.__views.tables);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;