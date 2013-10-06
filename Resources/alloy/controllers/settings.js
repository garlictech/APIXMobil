function Controller() {
    function doAdvancedSettings() {
        var controller = Alloy.createController("advanced_settings").getView();
        controller.open();
    }
    function addQueryDateChangeEvent(name) {
        var initial = Config.getDataProperty(name);
        common.addSettingChangeEvent(name, "date_picker", initial, function(n, v) {
            Config.setQueryDate(n, v);
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "settings";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId17 = Ti.UI.createWindow({
        navBarHidden: "true",
        tabBarHidden: "true",
        id: "__alloyId17"
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
        text_id: "settings",
        id: "top_label"
    });
    $.__views.__alloyId17.add($.__views.top_label);
    $.__views.query_start_date = Alloy.createController("setting", {
        title_id: "query_interval_start",
        top: 120,
        propertyName: "QueryStartDate",
        id: "query_start_date",
        __parentSymbol: $.__views.__alloyId17
    });
    $.__views.query_start_date.setParent($.__views.__alloyId17);
    $.__views.query_end_date = Alloy.createController("setting", {
        top: 180,
        title_id: "query_interval_end",
        propertyName: "QueryEndDate",
        id: "query_end_date",
        __parentSymbol: $.__views.__alloyId17
    });
    $.__views.query_end_date.setParent($.__views.__alloyId17);
    $.__views.language = Alloy.createController("setting", {
        top: 240,
        title_id: "language",
        propertyName: "Locale",
        id: "language",
        __parentSymbol: $.__views.__alloyId17
    });
    $.__views.language.setParent($.__views.__alloyId17);
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
    $.__views.__alloyId17.add($.__views.back_button);
    try {
        $.__views.back_button.addEventListener("click", eventHandlers.goToTables);
    } catch (e) {
        __defers["$.__views.back_button!click!eventHandlers.goToTables"] = true;
    }
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
        bottom: 150,
        title_id: "advanced_settings",
        id: "advanced_settings_button"
    });
    $.__views.__alloyId17.add($.__views.advanced_settings_button);
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
        bottom: 100,
        title_id: "logout",
        id: "logout_button"
    });
    $.__views.__alloyId17.add($.__views.logout_button);
    try {
        $.__views.logout_button.addEventListener("click", common.doLogout);
    } catch (e) {
        __defers["$.__views.logout_button!click!common.doLogout"] = true;
    }
    $.__views.settings = Ti.UI.createTab({
        window: $.__views.__alloyId17,
        id: "settings"
    });
    $.__views.settings && $.addTopLevelView($.__views.settings);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var utils = require("utils");
    var Config = require("config");
    require("locale");
    var eventHandlers = require("eventHandlers");
    var common = require("settings_common");
    utils.registerTextUpdates($.query_start_date, $.query_end_date, $.language, $.logout_button, $.top_label, $.advanced_settings_button);
    $.query_start_date.addEventListener("click", function() {
        addQueryDateChangeEvent("QueryStartDate");
    });
    $.query_end_date.addEventListener("click", function() {
        addQueryDateChangeEvent("QueryEndDate");
    });
    $.language.addEventListener("click", function() {
        function use(n, v) {
            Ti.App.Properties.setString(n, v);
        }
        var initial = Ti.App.Properties.getString("Locale");
        common.addSettingChangeEvent("Locale", "language_picker", initial, use);
    });
    __defers["$.__views.back_button!click!eventHandlers.goToTables"] && $.__views.back_button.addEventListener("click", eventHandlers.goToTables);
    __defers["$.__views.advanced_settings_button!click!doAdvancedSettings"] && $.__views.advanced_settings_button.addEventListener("click", doAdvancedSettings);
    __defers["$.__views.logout_button!click!common.doLogout"] && $.__views.logout_button.addEventListener("click", common.doLogout);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;