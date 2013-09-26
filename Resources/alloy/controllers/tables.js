function Controller() {
    function showItems(e) {
        var args = {
            title: e.rowData.rowTitle,
            value: e.rowData.value
        };
        var detail = Alloy.createController("details", args).getView();
        Alloy.Globals.tabGroup.activeTab.open(detail);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "tables";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.tables = Ti.UI.createTabGroup({
        id: "tables"
    });
    $.__views.win1 = Ti.UI.createWindow({
        id: "win1",
        title: "Tab 1",
        tabBarHidden: "true"
    });
    $.__views.table = Ti.UI.createTableView({
        borderColor: "#e9bf3c",
        separatorColor: "#e9bf3c",
        id: "table"
    });
    $.__views.win1.add($.__views.table);
    showItems ? $.__views.table.addEventListener("click", showItems) : __defers["$.__views.table!click!showItems"] = true;
    $.__views.__alloyId16 = Ti.UI.createLabel({
        backgroundColor: "#e9bf3c",
        height: 40,
        width: "100%",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        font: {
            fontSize: "24"
        },
        color: "#000",
        bottom: "0",
        id: "__alloyId16"
    });
    $.__views.win1.add($.__views.__alloyId16);
    $.__views.__alloyId15 = Ti.UI.createTab({
        window: $.__views.win1,
        icon: Ti.UI.iPhone.SystemIcon.SEARCH,
        title: "Tab 1",
        id: "__alloyId15"
    });
    $.__views.tables.addTab($.__views.__alloyId15);
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
    $.tables.open();
    __defers["$.__views.table!click!showItems"] && $.__views.table.addEventListener("click", showItems);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;