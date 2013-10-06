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
        type: Ti.UI.PICKER_TYPE_DATE_AND_TIME,
        top: "150",
        height: "200",
        id: "set_time"
    });
    $.__views.__alloyId15 = Ti.UI.createPickerColumn({
        width: "200",
        id: "__alloyId15"
    });
    $.__views.set_time.add($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createPickerColumn({
        id: "__alloyId16"
    });
    $.__views.set_time.add($.__views.__alloyId16);
    $.__views.set_time && $.addTopLevelView($.__views.set_time);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;