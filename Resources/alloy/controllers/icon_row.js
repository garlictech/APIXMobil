function Controller() {
    function openChildWindow() {
        var controller = Alloy.createController(args.childWindow).getView();
        Alloy.Globals.tabgroup.activeTab.open(controller);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "icon_row";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.row = Ti.UI.createTableViewRow({
        hasChild: true,
        height: 43,
        id: "row"
    });
    $.__views.row && $.addTopLevelView($.__views.row);
    openChildWindow ? $.__views.row.addEventListener("click", openChildWindow) : __defers["$.__views.row!click!openChildWindow"] = true;
    $.__views.icon = Ti.UI.createImageView({
        left: 5,
        top: 2,
        height: 40,
        width: 40,
        id: "icon"
    });
    $.__views.row.add($.__views.icon);
    $.__views.row_name = Ti.UI.createLabel({
        left: 50,
        color: "#e9bf3c",
        id: "row_name"
    });
    $.__views.row.add($.__views.row_name);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.icon.image = "undefined" != typeof args.icon_id ? String.format("images/db_icons/%d.png", args.icon_id) : args.image;
    $.row_name.text = args.text;
    __defers["$.__views.row!click!openChildWindow"] && $.__views.row.addEventListener("click", openChildWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;