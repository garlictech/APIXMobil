function Controller() {
    function BackButton() {}
    function onClick(e) {
        button.onClick(e);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "back_button";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
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
        title_id: "back",
        id: "back_button"
    });
    $.__views.back_button && $.addTopLevelView($.__views.back_button);
    onClick ? $.__views.back_button.addEventListener("click", onClick) : __defers["$.__views.back_button!click!onClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    BackButton.prototype = new (require("controller"))(arguments, [ $.back_button ]);
    BackButton.prototype.onClick = function() {
        this.args.click.call(void 0);
    };
    var button = new BackButton();
    __defers["$.__views.back_button!click!onClick"] && $.__views.back_button.addEventListener("click", onClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;