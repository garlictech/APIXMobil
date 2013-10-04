function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "table_root";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.table_root = Ti.UI.createWindow({
        navBarHidden: "true",
        tabBarHidden: "true",
        win: "table_root",
        id: "table_root"
    });
    $.__views.table_root && $.addTopLevelView($.__views.table_root);
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
        text: L("data"),
        id: "top_label"
    });
    $.__views.table_root.add($.__views.top_label);
    $.__views.locations_row = Alloy.createController("icon_row", {
        text: L("locations"),
        image: "images/locations.png",
        id: "locations_row",
        childWindow: "locations_window"
    });
    var __alloyId19 = [];
    __alloyId19.push($.__views.locations_row.getViewEx({
        recurse: true
    }));
    $.__views.groups_row = Alloy.createController("icon_row", {
        text: L("groups"),
        image: "images/locations.png",
        id: "groups_row"
    });
    __alloyId19.push($.__views.groups_row.getViewEx({
        recurse: true
    }));
    $.__views.table = Ti.UI.createTableView({
        top: 100,
        backgroundColor: "black",
        borderColor: "#e9bf3c",
        borderRadius: 5,
        separatorColor: "black",
        left: 3,
        right: 3,
        height: "90",
        data: __alloyId19,
        id: "table"
    });
    $.__views.table_root.add($.__views.table);
    $.__views.__alloyId20 = Ti.UI.createLabel({
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
        id: "__alloyId20"
    });
    $.__views.table_root.add($.__views.__alloyId20);
    $.__views.__alloyId21 = Alloy.createController("info_button", {
        id: "__alloyId21",
        __parentSymbol: $.__views.table_root
    });
    $.__views.__alloyId21.setParent($.__views.table_root);
    $.__views.__alloyId22 = Alloy.createController("settings_button", {
        id: "__alloyId22",
        __parentSymbol: $.__views.table_root
    });
    $.__views.__alloyId22.setParent($.__views.table_root);
    $.__views.__alloyId23 = Alloy.createController("home_button", {
        id: "__alloyId23",
        __parentSymbol: $.__views.table_root
    });
    $.__views.__alloyId23.setParent($.__views.table_root);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;