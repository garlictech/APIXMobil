function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "set_time";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.set_date = Ti.UI.createWindow({
        navBarHidden: "true",
        tabBarHidden: "true",
        backgroundColor: "#fff",
        color: "#000",
        id: "set_date"
    });
    $.__views.set_date && $.addTopLevelView($.__views.set_date);
    $.__views.__alloyId7 = Ti.UI.createPicker({
        selectionIndicator: "true",
        useSpinner: "true",
        type: Ti.UI.PICKER_TYPE_DATE_AND_TIME,
        top: "150",
        height: "200",
        id: "__alloyId7"
    });
    $.__views.set_date.add($.__views.__alloyId7);
    $.__views.__alloyId9 = Ti.UI.createPickerColumn({
        width: "200",
        id: "__alloyId9"
    });
    $.__views.__alloyId7.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createPickerColumn({
        id: "__alloyId10"
    });
    $.__views.__alloyId7.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createLabel({
        backgroundColor: "#e9bf3c",
        height: 40,
        width: "100%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "24"
        },
        color: "#000",
        text: "settings",
        id: "__alloyId11"
    });
    $.__views.set_date.add($.__views.__alloyId11);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.set_date.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;