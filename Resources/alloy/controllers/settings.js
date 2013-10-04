function Controller() {
    function doLogout() {
        Config.setLoggedOut();
        Alloy.Globals.tabgroup.setActiveTab(Alloy.Globals.LOGIN_TAB);
    }
    function doReset() {
        Config.resetFactorySettings();
        Ti.App.fireEvent("SettingChanged");
        doLogout();
    }
    function addSettingChangeEvent(name, controllerName, initial, use) {
        var arg = {
            useValue: function(value) {
                use(name, value);
                Ti.App.fireEvent("SettingChanged");
            },
            initialData: initial
        };
        utils.openWindowWithBottomClicksDisabled(controllerName, arg);
    }
    function addQueryDateChangeEvent(name) {
        var initial = Config.getDataProperty(name);
        addSettingChangeEvent(name, "date_picker", initial, function(n, v) {
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
    $.__views.__alloyId18 = Ti.UI.createWindow({
        navBarHidden: "true",
        tabBarHidden: "true",
        id: "__alloyId18"
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
        text: L("settings"),
        id: "top_label"
    });
    $.__views.__alloyId18.add($.__views.top_label);
    $.__views.query_start_date = Alloy.createController("setting", {
        text: L("query_interval_start"),
        top: 120,
        propertyName: "QueryStartDate",
        id: "query_start_date",
        __parentSymbol: $.__views.__alloyId18
    });
    $.__views.query_start_date.setParent($.__views.__alloyId18);
    $.__views.query_end_date = Alloy.createController("setting", {
        top: 180,
        text: L("query_interval_end"),
        propertyName: "QueryEndDate",
        id: "query_end_date",
        __parentSymbol: $.__views.__alloyId18
    });
    $.__views.query_end_date.setParent($.__views.__alloyId18);
    $.__views.server_name = Alloy.createController("setting", {
        top: 240,
        text: L("server_name"),
        propertyName: "ServerName",
        id: "server_name",
        __parentSymbol: $.__views.__alloyId18
    });
    $.__views.server_name.setParent($.__views.__alloyId18);
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
    $.__views.__alloyId18.add($.__views.back_button);
    try {
        $.__views.back_button.addEventListener("click", eventHandlers.goToTables);
    } catch (e) {
        __defers["$.__views.back_button!click!eventHandlers.goToTables"] = true;
    }
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
        title: L("logout"),
        id: "logout_button"
    });
    $.__views.__alloyId18.add($.__views.logout_button);
    doLogout ? $.__views.logout_button.addEventListener("click", doLogout) : __defers["$.__views.logout_button!click!doLogout"] = true;
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
        bottom: 50,
        title: L("reset_factory"),
        id: "reset_button"
    });
    $.__views.__alloyId18.add($.__views.reset_button);
    doReset ? $.__views.reset_button.addEventListener("click", doReset) : __defers["$.__views.reset_button!click!doReset"] = true;
    $.__views.settings = Ti.UI.createTab({
        window: $.__views.__alloyId18,
        id: "settings"
    });
    $.__views.settings && $.addTopLevelView($.__views.settings);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var utils = require("utils");
    var Config = require("config");
    var eventHandlers = require("eventHandlers");
    $.query_start_date.addEventListener("click", function() {
        addQueryDateChangeEvent("QueryStartDate");
    });
    $.query_end_date.addEventListener("click", function() {
        addQueryDateChangeEvent("QueryEndDate");
    });
    $.server_name.addEventListener("click", function() {
        var initial = Ti.App.Properties.getString("ServerName");
        addSettingChangeEvent("ServerName", "text_input", initial, function(n, v) {
            Ti.App.Properties.setString(n, v);
        });
    });
    __defers["$.__views.back_button!click!eventHandlers.goToTables"] && $.__views.back_button.addEventListener("click", eventHandlers.goToTables);
    __defers["$.__views.logout_button!click!doLogout"] && $.__views.logout_button.addEventListener("click", doLogout);
    __defers["$.__views.reset_button!click!doReset"] && $.__views.reset_button.addEventListener("click", doReset);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;