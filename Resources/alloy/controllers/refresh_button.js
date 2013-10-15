function Controller() {
    function RefreshButton() {}
    function onClick(e) {
        button.onClick(e);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "refresh_button";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.button = Ti.UI.createButton({
        backgroundColor: "#e9bf3c",
        borderColor: "#e9bf3c",
        color: "black",
        borderWidth: 1,
        style: Ti.UI.iPhone.DONE,
        borderRadius: 5,
        backgroundImage: "images/icons/MD-repeat.png",
        font: {
            fontWeight: "bold",
            fontSize: "16"
        },
        left: 45,
        bottom: 5,
        id: "button"
    });
    $.__views.button && $.addTopLevelView($.__views.button);
    onClick ? $.__views.button.addEventListener("click", onClick) : __defers["$.__views.button!click!onClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    RefreshButton.prototype = new (require("controller"))(arguments[0], arguments[0].window);
    RefreshButton.prototype.onClick = function() {
        this.args.refresher();
    };
    var button = new RefreshButton();
    __defers["$.__views.button!click!onClick"] && $.__views.button.addEventListener("click", onClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;