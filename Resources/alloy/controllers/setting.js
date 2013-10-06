function Controller() {
    function updateValue() {
        $.setting_value.text = args.propertyName ? Config.getStringOfSetting(args.propertyName) : "";
    }
    function onClick(e) {
        handlers.click(e);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "setting";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.setting = Ti.UI.createView({
        id: "setting"
    });
    $.__views.setting && $.addTopLevelView($.__views.setting);
    onClick ? $.__views.setting.addEventListener("click", onClick) : __defers["$.__views.setting!click!onClick"] = true;
    $.__views.title_background = Ti.UI.createLabel({
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#e9bf3c",
        height: 26,
        top: 0,
        left: 5,
        right: 5,
        id: "title_background"
    });
    $.__views.setting.add($.__views.title_background);
    $.__views.title_label = Ti.UI.createLabel({
        color: "#e9bf3c",
        borderWidth: 0,
        font: {
            fontWeight: "bold",
            fontSize: "14"
        },
        height: 24,
        top: 0,
        left: 10,
        id: "title_label"
    });
    $.__views.setting.add($.__views.title_label);
    $.__views.setting_value = Ti.UI.createLabel({
        height: 20,
        top: 27,
        width: "100%",
        color: "#dddddd",
        font: {
            fontWeight: "normal",
            fontSize: "12"
        },
        textAlign: "right",
        borderWidth: 1,
        right: 10,
        id: "setting_value"
    });
    $.__views.setting.add($.__views.setting_value);
    $.__views.change_button = Ti.UI.createButton({
        backgroundColor: "#828282",
        borderColor: "#e9bf3c",
        color: "black",
        borderWidth: 1,
        style: Ti.UI.iPhone.DONE,
        borderRadius: 5,
        backgroundImage: "images/icons/edit.png",
        font: {
            fontWeight: "bold",
            fontSize: "16"
        },
        top: 3,
        right: 10,
        height: 20,
        width: 20,
        id: "change_button"
    });
    $.__views.setting.add($.__views.change_button);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Config = require("config");
    var utils = require("utils");
    var args = arguments[0] || {};
    $.title_label.text_id = args.title_id;
    utils.registerTextUpdates($.title_label);
    var handlers = {};
    handlers.click = function() {};
    exports.addEventListener = function(listenerName, listenerFunction) {
        switch (listenerName) {
          case "click":
            handlers.click = listenerFunction;
        }
    };
    $.setting.top = args.top || 0;
    updateValue();
    Ti.App.addEventListener("SettingsChanged", function() {
        updateValue();
    });
    __defers["$.__views.setting!click!onClick"] && $.__views.setting.addEventListener("click", onClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;