function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "info";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId4 = Ti.UI.createWindow({
        navBarHidden: "true",
        tabBarHidden: "true",
        id: "__alloyId4"
    });
    $.__views.top_label = Ti.UI.createLabel({
        backgroundColor: "#e9bf3c",
        borderRadius: 5,
        height: 40,
        width: "100%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "24"
        },
        color: "#000",
        top: "20",
        text: L("help"),
        id: "top_label"
    });
    $.__views.__alloyId4.add($.__views.top_label);
    $.__views.scrollview = Ti.UI.createScrollView({
        top: "60",
        id: "scrollview"
    });
    $.__views.__alloyId4.add($.__views.scrollview);
    $.__views.content = Ti.UI.createLabel({
        text: L("detailed_help"),
        color: "#dddddd",
        id: "content"
    });
    $.__views.scrollview.add($.__views.content);
    $.__views.back_button = Ti.UI.createButton({
        backgroundColor: "#828282",
        borderColor: "#e9bf3c",
        color: "black",
        borderWidth: 1,
        style: Ti.UI.iPhone.DONE,
        borderRadius: 5,
        backgroundImage: "none",
        font: {
            fontWeight: "bold",
            fontSize: "16"
        },
        top: 25,
        left: 5,
        height: 30,
        width: 60,
        title: L("back"),
        id: "back_button"
    });
    $.__views.__alloyId4.add($.__views.back_button);
    try {
        $.__views.back_button.addEventListener("click", eventHandlers.goToTables);
    } catch (e) {
        __defers["$.__views.back_button!click!eventHandlers.goToTables"] = true;
    }
    $.__views.info = Ti.UI.createTab({
        window: $.__views.__alloyId4,
        id: "info"
    });
    $.__views.info && $.addTopLevelView($.__views.info);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var eventHandlers = require("eventHandlers");
    __defers["$.__views.back_button!click!eventHandlers.goToTables"] && $.__views.back_button.addEventListener("click", eventHandlers.goToTables);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;