function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "set_time";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.set_time = Ti.UI.createPicker({
        selectionIndicator: "true",
        useSpinner: "true",
        top: "150",
        height: "200",
        id: "set_time"
    });
    $.__views.__alloyId6 = Ti.UI.createPickerColumn({
        width: "200",
        id: "__alloyId6"
    });
    $.__views.set_time.add($.__views.__alloyId6);
    $.__views.__alloyId7 = Ti.UI.createPickerColumn({
        id: "__alloyId7"
    });
    $.__views.set_time.add($.__views.__alloyId7);
    $.__views.set_time && $.addTopLevelView($.__views.set_time);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;