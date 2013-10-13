function Controller() {
    function AdvancedSettings(args, uiElements) {
        WindowController.call(this, args, uiElements, $.window, $);
        this.addElement("server_name");
        this.addBackButton({
            click: goBack
        });
    }
    function doReset() {
        advancedSettings.doReset();
    }
    function goBack() {
        advancedSettings.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "advanced_settings";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.window = Ti.UI.createWindow({
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        navBarHidden: "true",
        tabBarHidden: "true",
        id: "window"
    });
    $.__views.window && $.addTopLevelView($.__views.window);
    $.__views.top_label = Ti.UI.createLabel({
        backgroundColor: "#e9bf3c",
        borderRadius: 5,
        height: 40,
        width: "100%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "20"
        },
        color: "#000",
        top: "20",
        text_id: "advanced_settings",
        id: "top_label"
    });
    $.__views.window.add($.__views.top_label);
    $.__views.reset_button = Ti.UI.createButton({
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
        left: 5,
        right: 5,
        bottom: 100,
        title_id: "reset_factory",
        id: "reset_button"
    });
    $.__views.window.add($.__views.reset_button);
    doReset ? $.__views.reset_button.addEventListener("click", doReset) : __defers["$.__views.reset_button!click!doReset"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var Config = require("config").config;
    var WindowController = require("window_controller");
    AdvancedSettings.prototype = Object.create(WindowController.prototype);
    AdvancedSettings.prototype.addElement = function(TSSClass) {
        WindowController.prototype.addElement.call(this, "setting", TSSClass);
    };
    AdvancedSettings.prototype.doReset = function() {
        Config.resetFactorySettings();
        require("utils").doLogout();
        this.close();
    };
    var advancedSettings = new AdvancedSettings(arguments, [ $.reset_button, $.top_label ]);
    __defers["$.__views.reset_button!click!doReset"] && $.__views.reset_button.addEventListener("click", doReset);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;