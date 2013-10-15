function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "info_button";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.info_button = Ti.UI.createView({
        id: "info_button"
    });
    $.__views.info_button && $.addTopLevelView($.__views.info_button);
    $.__views.__alloyId4 = Ti.UI.createButton({
        backgroundColor: "#e9bf3c",
        borderColor: "#e9bf3c",
        color: "black",
        borderWidth: 1,
        style: Ti.UI.iPhone.DONE,
        borderRadius: 5,
        backgroundImage: "images/icons/info.png",
        font: {
            fontWeight: "bold",
            fontSize: "16"
        },
        right: 5,
        bottom: 5,
        id: "__alloyId4"
    });
    $.__views.info_button.add($.__views.__alloyId4);
    try {
        $.__views.__alloyId4.addEventListener("click", eventHandlers.goToInfo);
    } catch (e) {
        __defers["$.__views.__alloyId4!click!eventHandlers.goToInfo"] = true;
    }
    exports.destroy = function() {};
    _.extend($, $.__views);
    var eventHandlers = require("eventHandlers");
    __defers["$.__views.__alloyId4!click!eventHandlers.goToInfo"] && $.__views.__alloyId4.addEventListener("click", eventHandlers.goToInfo);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;