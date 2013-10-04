function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "home_button";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.home_button = Ti.UI.createButton({
        backgroundColor: "#e9bf3c",
        borderColor: "#e9bf3c",
        color: "black",
        borderWidth: 1,
        style: Ti.UI.iPhone.DONE,
        borderRadius: 5,
        backgroundImage: "images/icons/home.png",
        font: {
            fontWeight: "bold",
            fontSize: "16"
        },
        left: 5,
        bottom: 5,
        id: "home_button"
    });
    $.__views.home_button && $.addTopLevelView($.__views.home_button);
    try {
        $.__views.home_button.addEventListener("click", eventHandlers.goToHome);
    } catch (e) {
        __defers["$.__views.home_button!click!eventHandlers.goToHome"] = true;
    }
    exports.destroy = function() {};
    _.extend($, $.__views);
    var eventHandlers = require("eventHandlers");
    __defers["$.__views.home_button!click!eventHandlers.goToHome"] && $.__views.home_button.addEventListener("click", eventHandlers.goToHome);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;