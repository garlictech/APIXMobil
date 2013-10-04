function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "settings_button";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.settings_button = Ti.UI.createButton({
        backgroundColor: "#e9bf3c",
        borderColor: "#e9bf3c",
        color: "black",
        borderWidth: 1,
        style: Ti.UI.iPhone.DONE,
        borderRadius: 5,
        backgroundImage: "images/icons/settings.png",
        font: {
            fontWeight: "bold",
            fontSize: "16"
        },
        left: 45,
        bottom: 5,
        id: "settings_button"
    });
    $.__views.settings_button && $.addTopLevelView($.__views.settings_button);
    try {
        $.__views.settings_button.addEventListener("click", eventHandlers.goToSettings);
    } catch (e) {
        __defers["$.__views.settings_button!click!eventHandlers.goToSettings"] = true;
    }
    exports.destroy = function() {};
    _.extend($, $.__views);
    var eventHandlers = require("eventHandlers");
    __defers["$.__views.settings_button!click!eventHandlers.goToSettings"] && $.__views.settings_button.addEventListener("click", eventHandlers.goToSettings);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;