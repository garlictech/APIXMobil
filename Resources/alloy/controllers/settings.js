function Controller() {
    function Settings(args, uiElements) {
        WindowController.call(this, args, uiElements, $.window, $);
        this.addElement("query_start_date");
        this.addElement("query_end_date");
        this.addElement("locale");
        this.addElement("default_query_interval");
        this.addElement("metric_system");
        this.addBackToTablesButton();
    }
    function doAdvancedSettings() {
        Alloy.createController("advanced_settings").getView().open();
    }
    function doLogout() {
        require("utils").doLogout();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "settings";
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
        text_id: "settings",
        id: "top_label"
    });
    $.__views.window.add($.__views.top_label);
    $.__views.advanced_settings_button = Ti.UI.createButton({
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
        bottom: 130,
        title_id: "advanced_settings",
        id: "advanced_settings_button"
    });
    $.__views.window.add($.__views.advanced_settings_button);
    doAdvancedSettings ? $.__views.advanced_settings_button.addEventListener("click", doAdvancedSettings) : __defers["$.__views.advanced_settings_button!click!doAdvancedSettings"] = true;
    $.__views.logout_button = Ti.UI.createButton({
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
        bottom: 80,
        title_id: "logout",
        id: "logout_button"
    });
    $.__views.window.add($.__views.logout_button);
    doLogout ? $.__views.logout_button.addEventListener("click", doLogout) : __defers["$.__views.logout_button!click!doLogout"] = true;
    $.__views.settings = Ti.UI.createTab({
        window: $.__views.window,
        id: "settings"
    });
    $.__views.settings && $.addTopLevelView($.__views.settings);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var WindowController = require("window_controller");
    Settings.prototype = Object.create(WindowController.prototype);
    Settings.prototype.addElement = function(TSSClass) {
        WindowController.prototype.addElement.call(this, "setting", TSSClass);
    };
    new Settings(arguments, [ $.logout_button, $.top_label, $.advanced_settings_button ]);
    __defers["$.__views.advanced_settings_button!click!doAdvancedSettings"] && $.__views.advanced_settings_button.addEventListener("click", doAdvancedSettings);
    __defers["$.__views.logout_button!click!doLogout"] && $.__views.logout_button.addEventListener("click", doLogout);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;