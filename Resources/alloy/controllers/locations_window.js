function Controller() {
    function __alloyId8() {
        __alloyId8.opts || {};
        var models = __alloyId7.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId5 = models[i];
            __alloyId5.__transform = {};
            var __alloyId6 = Alloy.createController("icon_row", {
                childWindow: "locations_window",
                dataId: "",
                model: "undefined" != typeof __alloyId5.__transform["alloy_id"] ? __alloyId5.__transform["alloy_id"] : __alloyId5.get("alloy_id"),
                icon_id: "undefined" != typeof __alloyId5.__transform["icon_id"] ? __alloyId5.__transform["icon_id"] : __alloyId5.get("icon_id"),
                text: "undefined" != typeof __alloyId5.__transform["name"] ? __alloyId5.__transform["name"] : __alloyId5.get("name"),
                $model: __alloyId5
            });
            rows.push(__alloyId6.getViewEx({
                recurse: true
            }));
        }
        $.__views.table.setData(rows);
    }
    function goBack() {
        $.locations_window.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "locations_window";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.locations_window = Ti.UI.createWindow({
        navBarHidden: "true",
        tabBarHidden: "true",
        win: "locations_window",
        id: "locations_window"
    });
    $.__views.locations_window && $.addTopLevelView($.__views.locations_window);
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
        text_id: "locations_short",
        id: "top_label"
    });
    $.__views.locations_window.add($.__views.top_label);
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
        title: L("back"),
        id: "back_button"
    });
    $.__views.locations_window.add($.__views.back_button);
    goBack ? $.__views.back_button.addEventListener("click", goBack) : __defers["$.__views.back_button!click!goBack"] = true;
    $.__views.table = Ti.UI.createTableView({
        top: "60",
        backgroundColor: "black",
        borderColor: "#e9bf3c",
        borderRadius: 5,
        separatorColor: "black",
        id: "table"
    });
    $.__views.locations_window.add($.__views.table);
    var __alloyId7 = Alloy.Collections["location"] || location;
    __alloyId7.on("fetch destroy change add remove reset", __alloyId8);
    $.__views.__alloyId9 = Ti.UI.createLabel({
        backgroundColor: "#e9bf3c",
        borderRadius: 5,
        height: 40,
        width: "100%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "24"
        },
        color: "#000",
        bottom: "0",
        id: "__alloyId9"
    });
    $.__views.locations_window.add($.__views.__alloyId9);
    $.__views.__alloyId10 = Alloy.createController("info_button", {
        id: "__alloyId10",
        __parentSymbol: $.__views.locations_window
    });
    $.__views.__alloyId10.setParent($.__views.locations_window);
    $.__views.__alloyId11 = Alloy.createController("settings_button", {
        id: "__alloyId11",
        __parentSymbol: $.__views.locations_window
    });
    $.__views.__alloyId11.setParent($.__views.locations_window);
    $.__views.__alloyId12 = Alloy.createController("home_button", {
        id: "__alloyId12",
        __parentSymbol: $.__views.locations_window
    });
    $.__views.__alloyId12.setParent($.__views.locations_window);
    exports.destroy = function() {
        __alloyId7.off("fetch destroy change add remove reset", __alloyId8);
    };
    _.extend($, $.__views);
    require("utils").registerTextUpdates($.top_label);
    var locations = Alloy.Collections.location;
    locations.fetch();
    Ti.App.addEventListener("GoToHome", function() {
        $.locations_window.close();
    });
    __defers["$.__views.back_button!click!goBack"] && $.__views.back_button.addEventListener("click", goBack);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;