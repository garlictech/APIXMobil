function Controller() {
    function close() {
        Ti.App.removeEventListener("SettingsChanged", listener);
        $.window.close();
    }
    function doReset() {
        Config.resetFactorySettings();
        common.doLogout();
        close();
    }
    function goBack() {
        close();
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
            fontSize: "24"
        },
        color: "#000",
        top: "20",
        text_id: "settings",
        id: "top_label"
    });
    $.__views.window.add($.__views.top_label);
    $.__views.server_name = Alloy.createController("setting", {
        top: 120,
        title_id: "server_name",
        propertyName: "ServerName",
        id: "server_name",
        __parentSymbol: $.__views.window
    });
    $.__views.server_name.setParent($.__views.window);
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
        left: 5,
        right: 5,
        top: 25,
        height: 30,
        width: 60,
        title: L("back"),
        id: "back_button"
    });
    $.__views.window.add($.__views.back_button);
    goBack ? $.__views.back_button.addEventListener("click", goBack) : __defers["$.__views.back_button!click!goBack"] = true;
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
    var Config = require("config");
    var utils = require("utils");
    var common = require("settings_common");
    var listener = utils.registerTextUpdates($.reset_button, $.server_name, $.top_label);
    $.server_name.addEventListener("click", function() {
        var initial = Ti.App.Properties.getString("ServerName");
        common.addSettingChangeEvent("ServerName", "text_input", initial, function(n, v) {
            Ti.App.Properties.setString(n, v);
        });
    });
    __defers["$.__views.back_button!click!goBack"] && $.__views.back_button.addEventListener("click", goBack);
    __defers["$.__views.reset_button!click!doReset"] && $.__views.reset_button.addEventListener("click", doReset);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;