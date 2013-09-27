function Controller() {
    function showItems(e) {
        var args = {
            title: e.rowData.rowTitle,
            value: e.rowData.value
        };
        var detail = Alloy.createController("details", args).getView();
        Alloy.Globals.tabGroup.activeTab.open(detail);
    }
    function goHome() {
        alert("GoHome");
    }
    function goInfoScreen() {
        Alloy.Globals.tabgroup.setActiveTab(Alloy.Globals.INFO_TAB);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tables";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.__alloyId13 = Ti.UI.createWindow({
        navBarHidden: "true",
        tabBarHidden: "true",
        id: "__alloyId13"
    });
    $.__views.top_label = Ti.UI.createLabel({
        backgroundColor: "#e9bf3c",
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
    $.__views.__alloyId13.add($.__views.top_label);
    $.__views.table = Ti.UI.createTableView({
        borderColor: "#e9bf3c",
        separatorColor: "#e9bf3c",
        top: "60",
        id: "table"
    });
    $.__views.__alloyId13.add($.__views.table);
    showItems ? $.__views.table.addEventListener("click", showItems) : __defers["$.__views.table!click!showItems"] = true;
    $.__views.__alloyId14 = Ti.UI.createLabel({
        backgroundColor: "#e9bf3c",
        height: 40,
        width: "100%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "24"
        },
        color: "#000",
        bottom: "0",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.home_button = Ti.UI.createButton({
        backgroundColor: "#e9bf3c",
        borderColor: "#e9bf3c",
        color: "#e9bf3c",
        borderWidth: 1,
        style: Ti.UI.iPhone.DONE,
        borderRadius: 5,
        backgroundImage: "images/icons/home.png",
        font: {
            fontWeight: "bold",
            fontSize: "16"
        },
        bottom: 5,
        left: 5,
        id: "home_button"
    });
    $.__views.__alloyId13.add($.__views.home_button);
    goHome ? $.__views.home_button.addEventListener("click", goHome) : __defers["$.__views.home_button!click!goHome"] = true;
    $.__views.info_button = Ti.UI.createButton({
        backgroundColor: "#e9bf3c",
        borderColor: "#e9bf3c",
        color: "#e9bf3c",
        borderWidth: 1,
        style: Ti.UI.iPhone.DONE,
        borderRadius: 5,
        backgroundImage: "images/icons/info.png",
        font: {
            fontWeight: "bold",
            fontSize: "16"
        },
        bottom: 5,
        right: 5,
        id: "info_button"
    });
    $.__views.__alloyId13.add($.__views.info_button);
    goInfoScreen ? $.__views.info_button.addEventListener("click", goInfoScreen) : __defers["$.__views.info_button!click!goInfoScreen"] = true;
    $.__views.tables = Ti.UI.createTab({
        window: $.__views.__alloyId13,
        id: "tables"
    });
    $.__views.tables && $.addTopLevelView($.__views.tables);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var data = [ {
        title: "Név",
        value: "1.1345",
        className: "tableRow",
        hasDetail: false
    }, {
        title: "Helyszín",
        value: "Bp, Budaörsi u. 21",
        className: "tableRow",
        hasDetail: true
    }, {
        title: "Készlet",
        value: "Hosszú szöveg Hosszú szöveg Hosszú szöveg Hosszú szöveg Hosszú szöveg",
        className: "tableRow",
        hasDetail: true
    } ];
    var rowData = [];
    for (var i = 0; data.length > i; ++i) {
        var payload = {
            rowId: i,
            title: data[i].title,
            value: data[i].value
        };
        var row = Alloy.createController("row", payload).getView();
        rowData.push(row);
    }
    $.table.data = rowData;
    __defers["$.__views.table!click!showItems"] && $.__views.table.addEventListener("click", showItems);
    __defers["$.__views.home_button!click!goHome"] && $.__views.home_button.addEventListener("click", goHome);
    __defers["$.__views.info_button!click!goInfoScreen"] && $.__views.info_button.addEventListener("click", goInfoScreen);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;